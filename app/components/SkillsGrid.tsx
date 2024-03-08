import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { HoverEffect } from "./ui/card-hover-effect";
import { techArray, techTools } from "@/utils/constants";
import Image from "next/image";
import { InfiniteMovingCards } from "./ui/infinite-moving-card";
import { motion } from "framer-motion";
const SkillsGrid = () => {
  return (
    <>
      <div className="2xl:flex 2xl:items-center 2xl:justify-center">
        <InfiniteMovingCards items={techArray} direction="right" speed="slow">
          {techArray.map((tech) => (
            <div
              key={Math.floor(Math.random() * 1000)}
              id="cards"
              className="p-5 bg-[#100c2c] bg-opacity-40 hover:bg-opacity-0 hover:duration-300 border-purple-950 border-solid border-[1px] max-w-[70%] mt-3 hover:transform hover:rotate-[360deg] duration-200 md:hover:transform-none md:max-w-[40%] md:max-h-[100%] md:flex md:justify-center rounded-md md:flex-col">
              <h2 className="text-[12px] text-gray-400 md:ml-24 font-bold px-1 mt-1 ">
                {tech.title}
              </h2>
              <Image
                className="md:w-[100px] md:h-[150px] md:ml-[4.5rem] md:hover:transform hover:rotate-[360deg] duration-200 ml-2"
                src={tech.src}
                alt=""
                height={30}
                width={30}
              />
            </div>
          ))}
        </InfiniteMovingCards>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        data-value="Tools"
        className="md:text-5xl text-3xl max-w-5 font-semibold mt-10 ml-[160px] md:ml-[570px] 2xl:ml-[780px] text-gray-400">
        Tools
      </motion.h1>
      <div className="2xl:flex 2xl:items-center 2xl:justify-center">
        <InfiniteMovingCards items={techTools} direction="right" speed="slow">
          {techTools.map((tech) => (
            <div
              key={Math.floor(Math.random() * 1000)}
              id="cards"
              className="p-5 bg-[#100c2c] bg-opacity-40 hover:bg-opacity-0 hover:duration-300 border-purple-950 border-solid border-[1px] max-w-[70%] mt-3 hover:transform hover:rotate-[360deg] duration-200 md:hover:transform-none md:max-w-[40%] md:max-h-[100%] md:flex md:justify-center rounded-md md:flex-col">
              <h2 className="text-[12px] text-gray-400 md:ml-24 px-1 mt-1">{tech.title}</h2>
              <Image src={tech.src} alt="" height={30} width={30} />
            </div>
          ))}
        </InfiniteMovingCards>
      </div>
    </>
  );
};

export default SkillsGrid;
