import Categories from "@/components/comn/Categories";
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
        <p className="font-bold text-xl">All Posts ({posts.length})</p>
        <ul>
          {posts.map(
            ({
              id,
              title,
              description,
              publishDate,
              posterImage,
              categories,
            }) => (
              <li key={id}>
                <Link href={`/blog/${id}`}>
                  <h2>{title}</h2>
                </Link>
                {posterImage && (
                  <Image
                    src={posterImage}
                    alt={title}
                    width={200}
                    height={100}
                  />
                )}
                <p>{description}</p>
                <small>{new Date(publishDate).toLocaleDateString()}</small>
                <div>카테고리: {categories.join(", ")}</div>
              </li>
            )
          )}
        </ul>
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
