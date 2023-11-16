"use client";
import React from "react";
import { motion } from "framer-motion";

function Button({
  children = "",
  className,
  animateRight = false,
  animateLeft = false,
}: {
  children: React.ReactNode;
  className?: string;
  animateRight?: boolean;
  animateLeft?: boolean;
}) {
  return (
    <motion.div
      initial={{ x: 0 }}
      transition={{ duration: 0.2, delay: 0.3 }}
      animate={
        animateRight ? { x: [-40, 0] } : animateLeft ? { x: [40, 0] } : {}
      }
      className={[
        `px-6 py-3  text-[#182226] hover:px-9 duration-100 font-bold text-center rounded-[118px] border-2 cursor-pointer  border-[#2C2F24]`,
        className,
      ].join(" ")}>
      {children}
    </motion.div>
  );
}

export default Button;
