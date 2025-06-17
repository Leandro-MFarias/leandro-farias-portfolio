"use client";

import { useMenu } from "../context/useMenu";
import { Social } from "./social";
import { RefObject, MouseEvent } from "react";

export function Footer() {
  const { homeRef, aboutRef, projectsRef, contactRef } = useMenu();

  const menuItems = [
    { label: "home", href: homeRef },
    { label: "sobre", href: aboutRef },
    { label: "projetos", href: projectsRef },
  ];

  function handleClick(e: MouseEvent, ref: RefObject<HTMLElement | null>) {
    e.preventDefault();
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <footer
      ref={contactRef}
      className="shadow-hero flex flex-col items-center space-y-6 bg-neutral-900/80 py-10 px-2 xs:px-0"
    >
      <h2 className="text-center text-3xl xs:text-4xl">
        Leandro Farias, Front-End Developer
      </h2>

      <nav>
        <ul className="flex gap-8">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={(e) => handleClick(e, item.href)}
              className="text-muted-foreground cursor-pointer text-2xl transition duration-150 hover:scale-105 hover:text-purple-600"
            >
              {item.label}
            </button>
          ))}
        </ul>
      </nav>

      <Social size="footer" />
    </footer>
  );
}

// <div className="space-y-1">
//   <span className="text-muted-foreground font-bold">
//     Tem um projeto em mente?
//   </span>
//   <h2 className="text-6xl sm:pl-4 sm:text-8xl">Fale Comigo</h2>
// </div>

// <Social size="footer" />
// <Image
//   src="/outer/astrouner.png"
//   width={150}
//   height={50}
//   alt="Bonfire OW"
//   className="animate-infinite-space-y xs:right-4 xs:top-12 xs:h-[180px] xs:w-[170px] absolute h-[140px] w-[130px] scale-x-[-1] sm:top-28 md:top-20 hidden xs:block"
// />
// <Image
//   src="/outer/quantum-moon.png"
//   width={80}
//   height={80}
//   alt="Bonfire OW"
//   className="animate-infinite-space-x absolute top-6 right-24 hidden scale-x-[-1] opacity-60 md:block"
// />
