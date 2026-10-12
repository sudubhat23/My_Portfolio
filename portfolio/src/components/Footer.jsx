import { ArrowUp, Mail, Phone, Code2, Heart, Sparkles } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: GithubIcon, href: 'https://github.com/sudubhat23', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/sudarshan-bhat-9539a4295/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:sudubhatjune23@gmail.com', label: 'Email' },
  { icon: Phone, href: 'tel:+919108133927', label: 'Phone' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-purple-900/30 bg-[#040509] py-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-20 ambient-glow-purple pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 rounded-lg bg-purple-600">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-extrabold text-xl gradient-text">
                Sudarshan Bhat
              </span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm max-w-sm">
              Java Full Stack Developer & AI Engineer · Master of Computer Applications (MCA 8.6 CGPA) · Bengaluru, India
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-xs sm:text-sm font-medium text-gray-400 hover:text-purple-300 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800/40 text-purple-300 hover:text-white transition-colors"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-purple-600/30 hover:bg-purple-600 text-purple-200 hover:text-white border border-purple-500/40 transition-all cursor-pointer ml-2"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-900/30 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Sudarshan Sudhakar Bhat. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built with</span>
            <span className="text-purple-400 font-semibold">React</span>
            <span>·</span>
            <span className="text-cyan-400 font-semibold">Three.js 3D</span>
            <span>·</span>
            <span className="text-purple-400 font-semibold">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}