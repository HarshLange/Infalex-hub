const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const LEGACY_POSTS_DIR = "C:\\Infalex\\INFALEX_HUB\\legacy-blog\\infalex-blog\\src\\content\\posts";
const NEW_POSTS_DIR = path.join(__dirname, "content", "blog");
const REPORT_FILE = path.join(__dirname, "migration-report.json");
const REDIRECTS_FILE = path.join(__dirname, "redirects.json");

if (!fs.existsSync(NEW_POSTS_DIR)) {
  fs.mkdirSync(NEW_POSTS_DIR, { recursive: true });
}

function inferCategory(content, title) {
  const text = (title + " " + content).toLowerCase();
  
  if (text.includes("ai") || text.includes("llm") || text.includes("prompt")) return "ai";
  if (text.includes("code") || text.includes("developer") || text.includes("engineering")) return "engineering";
  if (text.includes("startup") || text.includes("growth") || text.includes("business")) return "business";
  
  // Default to career for this batch as instructed
  return "career";
}

function processContent(content) {
  let processed = content;
  
  // Rewrite image paths from /blog/... to /images/blog/...
  processed = processed.replace(/\]\(\/blog\//g, "](/images/blog/");
  
  // Rewrite internal links
  processed = processed.replace(/https?:\/\/blog\.infalex\.com\/posts\/([a-zA-Z0-9_-]+)\/?/g, "/blog/$1");
  processed = processed.replace(/https?:\/\/blog\.infalex\.com\/blog\/?/g, "/blog");
  
  // Remove absolute root domains if pointing to infalex.com and replace with relative (optional, but good practice)
  processed = processed.replace(/https?:\/\/infalex\.com\/?/g, "/");

  return processed;
}

function migrate() {
  const files = fs.readdirSync(LEGACY_POSTS_DIR).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
  
  const report = {
    totalArticlesMigrated: 0,
    authorsDetected: new Set(),
    categoriesCreated: new Set(),
    tagsCreated: new Set(),
    redirectsGenerated: 0
  };
  
  const redirects = [];

  files.forEach(file => {
    const filePath = path.join(LEGACY_POSTS_DIR, file);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const parsed = matter(fileContent);
    const data = parsed.data;
    
    const slug = file.replace(/\.mdx?$/, "");
    
    // Frontmatter mapping
    const newFrontmatter = {};
    newFrontmatter.title = data.title;
    newFrontmatter.excerpt = data.description || "";
    
    // Date
    let publishedAt = new Date().toISOString();
    if (data.date) {
      publishedAt = new Date(data.date).toISOString();
    } else if (data.pubDate) {
      publishedAt = new Date(data.pubDate).toISOString();
    }
    newFrontmatter.publishedAt = publishedAt;
    
    // Author
    newFrontmatter.authorId = data.author || "harsh";
    report.authorsDetected.add(newFrontmatter.authorId);
    
    // Category
    newFrontmatter.categoryId = data.category || inferCategory(parsed.content, data.title);
    report.categoriesCreated.add(newFrontmatter.categoryId);
    
    // Tags
    newFrontmatter.tags = data.tags || [];
    newFrontmatter.tags.forEach(t => report.tagsCreated.add(t));
    
    // Image
    if (data.thumbnail) {
      newFrontmatter.coverImage = data.thumbnail.replace(/^\/blog\//, "/images/blog/");
    } else if (data.coverImage) {
      newFrontmatter.coverImage = data.coverImage.replace(/^\/blog\//, "/images/blog/");
    }
    
    // Any other remaining legacy fields (excluding the ones we mapped)
    const ignoreFields = ["title", "description", "date", "pubDate", "author", "category", "tags", "thumbnail", "coverImage"];
    Object.keys(data).forEach(key => {
      if (!ignoreFields.includes(key)) {
        newFrontmatter[key] = data[key];
      }
    });

    const processedContent = processContent(parsed.content);
    
    // Re-stringify
    const newMdxContent = matter.stringify(processedContent, newFrontmatter);
    
    const newFilePath = path.join(NEW_POSTS_DIR, `${slug}.mdx`);
    fs.writeFileSync(newFilePath, newMdxContent);
    
    report.totalArticlesMigrated++;
    
    // Build redirect
    redirects.push({
      source: `https://blog.infalex.com/posts/${slug}`,
      destination: `/blog/${slug}`,
      permanent: true
    });
    report.redirectsGenerated++;
  });
  
  // Convert Sets to Arrays for JSON
  report.authorsDetected = Array.from(report.authorsDetected);
  report.categoriesCreated = Array.from(report.categoriesCreated);
  report.tagsCreated = Array.from(report.tagsCreated);
  
  fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2));
  fs.writeFileSync(REDIRECTS_FILE, JSON.stringify(redirects, null, 2));
  
  console.log("Migration complete!");
  console.log(JSON.stringify(report, null, 2));
}

migrate();
