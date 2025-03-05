import Image from "next/image";
import logo from "@/public/images/logo.png";
import "boxicons/css/boxicons.min.css";

import BoxMenu from "@/app/_components/BoxMenu";
import Menu from "@/app/_components/Menu";
import Link from "next/link";

export default function HeaderMenu() {
  return (
    <header className="pt-8 pb-24 px-8 bg-slate-900 shadow-md -z-10">
      <div className="max-w-7xl w-[90vw] mx-auto flex justify-between items-center">
        <div className="relative">
          <Link href="/">
            <Image
              src={logo}
              width="150"
              alt="Pyi Taw Thar Logo"
              title="Pyi Taw Thar Logo"
              className="hover:scale-105 transition-all"
            />
          </Link>
        </div>
        {/* Desktop navigation */}
        <div className="flex-1 flex justify-center absolute sm:relative">
          <ul className="text-white hidden lg:flex items-center gap-6 font-semibold text-base">
            <Menu />
          </ul>
        </div>
        {/* Search bar */}
        <div className="relative flex items-center mx-auto lg:ml-auto gap-3">
          <i className="bx bx-search absolute left-4 text-2xl text-slate-500"></i>
          <input
            type="text"
            width={60}
            placeholder="Search Items"
            className="py-2 pl-10 rounded-full border-2 text-slate-700 border-blue-300 focus:bg-slate-100 focus:outline-sky-500"
          />
        </div>

        <BoxMenu />
      </div>
    </header>
  );
}
