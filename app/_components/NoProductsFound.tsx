"use client";

const NoProductsFound = () => {
  return (
    <div className="flex flex-col text-blue-950 items-center justify-center text-center py-16 px-4">
      <p>No Products Found</p>

      <p>
        Sorry, we couldn’t find any products. Try adjusting your search or
        browse our categories.
      </p>

      <p className="mt-6">Browse Products</p>
    </div>
  );
};

export default NoProductsFound;
