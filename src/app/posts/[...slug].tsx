import { allPosts, Post as PostType } from "contentlayer/generated";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";

export default function PostPage({ post }: { post: PostType }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <article>
      <h1>{post.title}</h1>
      {/* body를 string으로 변환해서 렌더링 */}
      <ReactMarkdown>{post.body.raw}</ReactMarkdown>
    </article>
  );
}

export async function getStaticPaths() {
  const paths = allPosts.map((post) => ({
    params: { slug: post.slug.split("/") },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({
  params,
}: {
  params: { slug: string[] };
}) {
  const post = allPosts.find((p) => p.slug === params.slug.join("/"));

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
}
