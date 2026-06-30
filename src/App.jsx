import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import Work from "./components/Work"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="max-w-5xl mx-auto border-x border-gray-200 dark:border-gray-800 bg-[var(--bg-page)] text-[var(--text-main)] min-h-screen transition-colors overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Work />
      <section id="experience" className="grid md:grid-cols-2 gap-10 px-5 sm:px-8 py-12 min-w-0">
        <Experience />
        <Skills />
      </section>
      <Contact />
    </div>
  )
}

export default App