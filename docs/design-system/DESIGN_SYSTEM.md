# DESIGN SYSTEM

**Version:** 1.0.0 (Project Aurora)  
**Status:** Active Foundation  
**Last Updated:** July 2026  
**Owner:** Core Architecture Team  

## 1. Brand Personality & Design Philosophy
Infalex represents the future of enterprise AI. Our design must reflect that.
- **Intelligent & Professional:** Clear hierarchies, confident typography.
- **Enterprise & Modern:** Robust components built for scale.
- **Minimal & Elegant:** Whitespace over clutter; typography over decoration.
- **Reliable & Helpful:** Accessibility is mandatory. Everything must be clear.

## 2. Design Principles
1. **Whitespace over clutter:** Give elements room to breathe. Use the standardized spacing scale.
2. **Typography before decoration:** A good design works in black and white with just text.
3. **Motion guides attention:** Animations should be purposeful, not distracting. Use the \`framer-motion\` variants in \`lib/motion.ts\`.
4. **Products before marketing:** Focus on the user's task.
5. **Content before effects:** Gradients enhance—they don't dominate.

## 3. Token System (Theme Architecture)
Our single source of truth is the \`theme/\` directory. Tailwind consumes this layer.
- \`colors.ts\`: Semantic palettes (brand, neutral, success, warning, danger).
- \`typography.ts\`: Scale from \`caption\` to \`display\`.
- \`spacing.ts\`: Absolute spacing values.
- \`radius.ts\`, \`shadows.ts\`, \`gradients.ts\`: Visual effects.
- \`motion.ts\`: Duration and easing.

## 4. Folder Architecture
- \`components/ui/\`: Foundational building blocks (Button, Card, Badge).
- \`components/layout/\`: Structural elements (Container, Section, Grid).
- \`components/marketing/\`: Conversion-focused blocks (CTA).
- \`components/common/\`: Shared utilities.
- \`providers/\`: Shared application providers.
- \`hooks/\`: Custom reusable hooks.
- \`config/\`: Centralized configuration (metadata, site, navigation).

## 5. Component Guidelines
- **TypeScript:** Every component must be fully typed.
- **Props:** All reusable components must accept \`className\` and \`children\` (where applicable).
- **Variants & Sizes:** Use the variant pattern (e.g., \`variant="primary"\`, \`size="lg"\`).
- **Consistency:** Use \`lib/utils.ts\` (\`cn\`) to safely merge Tailwind classes.

## 6. Coding Standards
1. **No inline colors:** Never use arbitary color values (e.g., \`text-[#ff0000]\`). Always use design tokens.
2. **No inline spacing:** Never use arbitrary spacing values. Stick to the Tailwind spacing scale.
3. **No magic numbers:** Configuration and dimension numbers belong in \`theme/constants.ts\` or \`config/\`.
4. **Prefer design tokens:** Map all styling back to the \`theme/\` source of truth.
5. **Prefer reusable components:** Do not rebuild generic containers or buttons; import from \`components/\` via the barrel exports (\`index.ts\`).

## 7. Accessibility & Performance
- **Accessibility:** Use semantic HTML (\`h1\`-\`h6\`, \`button\`, \`nav\`). Ensure color contrast meets WCAG AA standards. Respect \`prefers-reduced-motion\`.
- **Performance:** Prefer Server Components. Keep client-side motion lightweight.

## 8. Tooling & Linting Recommendations
- **Formatting:** Use Prettier alongside the Tailwind CSS sorting plugin to ensure standard class ordering.
- **Linting:** Strict \`eslint-config-next\` rules applied, specifically preventing \`@ts-ignore\` and unused variables.
- **Bundle Analysis:** Run \`@next/bundle-analyzer\` periodically before deployment to ensure the component library doesn't unexpectedly inflate the client JS payload (especially concerning Framer Motion imports).
