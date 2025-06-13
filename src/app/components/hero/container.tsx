import { tv } from "tailwind-variants";
import { ReactNode } from "react";

import { VariantProps } from "tailwind-variants";

interface ContainerProps extends VariantProps<typeof container> {
  children: ReactNode;
}

export const container = tv({
  base: "w-full flex rounded-3xl bg-neutral-900/80 shadow-hero px-5 space-y-2.5",
  variants: {
    variant: {
      left: "flex-col justify-around space-y-6 py-6 xl:h-[360px] xl:w-[372px] xl:py-4",
      center:
        "group items-center justify-between space-y-2.5 py-3.5 xl:w-[400px]",
      right:
        "h-[360px] flex-col items-center justify-center space-y-2 py-6 md:flex-row md:space-y-0 xl:w-[372px] xl:flex-col xl:space-y-4 xl:py-4",
    },
  },
});

export function Container({ children, variant }: ContainerProps) {
  return (
    <div className={container({ variant })}>
      {children}
    </div>
  );
}
