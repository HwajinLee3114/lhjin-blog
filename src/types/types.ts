export interface Post {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  posterImage: string;
  categories: string[];
  hashtag?: string[];
}
