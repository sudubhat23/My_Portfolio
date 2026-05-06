import { GitBranch, Globe, Mail, ArrowDown } from 'lucide-react'

const socials = [
  { icon: GitBranch, href: 'https://github.com/sudubhat23', label: 'GitHub' },
  { icon: Globe, href: 'https://www.linkedin.com/in/sudarshan-bhat-9539a4295/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:sudubhatjune23@gmail.com', label: 'Email' },
]

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center section-fade">

        <div className="inline-flex items-center gap-2 bg-purple-900/30 border border-purple-700/40 text-purple-300 text-sm px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Available for work & freelance
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hi, I'm <span className="gradient-text">Sudarshan</span>
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-400 font-medium mb-6">
          Java Full Stack Developer & AI Enthusiast
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          I build production-grade web applications using <span className="text-purple-400 font-medium">Java, Spring Boot</span> and <span className="text-purple-400 font-medium">React.js</span>. Currently interning at AI Varient, Bengaluru. Open to full-time roles and freelance projects.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a href="#projects"
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-xl transition-colors">
            View my work
          </a>
          <a href="#contact"
            className="border border-purple-600/50 hover:border-purple-500 text-purple-300 font-medium px-8 py-3 rounded-xl transition-colors">
            Hire me
          </a>
        </div>

        <div className="flex justify-center gap-5 mb-16">
          {socials.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank"
              className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors text-sm">
              <Icon className="w-5 h-5" />
              {label}
            </a>
          ))}
        </div>

        <div className="flex justify-center animate-bounce">
          <ArrowDown className="w-5 h-5 text-purple-400" />
        </div>

      </div>
    </section>
  )
}