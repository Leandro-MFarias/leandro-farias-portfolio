import Image from "next/image"

export function resever() {
  return (
    <div className="shadow-hero flex items-center justify-around rounded-3xl bg-neutral-900/80 p-6">
      <Image
        src="/outer/astrouner.png"
        width={530}
        height={530}
        alt="Astronauta"
        className="animate-infinite-space"
      />
      <div className="max-w-1/2 space-y-8">
        <p className="text-2xl leading-loose">
          Separei aqui alguns projetos pessoais que desenvolvi Espero que curta!
        </p>
        <span className="text-xl font-semibold text-purple-600">
          Caso queira vizualizar o projeto completo click na imagem!
        </span>
      </div>
    </div>
  );
}
