const fs = require('fs');
const file = 'c:/Infalex/infalex-hub/content/blog/Resume-vs-CV-Difference-Guide.mdx'; // It will be uppercase from migration script
let content = fs.readFileSync(file, 'utf8');

const mdTable = `| Feature | Resume | Curriculum Vitae (CV) |
| :--- | :--- | :--- |
| **Length** | **Short:** Typically 1–2 pages. | **Long:** No limit, can be many pages. |
| **Purpose** | **Job Marketing:** A summary to get an interview for a specific job. | **Academic Record:** A detailed chronicle of your entire career and credentials. |
| **Content** | **Tailored & Selective:** Focuses on relevant skills and work experience. | **Comprehensive & Static:** Includes all education, publications, awards, etc. |
| **Layout** | Flexible, designed for quick scanning. | Standardized, academic, list-heavy format. |
| **Used In** | **Industry Jobs:** Corporate, non-profit, government (in the US). | **Academia & Research:** University roles, fellowships, medical, scientific positions. |`;

const startIdx = content.indexOf('<div class="overflow-x-auto my-8">');
const endStr = '</div>';
let endIdx = content.indexOf(endStr, startIdx);
if (startIdx !== -1 && endIdx !== -1) {
  content = content.substring(0, startIdx) + mdTable + content.substring(endIdx + endStr.length);
  fs.writeFileSync(file, content);
  console.log("Table fixed successfully.");
} else {
  console.log("Could not find table");
}
