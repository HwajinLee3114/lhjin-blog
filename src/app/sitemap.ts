import { getSortedPostsData } from "@/utils/blog/getPosts";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPosts = await getSortedPostsData();

  const posts = allPosts.map(post => ({
    url: `https://lhjin-blog.vercel.app/blog/${post.slug}`,
    lastModified: new Date(post.publishDate).toISOString().split('T')[0],
  }));

  const routes = [
    '',
    '/blog',
    '/projects',
    '/resume',
  ].map((route => ({
    url: `https://lhjin-blog.vercel.app/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  })))
  return [
    ...routes, ...posts
  ]
}