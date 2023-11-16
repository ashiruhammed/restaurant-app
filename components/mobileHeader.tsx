"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import MenuButton from "./MenuButton";
import Button from "./Button";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { usePathname } from "next/navigation";

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

function MobileHeader() {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref);
  // console.log(isInView, showMenu);
  const pathname = usePathname();
  return (
    <>
      <ul
        ref={ref}
        className={`flex bg-[#F9F9F7] transform ${
          !showMenu ? "translate-x-[1000px]" : ""
        } duration-200 md:translate-x-0 top-0 right-0 bottom-0 w-1/2 md:w-auto md:bg-transparent flex-col  py-20 md:p-0 md:flex-row gap-20 md:gap-10 font-semibold fixed z-40 md:hidden text-[#2C2F24]`}>
        {links.map(({ label, to }, i) => (
          <motion.li
            className={`${pathname === to ? "bg-[#DBDFD0]" : ""} px-8 py-4`}
            initial={{ x: 1000 }}
            animate={isInView ? { x: 0 } : { x: 1000 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            key={i}>
            <Link href={to}>{label}</Link>
          </motion.li>
        ))}
      </ul>

      <MenuButton
        showMenu={showMenu}
        toggleMenu={() => setShowMenu((menu) => !menu)}
        className="md:hidden  z-50"
      />
    </>
  );
}

export default MobileHeader;
