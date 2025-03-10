"use client";
import { useState, useEffect, useRef } from "react";
import Menu from "@/app/_components/_menu/MenuDataList";

function LeftMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEsc);
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="sm:flex-1 lg:hidden" />
      <div className="grid z-20">
        <div className="block lg:hidden ">
          <i
            className={`bx ${
              isMenuOpen ? "bx-x" : "bx-menu"
            } text-5xl text-amber-500 transition-transform duration-200 ease-in-out cursor-pointer ${
              hasMounted
                ? isMenuOpen
                  ? "rotate-90"
                  : "rotate-0 scale-100"
                : ""
            }`}
            onClick={() => setIsMenuOpen((cur) => !cur)}
          ></i>
        </div>
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-20" />
        )}
        <div
          ref={menuRef}
          className={`fixed top-0 left-0 h-screen w-80 bg-white text-gray-900 shadow-md transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden z-50`}
        >
          {isMenuOpen && (
            <ul className="flex flex-col items-start gap-4 p-4 font-semibold text-base z-30">
              <Menu />
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default LeftMenu;
