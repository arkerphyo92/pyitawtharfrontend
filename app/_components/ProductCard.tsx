import { Product } from "@/app/_types/product";
import Image from "next/image";
import NoProductImage from "@/public/images/NoProductImage.jpeg";

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col shadow-lg rounded-xl overflow-hidden">
      <div className="bg-gradient-to-b from-emerald-400 to-emerald-400 text-white text-center h-8 flex items-center justify-center p-0">
        {product.category}
      </div>
      <div className="relative">
        <div
          className={`absolute rounded-lg ${
            product.in_stock ? "bg-slate-200 " : "bg-slate-200"
          } left-0 z-10 mt-2 mx-2`}
        >
          <div className="text-[0.7rem] px-2">
            {product.in_stock ? (
              <p className="text-lime-600 flex items-center gap-1">
                <span>In Stock</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                >
                  <path
                    fill="currentColor"
                    d="M5 10A5 5 0 1 0 5 0a5 5 0 0 0 0 10m2.104-5.896l-2.25 2.25a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647l1.896-1.897a.5.5 0 0 1 .708.708"
                  />
                </svg>
              </p>
            ) : (
              <p className="text-pink-800 flex items-center gap-1">
                <span>OutofStock </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M7.503 5.382a8 8 0 0 1 11.114 11.114zm-2.12 2.121a8 8 0 0 0 11.114 11.114zM12 2a9.97 9.97 0 0 0-7.071 2.929A9.97 9.97 0 0 0 2 12c0 5.523 4.477 10 10 10a9.97 9.97 0 0 0 7.071-2.929A9.97 9.97 0 0 0 22 12c0-5.523-4.477-10-10-10"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
            )}
          </div>
        </div>
        <div className="bg-red-500 text-white rounded-xl absolute right-0 z-10 mt-2 me-2">
          {product.discounts?.retail_discount_percentage ? (
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
              <span>{`${product.discounts?.retail_discount_percentage} % OFF`}</span>
            </p>
          ) : (
            ``
          )}
        </div>
        <div className="relative z-0">
          <Image
            src={
              product.images.length > 0 && product.images
                ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${product.images[0].image}`
                : NoProductImage
            }
            className="w-full h-48 object-cover object-center"
            alt={product.name}
            width={150}
            height={30}
            priority={product.images.length === 0}
          />
        </div>
      </div>
      <div className="flex justify-between items-center px-2 py-2">
        <h3 className="text-lg font-semibold">{product.name}</h3>
      </div>
      <div className="flex text-gray-600 text-[0.7rem] gap-1 relative ps-2 pb-2">
        <div className="flex flex-col gap-1">
          <p>
            Retail :{" "}
            <strong>
              {product.prices.retail_price}
              {product.prices.retail_pay_type} per{" "}
            </strong>
            <strong> {product.prices.retail_price}$</strong>
          </p>
          <p>
            Wholesale :{" "}
            <strong>
              {product.prices.wholesale_price}
              {product.prices.wholesale_pay_type} per{" "}
            </strong>
            <strong> {product.prices.wholesale_price}$</strong>
          </p>
        </div>
        <div className="absolute rounded-tl-2xl rounded-br-2xl bg-emerald-600 right-0 bottom-0 px-3 text-white text-2xl">
          +
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
