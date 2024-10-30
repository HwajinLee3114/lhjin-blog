import BlogLists from "@/components/comn/blog/BlogLists";
import Categories from "@/components/comn/blog/Categories";
import { getSortedPostsData } from "@/utils/blog/getPosts";
import { useState } from "react";

export default async function Page() {
  const posts = await getSortedPostsData();
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");

  return (
    <div className="flex gap-5 h-full w-full flex-col md:flex-row">
      <Categories posts={posts} />
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
