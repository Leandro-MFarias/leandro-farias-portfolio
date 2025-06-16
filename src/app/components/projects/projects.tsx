"use client";

import Image from "next/image";
import { projects } from "./projects-list";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useMenu } from "@/app/context/useMenu";

export function Projects() {
  const { projectsRef } = useMenu();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(530);
  const [scrollTime, setScrollTime] = useState(2);

  function next() {
    if (currentSlide >= projects.length - scrollTime) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  function prev() {
    if (currentSlide === 0) {
      setCurrentSlide(projects.length - scrollTime);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  useEffect(() => {
    function updateSize() {
      if (innerWidth > 1024) {
        setSlideWidth(530);
      } else if (innerWidth >= 768) {
        setScrollTime(1);
        setSlideWidth(490);
      } else if (innerWidth > 560) {
        setScrollTime(1);
        setSlideWidth(470);
      } else if (innerWidth >= 428) {
        setScrollTime(1);
        setSlideWidth(428);
      } else {
        setScrollTime(1);
        setSlideWidth(396);
      }
    }

    updateSize();

    addEventListener("resize", updateSize);

    return () => removeEventListener("resize", updateSize);
  }, []);

  return (
    <section
      ref={projectsRef}
      className="relative flex flex-col items-center justify-center space-y-10 overflow-hidden md:space-y-14"
    >
      {/* HEADER */}
      <div className="flex flex-col items-center space-y-2">
        <Image
          src="/outer/bramble.png"
          width={62}
          height={62}
          alt="Symbol OW"
          className="opacity-50"
        />
        <h2 className={`text-center text-4xl sm:text-start md:text-5xl`}>
          Projetos Desenvolvidos<span className="text-purple-600">.</span>
        </h2>
      </div>

      {/* CARROSSEL  */}
      <div className="bs:max-w-[416px] xs:max-w-[500px] flex w-screen max-w-[380px] items-center justify-center overflow-hidden md:max-w-[800px] lg:relative lg:max-w-[1000px] xl:max-w-[1200px] xl:space-x-4">
        <button
          className={`text-muted-foreground xs:left-6 absolute left-0 z-50 cursor-pointer rounded-full p-1 transition duration-150 ease-in hover:bg-zinc-700 hover:text-white lg:-left-0.5 xl:static xl:z-0 xl:self-center xl:bg-zinc-900 xl:hover:bg-zinc-900`}
          onClick={prev}
        >
          <ArrowLeftIcon className="hidden xl:block" />
          <ChevronLeftIcon className="h-7 w-7 xl:hidden" />
        </button>

        <div className="flex overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * slideWidth}px)`,
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className={`shadow-hero xs:h-[480px] xs:w-[460px] bs:w-[412px] flex w-[380px] flex-col justify-around space-y-6 rounded-3xl bg-neutral-900/80 p-6 py-7 md:w-[480px] xl:w-[520px]`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-3xl font-semibold">{project.title}</h4>
                    <Image
                      src={project.logo}
                      width={50}
                      height={50}
                      alt="logo OW"
                      className="mr-3 opacity-80"
                    />
                  </div>
                  <p className="text-purple-500">{project.technologies}</p>
                </div>

                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={project.img}
                    width={520}
                    height={300}
                    quality={100}
                    alt={project.title}
                    className="self-center rounded-2xl md:h-[312px]"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        <button
          className={`text-muted-foreground xs:right-5 absolute right-0 z-50 cursor-pointer rounded-full p-1 transition duration-150 ease-in hover:bg-zinc-700 hover:text-white lg:right-0 xl:static xl:z-0 xl:self-center xl:bg-zinc-900 xl:hover:bg-zinc-900`}
          onClick={next}
        >
          <ArrowRightIcon className="hidden xl:block" />
          <ChevronRightIcon className="h-7 w-7 xl:hidden" />
        </button>
      </div>
    </section>
  );
}
