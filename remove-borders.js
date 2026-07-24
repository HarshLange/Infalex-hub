const fs = require('fs');
const path = require('path');

const dir = 'c:\\Infalex\\infalex-hub\\components\\marketing\\home';
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.endsWith('.tsx')) {
    const fullPath = path.join(dir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // We want to replace border classes specifically in the <Section> component
    content = content.replace(/(<Section className="[^"]*)(border-t |border-b |border-y )([^"]*")/g, '$1$3');
    content = content.replace(/(<Section className="[^"]*)(border-border-subtle |border-border )([^"]*")/g, '$1$3');
    
    // Also remove background colors from some sections to make it flow better
    // Wait, the user said "blend section backgrounds subtly" so keeping bg-surface-elevated on some is fine, 
    // but the harsh borders are the problem. Let's just remove the borders for now.
    
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
