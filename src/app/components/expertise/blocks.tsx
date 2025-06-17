import { ReactElement } from "react";

interface BlocksProps {
  icon: ReactElement;
  title: string;
  description: string;
  span: string;
}

export function Blocks({ icon, title, description, span }: BlocksProps) {
  return (
    <div className="shadow-hero flex md:max-w-[420px] space-x-2 rounded-2xl p-4 py-6 md:py-4">
      {icon}
      <div className="flex flex-col space-y-3">
        <div className="flex-1 space-y-1">
          <h4 className="text-xl font-bold">{title}</h4>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
        <span className="text-muted-foreground/70 text-sm">{span}</span>
      </div>
    </div>
  );
}
