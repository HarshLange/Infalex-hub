import { NextResponse } from "next/server";
import { getAllPosts } from "../../../lib/blog/api";
import { SearchDocument } from "../../../lib/search/types";

export const dynamic = "force-static";

export async function GET() {
  const posts = getAllPosts();
  
  const docs: SearchDocument[] = [];
  
  // Static Pages
  const pages: SearchDocument[] = [
    { id: "home", title: "Home", href: "/", category: "Page", icon: "Home" },
    { id: "about", title: "About Us", description: "Our story and mission", href: "/about", category: "Page", icon: "Info" },
    { id: "contact", title: "Contact", description: "Get in touch with us", href: "/contact", category: "Page", icon: "Mail" },
    { id: "privacy", title: "Privacy Policy", href: "/privacy", category: "Page", icon: "Shield" },
    { id: "terms", title: "Terms of Service", href: "/terms", category: "Page", icon: "FileText" },
    { id: "refund", title: "Refund Policy", href: "/refund", category: "Page", icon: "FileText" },
    { id: "delivery", title: "Delivery Policy", href: "/delivery", category: "Page", icon: "FileText" },
    { id: "disclaimer", title: "Disclaimer", href: "/disclaimer", category: "Page", icon: "Shield" },
  ];
  docs.push(...pages);

  // Products (Stubbed)
  const products: SearchDocument[] = [
    { id: "resumetra", title: "Resumetra", description: "AI Resume Analyzer & Job Description Matcher", href: "https://resumetra.infalex.com", category: "Product", icon: "Command" }
  ];
  docs.push(...products);

  // Blog Posts
  for (const post of posts) {
    docs.push({
      id: `blog-${post.slug}`,
      title: post.title,
      description: post.excerpt,
      href: `/blog/${post.slug}`,
      category: "Blog",
      icon: "FileText"
    });
  }
  
  return NextResponse.json(docs);
}
