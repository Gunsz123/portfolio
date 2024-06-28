"use client";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { navItems } from "@/utils/constants";
import { RxHamburgerMenu } from "react-icons/rx";
import "../globals.css";
import { Montserrat, Rubik_Glitch } from "next/font/google";
import { IoMdClose } from "react-icons/io";
const rubik = Rubik_Glitch({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });

export const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex  justify-evenly sm:none  z-50 fixed top-0 left-0 right-0 pt-6  pb-4 backdrop-blur-md bg-transparent border-b-2  border-violet-950 ${montserrat.className}`}>
      <h2 className={`text-violet-600 text-3xl flex ${rubik.className}`}>
        <FaStar
          className={`text-violet-600 mr-3 hover:transform hover:rotate-[360deg] duration-200 `}
        />
        Hassan
      </h2>
      <RxHamburgerMenu
        onClick={toggleMobileMenu}
        className="w-7 h-10  text-violet-600 md:hidden ml-40"
      />
      <div>
        {navItems.map((item: any) => (
          <a
            key={item.href}
            className="relative text-violet-600 text-xl ml-7 hover:opacity-60 hover:scale-110 transition-all ease-in l-0 hidden md:inline"
            href={item.href}
            onMouseEnter={() => setHoveredItem(item.href)}
            onMouseLeave={() => setHoveredItem(null)}
            style={{ textDecoration: "none" }} // Remove default underline
          >
            {item.title}
            {hoveredItem === item.href && (
              <motion.span
                className="absolute inset-x-0 bottom-0 h-[1px] bg-violet-950 "
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </a>
        ))}
      </div>
      {isMobileMenuOpen && (
        <>
          <IoMdClose
            className="w-5 h-5 z-50 absolute top-5 right-5 md:hidden flex flex-col justify-center flex-1 items-center cursor-pointer space-y-8 text-[rgb(76,29,149)]"
            onClick={toggleMobileMenu}
          />
          <motion.div
            initial={{
              x: 100,
            }}
            animate={{
              x: 0,
            }}
            className="md:hidden fixed flex flex-col left-0 right-0 top-0 bottom-0 h-screen bg-slate-950 ml-[190px] border-l-[2px] border-violet-900">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="block font-semibold text-violet-900 ml-5 mt-5 text-[20px] mr-3 mb-2"
                href={item.href}
                style={{ textDecoration: "none" }} // Remove default underline
              >
                {item.title}
              </a>
            ))}
          </motion.div>
        </>
      )}
    </motion.div>
  );
};
