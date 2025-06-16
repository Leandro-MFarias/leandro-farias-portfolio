"use client";

import Image from "next/image";

import { useMenu } from "../../context/useMenu";
import { TypingText } from "../typing-text";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { DiReact } from "react-icons/di";
import { BsGlobe2 } from "react-icons/bs";
import { RiGitlabLine } from "react-icons/ri";
import { Container } from "./container";
import { LocationAndProfission } from "./location-profission";
import { Social } from "../social";

export function Hero() {
  const { homeRef } = useMenu();

  return (
    <section
      ref={homeRef}
      className="flex w-full flex-col items-center justify-center space-y-2.5 px-6 xl:flex-row xl:space-x-2.5 xl:mb-30"
      id="hero"
    >
      {/* LEFT  */}
      <Container variant="left">
        <div className="group flex items-center justify-between">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/hello-apple.png" />
          </Avatar>
          <DiReact className="text-muted-foreground/60 text-7xl transition-transform duration-300 group-hover:-translate-x-2" />
        </div>

        <p className="text-[32px] xl:max-w-[90%] xl:text-4xl">
          Criando Soluções com Código e Criatividade
        </p>
        <span className="text-muted-foreground px-1 xl:px-0">
          Leandro Farias • Dev
        </span>
      </Container>

      {/* CENTER */}
      <div className="w-full space-y-2.5 xl:w-auto">
        <Container variant="center">
          <LocationAndProfission
            label="Profissão"
            description={<TypingText />}
            icon={RiGitlabLine}
          />
        </Container>

        {/* SOCIAL */}
        <Social size="hero" />

        <Container variant="center">
          <LocationAndProfission
            label="Localização"
            description="São Paulo, SP"
            icon={BsGlobe2}
          />
        </Container>
      </div>

      {/* RIGHT */}
      <Container variant="right">
        <p className="text-center text-3xl font-bold text-purple-500 md:text-start md:text-4xl xl:text-center">
          Tudo começa com uma ideia.
        </p>
        <Image
          src="/dog.gif"
          alt="Descrição do GIF"
          width={368}
          height={360}
          className="mx-auto h-auto rounded-3xl md:w-[500px] xl:w-[368px]"
        />
      </Container>
    </section>
  );
}
