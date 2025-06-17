"use client";

import { copyToClipboard } from "@/helpers/copyToClipboard";
import { File, FileCheck2Icon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiGmail } from "react-icons/si";
import { tv, VariantProps } from "tailwind-variants";

export const emailButton = tv({
  base: "shadow-hero group relative flex w-full cursor-pointer justify-center rounded-3xl transition duration-110 ease-in hover:bg-red-500",
  variants: {
    size: {
      hero: "w-full xl:w-28 bg-neutral-900/80",
      footer: "p-4 w-full bg-black/50 w-24 xs:w-32",
    }
  }
})

export function EmailButton({ size }: VariantProps<typeof emailButton>) {
  const [hasCopied, setHasCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const email = "leandrorf1606@gmail.com";

  useEffect(() => {
    timeoutRef.current = setTimeout(setHasCopied, 4000, false);

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [hasCopied]);

  function handleCopy() {
    copyToClipboard(email)?.then(() => setHasCopied(true));
  }

  return (
    <div
      onClick={handleCopy}
      className={emailButton({ size })}
    >
      <span className="absolute top-1 right-1 hidden text-zinc-600 group-hover:block">
        {!hasCopied ? <File /> : <FileCheck2Icon />}
      </span>
      <button>
        <SiGmail className="cursor-pointer text-5xl text-zinc-600 transition duration-110 ease-in group-hover:text-white" />
      </button>
    </div>
  );
}
