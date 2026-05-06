import { GitBranch, Globe, Mail } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: GitBranch, href: 'https://github.com/sudubhat23', label: 'GitHub' },
  { icon: Globe, href: 'https://www.linkedin.com/in/sudarshan-bhat-9539a4295/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:sudubhatjune23@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="border-t border-purple-900/30 bg-[#0a0a0f] py-12 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-1">Sudarshan Bhat</h3>
            <p className="text-gray-500 text-sm">Java Full Stack Developer · Bengaluru</p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6">
            {links.map(l => (
              <a key={l.label} href={l.href}
                className="text-sm text-gray-500 hover:text-purple-400 transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank"
                className="bg-purple-900/20 hover:bg-purple-900/40 border border-purple-800/30 p-2.5 rounded-xl text-purple-400 hover:text-purple-300 transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-purple-900/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-sm">
            © 2026 Sudarshan Sudhakar Bhat. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Built with <span className="text-purple-400">React.js</span> + <span className="text-purple-400">Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  )
}