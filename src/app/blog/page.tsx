import BlogLists from "@/components/comn/blog/BlogLists";
import Categories from "@/components/comn/blog/Categories";
import { getSortedPostsData } from "@/utils/blog/getPosts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "이화진 | Blog",
  description: "이화진 Blog 메인 페이지",
};

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const { ctg: selectCtg, q: query } = searchParams;
  const posts = getSortedPostsData();

  return (
    <div className="flex gap-5 h-full w-full flex-col md:flex-row">
      <Categories posts={posts} selectCategory={selectCtg} />
      <div className="flex-1">
        {/* <p className="font-bold text-xl mb-3">모아보기</p> */}
        <BlogLists posts={posts} selectedCategory={selectCtg} />
      </div>
      {/* <aside className="w-40 lg:w-64">
        <div>sdf</div>
        <div>sdf</div>
        <div>sdf</div>
        <div>sdf</div>
      </aside> */}
    </div>
  );
}
