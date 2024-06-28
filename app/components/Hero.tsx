"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  const container = useRef(null);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  function handleMouseOver(event: any) {
    let iterations = 0;

    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter: any, index: number) => {
          if (index < iterations) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iterations >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iterations += 1 / 3;
    }, 30);
  }
  useEffect(() => {
    const h1s = document.querySelectorAll("h1")!;

    h1s.forEach((h1) => {
      h1.addEventListener("mouseover", handleMouseOver);
    });
  }, []);
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-[100vh] justify-center items-center">
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="md:text-5xl mb-4 md:mb-5 text-3xl text-gray-400 ">
        Hi, My Name is
      </motion.h2>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="md:text-9xl text-7xl text-violet-900 hover:scale-125 font-bold duration-100 mt-3 md:mb-5 md:mt-0 "
        data-value="Hassan">
        Hassan
      </motion.h1>
      <TextGenerateEffect className="mt-5" words={"I am a passionate front end web developer"} />
      <TextGenerateEffect words={"I will help turn your ideas into reality."} />
    </motion.div>
  );
};

export default Hero;
