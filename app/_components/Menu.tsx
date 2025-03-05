import Link from "next/link";
interface MenuLink {
  menuName: string;
  pathName: string;
}
const mainMenu: MenuLink[] = [
  { menuName: "Home", pathName: "/" },
  { menuName: "Categories", pathName: "/categories" },
  { menuName: "Explore", pathName: "/explore" },
  { menuName: "Contact", pathName: "/contact" },
];
export default function Menu() {
  return (
    <>
      {mainMenu.map((menu) => (
        <Link
          href={menu.pathName}
          key={menu.menuName}
          className="block px-3 py-2 w-full text-sm hover:text-gray-800 transition-all"
        >
          <li className="p-3 w-full hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
            {menu.menuName}
          </li>
        </Link>
      ))}
    </>
  );
}
