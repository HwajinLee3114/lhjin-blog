// import { getPosts } from "@/utils/mdx/posts";

// const page = async () => {
//   const postList = await getPosts();

//   console.log(postList);

//   return null;
// };

// export default page;

import Categories from "@/components/comn/Categories";
import React from "react";

export default function page() {
  return (
    <div className="flex gap-3 h-full w-full">
      <Categories posts={[]} />
      <div className="flex-1">?????</div>
      <aside className="w-40">
        <div>sdf</div>
        <div>sdf</div>
        <div>sdf</div>
        <div>sdf</div>
      </aside>
    </div>
  );
}
