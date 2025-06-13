"use client"

import { motion, useInView } from "motion/react";

import { useRef } from "react";
import { useMenu } from "../context/useMenu";
// import { Skills } from "./skills";

export function About() {
  const { aboutRef } = useMenu()

  const ref = useRef(null);
  const inView = useInView(ref, {
    amount: "all",
    once: true,
  });

  return (
    <section ref={aboutRef} id="about" className="lg:h-[80vh] relative px-6 space-y-14">
      <div className="flex flex-col items-center space-y-6 mx-auto">
        {/* ABOUT HEADER */}
        <motion.div className="space-y-8 xl:space-y-14" ref={ref}>
          <motion.h2
            className={`text-5xl font-bold text-center pl-4 sm:pl-0 sm:text-start`}
            animate={{
              y: inView ? 0 : "90%",
              opacity: inView ? 1 : 0,
            }}
            transition={{
              duration: 0.6,
              ease: "linear",
            }}
          >
            Sobre mim<span className="text-purple-600">.</span>
          </motion.h2>
        </motion.div>

        {/* IMAGE */}
        <div className="flex flex-col items-center space-y-4 bg-[#161616] p-3 rounded-3xl border border-neutral-800">
          <div className="bg-[#0c0c0c] px-4 pt-4 rounded-3xl">
            <motion.img
              src="/mac-apple.png"
              alt="Emoji pessoa com macbook"
              className="w-64"
              animate={{
                y: inView ? "0" : "90%",
                opacity: inView ? [0, 0.1, 1] : 0,
              }}
              transition={{
                duration: 0.6,
                ease: "linear",
              }}
            />
          </div>
          <p className="text-sm text-neutral-400">
            Transformando Ideias em Interfaces
          </p>
        </div>

        <motion.p
          className="text-lg text-neutral-500 px-3 pl-10"
          animate={{
            y: inView ? "0" : "60%",
            opacity: inView ? 1 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: "linear",
            delay: 0.3,
          }}
        >
          Programador Frontend com 3 anos de experiência criando interfaces
          modernas, responsivas e focadas na melhor experiência do usuário.
          Trabalho com React, Next.js, TypeScript, Tailwind CSS e outras
          tecnologias. Especialista em componentes reutilizáveis, integração com
          APIs e desenvolvimento de soluções performáticas e escaláveis.
        </motion.p>
      </div>

      {/* <Skills /> */}
    </section>
  );
}

//  IMAGE pr-4 w-[430px] sm:w-[640px] sm:h-[500px] lg:w-[560px] lg:h-[560px] rounded-[40px] md:rounded-tr-[40%] md:rounded-tl-[0px] md:rounded-bl-[40%] md:rounded-br-[0] object-cover lg:object-fill

// DIV com tudo: flex flex-col lg:flex-row items-center justify-center space-x-8 space-y-6 tablet:space-y-0
