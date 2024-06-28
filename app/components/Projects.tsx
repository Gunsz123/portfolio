"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/utils/constants";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const Projects = () => {
  useEffect(() => {
    const h1s = document.querySelectorAll("h1")!;

    h1s.forEach((h1) => {
      h1.addEventListener("mouseover", handleMouseOver);
    });
  }, []);

  function handleMouseOver(event: any) {
    let iterations = 0;

    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter: any, index: any) => {
          if (index < iterations) {
            return event.target.dataset.value[index];
          }

          return String.fromCharCode(65 + Math.floor(Math.random() * 26));
        })
        .join("");

      if (iterations >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iterations += 1 / 3;
    }, 30);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`tracking-tighter flex flex-col justify-center items-center mt-48 mr-4 md:mr-0 ${montserrat.className}`}>
      <h1
        data-value="My Projects"
        className="font-bold 2xl:ml-[8rem] lg:ml-[8rem] md:ml-[20rem] ml-[3rem] md:mb-12 2xl:text-5xl lg:text-4xl md:text-4xl text-3xl mb-3 text-violet-900 mr-5 mt-5 ">
        My Projects
      </h1>
      {projectsData.map((project, index) => (
        <div
          key={index}
          className="md:flex md:flex-row-reverse md:mt-[15px] ml-5 mt-5 max-w-[20rem] md:max-w-[80rem] bg-[#100c2c] md:h-[420px] mb-[15rem] border-violet-900 border-[1px] rounded-xl md:justify-between">
          <Image
            onClick={() => window.open(project.site, "_blank")}
            alt="project"
            width={280}
            height={220}
            src={`/${project.src}`}
            className="rounded-xl ml-5 md:ml-0 mb-5 mr-4 mt-4 md:w-[671px] md:h-[384px] md:rounded-2xl md:py-2 md:px-2 flex justify-center text-violet-800"
          />

          <div className="flex flex-col justify-between px-4">
            <div>
              <h2 className="text-violet-800 font-[900] text-3xl mt-10 md:mt-5">{project.title}</h2>
              <p className="text-gray-400 font-semibold md:max-w-[25rem]">{project.desc}</p>
            </div>

            <div className="mt-auto">
              {project.site && (
                <button
                  onClick={() => window.open(project.site, "_blank")}
                  className="border border-violet-900 text-white px-4 py-2 bg-violet-900 rounded-lg hover:rotate-[-18deg] transition-all mb-4">
                  Visit Site
                </button>
              )}
              {project.github && (
                <button
                  onClick={() => window.open(project.github, "_blank")}
                  className="border text-white border-violet-900 px-4 py-2 bg-transparent rounded-lg hover:rotate-[18deg] transition-all ml-3 mt-2">
                  View Code
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Projects;
