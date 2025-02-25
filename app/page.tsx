import HeaderMenu from "@/app/_components/HeaderMenu";
import CategoryListBox from "@/app/_components/CategoryListBox";
import DiscountsCard from "./_components/DiscountsCard";

export default function App() {
  return (
    <div className="w-full h-full absolute bg-white">
      <HeaderMenu />
      <CategoryListBox />
      <DiscountsCard />
    </div>
  );
}
