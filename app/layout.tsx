import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import HeaderMenu from "@/app/_components/_menu/HeaderMenu";
import BottomNavigation from "@/app/_components/_menu/BottomNavigation";
import "./globals.css";

const robotoFont: NextFont = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Pyi Taw Thar | e-Commerce | Myanmar Grocery Store in Japan",
    template: "%s | Pyi Taw Thar",
  },
  description:
    "Myanmar Products in Japan, Available the high quality Products, Myanmar Grocery Store in Japan",
  authors: [{ name: "Divergent Graphic and Web Solutions" }],
  keywords: [
    "Myanmar Online Store in Japan",
    "Myanmar Grocery Store in Japan",
    "Fish, Meat, Vegetables",
    "Fruits, Nuts, Seeds",
    "Beverages, Dairy",
    "Bakery, Snacks, Confections",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${robotoFont.className} min-h-screen bg-white`}>
        <main>
          <div className="h-screen flex flex-col bg-white overflow-hidden relative">
            <div className="flex-grow overflow-auto ">
              <HeaderMenu />
              {children}
            </div>
            <div className="w-full mb-0 absolute bottom-0">
              <BottomNavigation />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
