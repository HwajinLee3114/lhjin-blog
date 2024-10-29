import { Tag } from "@/types/types";
import React from "react";

interface TagItemProps {
  tag: Tag;
}

export const TagItem: React.FC<TagItemProps> = ({ tag }) => {
  const bgColor = tag.color
    ? tag.color === "1"
      ? "bg-rose-200"
      : "bg-teal-200"
    : "bg-blue-200";
  const textColor = tag.color
    ? tag.color === "1"
      ? "text-rose-800"
      : "text-teal-800"
    : "text-blue-800";
  return (
    <span
      className={`inline-block text-sm px-3 py-1 rounded-full ${bgColor} ${textColor}`}
    >
      {tag.tag}
    </span>
  );
};
