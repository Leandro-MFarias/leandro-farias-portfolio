"use client";

interface ButtonsHeaderProps {
  mobile?: string;
}

import { useMenu } from "@/app/context/useMenu";
import { ArrowRightIcon } from "lucide-react";
import { tv } from "tailwind-variants";

export const button = tv({
  base: "transition duration-150 ease-in cursor-pointer font-bold",
  variants: {
    variant: {
      default:
        "py-1 px-6 rounded-2xl bg-neutral-900 border shadow-md text-white hover:bg-zinc-800",
      mobile:
        "text-4xl text-white hover:scale-105 transition duration-200 ease-in-out hover:text-purple-600",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export function ButtonsHeader({ mobile }: ButtonsHeaderProps) {
  const { setIsMenuOpen, aboutRef, expertiseRef, projectsRef, contactRef } =
    useMenu();

  const menuItems = [
    { label: "sobre", href: aboutRef },
    { label: "projetos", href: projectsRef },
    { label: "especialidades", href: expertiseRef },
    { label: "contato", href: contactRef },
  ];

  function handleClick(
    e: React.MouseEvent,
    ref: React.RefObject<HTMLElement | null>,
  ) {
    e.preventDefault();
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  }

  return (
    <nav>
      <ul className={`flex gap-3 ${mobile && "flex-col space-y-12"}`}>
        {menuItems.map((item, index) => (
          <li key={index} className={mobile && "flex justify-between items-center"}>
            <button
              onClick={(e) => handleClick(e, item.href)}
              className={button({ variant: mobile ? "mobile" : "default" })}
            >
              {item.label}
            </button>
            {mobile && (
              <ArrowRightIcon className="text-muted-foreground" size={18} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
