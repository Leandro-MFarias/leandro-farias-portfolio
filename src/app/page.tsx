import { About } from "./components/about";
import { Expertise } from "./components/expertise/expertise";
import { Footer } from "./components/footer";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Projects } from "./components/projects/projects";

export default function Home() {
  return (
    <>
      <div className="relative mx-auto max-w-7xl space-y-20 text-white">
        <Header />
        <main className="mx-auto mb-12 max-w-5xl space-y-18 xl:max-w-7xl">
          <Hero />
          <About />
          <Projects />
          <Expertise />
        </main>
      </div>
      <Footer />
    </>
  );
}
