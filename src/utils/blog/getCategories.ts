// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";

// const postsDirectory = path.join(process.cwd(), "posts");

// export function getCategories(): string[] {
//   const fileNames = fs.readdirSync(postsDirectory);
//   const allCategories = fileNames.flatMap((fileName) => {
//     const fullPath = path.join(postsDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, "utf8");
//     const { data } = matter(fileContents);
//     return data.categories || [];
//   });

//   return Array.from(new Set(allCategories));
// }
