import { useState, useEffect } from 'react'
import { Menu, X, Code2 } from 'lucide-react'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0f]/95 backdrop-blur-md border-b border-purple-900/30 py-3' : 'py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-purple-600 p-1.5 rounded-lg group-hover:bg-purple-500 transition-colors">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg gradient-text">Sudarshan</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="text-sm text-gray-400 hover:text-purple-400 transition-colors font-medium">
              {l}
            </a>
          ))}
          <a href="https://drive.google.com/file/d/1xWpZZs5YlDjRTl_3nwR0_2k-MpYW2Tal/view?usp=drivesdk"
            target="_blank"
            className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-400" onClick={() => setOpen(o => !o)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0f0f1a] border-t border-purple-900/30 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-purple-400 transition-colors font-medium">
              {l}
            </a>
          ))}
          <a href="#contact"
            onClick={() => setOpen(false)}
            className="bg-purple-600 text-white text-sm font-medium px-4 py-2 rounded-lg text-center">
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}