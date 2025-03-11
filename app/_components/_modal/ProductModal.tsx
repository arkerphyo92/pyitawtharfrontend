import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/app/_types/product";
import NoProductImage from "@/public/images/NoProductImage.jpeg";

interface ProductModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  product: Product;
}

export default function ProductModal({
  modalOpen,
  setModalOpen,
  product,
}: ProductModalProps) {
  return (
    <>
      <AnimatePresence>
        {modalOpen && (
          <div
            className={`min-h-screen ${
              modalOpen ? "flex" : "hidden"
            } justify-center items-center absolute z-20 left-0 top-0 bg-black bg-opacity-70 w-full`}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              className="bg-white max-w-[28rem] w-full rounded-3xl shadow-md flex flex-col justify-center mx-2 overflow-hidden"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              key={product.id}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div
                  className={`absolute rounded-lg ${
                    product.in_stock ? "bg-slate-200 " : "bg-slate-200"
                  } left-0 z-10 mt-4 mx-6`}
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
                <div className="bg-red-500 text-white rounded-xl absolute right-0 z-10 mt-4 mx-6">
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
                <div className="w-full">
                  {
                    <Image
                      src={
                        product.images && product.images.length > 0
                          ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${product.images[0].image}`
                          : NoProductImage
                      }
                      alt={product.name}
                      width={200}
                      height={200}
                      className="object-cover object-center w-full h-56"
                    />
                  }
                </div>
              </div>
              <div className="flex flex-col gap-2 mx-4 my-4">
                <h1 className="font-bold text-yellow-950">{product.name}</h1>
                <p className="font-light text-xs">{product.description}</p>
              </div>
              <div className="flex flex-col gap-1 text-xs mx-4 mb-8 relative">
                <p>
                  Retail Price :{" "}
                  <strong>
                    {product.prices.retail_price}
                    {product.prices.retail_pay_type} per{" "}
                  </strong>
                  <strong> {product.prices.retail_price}$</strong>
                </p>
                <p>
                  Wholesale Price:{" "}
                  <strong>
                    {product.prices.wholesale_price}
                    {product.prices.wholesale_pay_type} per{" "}
                  </strong>
                  <strong> {product.prices.wholesale_price}$</strong>
                </p>
                <motion.div
                  className="absolute right-4"
                  initial={{ opacity: 0, rotate: -720 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    stiffness: 60,
                  }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
