import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import "./globals.css";

const robotoFont: NextFont = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Pyi Taw Thar Sales",
    template: "%s | Pyi Taw Thar",
  },
  description: "Discover the hidden gems of the wild Oasis",
  authors: [{ name: "Divergent Graphic and Web Solutions" }],
  keywords: ["wild oasis", "cabins", "paradise", "luxury"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoFont.className} min-h-screen`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
