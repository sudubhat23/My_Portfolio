import { ArrowRight, Download, Mail, Sparkles, Terminal, Award, Briefcase } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import ThreeCanvas from './ThreeCanvas'

const stats = [
  { label: 'Academic CGPA', value: '8.6', icon: Award, sub: 'MCA Postgrad' },
  { label: 'Industry Exp', value: 'Intern', icon: Briefcase, sub: 'AI Varient & ExcelR' },
  { label: 'Tech Stack', value: 'Java + React', icon: Terminal, sub: 'Full Stack & AI' },
]

const quickTech = ['Java', 'Spring Boot', 'React.js', 'Groq AI', 'MySQL', 'Python']

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-20 left-10 w-96 h-96 ambient-glow-purple pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 ambient-glow-cyan pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium mb-6 shadow-md shadow-purple-950/40">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Full-Time Roles & Freelance</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5">
              Hi, I'm <span className="gradient-text">Sudarshan Bhat</span>
            </h1>

            {/* Sub-headline */}
            <h2 className="text-xl sm:text-2xl text-purple-200/90 font-semibold mb-5 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>Java Full Stack Developer & AI Engineer</span>
            </h2>

            {/* Bio */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              I architect production-ready applications combining robust <span className="text-purple-300 font-semibold">Java & Spring Boot</span> backends with responsive <span className="text-cyan-300 font-semibold">React.js</span> frontends and intelligent <span className="text-purple-300 font-semibold">Groq AI</span> integrations. Currently interning at <span className="text-white font-medium">AI Varient, Bengaluru</span>.
            </p>

            {/* Quick Tech Pills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              {quickTech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-[#0d0f1c] border border-purple-800/40 text-purple-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm sm:text-base transition-all shadow-lg shadow-purple-900/40 group cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#0f1122] hover:bg-[#161a35] border border-purple-600/50 hover:border-purple-400 text-purple-200 hover:text-white font-semibold text-sm sm:text-base transition-all shadow-md cursor-pointer"
              >
                <span>Get in Touch</span>
                <Mail className="w-4 h-4 text-cyan-400" />
              </a>

              <a
                href="https://drive.google.com/file/d/1xWpZZs5YlDjRTl_3nwR0_2k-MpYW2Tal/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#0f1122]/70 hover:bg-[#161a35] border border-purple-800/40 text-gray-300 hover:text-white font-medium text-sm transition-all"
                title="Download Official Resume"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Resume</span>
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-lg mb-8">
              {stats.map(({ label, value, icon: Icon, sub }) => (
                <div
                  key={label}
                  className="p-3 sm:p-4 rounded-xl bg-[#0b0d18] border border-purple-900/40 flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                  <div className="flex items-center gap-1.5 text-purple-400 mb-1">
                    <Icon className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono text-gray-400">{label}</span>
                  </div>
                  <span className="text-lg sm:text-xl font-bold text-white">{value}</span>
                  <span className="text-[10px] text-gray-400 truncate">{sub}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 text-gray-400">
              <span className="text-xs font-mono uppercase tracking-wider text-gray-400">Find me on:</span>
              <a
                href="https://github.com/sudubhat23"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800/40 text-purple-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/sudarshan-bhat-9539a4295/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800/40 text-purple-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:sudubhatjune23@gmail.com"
                className="p-2 rounded-lg bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800/40 text-purple-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive 3D Canvas (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/10 via-cyan-500/10 to-indigo-600/10 blur-xl pointer-events-none" />
              
              <div className="relative rounded-3xl border border-purple-500/20 bg-[#090b16]/70 backdrop-blur-md overflow-hidden shadow-2xl shadow-purple-950/50">
                <ThreeCanvas />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}