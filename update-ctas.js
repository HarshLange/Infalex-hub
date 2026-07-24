const fs = require('fs');

const files = [
  'c:\\Infalex\\infalex-hub\\components\\layout\\navigation\\MobileNavigation.tsx',
  'c:\\Infalex\\infalex-hub\\components\\layout\\navigation\\NavigationCTA.tsx',
  'c:\\Infalex\\infalex-hub\\components\\marketing\\home\\NewsletterSection.tsx',
  'c:\\Infalex\\infalex-hub\\components\\products\\ProductCTA.tsx',
  'c:\\Infalex\\infalex-hub\\components\\products\\ProductHero.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // MobileNavigation
  if (file.includes('MobileNavigation.tsx')) {
    content = content.replace(/variant="default"(\s*)size="lg"(\s*)className="mt-8 py-6 w-full shadow-lg"/, 'variant="primary"\n                size="lg"\n                className="mt-8 py-6 w-full shadow-lg"');
  }
  // NavigationCTA
  if (file.includes('NavigationCTA.tsx')) {
    content = content.replace(/variant="default"/, 'variant="primary"');
  }
  // NewsletterSection
  if (file.includes('NewsletterSection.tsx')) {
    content = content.replace(/<MagneticButton variant="default" size="lg" className="w-full sm:w-auto shrink-0 py-4 px-8 rounded-xl shadow-glow hover:shadow-\[0_0_24px_rgba\(59,107,255,0\.4\)\]">/, '<MagneticButton variant="primary" size="lg" className="w-full sm:w-auto shrink-0 py-4 px-8 rounded-xl">');
  }
  // ProductCTA
  if (file.includes('ProductCTA.tsx')) {
    content = content.replace(/variant="default"/, 'variant="primary"');
  }
  // ProductHero
  if (file.includes('ProductHero.tsx')) {
    content = content.replace(/variant="default"/, 'variant="primary"');
  }

  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated ' + file);
}
