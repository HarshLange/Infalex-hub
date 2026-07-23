import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { BlogPost } from "../content/types";

const postsDirectory = path.join(process.cwd(), "content/blog");

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.mdx'));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  
  const readTime = readingTime(content);

  return {
    title: data.title,
    slug: realSlug,
    excerpt: data.excerpt,
    publishedAt: data.publishedAt,
    updatedAt: data.updatedAt,
    authorId: data.authorId,
    categoryId: data.categoryId,
    tags: data.tags || [],
    coverImage: data.coverImage,
    featured: data.featured || false,
    readingTime: readTime.text,
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((post1, post2) => (new Date(post1.publishedAt) > new Date(post2.publishedAt) ? -1 : 1));
  return posts;
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter(post => post.featured);
}

export function getPostsByCategory(categoryId: string): BlogPost[] {
  return getAllPosts().filter(post => post.categoryId === categoryId);
}

export function getPostsByTag(tagId: string): BlogPost[] {
  return getAllPosts().filter(post => post.tags.includes(tagId));
}
