"use client";
import { Post } from "@/types/types";
import React, { useState } from "react";
import ListItem from "./ListItem";

interface BlogListsProps {
  posts: Post[];
}

const BlogLists: React.FC<BlogListsProps> = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");

  const filteredPosts =
    selectedCategory === "전체"
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
