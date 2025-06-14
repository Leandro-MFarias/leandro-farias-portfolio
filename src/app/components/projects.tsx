import Image from "next/image"


export function Projects() {
  return (
    <section className="flex items-center justify-center">
      <div className="flex flex-col items-center space-y-2">
        <Image
          src="/outer/bramble.png"
          width={62}
          height={62}
          alt="Symbol OW"
          className="opacity-50"
        />
        <h2 className={`text-center text-4xl sm:text-start md:text-5xl`}>
         Projetos Desenvolvidos<span className="text-purple-600">.</span>
        </h2>

        <div className="h-[30vh]">
          1
        </div>
      </div>
    </section>
  );
}
