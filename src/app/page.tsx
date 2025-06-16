import { About } from "./components/about";
import { Footer } from "./components/footer";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Projects } from "./components/projects/projects";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto text-white space-y-20">
      <Header />
      <main className="max-w-5xl xl:max-w-7xl mx-auto space-y-18 mb-12">
        <Hero />
        <About />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
