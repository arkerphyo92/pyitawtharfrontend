"use client";
import { useState } from "react";
import ProductModal from "@/app/_components/ProductModal";
export default function page() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="min-h-screen w-full flex justify-center items-center">
        <button
          className="px-8 py-2 rounded-full bg-black text-white"
          onClick={() => setModalOpen(true)}
        >
          Open Modal
        </button>
      </div>
    </>
  );
}
