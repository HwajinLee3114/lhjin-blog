export interface Post {
  id: string;
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  posterImage: string;
  category: string;
  hashtag?: Tag[];
}

export interface Tag {
  tag: string;
  color?: string;
}
