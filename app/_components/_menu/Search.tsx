"use client";
import { useState } from "react";
import SearchModal from "@/app/_components/_modal/SearchModal";
import useProducts from "@/app/_hooks/useProducts";
interface SearchProps {
  params: string | null; // Replace 'any' with the correct type if known
}

export default function Search() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        className="relative flex items-center mx-auto lg:ml-auto gap-3 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <i className="bx bx-search absolute left-4 text-2xl text-slate-500"></i>
        <input
          type="text"
          width={60}
          placeholder="Search Items"
          className="py-2 pl-10 rounded-full border-2 text-slate-700 border-blue-300 focus:bg-slate-100 focus:outline-sky-500 cursor-pointer focus:outline-none"
        />
      </div>
      {showModal && <SearchModal setShowModal={setShowModal} />}
    </>
  );
}
