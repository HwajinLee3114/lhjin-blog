import { allPosts, Post } from "contentlayer/generated"; // Post 타입 가져오기
import { useRouter } from "next/router";

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  // 카테고리 값이 문자열일 경우
  const filteredPosts = allPosts.filter(
    (post: Post) => post.category === category,
  );

  return (
    <div>
      <h1>{category} Posts</h1>
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post: Post) => (
          <div key={post.title}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        ))
      ) : (
        <p>No posts available in this category.</p>
      )}
    </div>
  );
};

export default CategoryPage;
