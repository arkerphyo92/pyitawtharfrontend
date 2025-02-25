"use client";
import { useState, useEffect } from "react";

function BoxMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    setHasMounted(true);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <>
      <div className="sm:flex-1 lg:hidden" />
      <div className="grid z-20">
        <div className="block lg:hidden">
          <i
            className={`bx ${
              isMenuOpen ? "bx-x" : "bx-menu"
            } text-5xl transition-transform duration-200 ease-in-out cursor-pointer ${
              hasMounted
                ? isMenuOpen
                  ? "rotate-90"
                  : "rotate-0 scale-100"
                : ""
            }`}
            onClick={() => setIsMenuOpen((cur) => !cur)}
          ></i>
        </div>
        <div
          className={`fixed top-0 left-0 h-screen w-80 bg-white text-gray-900 shadow-md transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden z-50`}
        >
          {isMenuOpen && (
            <ul className="flex flex-col items-start gap-4 p-4 font-semibold text-base z-50">
              <li className="p-3 w-full hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
                <i className="bx bx-home pe-5"></i> Home
              </li>
              <li className="p-3 w-full hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
                <i className="bx bx-home pe-5"></i> Products
              </li>
              <li className="p-3 w-full hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
                <i className="bx bx-home pe-5"></i> Explore
              </li>
              <li className="p-3 w-full hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
                <i className="bx bx-home pe-5"></i> Contact
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default BoxMenu;
