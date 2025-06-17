import { ReactElement } from "react";

interface BlocksProps {
  icon: ReactElement;
  title: string;
  description: string;
  span: string;
}

export function Blocks({ icon, title, description, span }: BlocksProps) {
  return (
    <div className="shadow-hero flex md:max-w-[480px] space-x-2 rounded-2xl p-6">
      {icon}
      <div className="flex flex-col space-y-3">
        <div className="flex-1 space-y-1">
          <h4 className="text-xl md:text-2xl font-semibold">{title}</h4>
          <p className="text-muted-foreground text-sm md:text-base">{description}</p>
        </div>
        <span className="text-muted-foreground/60 text-sm font-semibold">{span}</span>
      </div>
    </div>
  );
}
