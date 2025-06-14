"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CodeXmlIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import { ButtonsHeader } from "./buttons-header";
import { useMenu } from "@/app/context/useMenu";

export function SheetMobile() {
  const { isMenuOpen, setIsMenuOpen } = useMenu();

  return (
    <div className="flex sm:hidden">
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetTrigger className="rounded-full bg-neutral-900 p-1.5">
          <MenuIcon
            className="w-7 h-7 text-muted-foreground cursor-pointer hover:text-white"
          />
        </SheetTrigger>
        <SheetContent className="flex w-full p-2.5">
          <SheetHeader className="flex">
            <SheetTitle className="m-0 flex items-center space-x-1 border-b p-0 pb-2 text-lg">
              <CodeXmlIcon className="text-purple-600" />
              <span>dev</span>
              <Button
                variant="outline"
                className="text-muted-foreground ml-4 h-0 px-2 py-3"
              >
                Portfolio
              </Button>
            </SheetTitle>
          </SheetHeader>

          <div className="px-6">
            <ButtonsHeader mobile="mobile" />
          </div>

          <div className="mt-6 h-0.5 w-full rounded-md bg-white" />
          <Image
            className="self-center"
            src="/cordenadas.png"
            width={324}
            height={226}
            alt="Cordenadas OW"
          />
        </SheetContent>
      </Sheet>
    </div>
  );
}
