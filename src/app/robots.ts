import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://lhjin-blog.vercel.app/sitemap.xml',
    host: 'https://lhjin-blog.vercel.app',
  };
}