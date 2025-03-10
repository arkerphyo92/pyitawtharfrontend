import CategoryListBox from "@/app/_components/CategoryListBox";
import DiscountsCard from "@/app/_components/DiscountsCard";
import ProductCardContainer from "@/app/_components/ProductCardContainer";

export default async function App() {
  return (
    <>
      <CategoryListBox />
      <DiscountsCard />
      <ProductCardContainer category="" />
    </>
  );
}
