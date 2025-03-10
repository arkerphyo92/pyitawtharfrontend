import CategoryTopBox from "@/app/_components/_single_page/CategoryTopBox";
import ProductCardContainer from "@/app/_components/ProductCardContainer";

export default async function Page({
  params,
}: {
  params: Promise<{ categoryName: string }>;
}) {
  const { categoryName } = await params;
  return (
    <>
      <CategoryTopBox categoryName={categoryName} />
      <ProductCardContainer category={categoryName} />
    </>
  );
}
