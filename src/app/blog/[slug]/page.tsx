import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import { getSortedPostsData } from "@/utils/blog/getPosts";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(
    process.cwd(),
    "src/app/blog/(posts)",
    slug,
    "page.mdx"
  );
  const fileContents = fs.readFileSync(filePath, "utf8");

  const metadataMatch = fileContents.match(
    /export const metadata = ({[\s\S]*?});/
  );
  const contentMatch = fileContents.match(
    /^(?!export const metadata)(.|\n)*$/m
  );

  const metadata = metadataMatch ? eval(`(${metadataMatch[1]})`) : {};
  const content = contentMatch ? contentMatch[0] : "";

  return (
    <article>
      <h1>{metadata.title}</h1>
      <p>{metadata.description}</p>
      <small>{new Date(metadata.publishDate).toLocaleDateString()}</small>
      <div>카테고리: {metadata.categories.join(", ")}</div>
      <MDXRemote source={content} />
    </article>
  );
}
