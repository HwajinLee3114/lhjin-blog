import { Tag } from "@/types/types";
import React from "react";

interface TagItemProps {
  tag: Tag;
}

export const TagItem: React.FC<TagItemProps> = ({ tag }) => {
  const bgColor = tag.color ? `bg-${tag.color}-200` : "bg-yellow-200";
  const textColor = tag.color ? `text-${tag.color}-800` : "text-gray-800";

  return (
    <span
      className={`inline-block text-sm px-3 py-1 rounded-full ${bgColor} ${textColor}`}
    >
      {tag.tag}
    </span>
  );
};
