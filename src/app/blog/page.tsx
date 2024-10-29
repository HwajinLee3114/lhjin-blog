import BlogLists from "@/components/comn/blog/BlogLists";
import Categories from "@/components/comn/blog/Categories";
import { getSortedPostsData } from "@/utils/blog/getPosts";
import React from "react";

export default function page() {
  const posts = getSortedPostsData();
  return (
    <div className="flex gap-5 h-full w-full flex-col md:flex-row">
      <Categories posts={[]} />
      <div className="flex-1">
        <p className="font-bold text-xl mb-3">모아보기 ({posts.length})</p>
        <BlogLists posts={posts} />
      </div>
      <aside className="w-40 lg:w-64">
        <div>sdf</div>
        <div>sdf</div>
        <div>sdf</div>
        <div>sdf</div>
      </aside>
    </div>
  );
}
