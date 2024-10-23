/** @type {import('next').NextConfig} */
import mdx from '@next/mdx';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeHighlight from 'rehype-highlight';

const mdxOptions = {
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'github-light',
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children.push({ type: 'text', value: ' ' });
            }
          },
        },
      ],
      rehypeHighlight,
    ],
  },
};

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

export default mdx(nextConfig, mdxOptions);
