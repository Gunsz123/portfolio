import { cn } from "@/utils/cn";
import clsx from "clsx";
import React from "react";

export const Meteors = ({ number, className }: { number?: number; className?: string }) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect inset-y-0 h-0.5 w-0.5 rounded-[9999px] bg-slate-600 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] space-x-12",
            "before:content-[''] before:inset-y-0  before:transform  before:h-[10px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: 0,
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (12 - 2) + 2) + "s",
          }}></span>
      ))}
    </>
  );
};