const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const POSTS_DIR = path.join(__dirname, "content", "blog");
const DEFAULT_COVER = "/images/blog/ATS-Rejection-Fix/Cover.png";

function fixBlog() {
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.mdx'));
  
  files.forEach(file => {
    const oldPath = path.join(POSTS_DIR, file);
    const newFile = file.toLowerCase();
    const newPath = path.join(POSTS_DIR, newFile);

    // Rename file to lowercase
    if (oldPath !== newPath) {
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed: ${file} -> ${newFile}`);
    }

    // Fix missing coverImages
    const content = fs.readFileSync(newPath, "utf8");
    let parsed = matter(content);
    let data = parsed.data;
    let modified = false;

    if (!data.coverImage) {
      data.coverImage = DEFAULT_COVER;
      modified = true;
      console.log(`Added default coverImage to ${newFile}`);
    }

    if (modified) {
      const newFileContent = matter.stringify(parsed.content, data);
      fs.writeFileSync(newPath, newFileContent);
    }
  });

  console.log("Fixes applied successfully.");
}

fixBlog();
