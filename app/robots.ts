import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // This means ALL search engine bots are welcome
      allow: '/',     // They are allowed to crawl the entire site
      // disallow: '/api/', // You can uncomment this later to hide private API routes from Google
    },
    sitemap: 'https://infalex.com/sitemap.xml', // Replace with your actual live domain
  };
}