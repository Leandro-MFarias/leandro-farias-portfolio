import { Button } from "@/components/ui/button";
import { ButtonsHeader } from "./buttons-header";
import { CodeXmlIcon } from "lucide-react";
import { SheetMobile } from "./sheet-mobile";

export function Header() {
  return (
    <header className="w-full p-6 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-0.5">
          <CodeXmlIcon className="text-purple-600" />
          <span>dev</span>
        </div>
        <Button
          variant="outline"
          className="h-0 py-3 text-muted-foreground px-2"
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
