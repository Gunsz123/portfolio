"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  children,
}: {
  items: {
    quote?: string;
    name?: string;
    title: string;
    src: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  children?: React.ReactNode;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      key={Math.floor(Math.random() * 1000)}
      className={cn(
        "ml-5 mt-5 scroller relative z-100   max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}>
      <ul
        key={Math.floor(Math.random() * 1000)}
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-5 w-max flex-nowrap",
          start && "animate-scroll "
        )}>
        {items.map((item, idx) => (
          <li
            className="w-[300px] max-w-full relative rounded-2xl border flex-shrink-0 bg-[#100c2c] border-violet-950 z-10 px-8 py-12 md:w-[450px]"
            key={Math.floor(Math.random() * 1000)}>
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"></div>
              <span className="relative z-0  text-sm leading-[1.6] text-gray-100 font-normal">
                {item.quote}
              </span>
              <div className="relative md:mb-2  z-0  mt-5 flex flex-row justify-between">
                <span className="flex  flex-col gap-1 items-center">
                  <div className="flex flex-col md:flex-row  items-center justify-center">
                    <span className="ml-20">
                      <Image alt="img" width={90} height={90} src={item.src} />
                      {item.name}
                    </span>
                    <span className="font-semibold md:mt-0 mt-4 items-center justify-center text-lg leading-[1.6] ml-[90px] md:ml-4 text-gray-300">
                      {item.title}
                    </span>
                  </div>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
