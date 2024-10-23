import { defineDocumentType, makeSource } from "contentlayer/source-files";
// import highlight from "rehype-highlight";
// import rehypePrettyCode from "rehype-pretty-code";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    category: { type: "string", required: true },
    tag: { type: "list", of: { type: "string" }, required: false },
    thumb: { type: "string", required: false },
    createAt: { type: "date", required: true },
  },
}));

const contentSource = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  // mdx: {
  //   remarkPlugins: [],
  //   rehypePlugins: [
  //     [
  //       rehypePrettyCode,
  //       {
  //         theme: "github-dark",
  //       },
  //     ],
  //     highlight,
  //   ],
  // },
});

export default contentSource;
