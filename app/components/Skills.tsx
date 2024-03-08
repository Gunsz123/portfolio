"use client";
import React from "react";
import SkillsGrid from "./SkillsGrid";
import { easeIn, easeOut, motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <div className="items-center flex flex-col">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          data-value="My Skills"
          className="2xl:text-7xl lg:text-4xl md:text-4xl text-3xl font-bold mt-5 ml-6 text-violet-900">
          My Skills
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          data-value="Technologies"
          className="md:text-5xl text-3xl font-semibold mt-10 ml-6 text-gray-400">
          Technologies
        </motion.h1>
      </div>

      <div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: easeOut, duration: 1.3 }}
          className="md:ml-[120px]  ">
          <SkillsGrid />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
