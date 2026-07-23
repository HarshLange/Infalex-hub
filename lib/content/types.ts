export interface Author {
  id: string;
  name: string;
  avatar: string;
  role: string;
  twitter?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Tag {
  id: string;
  name: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  authorId: string;
  categoryId: string;
  tags: string[];
  coverImage: string;
  featured: boolean;
  readingTime: string; // "5 min read"
  content?: string; // MDX content
}
