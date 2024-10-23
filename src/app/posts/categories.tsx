import Link from "next/link";

const categories = ["ctg1", "ctg2", "ctg3"];

const CategoriesPage = () => {
  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link href={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesPage;
