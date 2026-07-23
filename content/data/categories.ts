import { Category } from "../../lib/content/types";

export const categories: Record<string, Category> = {
  engineering: {
    id: "engineering",
    name: "Engineering",
    description: "Deep technical dives into the Infalex architecture."
  },
  ai: {
    id: "ai",
    name: "AI & Research",
    description: "Research and developments in AI for the career space."
  },
  product: {
    id: "product",
    name: "Product & Updates",
    description: "Release notes, changelogs, and new features."
  },
  career: {
    id: "career",
    name: "Career & Growth",
    description: "Actionable advice on resumes, interviews, and career progression."
  },
  business: {
    id: "business",
    name: "Business & Strategy",
    description: "Insights on startup growth and product strategy."
  }
};
