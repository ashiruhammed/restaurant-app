"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="">
      <div className="relative">
        <Image
          src="/images/background-image.png"
          className="-z-50"
          fill
          alt="background-img"
        />
        <div className=" w-full relative py-4 md:py-40 md:px-10 max-w-[660px] mx-auto text-center items-center flex gap-8 flex-col">
          <div className="bg-white top-0 bottom-0 right-0 left-0 rounded-[729px] blur-[122px] absolute -z-50"></div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [-10, 0] }}
            transition={{ duration: 0.6 }}
            className="text-[100px] font-playfair leading-[96px]">
            Best food for your taste
          </motion.p>
          <motion.p className="text-[20px] leading-8">
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven
          </motion.p>
          <div className="flex gap-4">
            <Button className="bg-[#AD343E] border-none text-white">
              Book a Table
            </Button>
            <Button>Explore Menu</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
