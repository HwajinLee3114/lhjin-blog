/** @type {import('next').NextConfig} */
import mdx from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeHighlight from "rehype-highlight";
import { withContentlayer } from "next-contentlayer";

const mdxOptions = {
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "github-light",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children.push({ type: "text", value: " " });
            }
          },
        },
      ],
      rehypeHighlight,
    ],
  },
};

// Next.js 설정
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

// MDX와 Next.js 설정 통합 및 Contentlayer 추가
const withMDX = mdx(nextConfig, mdxOptions);
export default withContentlayer(withMDX);
