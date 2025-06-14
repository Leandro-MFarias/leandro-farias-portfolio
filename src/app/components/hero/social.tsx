import { ElementType } from "react";
import { tv, VariantProps } from "tailwind-variants";

interface SocialProps extends VariantProps<typeof social> {
  href: string
  icon: ElementType
}

export const social = tv({
  base: "shadow-hero group flex w-full justify-center rounded-3xl bg-neutral-900/80 p-3 py-4 transition duration-110 ease-in xl:w-28",
  variants: {
    variant: {
      linkedin: "hover:bg-sky-500",
      github: "hover:bg-purple-600",
    }
  }
})

export function Social({ href, icon: Icon, variant }: SocialProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={social({ variant })}
    >
      <Icon className="text-5xl text-zinc-600 transition duration-110 ease-in group-hover:text-white" />
    </a>
  );
}
