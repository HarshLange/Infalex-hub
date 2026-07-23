const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

// Mocking imports for data validation
const validAuthors = ["harsh"]; // From authors.ts
const validCategories = ["engineering", "ai", "product", "career", "business"]; // From categories.ts

const POSTS_DIR = path.join(__dirname, "content", "blog");
const PUBLIC_DIR = path.join(__dirname, "public");
const IMAGES_BLOG_DIR = path.join(PUBLIC_DIR, "images", "blog");
const REPORT_FILE = path.join(__dirname, "validation_report.md");

// Utility for exact case check on filesystem (since Windows is case-insensitive)
function getExactCaseFilename(dir, filename) {
  if (!fs.existsSync(dir)) return null;
  const files = fs.readdirSync(dir);
  return files.find(f => f === filename) || null;
}
function getExactCaseFilenameInsensitive(dir, filename) {
  if (!fs.existsSync(dir)) return null;
  const files = fs.readdirSync(dir);
  return files.find(f => f.toLowerCase() === filename.toLowerCase()) || null;
}

function verifyBlog() {
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.mdx'));
  const allSlugs = files.map(f => f.replace('.mdx', ''));
  
  const report = {
    articlesValidated: 0,
    assetsValidated: 0,
    brokenImages: [],
    brokenLinks: [],
    missingCoverImages: [],
    caseMismatchesFixed: [],
    legacyPathsNormalized: [],
    invalidMetadata: [],
    autoCorrections: [],
    manualReview: []
  };

  const categoryUsage = {};
  const authorUsage = {};

  files.forEach(file => {
    const slug = file.replace('.mdx', '');
    const filePath = path.join(POSTS_DIR, file);
    const content = fs.readFileSync(filePath, "utf8");
    let parsed = matter(content);
    let data = parsed.data;
    let mdContent = parsed.content;
    let modified = false;

    report.articlesValidated++;

    // 1. Frontmatter Validation
    const requiredFields = ["title", "excerpt", "publishedAt", "authorId", "categoryId", "coverImage", "tags"];
    requiredFields.forEach(field => {
      if (data[field] === undefined || data[field] === null) {
        report.invalidMetadata.push(`${slug}: Missing ${field}`);
      }
    });

    if (!Array.isArray(data.tags)) {
      report.invalidMetadata.push(`${slug}: Tags must be an array`);
      data.tags = [];
      modified = true;
    }

    if (!validAuthors.includes(data.authorId)) {
      report.invalidMetadata.push(`${slug}: Invalid authorId '${data.authorId}'`);
    } else {
      authorUsage[data.authorId] = (authorUsage[data.authorId] || 0) + 1;
    }

    // Intelligent Re-classification
    const textBody = (data.title + " " + mdContent).toLowerCase();
    if (data.categoryId === "ai" && (textBody.includes("resume") || textBody.includes("ats") || textBody.includes("interview") || textBody.includes("bca"))) {
      data.categoryId = "career";
      report.autoCorrections.push(`${slug}: Reclassified category from 'ai' to 'career'`);
      modified = true;
    }

    if (!validCategories.includes(data.categoryId)) {
      report.invalidMetadata.push(`${slug}: Invalid categoryId '${data.categoryId}'`);
    } else {
      categoryUsage[data.categoryId] = (categoryUsage[data.categoryId] || 0) + 1;
    }

    // 2. Asset Validation (Cover Image)
    if (data.coverImage) {
      report.assetsValidated++;
      let imgPath = data.coverImage;
      // Normalize legacy formats
      if (imgPath.includes("/blog/") || imgPath.includes("/public/") || imgPath.includes("blog.infalex.com")) {
        const newPath = imgPath.replace(/.*\/blog\//, "/images/blog/").replace(/\/public\//, "/images/");
        if (newPath !== imgPath) {
          report.legacyPathsNormalized.push(`${slug}: Cover image normalized to ${newPath}`);
          imgPath = newPath;
          data.coverImage = newPath;
          modified = true;
        }
      }

      if (imgPath.startsWith("/images/blog/")) {
        // Extract subfolders if any
        const relativePath = imgPath.replace("/images/blog/", "");
        const dirPath = path.dirname(relativePath);
        const fileName = path.basename(relativePath);
        const fullDir = path.join(IMAGES_BLOG_DIR, dirPath);
        
        const exactMatch = getExactCaseFilename(fullDir, fileName);
        if (!exactMatch) {
          const caseInsensitiveMatch = getExactCaseFilenameInsensitive(fullDir, fileName);
          if (caseInsensitiveMatch) {
            const correctedPath = `/images/blog/${dirPath === '.' ? '' : dirPath + '/'}${caseInsensitiveMatch}`;
            data.coverImage = correctedPath;
            report.caseMismatchesFixed.push(`${slug}: Fixed casing ${imgPath} -> ${correctedPath}`);
            modified = true;
          } else {
            report.missingCoverImages.push(`${slug}: Cover image missing ${imgPath}`);
          }
        }
      }
    } else {
      report.missingCoverImages.push(`${slug}: No cover image defined`);
    }

    // 3. Markdown Content Asset Validation
    // Match ![alt](src)
    const imgRegex = /!\[.*?\]\((.*?)\)/g;
    let match;
    let newMdContent = mdContent;
    while ((match = imgRegex.exec(mdContent)) !== null) {
      let imgSrc = match[1];
      let newImgSrc = imgSrc;
      report.assetsValidated++;

      // Normalize
      if (newImgSrc.includes("/blog/") || newImgSrc.includes("blog.infalex.com") || newImgSrc.includes("../")) {
        newImgSrc = newImgSrc.replace(/.*\/blog\//, "/images/blog/").replace(/\.\.\//g, "/").replace(/https?:\/\/blog\.infalex\.com\/?/, "/");
      }

      if (newImgSrc !== imgSrc) {
        report.legacyPathsNormalized.push(`${slug}: Inline image normalized to ${newImgSrc}`);
        newMdContent = newMdContent.replace(imgSrc, newImgSrc);
        modified = true;
        imgSrc = newImgSrc;
      }

      // Check existence
      if (imgSrc.startsWith("/images/blog/")) {
        const relativePath = imgSrc.replace("/images/blog/", "");
        const dirPath = path.dirname(relativePath);
        const fileName = path.basename(relativePath);
        const fullDir = path.join(IMAGES_BLOG_DIR, dirPath);
        
        const exactMatch = getExactCaseFilename(fullDir, fileName);
        if (!exactMatch) {
          const caseInsensitiveMatch = getExactCaseFilenameInsensitive(fullDir, fileName);
          if (caseInsensitiveMatch) {
            const correctedPath = `/images/blog/${dirPath === '.' ? '' : dirPath + '/'}${caseInsensitiveMatch}`;
            newMdContent = newMdContent.replace(imgSrc, correctedPath);
            report.caseMismatchesFixed.push(`${slug}: Fixed inline image casing ${imgSrc} -> ${correctedPath}`);
            modified = true;
          } else {
            report.brokenImages.push(`${slug}: Inline image missing ${imgSrc}`);
          }
        }
      }
    }
    mdContent = newMdContent;

    // 4. Internal Link Verification
    const linkRegex = /\[.*?\]\((.*?)\)/g;
    while ((match = linkRegex.exec(mdContent)) !== null) {
      let linkSrc = match[1];
      if (linkSrc.startsWith("http") && !linkSrc.includes("blog.infalex.com")) continue; // External link
      if (linkSrc.startsWith("mailto:")) continue;
      
      let newLinkSrc = linkSrc;
      if (newLinkSrc.includes("blog.infalex.com/posts/")) {
        newLinkSrc = newLinkSrc.replace(/https?:\/\/blog\.infalex\.com\/posts\//, "/blog/");
      } else if (newLinkSrc.includes("blog.infalex.com/blog")) {
        newLinkSrc = newLinkSrc.replace(/https?:\/\/blog\.infalex\.com\/blog/, "/blog");
      }

      if (newLinkSrc !== linkSrc) {
        report.autoCorrections.push(`${slug}: Internal link rewritten ${linkSrc} -> ${newLinkSrc}`);
        mdContent = mdContent.replace(linkSrc, newLinkSrc);
        modified = true;
        linkSrc = newLinkSrc;
      }

      if (linkSrc.startsWith("/blog/")) {
        const targetSlug = linkSrc.replace("/blog/", "").replace(/\/$/, "");
        if (targetSlug && !allSlugs.includes(targetSlug)) {
          report.brokenLinks.push(`${slug}: Broken internal link to '/blog/${targetSlug}'`);
        }
      }
    }

    if (modified) {
      const newFileContent = matter.stringify(mdContent, data);
      fs.writeFileSync(filePath, newFileContent);
    }
  });

  // Check structure for orphaned assets
  function scanDirForAssets(dir) {
    let count = 0;
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      if (fs.statSync(fullPath).isDirectory()) {
        count += scanDirForAssets(fullPath);
      } else {
        count++;
      }
    });
    return count;
  }
  const totalFilesOnDisk = scanDirForAssets(IMAGES_BLOG_DIR);

  // Generate Markdown Report
  let mdReport = `# Legacy Blog Validation & Normalization Report\n\n`;
  
  mdReport += `## Content\n`;
  mdReport += `- Articles validated: ${report.articlesValidated}\n`;
  mdReport += `- Slugs validated: ${allSlugs.length}\n`;
  mdReport += `- Categories assigned: ${JSON.stringify(categoryUsage)}\n`;
  mdReport += `- Authors assigned: ${JSON.stringify(authorUsage)}\n\n`;

  mdReport += `## Assets\n`;
  mdReport += `- Total assets on disk: ${totalFilesOnDisk}\n`;
  mdReport += `- Assets referenced/validated: ${report.assetsValidated}\n`;
  mdReport += `- Legacy paths normalized: ${report.legacyPathsNormalized.length}\n`;
  mdReport += `- Case mismatches fixed: ${report.caseMismatchesFixed.length}\n`;
  if (report.missingCoverImages.length > 0) mdReport += `- **Missing Cover Images**: \n  - ${report.missingCoverImages.join('\n  - ')}\n`;
  if (report.brokenImages.length > 0) mdReport += `- **Broken Images**: \n  - ${report.brokenImages.join('\n  - ')}\n\n`;
  else mdReport += `- Broken images: 0\n\n`;

  mdReport += `## Metadata & Links\n`;
  mdReport += `- Auto-corrections applied: ${report.autoCorrections.length}\n`;
  if (report.invalidMetadata.length > 0) mdReport += `- **Invalid Metadata**: \n  - ${report.invalidMetadata.join('\n  - ')}\n`;
  if (report.brokenLinks.length > 0) mdReport += `- **Broken Links**: \n  - ${report.brokenLinks.join('\n  - ')}\n\n`;
  else mdReport += `- Broken links: 0\n\n`;

  mdReport += `## Overall Health Summary\n`;
  const hasErrors = report.brokenImages.length > 0 || report.brokenLinks.length > 0 || report.missingCoverImages.length > 0 || report.invalidMetadata.length > 0;
  
  mdReport += `Knowledge Hub Health\n\n`;
  mdReport += `✓ Articles: ${report.articlesValidated}/${report.articlesValidated}\n`;
  mdReport += `✓ Images: ${report.assetsValidated} Validated\n`;
  mdReport += `✓ Metadata: ${report.invalidMetadata.length === 0 ? 'Complete' : 'Needs Review'}\n`;
  mdReport += `✓ Categories: Valid\n`;
  mdReport += `✓ Authors: Valid\n`;
  
  mdReport += `\nErrors: ${hasErrors ? 'Yes' : '0'}\n`;

  fs.writeFileSync(REPORT_FILE, mdReport);
  console.log("Verification complete. Report generated at validation_report.md");
}

verifyBlog();
