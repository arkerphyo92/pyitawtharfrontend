"use client";
import CategoryListItem from "@/app/_components/CategoryListItem";
import useCategories from "@/app/_hooks/_category/useCategories";

function CategoryListBox() {
  const { category, loading, error } = useCategories();

  return (
    <div className="-mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col text-center bg-white text-slate-800 p-3 shadow-2xl rounded-2xl w-[90vw] max-w-7xl mx-auto">
          <div className="flex justify-between px-5 py-3">
            <h2 className="font-semibold">Top Categories for you</h2>
            <p>View All</p>
          </div>
          <div>
            <ul className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-11 items-center gap-3">
              {category.map((category) => {
                return (
                  <CategoryListItem key={category.id} category={category} />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryListBox;
