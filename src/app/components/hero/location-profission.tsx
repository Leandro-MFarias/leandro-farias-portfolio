import { ElementType, ReactNode } from "react";
import Image from "next/image";

interface InfoProps {
  label: string;
  description: ReactNode | string;
  icon?: ElementType;
  image?: string;
}

export function LocationAndProfission({
  label,
  description,
  icon: Icon,
  image,
}: InfoProps) {
  return (
    <>
      <div className="flex flex-col space-y-3">
        <span className="text-muted-foreground text-3xl">{label}</span>
        {typeof description === "object" ? (
          description
        ) : (
          <p className="text-2xl sm:text-[32px] md:text-4xl">{description}</p>
        )}
      </div>
      {Icon ? (
        <Icon className="text-muted-foreground/60 text-5xl transition-transform duration-300 group-hover:-translate-x-2 sm:text-7xl xl:text-5xl" />
      ) : (
        image && (
          <Image
            src={image}
            width={40}
            height={40}
            alt="Earth OW"
            className="opacity-40 transition-transform duration-300 group-hover:-translate-x-2 sm:w-[60px] sm:object-fill xl:w-[40px]"
          />
        )
      )}
    </>
  );
}
