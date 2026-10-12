import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#06070d] text-slate-100 cyber-grid overflow-x-hidden selection:bg-purple-600 selection:text-white">
      {/* Global Background Ambient Glows */}
      <div className="fixed top-0 left-1/4 -translate-x-1/2 w-[700px] h-[700px] ambient-glow-purple pointer-events-none -z-10 opacity-70" />
      <div className="fixed bottom-0 right-10 w-[600px] h-[600px] ambient-glow-cyan pointer-events-none -z-10 opacity-50" />

      {/* Main Sections */}
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}