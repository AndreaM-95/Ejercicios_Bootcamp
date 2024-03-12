import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { NavLinks } from "./Constants";
import Footer from "@/Components/footer";


const inter = Inter({ subsets: ["latin"] });

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
        <body className={inter.className}>
          <nav className="flex items-center bg-gray-900 p-5 text-white gap-7">
            {NavLinks.map((item)=>(
                <Link key={item.name}
                  href={item.link}
                  className="font-semibold text-lg hover:scale-110 hover:text-amber-300"
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