import { ProductConfig } from "../lib/products/types";

export const productsConfig: ProductConfig[] = [
  {
    slug: "resumetra",
    name: "Resumetra",
    shortDescription: "AI-powered resume parsing and semantic job matching engine.",
    status: "beta",
    type: "Web Application",
    category: "Career",
    tags: ["RAG", "Semantic Search", "Recruiting"],
    icon: "briefcase",
    featured: true,
    comingSoon: false,
    relatedSlugs: ["interview-ai", "career-toolkit"]
  },
  {
    slug: "promptlab",
    name: "PromptLab",
    shortDescription: "Visual prompt engineering and testing environment for LLMs.",
    status: "coming-soon",
    type: "Web Application",
    category: "Developer Tools",
    tags: ["LLMs", "Prompting", "Testing"],
    icon: "terminal",
    featured: false,
    comingSoon: true,
    relatedSlugs: ["code-pilot"]
  },
  {
    slug: "vision-ai",
    name: "VisionAI",
    shortDescription: "Enterprise-grade computer vision APIs for manufacturing defect detection.",
    status: "coming-soon",
    type: "API",
    category: "Automation",
    tags: ["Computer Vision", "Manufacturing"],
    icon: "eye",
    featured: false,
    comingSoon: true,
  },
  {
    slug: "interview-ai",
    name: "InterviewAI",
    shortDescription: "Mock technical interviews powered by conversational AI.",
    status: "coming-soon",
    type: "Web Application",
    category: "Career",
    tags: ["Audio", "Conversational AI"],
    icon: "mic",
    featured: false,
    comingSoon: true,
    relatedSlugs: ["resumetra"]
  }
];
