import { ElementType } from "react";
import { tv, VariantProps } from "tailwind-variants";

interface SocialItemsProps extends VariantProps<typeof social> {
  href: string;
  icon: ElementType;
}

export const social = tv({
  base: "shadow-hero group flex justify-center rounded-3xl transition duration-300 ease-in-out",
  variants: {
    color: {
      linkedin: "hover:bg-sky-500",
      github: "hover:bg-purple-600",
    },
    size: {
      hero: "w-full p-3 py-4 xl:w-28 bg-neutral-900/80",
      footer: "p-4 w-full bg-black/50 w-24 xs:w-32",
    },
  },
});

export function SocialItems({
  href,
  icon: Icon,
  color,
  size,
}: SocialItemsProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={social({ color, size })}
    >
      <Icon className="text-5xl text-zinc-600 transition duration-300 ease-in group-hover:text-white" />
    </a>
  );
}
