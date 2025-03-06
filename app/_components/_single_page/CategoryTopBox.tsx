"use client";
import CategoryListItem from "@/app/_components/CategoryListItem";
import useCategories from "@/app/_hooks/categoryService";

function CategoryListBox({ categoryName }: { categoryName: string }) {
  const { category, loading, error } = useCategories(categoryName);

  return (
    <div className="-mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col text-center bg-white text-slate-800 p-3 shadow-2xl rounded-2xl w-[90vw] max-w-7xl mx-auto">
          <div className="flex justify-between px-5 py-3">
            <h2 className="font-semibold">{categoryName}</h2>
            <p>View All</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryListBox;
