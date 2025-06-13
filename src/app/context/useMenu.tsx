"use client";

import { createContext, ReactNode, RefObject, useContext, useRef, useState } from "react";

interface MenuContextProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  homeRef: RefObject<HTMLElement>;
  aboutRef: RefObject<HTMLElement>;
  projectsRef: RefObject<HTMLElement>;
  contactRef: RefObject<HTMLElement>;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  return (
    <MenuContext.Provider
      value={{ isMenuOpen, setIsMenuOpen, homeRef, aboutRef, projectsRef, contactRef }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context)
    throw new Error("Menu Mobile precisa ser acessado dentro do contexto");

  return context;
}
