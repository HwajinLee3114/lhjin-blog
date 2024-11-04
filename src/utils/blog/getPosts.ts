import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "src/app/blog/(posts)");

export function getSortedPostsData() {
  const categoryFolders = fs.readdirSync(postsDirectory);
  const allPostsData = categoryFolders.flatMap((category) => {
    const categoryPath = path.join(postsDirectory, category);
    const filePath = path.join(categoryPath, "page.mdx");

    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, "utf8");
      const metadataMatch = fileContents.match(
        /export const metadata = ({[\s\S]*?});/
      );

      if (metadataMatch) {
        const metadata = eval(`(${metadataMatch[1]})`);
        const hashtags = metadata.hashtag || [];

        return [
          {
            id: category,
            ...metadata,
            hashtag: hashtags,
          },
        ];
      }
    }
    return [];
  });

  return allPostsData.sort((a, b) => {
    if (a.publishDate < b.publishDate) {
      return 1;
    } else {
      return -1;
    }
  });
}
