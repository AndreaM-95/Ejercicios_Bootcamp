import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { NavLinks } from "./Constants";
import Footer from "@/Components/PiePagina";

export const metadata: Metadata = {
  title: "Andrea Mejia",
  description: "Developer Full-Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className="bg-cover bg-center bg-fixed" style={{backgroundImage:"url(/Bg-Projects.jpg)"}}>
          <nav className="flex items-center bg-gray-900 p-4 text-white gap-7">
            {NavLinks.map((item)=>(
                <Link key={item.name}
                  href={item.link}
                  className="font-semibold text-lg border-b-2 border-b-transparent hover:text-amber-300 hover:border-b-2 hover:border-b-amber-300"
                >
                {item.name}
              </Link>
            ))}
          </nav>
          {children}

          <Footer/>
        </body>
    </html>
  );
}