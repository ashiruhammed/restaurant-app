"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/Section";

const browseMenuList: { icon: string; label: string; details: string }[] = [
  {
    icon: "/images/icon-breakfast.png",
    label: "Breakfast",
    details:
      "In the new era of technology we look in the future with certainty and pride for our life.",
  },
  {
    icon: "/images/icon-dishes.png",
    label: "Main Dishes",
    details:
      "In the new era of technology we look in the future with certainty and pride for our life.",
  },
  {
    icon: "/images/icon-drinks.png",
    label: "Drinks",
    details:
      "In the new era of technology we look in the future with certainty and pride for our life.",
  },
  {
    icon: "/images/icon-desert.png",
    label: "Desserts",
    details:
      "In the new era of technology we look in the future with certainty and pride for our life.",
  },
];

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
            transition={{ duration: 0.4 }}
            className="text-[60px] md:text-[100px] font-playfair leading-[96px]">
            Best food for your taste
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[20px] leading-8">
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-4">
            <Button
              animateRight
              className="bg-[#AD343E] border-none text-white">
              Book a Table
            </Button>
            <Button animateLeft>Explore Menu</Button>
          </motion.div>
        </div>
      </div>
      <Section className="flex flex-col gap-16">
        <p className="font-playfair text-[40px] text-center md:text-[55px]">
          Browse Our Menu
        </p>
        <div className="flex gap-6 justify-between overflow-x-auto">
          {browseMenuList.map((item, index) => (
            <div
              className="rounded-lg px-8 py-10 text-center border-[1.5px] border-[#DBDFD0] flex-shrink-0 mb-4"
              key={index}>
              <div className="flex max-w-[306px] flex-col gap-7 items-center text-center">
                <Image src={item.icon} alt="icon" width={100} height={100} />
                <p className="text-[#2C2F24] text-[24px] font-bold">
                  {item.label}
                </p>
                <p className="text-[#414536] text-[16px]">{item.details}</p>
                <p className="text-[#AD343E] font-bold">Explore Menu</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
