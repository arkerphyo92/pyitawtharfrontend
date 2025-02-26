import HeaderMenu from "@/app/_components/HeaderMenu";
import CategoryListBox from "@/app/_components/CategoryListBox";
import DiscountsCard from "@/app/_components/DiscountsCard";
import ProductCardContainer from "@/app/_components/ProductCardContainer";
import BottomNavigation from "@/app/_components/BottomNavigation";

export default function App() {
  return (
    <div className="h-screen flex flex-col bg-white overflow-hidden relative">
      <div className="flex-grow overflow-auto ">
        <HeaderMenu />
        <CategoryListBox />
        <DiscountsCard />
        <ProductCardContainer />
      </div>
      <div className="w-full mb-0 absolute bottom-0">
        <BottomNavigation />
      </div>
    </div>
  );
}
