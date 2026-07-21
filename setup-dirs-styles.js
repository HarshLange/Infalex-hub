const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\\\Infalex\\\\infalex-hub';

const dirs = [
  'styles',
  'components/ui',
  'components/layout',
  'components/marketing',
  'components/common',
  'lib',
  'docs/design-system',
  'docs/architecture',
  'app/(dev)/design-system',
  'app/(dev)/motion-lab'
];

dirs.forEach(dir => {
  const p = path.join(baseDir, dir);
  if (!fs.existsSync(p)) {
    fs.mkdirSync(p, { recursive: true });
  }
});

const files = {
  'styles/utilities.css': `
@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
  .glass {
    background: rgba(15, 15, 26, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--border);
  }
  .glass-card {
    background: linear-gradient(145deg, rgba(30, 30, 40, 0.8) 0%, rgba(15, 15, 26, 0.4) 100%);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
  }
}
`,
  'styles/animations.css': `
@layer utilities {
  .animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
  }
  .animate-slide-up {
    animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
`,
  'styles/components.css': `
@layer components {
  .btn-primary {
    @apply inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 bg-accent text-white hover:bg-accent/90;
  }
}
`,
  'lib/utils.ts': `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges tailwind classes properly, avoiding conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`,
  'lib/motion.ts': `export const variants = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
  },
  hoverCard: {
    rest: { scale: 1, y: 0, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" },
    hover: { scale: 1.02, y: -4, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)", transition: { type: "spring", stiffness: 400, damping: 25 } }
  }
};
`
};

for (const [name, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(baseDir, name), content.trim() + '\\n');
}
console.log('Directories, styles, and utils created.');
