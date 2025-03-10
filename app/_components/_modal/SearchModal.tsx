import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useProducts from "@/app/_hooks/useProducts";
interface SearchModalProps {
  setShowModal: (open: boolean) => void;
}

export default function SearchModal({ setShowModal }: SearchModalProps) {
  const category = "";
  const [searchTerm, setSearchTerm] = useState<string | null>("");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  const { products, loading, error } = useProducts(category, searchTerm);

  return (
    <>
      <AnimatePresence>
        <div
          className={`min-h-screen flex justify-center items-center absolute z-20 left-0 top-0 bg-black bg-opacity-70 w-full h-full`}
        >
          <motion.div
            className="bg-white w-full max-w-[70vh] h-[70vh] rounded-xl shadow-md flex flex-col mx-auto my-auto overflow-hidden"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-2 mx-4 my-2">
              <div className="flex justify-content items-center gap-2 border-b-2 border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="text-gray-500"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path
                      strokeDasharray="40"
                      strokeDashoffset="40"
                      d="M10.76 13.24c-2.34 -2.34 -2.34 -6.14 0 -8.49c2.34 -2.34 6.14 -2.34 8.49 0c2.34 2.34 2.34 6.14 0 8.49c-2.34 2.34 -6.14 2.34 -8.49 0Z"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.5s"
                        values="40;0"
                      />
                    </path>
                    <path
                      strokeDasharray="12"
                      strokeDashoffset="12"
                      d="M10.5 13.5l-7.5 7.5"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.5s"
                        dur="0.2s"
                        values="12;0"
                      />
                    </path>
                  </g>
                </svg>
                <input
                  type="text"
                  className="w-full p-1 focus:outline-none"
                  placeholder="Search Products"
                  ref={inputRef}
                  value={searchTerm?.toString()}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span
                  className="flex items-center gap-2 text-gray-500 border-gray-200 border-2 rounded-md px-1 m-2 cursor-pointer"
                  onClick={() => setShowModal(false)}
                >
                  esc
                </span>
              </div>
              {products.map((product) => {
                return (
                  <div key={product.id}>
                    <h1 className="font-bold text-yellow-950">
                      {product.name}
                    </h1>
                    <p className="font-light text-xs">{product.description}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </>
  );
}
