import { Button } from "@/components/ui/button";
import { ButtonsHeader } from "./buttons-header";
import { CodeXmlIcon } from "lucide-react";
import { SheetMobile } from "./sheet-mobile";

export function Header() {
  return (
    <header className="flex w-full items-center justify-between p-6">
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-0.5">
          <CodeXmlIcon className="h-8 w-8 text-purple-600" />
          <span className="text-2xl">dev</span>
        </div>
        <Button
          variant="outline"
          className="text-muted-foreground h-0 px-2 py-3"
        >
          Portfolio
        </Button>
      </div>

      {/* MENU DESKTOP */}
      <div className="hidden sm:flex">
        <ButtonsHeader />
      </div>

      <SheetMobile />
    </header>
  );
}
