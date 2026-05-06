import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sudubhatjune23@gmail.com",
    href: "mailto:sudubhatjune23@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9108133927",
    href: "tel:+919108133927",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, Karnataka, India",
    href: null,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handle = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 font-medium text-sm uppercase tracking-widest mb-3">Get in touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Me</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Have a project in mind or want to hire me? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left — Contact info */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Let's work together</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm currently open to full-time Java Full Stack roles and freelance web development projects. Whether you need a complete web app, a REST API, or a React frontend — let's build something great together.
              </p>
            </div>

            {/* Contact cards */}
            <div className="flex flex-col gap-4 mt-2">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label}
                  className="flex items-center gap-4 bg-[#0f0f1a] border border-purple-900/30 rounded-2xl p-4">
                  <div className="bg-purple-900/40 p-2.5 rounded-xl">
                    <Icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-white text-sm font-medium hover:text-purple-400 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-3 bg-green-900/20 border border-green-700/30 rounded-2xl p-4 mt-2">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse shrink-0"></span>
              <p className="text-green-400 text-sm font-medium">
                Available for work & freelance projects right now!
              </p>
            </div>
          </div>

          {/* Right — Contact form */}
          <div className="bg-[#0f0f1a] border border-purple-900/30 rounded-2xl p-6">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-white font-bold text-xl mb-2">Message sent!</h3>
                <p className="text-gray-400 text-sm mb-6">Thanks for reaching out! I'll get back to you soon.</p>
                <button
                  onClick={() => setSent(false)}
                  className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-6 py-2.5 rounded-xl transition-colors">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1.5">Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handle}
                      placeholder="Your name"
                      className="w-full bg-[#0a0a0f] border border-purple-900/40 text-white placeholder-gray-600 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1.5">Email *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handle}
                      placeholder="your@email.com"
                      className="w-full bg-[#0a0a0f] border border-purple-900/40 text-white placeholder-gray-600 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1.5">Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handle}
                    placeholder="Project inquiry / Job opportunity"
                    className="w-full bg-[#0a0a0f] border border-purple-900/40 text-white placeholder-gray-600 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1.5">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-[#0a0a0f] border border-purple-900/40 text-white placeholder-gray-600 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-60 text-white font-medium py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                      Sending...
                    </>
                  ) : "Send Message ✉️"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}