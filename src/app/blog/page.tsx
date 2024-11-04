import BlogLists from "@/components/comn/blog/BlogLists";
import Categories from "@/components/comn/blog/Categories";
import { Pagination } from "@/components/comn/blog/Pagination";
import { PER_PAGE_COUNT } from "@/contents/post";
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
  const { ctg: selectCtg, page: currPage } = searchParams;
  const posts = getSortedPostsData();
  const totalPages = Math.ceil(posts.length / PER_PAGE_COUNT);

  const startIdx = (Number(currPage || 1) - 1) * PER_PAGE_COUNT;
  const endIdx = startIdx + PER_PAGE_COUNT;
  const currPosts = posts.slice(startIdx, endIdx);

  return (
    <div className="flex gap-5 h-full w-full flex-col md:flex-row">
      <Categories posts={posts} selectCategory={selectCtg || "ALL"} />
      <div className="flex-1">
        {/* <p className="font-bold text-xl mb-3">모아보기</p> */}
        <BlogLists
          posts={currPosts}
          selectedCategory={selectCtg || "ALL"}
          // currPage={Number(currPage || 1)}
        />
        <Pagination
          currPage={Number(currPage || 1)}
          totalPages={totalPages}
          // perPage={PER_PAGE_COUNT}
        />
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
