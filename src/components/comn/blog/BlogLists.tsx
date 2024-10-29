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
          categories,
          hashtag,
        }) => (
          <li key={id} className="mb-4 p-4 bg-slate-200 rounded-md">
            <Link href={`/blog/${id}`}>
              <div className="flex justify-between">
                <div>
                  <h2 className="font-bold">{title}</h2>
                  <small>
                    {dayjs(publishDate)
                      .locale("ko")
                      .format("YYYY년 MM월 DD일 (dddd)")}
                  </small>
                  <p>{description}</p>
                  {hashtag && hashtag.length > 0 && (
                    <div className="flex gap-2">
                      {hashtag.map((tag, idx) => (
                        <TagItem key={idx} tag={tag} />
                      ))}
                    </div>
                  )}
                </div>
                {posterImage && (
                  <img
                    src={posterImage}
                    alt={title}
                    className="rounded-md h-32 max-w-56 w-full bg-white"
                  />
                )}
              </div>
              <div className="font-bold px-2">{categories.join(", ")}</div>
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default BlogLists;
