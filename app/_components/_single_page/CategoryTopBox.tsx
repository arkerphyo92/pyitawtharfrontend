"use client";
import CategoryListItem from "@/app/_components/CategoryListItem";
import useCategories from "@/app/_hooks/_category/useCategories";
import useCategory from "@/app/_hooks/_category/useCategory";

function CategoryListBox({ categoryName }: { categoryName: string }) {
  // const { category, loading, error } = useCategories(categoryName);
  const { category, loading, error } = useCategory(categoryName);

  return (
    <div className="-mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col text-center bg-white text-slate-800 p-3 shadow-2xl rounded-2xl w-[90vw] max-w-7xl mx-auto">
          <div className="flex justify-between px-5 py-3">
            <h2 className="font-semibold">{categoryName}</h2>
            {!loading && (
              <p>
                {category?.products_count} Products in{" "}
                <span className="font-bold">{category?.description}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryListBox;
