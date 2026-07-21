# ADR 0001: Theme Architecture

**Status:** Accepted
**Date:** July 2026

## Context
Tailwind configuration files can quickly become monolithic and difficult to maintain when defining complex enterprise design systems. We need a way to decouple the raw token values from the Tailwind consumer.

## Decision
We established a standalone `theme/` directory that serves as the single source of truth for all design tokens (colors, typography, spacing, motion, etc.). `tailwind.config.ts` purely imports these tokens and maps them to Tailwind's `extend` layer. 

## Consequences
- **Pros:** Tokens can be reused in JavaScript logic, inline styles, or Framer Motion variants without parsing the Tailwind config. Easier to read and maintain.
- **Cons:** Slight indirection between Tailwind and the underlying values.\n