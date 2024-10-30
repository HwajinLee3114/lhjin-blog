"use client";

import { useEffect, useState } from "react";
import BlogLists from "@/components/comn/blog/BlogLists";
import Categories from "@/components/comn/blog/Categories";
import { Post } from "@/types/types";

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/posts"); // API 엔드포인트 호출
      const data = await response.json();
      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex gap-5 h-full w-full flex-col md:flex-row">
      <Categories
        posts={posts}
        selectCategory={selectedCategory}
        setSelectCategory={setSelectedCategory}
      />
      <div className="flex-1">
        <p className="font-bold text-xl mb-3">모아보기 ({posts.length})</p>
        <BlogLists posts={posts} selectedCategory={selectedCategory} />
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
