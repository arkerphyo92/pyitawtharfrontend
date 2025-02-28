import { Product } from "@/app/_types/product";

interface ProductCard {
  product: Product;
}
function ProductCard({ product }: ProductCard) {
  return (
    <div className="flex flex-col shadow-lg rounded-xl overflow-hidden">
      <div className="bg-gradient-to-b from-emerald-400 to-emerald-400 text-white text-center h-8 flex items-center justify-center p-0">
        Hightlight
      </div>
      <div className="relative m-1">
        <div className="bg-red-500 text-white rounded-xl absolute right-0 z-10">
          <p className="text-[0.7rem] px-2 font-semibold py-0 flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 16 16"
            >
              <path
                fill="none"
                stroke="currentColor"
                d="m5.5 10.5l5-5m-2.682-4l1.768 1.06l2.053.181l.807 1.897L14 5.99L13.538 8L14 10.009l-1.554 1.353l-.807 1.897l-2.053.181l-1.768 1.06l-1.767-1.06l-2.054-.181l-.806-1.897l-1.555-1.353L2.098 8l-.462-2.009l1.555-1.353l.806-1.897l2.054-.181zM7 6.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm4 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"
                strokeWidth="{1}"
              ></path>
            </svg>
            <span> 40% OFF </span>
          </p>
        </div>
        <div className="relative z-0">
          <img
            src="https://t4.ftcdn.net/jpg/00/65/70/65/360_F_65706597_uNm2SwlPIuNUDuMwo6stBd81e25Y8K8s.jpg"
            className="w-full h-auto"
          />
        </div>
      </div>
      <h3 className="text-lg font-semibold ps-2 pt-5">{product.name}</h3>
      <div className="flex text-gray-600 text-[0.7rem] gap-1 relative ps-2 pb-2">
        <p>100g</p>
        <span>$500</span>
        <div className="absolute rounded-tl-2xl rounded-br-2xl bg-emerald-600 right-0 bottom-0 px-3 text-white text-2xl">
          +
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
