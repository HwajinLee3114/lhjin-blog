import nextMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "solarized-light",
          // 예: useBr: true,  // <br> 태그 사용
          // 예: ignoreEmptyLines: true, // 빈 줄 무시
          html: true, // HTML 출력을 활성화
        },
      ],
    ],
  },
});

const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactStrictMode: true,
};

export default withMDX(nextConfig);
