import ProductCard from "@/app/_components/ProductCard";
export default function ProductCardContainer() {
  return (
    <div className="max-w-7xl mx-auto w-[90vw] my-10 text-slate-800 mb-28">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-28m">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
