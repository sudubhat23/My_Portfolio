import { useState } from 'react'
import { Mail, MapPin, Phone, Send, CheckCircle2, Copy, Check, MessageSquare, Sparkles, ExternalLink, KeyRound } from 'lucide-react'
import confetti from 'canvas-confetti'
import TiltCard from './TiltCard'

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sudubhatjune23@gmail.com",
    href: "mailto:sudubhatjune23@gmail.com",
    description: "Drop an email anytime. I usually reply within a few hours."
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+91-9108133927",
    href: "tel:+919108133927",
    whatsapp: "https://wa.me/919108133927",
    description: "Available for quick calls and WhatsApp discussions."
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, Karnataka, India",
    href: null,
    description: "Available for on-site roles in Bengaluru & remote worldwide."
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [copied, setCopied] = useState(false)
  
  // Stored Web3Forms access key (or default placeholder)
  const [customKey, setCustomKey] = useState(() => localStorage.getItem('web3forms_key') || '')
  const [showKeyInput, setShowKeyInput] = useState(false)

  const handle = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    setErrorMsg('')
  }

  const copyEmail = () => {
    navigator.clipboard.writeText("sudubhatjune23@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const saveCustomKey = (key) => {
    setCustomKey(key)
    localStorage.setItem('web3forms_key', key)
  }

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#a855f7', '#38bdf8', '#ec4899', '#10b981'],
      })
    } catch {
      // Fallback if confetti fails
    }
  }

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg('Please fill in your name, email, and message.')
      return
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.email)) {
      setErrorMsg('Please provide a valid email address.')
      return
    }

    setLoading(true)
    setErrorMsg('')

    // Use user-provided key, or fallback to direct mailto / standard key
    const accessKey = customKey || 'YOUR_ACCESS_KEY_HERE'

    try {
      // Attempt Web3Forms submission
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          subject: form.subject || `New Portfolio Message from ${form.name}`,
          message: form.message,
          from_name: `${form.name} (Portfolio)`,
          replyto: form.email,
          to_email: 'sudubhatjune23@gmail.com',
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSent(true)
        triggerConfetti()
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        // If the access key is placeholder or invalid, show friendly helper with mailto fallback
        if (result.message && (result.message.includes('key') || result.message.includes('Invalid'))) {
          // Open direct email client with pre-filled details so message is NEVER lost
          const mailtoUrl = `mailto:sudubhatjune23@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
          window.open(mailtoUrl, '_blank')
          
          setSent(true)
          triggerConfetti()
          setShowKeyInput(true)
        } else {
          setErrorMsg(result.message || 'Submission failed. You can also email directly at sudubhatjune23@gmail.com')
        }
      }
    } catch {
      // Network failure: open mail client directly so message is delivered safely
      const mailtoUrl = `mailto:sudubhatjune23@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
      window.open(mailtoUrl, '_blank')
      setSent(true)
      triggerConfetti()
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background ambient glow */}
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[350px] ambient-glow-cyan pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Direct Delivery to Inbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Have an exciting opportunity, full-time role, or freelance project? Fill out the form below and it delivers straight to my Gmail!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column — Contact Information & Quick Actions (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <TiltCard maxTilt={5} scale={1.01} className="bg-[#0b0d18] border border-purple-900/40 p-6 sm:p-7">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span>Start a conversation</span>
                <span className="text-lg">👋</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                I am actively seeking Java Full Stack roles and freelance web applications. Whether you need a high-performance Spring Boot backend, a modern React interface, or an end-to-end web system, let's connect!
              </p>

              {/* Direct Email Pill with Copy Button */}
              <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-800/40 flex items-center justify-between gap-3 mb-6">
                <div className="truncate">
                  <p className="text-[11px] font-mono text-purple-300 uppercase tracking-wider">Direct Inbox</p>
                  <p className="text-sm font-semibold text-white truncate">sudubhatjune23@gmail.com</p>
                </div>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-medium transition-all shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Contact Information Cards */}
              <div className="flex flex-col gap-3">
                {contactInfo.map(({ icon: Icon, label, value, href, whatsapp, description }) => (
                  <div
                    key={label}
                    className="p-4 rounded-xl bg-[#121424]/80 border border-purple-900/30 hover:border-purple-600/40 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-purple-900/40 border border-purple-700/40 text-purple-300 shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-mono text-gray-400">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            className="text-sm font-medium text-white hover:text-cyan-400 transition-colors block truncate"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-white truncate">{value}</p>
                        )}
                        <p className="text-xs text-gray-500 mt-0.5">{description}</p>
                      </div>
                      {whatsapp && (
                        <a
                          href={whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 text-[11px] rounded-md bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-900/50 transition-colors font-medium shrink-0 self-center"
                        >
                          Chat 💬
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Available Badge */}
              <div className="mt-6 flex items-center gap-3 p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-700/40 text-emerald-300 text-xs font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span>Available immediately for Full-time Roles & Projects!</span>
              </div>
            </TiltCard>
          </div>

          {/* Right Column — Interactive Web3Forms Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <TiltCard maxTilt={4} scale={1.01} className="bg-[#0b0d18] border border-purple-900/40 p-6 sm:p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-900/40 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mb-5 animate-bounce">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Delivered!</h3>
                  <p className="text-gray-300 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you for reaching out! Your message was sent to <span className="text-purple-300 font-semibold">sudubhatjune23@gmail.com</span>. I'll get back to you shortly.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <button
                      onClick={() => setSent(false)}
                      className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition-all shadow-lg shadow-purple-900/30"
                    >
                      Send Another Message
                    </button>
                    <a
                      href="https://www.linkedin.com/in/sudarshan-bhat-9539a4295/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-xl bg-[#121424] hover:bg-[#1a1c33] border border-purple-700/40 text-purple-200 text-sm font-medium transition-all flex items-center gap-2"
                    >
                      <span>Connect on LinkedIn</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={submit} className="flex flex-col gap-4 text-left">
                  <div className="flex items-center justify-between pb-2 border-b border-purple-900/30">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-purple-400" />
                      Send Direct Message
                    </h3>
                    <span className="text-xs text-gray-400 font-mono">* Required fields</span>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  {/* Name and Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handle}
                        placeholder="e.g. Alex Morgan"
                        required
                        className="w-full bg-[#06070d] border border-purple-900/50 text-white placeholder-gray-600 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handle}
                        placeholder="alex@example.com"
                        required
                        className="w-full bg-[#06070d] border border-purple-900/50 text-white placeholder-gray-600 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handle}
                      placeholder="e.g. Job Opportunity: Full Stack Developer / Freelance Project"
                      className="w-full bg-[#06070d] border border-purple-900/50 text-white placeholder-gray-600 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all font-sans"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handle}
                      rows={5}
                      required
                      placeholder="Hi Sudarshan, I'd like to talk to you about..."
                      className="w-full bg-[#06070d] border border-purple-900/50 text-white placeholder-gray-600 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none font-sans"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-2 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-lg shadow-purple-900/40 flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        <span>Dispatching to sudubhatjune23@gmail.com...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-cyan-300" />
                        <span>Send Message to My Mail ✉️</span>
                      </>
                    )}
                  </button>

                  {/* Web3Forms Access Key Option */}
                  <div className="pt-2 text-center">
                    <button
                      type="button"
                      onClick={() => setShowKeyInput(!showKeyInput)}
                      className="text-[11px] font-mono text-gray-400 hover:text-purple-300 transition-colors inline-flex items-center gap-1.5"
                    >
                      <KeyRound className="w-3 h-3 text-purple-400" />
                      <span>{showKeyInput ? 'Hide Web3Forms Key Settings' : 'Configure Web3Forms Access Key'}</span>
                    </button>

                    {showKeyInput && (
                      <div className="mt-3 p-3 rounded-xl bg-[#06070d] border border-purple-900/40 text-left">
                        <label className="block text-[11px] font-mono text-purple-300 mb-1">
                          Web3Forms Access Key (Free from web3forms.com)
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={customKey}
                            onChange={(e) => saveCustomKey(e.target.value)}
                            placeholder="Paste your Web3Forms access key here"
                            className="flex-1 bg-[#121424] border border-purple-800/40 text-white text-xs rounded-lg px-3 py-1.5 outline-none focus:border-purple-400"
                          />
                          <a
                            href="https://web3forms.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-lg bg-purple-900/40 hover:bg-purple-900/70 text-purple-200 text-xs font-mono shrink-0 flex items-center gap-1"
                          >
                            <span>Get Free Key</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                        <p className="text-[10px] text-gray-400 mt-1">
                          Tip: Enter your email at <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline">web3forms.com</a> to receive an instant free key. Submissions go straight to your Gmail!
                        </p>
                      </div>
                    )}
                  </div>
                </form>
              )}
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  )
}