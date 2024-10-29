import { Post } from "@/types/types";
import React from "react";
import ListItem from "./ListItem";

interface BlogListsProps {
  posts: Post[];
}

const BlogLists: React.FC<BlogListsProps> = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <ListItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default BlogLists;
