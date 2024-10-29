import { Post } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import dayjs from "dayjs";
import "dayjs/locale/ko";
import { TagItem } from "./TagItem";

interface BlogListsProps {
  posts: Post[];
}

const BlogLists: React.FC<BlogListsProps> = ({ posts }) => {
  return (
    <ul>
      {posts.map(
        ({
          id,
          title,
          description,
          publishDate,
          posterImage,
          category,
          hashtag,
        }) => (
          <li key={id} className="mb-4 p-4 l_blog-item rounded-md shadow-md">
            <Link href={`/blog/${id}`}>
              <div className="flex justify-between gap-2 flex-col-reverse md:flex-row">
                <div className="flex flex-col justify-around flex-1 max-w-96">
                  <small>
                    {dayjs(publishDate)
                      .locale("ko")
                      .format("YYYY년 MM월 DD일 (dddd)")}
                  </small>
                  <span className="font-bold text-2xl overflow-hidden text-ellipsis whitespace-nowrap">
                    {title}
                  </span>
                  <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                    {description}
                  </p>
                  {hashtag && hashtag.length > 0 && (
                    <div className="flex gap-2">
                      {hashtag.map((tag, idx) => (
                        <TagItem key={idx} tag={tag} />
                      ))}
                    </div>
                  )}
                  <div className="font-bold pt-2 w-fit">{category}</div>
                </div>
                {posterImage && (
                  <img
                    src={posterImage}
                    alt={title}
                    className="rounded-md h-40 md:max-w-56 w-full bg-white"
                  />
                )}
              </div>
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default BlogLists;
