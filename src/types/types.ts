export interface Post {
  id: string;
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  posterImage: string;
  categories: string[];
  hashtag?: string[];
}
