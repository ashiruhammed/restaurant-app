"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdRestaurantMenu } from "react-icons/md";

function MenuButton({
  className,
  showMenu,
  toggleMenu,
}: {
  className?: string;
  showMenu?: boolean;
  toggleMenu?: () => void;
}) {
  // const [showMenu, setShowMenu] = React.useState(true);
  return (
    <div className={className}>
      {!showMenu && (
        <HiOutlineMenuAlt3
          onClick={toggleMenu}
          className="text-[35px] cursor-pointer"
        />
      )}

      {showMenu && (
        <motion.div
          animate={{ rotate: 90 }}
          whileTap={{ rotate: 0 }}
          transition={{ duration: 0.2 }}
          onClick={toggleMenu}>
          <MdRestaurantMenu className="text-[35px] cursor-pointer" />
        </motion.div>
      )}
    </div>
  );
}

export default MenuButton;
