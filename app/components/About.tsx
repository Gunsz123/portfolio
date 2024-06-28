"use client";

import { Montserrat } from "next/font/google";
import { useEffect } from "react";
import { motion } from "framer-motion";
const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});
const About = () => {
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
    <motion.section
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="about"
      className={`${montserrat} font-semibod items-center mt-5 flex flex-col mb-24 md:ml-[250px] 2xl:ml-[350px] md:w-[65%]`}>
      <h1
        className="2xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-violet-900  font-bold inline-block mr-4 w-fit mb-8"
        data-value="About Me">
        About Me
      </h1>
      <p className="text-2xl text-gray-400 tracking-wide ml-5 sm:w-[80%]">
        Hello there! 👋 I'm <span className="font-semibold">Hassan</span> , a self-taught frontend
        web developer with a passion for crafting engaging and user-friendly digital
        experiences.I've honed my front-end Skills to create visually appealing and responsive
        websites.
      </p>
      <p className="ml-5 text-2xl text-gray-400 tracking-wide text-md sm:w-[80%]">
        As a curious and self-driven developer, I love tackling challenges and finding innovative
        solutions.I have developed a liking for learning new technologies to solve the problems.
      </p>
      <p className="text-2xl text-gray-400 tracking-wide  ml-5 sm:w-[80%] mt-6">
        I'm always open to collaboration and new opportunities. Whether you have a project in mind
        or just want to connect, feel free to reach out. Let's build something amazing together!
      </p>

      <div className="mt-5 flex hover:rotate-[360deg] duration-300">
        <a href="https://github.com/Gunsz123" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 128 128">
            <g fill="#6B26D9">
              <path
                fillRule="evenodd"
                d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388c0 26.682 17.303 49.317 41.297 57.303c3.017.56 4.125-1.31 4.125-2.905c0-1.44-.056-6.197-.082-11.243c-16.8 3.653-20.345-7.125-20.345-7.125c-2.747-6.98-6.705-8.836-6.705-8.836c-5.48-3.748.413-3.67.413-3.67c6.063.425 9.257 6.223 9.257 6.223c5.386 9.23 14.127 6.562 17.573 5.02c.542-3.903 2.107-6.568 3.834-8.076c-13.413-1.525-27.514-6.704-27.514-29.843c0-6.593 2.36-11.98 6.223-16.21c-.628-1.52-2.695-7.662.584-15.98c0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033c11.526-7.813 16.59-6.19 16.59-6.19c3.287 8.317 1.22 14.46.593 15.98c3.872 4.23 6.215 9.617 6.215 16.21c0 23.194-14.127 28.3-27.574 29.796c2.167 1.874 4.097 5.55 4.097 11.183c0 8.08-.07 14.583-.07 16.572c0 1.607 1.088 3.49 4.148 2.897c23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                clipRule="evenodd"></path>
              <path d="M26.484 91.806c-.133.3-.605.39-1.035.185c-.44-.196-.685-.605-.543-.906c.13-.31.603-.395 1.04-.188c.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28c-.396-.42-.47-.983-.177-1.254c.298-.266.844-.14 1.24.28c.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52c-.37-.538-.37-1.183.01-1.44c.373-.258.97-.025 1.35.507c.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23c-.527-.487-.674-1.18-.343-1.544c.336-.366 1.045-.264 1.564.23c.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486c-.683-.207-1.13-.76-.99-1.238c.14-.477.823-.7 1.512-.485c.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92c-.723.017-1.308-.387-1.315-.877c0-.503.568-.91 1.29-.924c.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117c-.7.13-1.35-.172-1.44-.653c-.086-.498.422-.997 1.122-1.126c.714-.123 1.354.17 1.444.663zm0 0"></path>
            </g>
          </svg>
        </a>
      </div>
    </motion.section>
  );
};

export default About;
