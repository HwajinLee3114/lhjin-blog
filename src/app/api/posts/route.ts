import { NextResponse } from "next/server";
import { getSortedPostsData } from "@/utils/blog/getPosts";

export async function GET() {
  const posts = getSortedPostsData();
  return NextResponse.json(posts);
}
