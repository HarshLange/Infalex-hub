import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { getAllPosts } from '@/lib/blog/api';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url; 
  const posts = getAllPosts();

  const routes = [
    '', 
    '/about',
    '/pricing',
    '/contact',
    '/privacy',
    '/terms',
    '/refund',
    '/delivery',
    '/disclaimer',
    '/blog',
    '/products',
  ];

  const staticSitemap: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : ['/blog', '/products', '/about'].includes(route) ? 0.9 : 0.5,
  }));

  const blogSitemap: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const uniqueCategories = Array.from(new Set(posts.map(post => post.categoryId)));
  const categorySitemap: MetadataRoute.Sitemap = uniqueCategories.map((category) => ({
    url: `${baseUrl}/blog/category/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticSitemap, ...blogSitemap, ...categorySitemap];
}