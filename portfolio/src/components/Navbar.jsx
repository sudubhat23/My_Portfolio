import { useState, useEffect } from 'react'
import { Menu, X, Code2, Sparkles, FileText, Send } from 'lucide-react'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#06070d]/90 backdrop-blur-xl border-b border-purple-500/20 py-3 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo / Brand */}
        <a href="#about" className="flex items-center gap-2.5 group cursor-pointer">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 group-hover:from-purple-500 group-hover:to-cyan-500 transition-all shadow-md shadow-purple-900/30">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-lg tracking-tight gradient-text">
              Sudarshan Bhat
            </span>
            <span className="text-[10px] font-mono text-purple-300 tracking-wider uppercase -mt-1 hidden sm:block">
              Java Full Stack · AI
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-500 after:to-cyan-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1xWpZZs5YlDjRTl_3nwR0_2k-MpYW2Tal/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-purple-900/40 hover:bg-purple-900/80 border border-purple-600/40 text-purple-200 hover:text-white text-xs font-semibold font-mono transition-all"
            title="Download PDF Resume"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume</span>
          </a>

          {/* Hire Me CTA */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold transition-all shadow-md shadow-purple-900/30"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 rounded-xl bg-purple-950/40 border border-purple-800/40 text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="w-6 h-6 text-purple-400" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="md:hidden bg-[#0a0c18]/95 backdrop-blur-2xl border-b border-purple-900/40 px-6 py-6 flex flex-col gap-4 shadow-2xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-gray-300 hover:text-purple-300 transition-colors py-1 flex items-center justify-between"
            >
              <span>{link.name}</span>
              <span className="text-purple-500 text-xs">→</span>
            </a>
          ))}

          <div className="pt-4 border-t border-purple-900/40 flex flex-col gap-3">
            <a
              href="https://drive.google.com/file/d/1xWpZZs5YlDjRTl_3nwR0_2k-MpYW2Tal/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-purple-950/60 border border-purple-700/50 text-purple-200 text-sm font-medium"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>View Official Resume</span>
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold shadow-lg shadow-purple-900/30"
            >
              <Send className="w-4 h-4" />
              <span>Contact / Hire Me</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}