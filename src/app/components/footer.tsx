"use client";

import { useMenu } from "../context/useMenu";
import Image from "next/image";
import { Social } from "./social";

export function Footer() {
  const { contactRef } = useMenu();

  return (
    <footer
      ref={contactRef}
      className="xs:pb-0 relative mx-5 space-y-6 rounded-3xl border-2 border-zinc-800 px-4 py-6 pb-2"
    >
      <div className="space-y-1">
        <span className="text-muted-foreground font-bold">
          Tem um projeto em mente?
        </span>
        <h2 className="text-6xl sm:pl-4 sm:text-8xl">Fale Comigo</h2>
      </div>

      <Social size="footer" />
      <Image
        src="/outer/astrouner.png"
        width={150}
        height={50}
        alt="Bonfire OW"
        className="animate-infinite-space-y xs:right-4 xs:top-12 xs:h-[180px] xs:w-[170px] absolute h-[140px] w-[130px] scale-x-[-1] sm:top-28 md:top-20 hidden xs:block"
      />
      <Image
        src="/outer/quantum-moon.png"
        width={80}
        height={80}
        alt="Bonfire OW"
        className="animate-infinite-space-x absolute top-6 right-24 hidden scale-x-[-1] opacity-60 md:block"
      />
    </footer>
  );
}
