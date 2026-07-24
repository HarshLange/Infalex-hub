const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'components', 'marketing', 'home');
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.endsWith('.tsx')) {
    const fullPath = path.join(dir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Skip files we already updated manually just to be safe
    if (file === 'EcosystemSection.tsx' || file === 'KnowledgeHubSection.tsx' || file === 'FeaturedProductSection.tsx') continue;

    let original = content;

    // Replace ScrollReveal imports
    content = content.replace(/import { ScrollReveal } from "@\/components\/ui\/ScrollReveal";/g, 'import { RevealOnScroll } from "@/components/ui/motion";');
    content = content.replace(/import { ScrollReveal } from "\.\.\/\.\.\/ui\/ScrollReveal";/g, 'import { RevealOnScroll } from "@/components/ui/motion";');
    
    // Replace component usages
    content = content.replace(/<ScrollReveal/g, '<RevealOnScroll');
    content = content.replace(/<\/ScrollReveal>/g, '</RevealOnScroll>');
    
    // Remove animation prop as RevealOnScroll handles it natively
    content = content.replace(/animation="fadeUp"/g, '');
    content = content.replace(/animation="scaleUp"/g, '');
    content = content.replace(/animation="fadeLeft"/g, '');
    content = content.replace(/animation="fadeRight"/g, '');

    if (content !== original) {
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`Updated ${file}`);
    }
  }
}
