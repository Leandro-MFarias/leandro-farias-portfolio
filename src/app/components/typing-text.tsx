"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const secondaryText = ["FrontEnd Developer", "React Developer"];

const letterDelay = 0.07;
const boxFadeDuration = 0.145;

const fadeDelay = 5;
const mainFadeDuration = 1.25;

const swapDelay = 4000;

export function TypingText() {
  const [secondary, setSecodary] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecodary((prev) => (prev + 1) % secondaryText.length);
    }, swapDelay);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="flex items-center text-2xl sm:text-[32px]">
      {secondaryText[secondary].split("").map((letter, index) => (
        <motion.span
          initial={{
            opacity: 1,
          }}
          animate={{
            opacity: 0,
          }}
          transition={{
            delay: fadeDelay,
            duration: mainFadeDuration,
            ease: "easeInOut",
          }}
          key={`${secondary}-${index}`}
          className="relative"
        >
          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: index * letterDelay,
              duration: 0,
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              delay: index * letterDelay,
              times: [0, 0.1, 1],
              duration: boxFadeDuration,
              ease: "easeInOut",
            }}
            className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-500"
          />
          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              delay: index * letterDelay,
              times: [0, 0.1, 1],
              duration: boxFadeDuration,
              ease: "easeInOut",
            }}
            className="absolute h-10 w-[2px] bg-zinc-50 "
          />
        </motion.span>
      ))}
    </p>
  );
}
