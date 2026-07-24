const fs = require('fs');
const path = require('path');

const directories = ['app', 'components'];
const fileExtension = '.tsx';

const replacements = [
  { from: /text-text-muted/g, to: 'text-foreground-muted' },
  { from: /text-text-subtle/g, to: 'text-foreground-subtle' },
  { from: /text-text/g, to: 'text-foreground' },
  { from: /bg-accent/g, to: 'bg-primary' },
  { from: /text-accent/g, to: 'text-primary' },
  { from: /border-accent/g, to: 'border-primary' },
  { from: /shadow-accent/g, to: 'shadow-primary' },
  { from: /bg-bg2/g, to: 'bg-surface-elevated' },
  { from: /border-border2/g, to: 'border-border-subtle' },
  { from: /bg-surface-2/g, to: 'bg-surface-elevated' },
  { from: /glass-card/g, to: 'bg-surface-glass backdrop-blur-md border-border-subtle shadow-soft' },
  { from: /bg-accent2/g, to: 'bg-success' }
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith(fileExtension)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;

      for (const { from, to } of replacements) {
        content = content.replace(from, to);
      }

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

directories.forEach(dir => {
  const fullDirPath = path.join(__dirname, dir);
  if (fs.existsSync(fullDirPath)) {
    processDirectory(fullDirPath);
  }
});

console.log('Migration completed.');
