import { defineDocumentType, makeSource } from 'contentlayer/source-files';

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    category: { type: 'string', required: true },
    // tag: { type: 'list', required: false },
    thumb: { type: 'string', required: false },
    createAt: { type: 'date', required: true },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
});

// const contentSource = makeSource({
//   // 마크다운 파일이 저장되어 있는 루트 폴더
//   contentDirPath: 'posts',
//   documentTypes: [Post],
//   mdx: {
//     remarkPlugins: [],
//     rehypePlugins: [
//       [
//         rehypePrettyCode,
//         {
//           theme: 'github-dark', // 코드작성시 적용할 테마
//         },
//       ],
//       highlight,
//     ],
//   },
// });

// export default contentSource;