import { Post } from "@/types/types";
import React from "react";
import Link from "next/link";

interface CategoriesProps {
  posts: Post[];
  selectCategory: string;
}

const Categories: React.FC<CategoriesProps> = ({ posts, selectCategory }) => {
  const categories = posts.reduce(
    (acc: { [key: string]: number }, post) => {
      const category = post.category;
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    },
    { ALL: posts.length }
  );
  return (
    <aside className="mt-2 lg:mt-0 lg:w-52 xl:w-64">
      <div className="font-bold text-xl px-2 py-3">CATEGORIES</div>
      <ul className="flex flex-col gap-2 p-2">
        {Object.entries(categories).map(([category, count]) => (
          <Link key={category} href={`/blog?ctg=${category}`}>
            <li
              className={`flex gap-2 px-2 py-3 rounded-md l_ctg-item l_hover-custom ${selectCategory === category ? "selected" : ""}`}
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
