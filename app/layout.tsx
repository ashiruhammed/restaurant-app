import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const links: { label: string; to: string }[] = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Menu",
    to: "/menu",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-[1400px] mx-auto">
        <nav className="flex p-4 justify-between items-center font-sans">
          <div className="flex gap-2">
            <Image
              className="object-contain"
              src="/images/logo.png"
              width={56}
              height={55}
              alt="logo"
            />
            <p className="text-[#474747] font-playfair text-[35px] gap-4 italic font-[500]">
              Chef Deejah
            </p>
          </div>
          <ul className="flex bg-[#F9F9F7] right-0 top-0 bottom-0 w-1/2 md:w-auto md:bg-transparent flex-col md:flex-row gap-10 font-semibold fixed z-50 md:relative text-[#2C2F24]">
            {links.map(({ label, to }, i) => (
              <li key={i}>
                <Link href={to}>{label}</Link>
              </li>
            ))}
          </ul>
          <Button>Book a table</Button>
        </nav>
        <div>{children}</div>
      </body>
    </html>
  );
}
