import { Post } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import dayjs from "dayjs";
import "dayjs/locale/ko";

interface BlogListsProps {
  posts: Post[];
}

const BlogLists: React.FC<BlogListsProps> = ({ posts }) => {
  return (
    <ul>
      {posts.map(
        ({ id, title, description, publishDate, posterImage, categories }) => (
          <li key={id} className="mb-4">
            <Link href={`/blog/${id}`}>
              <h2 className="font-bold">{title}</h2>
            </Link>
            {posterImage && (
              <Image
                src={posterImage}
                alt={title}
                width={200}
                height={100}
                className="my-2"
              />
            )}
            <p>{description}</p>
            <small>
              {dayjs(publishDate)
                .locale("ko")
                .format("YYYY년 MM월 DD일 (dddd)")}
            </small>
            <div>카테고리: {categories.join(", ")}</div>
          </li>
        )
      )}
    </ul>
  );
};

export default BlogLists;
