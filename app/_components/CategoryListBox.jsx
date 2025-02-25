import Image from "next/image";
import logo from "@/public/images/logo.jpeg";

function CategoryListBox() {
  return (
    <div className="-mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col text-center bg-white text-slate-800 p-3 shadow-2xl rounded-2xl w-[90vw] max-w-7xl mx-auto">
          <div className="flex justify-between px-5 py-3">
            <h2 className="font-semibold">Top Categories for you</h2>
            <p>View All</p>
          </div>
          <div>
            <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center">
              <li>
                <div className="flex flex-col">
                  <Image
                    src={logo}
                    quality={80}
                    alt="Pyi Taw Thar Logo"
                    title="Pyi Taw Thar Logo"
                    className="hover:scale-105 w-20 transition-all mx-auto"
                  />
                  <h3 className="font-semibold mb-0">Cat Title</h3>
                  <p className="p-0 m-0">30 Items</p>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <Image
                    src={logo}
                    quality={80}
                    alt="Pyi Taw Thar Logo"
                    title="Pyi Taw Thar Logo"
                    className="hover:scale-105 w-20 transition-all mx-auto"
                  />
                  <h3 className="font-semibold">Cat Title</h3>
                  <p>30 Items</p>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <Image
                    src={logo}
                    quality={80}
                    alt="Pyi Taw Thar Logo"
                    title="Pyi Taw Thar Logo"
                    className="hover:scale-105 w-20 transition-all mx-auto"
                  />
                  <h3 className="font-semibold">Cat Title</h3>
                  <p>30 Items</p>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <Image
                    src={logo}
                    quality={80}
                    alt="Pyi Taw Thar Logo"
                    title="Pyi Taw Thar Logo"
                    className="hover:scale-105 w-20 transition-all mx-auto"
                  />
                  <h3 className="font-semibold">Cat Title</h3>
                  <p>30 Items</p>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <Image
                    src={logo}
                    quality={80}
                    alt="Pyi Taw Thar Logo"
                    title="Pyi Taw Thar Logo"
                    className="hover:scale-105 w-20 transition-all mx-auto"
                  />
                  <h3 className="font-semibold">Cat Title</h3>
                  <p>30 Items</p>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <Image
                    src={logo}
                    quality={80}
                    alt="Pyi Taw Thar Logo"
                    title="Pyi Taw Thar Logo"
                    className="hover:scale-105 w-20 transition-all mx-auto"
                  />
                  <h3 className="font-semibold">Cat Title</h3>
                  <p>30 Items</p>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <Image
                    src={logo}
                    quality={80}
                    alt="Pyi Taw Thar Logo"
                    title="Pyi Taw Thar Logo"
                    className="hover:scale-105 w-20 transition-all mx-auto"
                  />
                  <h3 className="font-semibold">Cat Title</h3>
                  <p>30 Items</p>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <Image
                    src={logo}
                    quality={80}
                    alt="Pyi Taw Thar Logo"
                    title="Pyi Taw Thar Logo"
                    className="hover:scale-105 w-20 transition-all mx-auto"
                  />
                  <h3 className="font-semibold">Cat Title</h3>
                  <p>30 Items</p>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <Image
                    src={logo}
                    quality={80}
                    alt="Pyi Taw Thar Logo"
                    title="Pyi Taw Thar Logo"
                    className="hover:scale-105 w-20 transition-all mx-auto"
                  />
                  <h3 className="font-semibold">Cat Title</h3>
                  <p>30 Items</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryListBox;
