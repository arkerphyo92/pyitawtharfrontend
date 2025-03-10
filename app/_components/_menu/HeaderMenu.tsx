import Image from "next/image";
import logo from "@/public/images/logo.png";
import "boxicons/css/boxicons.min.css";

import LeftMenu from "@/app/_components/_menu/LeftMenu";
import MenuDataList from "@/app/_components/_menu/MenuDataList";
import Link from "next/link";
import Search from "@/app/_components/_menu/Search";

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
            <MenuDataList />
          </ul>
        </div>
        {/* Search bar */}
        <Search />

        <LeftMenu />
      </div>
    </header>
  );
}
