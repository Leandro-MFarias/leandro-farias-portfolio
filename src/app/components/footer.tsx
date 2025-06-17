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