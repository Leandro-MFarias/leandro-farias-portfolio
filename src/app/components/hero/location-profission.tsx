import { ElementType, ReactNode } from "react";

interface InfoProps {
  label: string;
  description: ReactNode | string;
  icon: ElementType;
}

export function LocationAndProfission({
  label,
  description,
  icon: Icon,
}: InfoProps) {
  return (
    <>
      <div className="flex flex-col space-y-3">
        <span className="text-muted-foreground text-3xl">{label}</span>
        {typeof description === "object" ? (
          description
        ) : (
          <p className="text-4xl">{description}</p>
        )}
      </div>
      <Icon className="text-muted-foreground/60 pr-3 text-7xl transition-transform duration-300 group-hover:-translate-x-2 xl:text-5xl" />
    </>
  );
}
