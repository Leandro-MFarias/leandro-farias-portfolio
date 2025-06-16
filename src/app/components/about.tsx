"use client";

import Image from "next/image";
import { useMenu } from "../context/useMenu";
import { Skills } from "./skills";

export function About() {
  const { aboutRef } = useMenu();

  return (
    <section
      ref={aboutRef}
      id="about"
      className="space-y-14 px-6"
    >
      <div className="mx-auto flex flex-col items-center space-y-8 md:space-y-14">
        {/* HEADER */}
        <div className="flex flex-col items-center">
          <Image src="/outer/eye.png" width={120} height={110} alt="Symbol OW" className="opacity-50" />
          <h2 className={`text-center text-4xl sm:text-start md:text-5xl`}>
            Sobre mim<span className="text-purple-600">.</span>
          </h2>
        </div>

        <div className="flex flex-col items-center space-y-3 md:flex-row md:items-start md:space-y-0 md:space-x-6">
          {/* IMAGE */}
          <div className="shadow-hero flex h-[360px] w-[320px] flex-col items-center space-y-4 rounded-3xl bg-neutral-900/80 p-2">
            <div className="rounded-3xl bg-[#0c0c0c] px-4 pt-4">
              <Image
                src="/mac-apple.png"
                width={296}
                height={288}
                alt="Emoji pessoa com macbook"
              />
            </div>
            <p className="text-sm text-neutral-400">
              Transformando Ideias em Interfaces
            </p>
          </div>

          <div className="flex flex-col space-y-4 pl-6 sm:pl-15 md:self-center md:pl-0">
            <p className="text-2xl font-semibold">Leandro Farias</p>
            <p className="text-muted-foreground max-w-96 text-lg">
              Programador Frontend com 3 anos de experiência criando interfaces
              modernas, responsivas e focadas na melhor experiência do usuário.
              Trabalho com React, Next.js, TypeScript, Tailwind CSS e outras
              tecnologias. Especialista em componentes reutilizáveis, integração
              com APIs e desenvolvimento de soluções performáticas e escaláveis.
            </p>
          </div>
        </div>
      </div>

      <Skills />
    </section>
  );
}
