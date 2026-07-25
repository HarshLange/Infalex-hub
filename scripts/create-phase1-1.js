const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\\\Infalex\\\\infalex-hub';

// Directories to create
const dirs = [
  'providers',
  'hooks',
  'config',
  'public/logos',
  'public/icons',
  'public/illustrations',
  'public/backgrounds',
  'public/images',
  'docs/adr'
];

dirs.forEach(dir => {
  const p = path.join(baseDir, dir);
  if (!fs.existsSync(p)) {
    fs.mkdirSync(p, { recursive: true });
  }
});

// Files to create
const files = {
  // Config
  'config/navigation.ts': `export const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Tools", href: "/tools" },
    { name: "Blog", href: "/blog" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};`,
  'config/site.ts': `export const siteConfig = {
  name: "Infalex",
  description: "The premium AI software ecosystem.",
  url: "https://infalex.com",
};`,
  'config/metadata.ts': `import { Metadata } from "next";
import { siteConfig } from "./site";

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: \`%s | \${siteConfig.name}\`,
  },
  description: siteConfig.description,
};`,
  'config/social.ts': `export const social = {
  twitter: "https://twitter.com/infalex",
  github: "https://github.com/infalex",
  linkedin: "https://linkedin.com/company/infalex",
};`,
  'config/index.ts': `export * from "./navigation";
export * from "./site";
export * from "./metadata";
export * from "./social";`,

  // Hooks
  'hooks/useMediaQuery.ts': `import { useState, useEffect } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}`,
  'hooks/useReducedMotion.ts': `import { useMediaQuery } from "./useMediaQuery";

export function useReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}`,
  'hooks/useScrollPosition.ts': `import { useState, useEffect } from "react";

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
}`,
  'hooks/index.ts': `export * from "./useMediaQuery";
export * from "./useReducedMotion";
export * from "./useScrollPosition";`,

  // Providers
  'providers/index.ts': `// Export providers here as they are added (e.g. ThemeProvider, AuthProvider)`,

  // Component Barrels
  'components/ui/index.ts': `export * from "./Button";
export * from "./Card";
export * from "./Badge";
export * from "./Heading";
export * from "./IconsWrapper";`,
  'components/layout/index.ts': `export * from "./Container";
export * from "./Section";
export * from "./Grid";`,
  'components/marketing/index.ts': `export * from "./CTA";`,
  'components/index.ts': `export * from "./ui";
export * from "./layout";
export * from "./marketing";`,

  // ADRs
  'docs/adr/0001-theme-architecture.md': `# ADR 0001: Theme Architecture

**Status:** Accepted
**Date:** July 2026

## Context
Tailwind configuration files can quickly become monolithic and difficult to maintain when defining complex enterprise design systems. We need a way to decouple the raw token values from the Tailwind consumer.

## Decision
We established a standalone \`theme/\` directory that serves as the single source of truth for all design tokens (colors, typography, spacing, motion, etc.). \`tailwind.config.ts\` purely imports these tokens and maps them to Tailwind's \`extend\` layer. 

## Consequences
- **Pros:** Tokens can be reused in JavaScript logic, inline styles, or Framer Motion variants without parsing the Tailwind config. Easier to read and maintain.
- **Cons:** Slight indirection between Tailwind and the underlying values.`,

  'docs/adr/0002-component-library.md': `# ADR 0002: Component Library Architecture

**Status:** Accepted
**Date:** July 2026

## Context
Dumping all components into \`components/\` or \`components/ui/\` leads to a bloated and unmaintainable folder structure as the ecosystem scales.

## Decision
We partitioned the components into domain-driven subdirectories:
- \`components/ui/\`: Atomic, generic UI elements.
- \`components/layout/\`: Structural, layout-defining elements.
- \`components/marketing/\`: Conversion and content-heavy blocks.
- \`components/common/\`: Shared, cross-domain utilities.

## Consequences
- **Pros:** Scales cleanly. It's immediately obvious where a component belongs based on its responsibility.
- **Cons:** Requires strict adherence; developers might struggle to categorize complex components.`
};

for (const [name, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(baseDir, name), content.trim() + '\\n');
}

console.log('Phase 1.1 setup completed successfully.');
