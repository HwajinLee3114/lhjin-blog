import { Post } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { TagItem } from "./TagItem";

interface ListItemProps {
  post: Post;
}

const ListItem: React.FC<ListItemProps> = ({ post }) => {
  const {
    id,
    title,
    description,
    publishDate,
    posterImage,
    category,
    hashtag,
  } = post;

  return (
    <li key={id} className="mb-4 p-4 l_blog-item border-b last:border-none">
      <Link href={`/blog/${id}`}>
        <div className="flex justify-between gap-2 flex-col-reverse md:flex-row">
          <div className="flex flex-col justify-around flex-1 max-w-96">
            <small>
              {dayjs(publishDate)
                .locale("ko")
                .format("YYYY년 MM월 DD일 (dddd)")}
            </small>
            <span className="g_text-primary font-bold text-xl overflow-hidden text-ellipsis whitespace-nowrap">
              {title}
            </span>
            <p className="overflow-hidden text-ellipsis whitespace-nowrap">
              {description}
            </p>
            <div className="flex gap-2 items-center">
              <div className="font-bold w-fit">{category}</div>
              {hashtag && hashtag.length > 0 && (
                <div className="flex gap-2">
                  {hashtag.map((tag, idx) => (
                    <TagItem key={idx} tag={tag} />
                  ))}
                </div>
              )}
            </div>
          </div>
          {posterImage && (
            <Image
              src={posterImage}
              alt={title}
              className="rounded-md object-cover w-28 h-28"
              width={200} // width와 height를 명시하세요.
              height={110}
            />
          )}
        </div>
      </Link>
    </li>
  );
};

export default ListItem;
