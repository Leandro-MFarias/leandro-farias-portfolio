import { About } from "./components/about";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Projects } from "./components/projects";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto text-white space-y-20">
      <Header />
      <main className="max-w-5xl xl:max-w-7xl mx-auto space-y-16">
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  );
}
