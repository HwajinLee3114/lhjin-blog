"use client";
import { useThemeColors } from "@/hooks/theme/useTheme";
import { Post } from "@/types/types";
import Link from "next/link";
import { useState } from "react";

interface CategoriesProps {
  posts: Post[];
  selectCategorie?: string;
}

const Categories = ({ posts, selectCategorie }: CategoriesProps) => {
  const [selectedCategory, setSelectedCategory] = useState(
    selectCategorie || "전체"
  );
  const colors = useThemeColors();
  const primaryColor = colors?.primary || "#0070f3";

  const categories: { [key: string]: number } = posts.reduce(
    (acc: { [key: string]: number }, post) => {
      const category = post.category;

      if (acc[category]) {
        acc[category]++;
      } else {
        acc[category] = 1;
      }
      return acc;
    },
    { 전체: posts.length }
  );

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <aside className="mt-2 lg:mt-0 lg:w-52 xl:w-64">
      <div className="hidden border-b border-solid border-White-line py-3 lg:block dark:border-dark-line">
        카테고리 모아보기
      </div>
      <ul className="hidden lg:flex flex-col gap-3 mt-2">
        {Object.entries(categories).map(([category, count]) => (
          <Link
            href={`/blog?categorie=${category}`}
            onClick={() => handleCategoryClick(category)}
            key={category}
          >
            <li
              className={`flex gap-2 px-2 py-3 rounded-md cursor-pointer l_ctg-item l_hover-custom ${selectedCategory === category ? "selected" : ""} hover:bg-[${primaryColor}]`}
            >
              {category}
              <span>({count})</span>
            </li>
          </Link>
        ))}
      </ul>
      <div className="flex gap-3 overflow-auto pb-2 lg:hidden">
        {Object.entries(categories).map(([category, count]) => (
          <Link
            key={category}
            href={`/blog?categorie=${category}`}
            className={`${selectedCategory === category ? "selected" : "l_hover-custom"} flex gap-1 whitespace-nowrap rounded-full border border-solid border-black px-3 py-1 dark:border-white`}
            onClick={() => handleCategoryClick(category)} // 클릭 시 선택된 카테고리 상태 업데이트
          >
            {category}
            <span>({count})</span>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Categories;
