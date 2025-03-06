"use client";
import ProductCard from "@/app/_components/ProductCard";
import useProducts from "@/app/_hooks/productService";
import { Product } from "@/app/_types/product";
import NoProductsFound from "./NoProductsFound";
import Loading from "@/app/_components/Loading";

export default function ProductCardContainer({
  params,
}: {
  params: string | null;
}) {
  const { products, loading, error } = useProducts(params);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!products.length) {
    return <NoProductsFound />;
  }

  return (
    <div className="max-w-7xl mx-auto w-[90vw] my-10 text-slate-800 mb-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-28m">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
