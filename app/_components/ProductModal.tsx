import React from "react";
import { motion } from "framer-motion";
import { Product } from "@/app/_types/product";

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
      <div
        className={`min-h-screen ${
          modalOpen ? "flex" : "hidden"
        } justify-center items-center absolute z-20 left-0 top-0 bg-black bg-opacity-70 w-full`}
        onClick={() => setModalOpen(false)}
      >
        <motion.div
          className="bg-white max-w-[28rem] w-full rounded-md shadow-md flex flex-col justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", stiffness: 60 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="m-2 mb-0">
            <h1>{product.name}</h1>
          </div>
          <div className="m-2">
            <button
              className="py-2 px-4 text-slate-900 hover:text-white bg-amber-500 hover:bg-amber-600 rounded-full transition-all"
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
