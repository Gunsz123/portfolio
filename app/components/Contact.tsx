"use client";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
export const Contact = () => {
  const Container = useRef(null);
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
  const container = useRef(null);
  const form = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(`service_a1mthia`, "template_9myrfaf", (form as any).current, "eAKZfzFnrjxFimaiM")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setMessage("");
    setEmail("");
    setName("");
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      ref={container}
      id="contact"
      className="flex flex-col gap-8 mb-48  md:ml-[10px]">
      <h1
        className="2xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-violet-800 font-bold w-fit inline-block mr-4 anim9 items-center justify-center 2xl:ml-[52rem] md:ml-[38rem] md:mt-[4 rem] md:w-[20rem] ml-[7rem] mt-[2rem]"
        data-value="Contact Me">
        Contact Me
      </h1>
      <form className="flex flex-col gap-6 ml-5 mr-5" ref={form} onSubmit={sendEmail}>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="user_name"
          placeholder="Name"
          className="py-4 rounded-lg px-4 border border-violet-800/50  bg-violet-800/20 placeholder:text-white text-white outline-none anim9 focus-within:border-violet-800 2xl:ml-[350px] md:ml-[250px] md:w-[65%] "
        />
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="user_email"
          placeholder="Email"
          className=" py-4 rounded-lg px-4 border border-violet-800/50  bg-violet-800/20 placeholder:text-white text-white outline-none anim9 focus-within:border-violet-800 2xl:ml-[350px] md:ml-[250px] md:w-[65%]"
        />
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="message"
          placeholder="Your Message"
          className="py-4 rounded-lg px-4 border border-violet-800/50  bg-violet-800/20 h-80 placeholder:text-white text-white outline-none anim9 focus-within:border-violet-800 2xl:ml-[350px] md:ml-[250px] md:w-[65%]"
        />

        <input
          className="w-fit border border-violet-800 px-4 py-2 bg-transparent  rounded-lg 2xl:ml-[350px] md:ml-[250px] text-white ml-[8rem] hover:rotate-[-18deg] transition-all "
          type="submit"
          value="Send"
        />
      </form>
    </motion.section>
  );
};
