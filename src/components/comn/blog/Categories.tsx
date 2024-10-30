"use client";

import { useState } from "react";
import { Post } from "@/types/types";
import Link from "next/link";

interface CategoriesProps {
  posts: Post[];
}

const Categories = ({ posts }: CategoriesProps) => {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const categories = posts.reduce(
    (acc: { [key: string]: number }, post) => {
      const category = post.category;
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    },
    { 전체: posts.length }
  );

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <aside className="mt-2 lg:mt-0 lg:w-52">
      <div className="hidden border-b border-solid py-3 lg:block">
        카테고리 모아보기
      </div>
      <ul className="flex flex-col gap-2">
        {Object.entries(categories).map(([category, count]) => (
          <Link
            key={category}
            href={`/blog?categorie=${category}`}
            onClick={() => handleCategoryClick(category)}
          >
            <li
              className={`flex gap-2 px-2 py-3 rounded-md l_hover-custom ${selectedCategory === category ? "selected" : ""}`}
            >
              {category}
              <span>({count})</span>
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  );
};

export default Categories;
