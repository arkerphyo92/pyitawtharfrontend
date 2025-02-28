"use client";
import ProductCard from "@/app/_components/ProductCard";
import useProducts from "@/app/_hooks/productService";
import { Product } from "@/app/_types/product";

export default function ProductCardContainer() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto w-[90vw] my-10 text-slate-800 mb-28">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-28m">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
