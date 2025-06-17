"use client";

import {
  ChartColumnBigIcon,
  RocketIcon,
  ShieldCheckIcon,
  WallpaperIcon,
} from "lucide-react";
import { Blocks } from "./blocks";
import Image from "next/image";
import { useMenu } from "@/app/context/useMenu";

export function Expertise() {
  const { expertiseRef } = useMenu();

  return (
    <section
      ref={expertiseRef}
      className="flex flex-col items-center space-y-14 px-4 lg:px-0"
    >
      {/* HEADER */}
      <div className="flex flex-col items-center space-y-2">
        <Image
          src="/outer/bonfire.png"
          width={50}
          height={50}
          alt="Symbol OW"
          className="opacity-50"
        />
        <h2 className="text-center text-4xl sm:text-start md:text-5xl">
          Especialidades<span className="text-purple-600">.</span>
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <Blocks
            icon={
              <RocketIcon className="h-7 w-7 text-sky-600 md:h-12 md:w-12 md:-translate-y-[11px]" />
            }
            title="Front-End Development"
            description="Consumo de APIs, manipulação de dados e integração eficiente entre Front-End e Back-End."
            span="DEV & TECH"
          />
          <Blocks
            icon={
              <ShieldCheckIcon className="h-7 w-7 text-lime-500 md:h-12 md:w-12 md:-translate-y-[11px]" />
            }
            title="Problem Solving"
            description="Resolução de problemas com foco em código limpo, otimização e melhor experiência para o usuário."
            span="DEV & PRODUCT"
          />
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <Blocks
            icon={
              <WallpaperIcon className="h-7 w-7 text-purple-600 md:h-12 md:w-12 md:-translate-y-[11px]" />
            }
            title="UI Design & Components"
            description="Consumo de APIs, manipulação de dados e integração eficiente entre Front-End e Back-End."
            span="DEV & TECH"
          />
          <Blocks
            icon={
              <ChartColumnBigIcon className="h-7 w-7 text-orange-600 md:h-12 md:w-12 md:-translate-y-[11px]" />
            }
            title="API Integration & Data Handling"
            description="Criação de componentes reutilizáveis, design consistente e aplicação de boas práticas de usabilidade."
            span="DESIGN"
          />
        </div>
      </div>
    </section>
  );
}
