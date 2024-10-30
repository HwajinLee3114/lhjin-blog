"use client";

import { Post } from "@/types/types";
import React from "react";
import ListItem from "./ListItem";

interface BlogListsProps {
  posts: Post[];
  selectedCategory: string;
}

const BlogLists: React.FC<BlogListsProps> = ({ posts, selectedCategory }) => {
  const filteredPosts =
    selectedCategory === "ALL"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <ul>
      {filteredPosts.map((post) => (
        <ListItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default BlogLists;
