import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Replace this with your actual production domain
  const baseUrl = 'https://infalex.com'; 

  const routes = [
    '', // This represents your home page (/)
    '/about',
    '/pricing',
    '/contact',
    '/privacy',
    '/terms',
    '/refund',
    '/delivery',
    '/disclaimer',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    // Give higher priority and frequency to your main marketing pages
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : ['/pricing', '/about'].includes(route) ? 0.8 : 0.5,
  }));
}