"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

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

function DesktopHeader() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <ul
      className={`hidden bg-[#67674e] text-center  md:bg-transparent gap-20 md:gap-10 font-semibold md:flex text-[#2C2F24]`}>
      {links.map(({ label, to }, i) => (
        <li
          className={`${
            pathname === to ? "bg-[#DBDFD0]" : ""
          } md:rounded-[34px] md:py-1 md:px-4`}
          key={i}>
          <Link href={to}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}

export default DesktopHeader;
