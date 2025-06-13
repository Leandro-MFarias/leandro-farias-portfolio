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
  const { isMenuOpen, setIsMenuOpen } = useMenu()

  return (
    <div className="flex sm:hidden">
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen} >
        <SheetTrigger className="bg-neutral-900 rounded-full p-1">
          <MenuIcon
            className="text-muted-foreground hover:text-white cursor-pointer"
            size={20}
          />
        </SheetTrigger>
        <SheetContent className="flex p-2.5 w-full">
          <SheetHeader className="flex">
            <SheetTitle className="p-0 m-0 flex items-center space-x-1 text-lg border-b pb-2">
              <CodeXmlIcon className="text-purple-600" />
              <span>dev</span>
              <Button
                variant="outline"
                className="h-0 py-3 text-muted-foreground px-2 ml-4"
              >
                Portfolio
              </Button>
            </SheetTitle>
          </SheetHeader>

          <div className="px-6">
            <ButtonsHeader mobile="mobile" />
          </div>

          <div className="w-full h-0.5 bg-white rounded-md mt-6" />
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
