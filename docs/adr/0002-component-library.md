# ADR 0002: Component Library Architecture

**Status:** Accepted
**Date:** July 2026

## Context
Dumping all components into `components/` or `components/ui/` leads to a bloated and unmaintainable folder structure as the ecosystem scales.

## Decision
We partitioned the components into domain-driven subdirectories:
- `components/ui/`: Atomic, generic UI elements.
- `components/layout/`: Structural, layout-defining elements.
- `components/marketing/`: Conversion and content-heavy blocks.
- `components/common/`: Shared, cross-domain utilities.

## Consequences
- **Pros:** Scales cleanly. It's immediately obvious where a component belongs based on its responsibility.
- **Cons:** Requires strict adherence; developers might struggle to categorize complex components.\n