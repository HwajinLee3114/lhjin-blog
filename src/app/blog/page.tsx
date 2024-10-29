import BlogLists from "@/components/comn/blog/BlogLists";
import Categories from "@/components/comn/blog/Categories";
import { getSortedPostsData } from "@/utils/blog/getPosts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  const posts = getSortedPostsData();
  return (
    <div className="flex gap-3 h-full w-full">
      <Categories posts={[]} />
      <div className="flex-1">
        <p className="font-bold text-xl mb-3">All Posts ({posts.length})</p>
        <BlogLists posts={posts} />
      </div>
      <aside className="w-40">
        <div>sdf</div>
        <div>sdf</div>
        <div>sdf</div>
        <div>sdf</div>
      </aside>
    </div>
  );
}
