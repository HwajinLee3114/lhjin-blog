import { readdir } from "fs/promises";
import path from "path";
import { Post } from "@/types/types";

export async function getPosts(): Promise<Post[]> {
  // postPath : 현재 작업 디렉토리를 기준으로 블로그 게시물들이 있는 경로를 설정
  const postPath = path.resolve(process.cwd(), "src", "app", "blog", "(posts)");

  // readdir 함수를 사용하여 해당 경로의 디렉토리 목록을 가져오고, 디렉토리인 항목만 필터링
  const slugs = (await readdir(postPath, { withFileTypes: true })).filter(
    (dirent) => dirent.isDirectory()
  );

  // Promise.all을 사용하여 각 디렉토리 내의 page.mdx 파일을 동적으로 임포트하고, 해당 파일의 메타데이터를 추출하여 배열에 저장
  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`../app/blog/(posts)/${name}/page.mdx`);
      return { slug: name, ...metadata };
    })
  );

  // 게시물들을 게시일을 기준으로 내림차순 정렬
  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return posts;
}
