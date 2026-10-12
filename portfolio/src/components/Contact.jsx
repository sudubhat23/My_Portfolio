import { useState } from 'react'
import { Mail, MapPin, Phone, Send, CheckCircle2, Copy, Check, MessageSquare, Sparkles, ExternalLink, KeyRound, AlertCircle } from 'lucide-react'
import confetti from 'canvas-confetti'
import TiltCard from './TiltCard'
import { PORTFOLIO_CONFIG } from '../config'

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
  
  // Access key priority: localStorage -> config.js -> empty
  const [customKey, setCustomKey] = useState(() => {
    return localStorage.getItem('web3forms_key') || (PORTFOLIO_CONFIG.web3formsKey !== 'YOUR_ACCESS_KEY_HERE' ? PORTFOLIO_CONFIG.web3formsKey : '')
  })
  const [showKeyInput, setShowKeyInput] = useState(false)
  const [keySavedToast, setKeySavedToast] = useState(false)

  const isKeyConfigured = Boolean(customKey && customKey.trim().length > 10 && customKey !== 'YOUR_ACCESS_KEY_HERE')

  const handle = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    setErrorMsg('')
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_CONFIG.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const saveCustomKey = (key) => {
    const trimmed = key.trim()
    setCustomKey(trimmed)
    localStorage.setItem('web3forms_key', trimmed)
    setKeySavedToast(true)
    setTimeout(() => setKeySavedToast(false), 2500)
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
      // safe fallback
    }
  }

  // Open direct compose in Web Gmail
  const openGmailDirect = () => {
    const subject = encodeURIComponent(form.subject || `Inquiry from ${form.name || 'Portfolio Visitor'}`)
    const body = encodeURIComponent(`Hi Sudarshan,\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${PORTFOLIO_CONFIG.email}&su=${subject}&body=${body}`
    window.open(gmailUrl, '_blank')
  }

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg('Please fill in your name, email, and message.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.email)) {
      setErrorMsg('Please provide a valid email address.')
      return
    }

    // Check if the user hasn't configured a key yet
    if (!isKeyConfigured) {
      setErrorMsg('Web3Forms Access Key is not configured yet. Please paste your key below, or use "Open in Gmail Web" directly.')
      setShowKeyInput(true)
      return
    }

    setLoading(true)
    setErrorMsg('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: customKey,
          name: form.name,
          email: form.email,
          subject: form.subject || `Portfolio Message from ${form.name}`,
          message: form.message,
          from_name: `${form.name} (Portfolio)`,
          replyto: form.email,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSent(true)
        triggerConfetti()
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setErrorMsg(result.message || 'Could not send message. Please verify your Web3Forms Access Key or click below to send via Gmail.')
        setShowKeyInput(true)
      }
    } catch {
      setErrorMsg('Network error. Click "Send via Gmail" to send directly without delay.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
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
            Have an exciting opportunity, full-time role, or freelance project? Fill out the form below to message me directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (5 cols) */}
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
                  <p className="text-sm font-semibold text-white truncate">{PORTFOLIO_CONFIG.email}</p>
                </div>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-medium transition-all shrink-0 cursor-pointer"
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

              <div className="mt-6 flex items-center gap-3 p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-700/40 text-emerald-300 text-xs font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span>Available immediately for Full-time Roles & Projects!</span>
              </div>
            </TiltCard>
          </div>

          {/* Right Column — Contact Form & Key Configuration (7 cols) */}
          <div className="lg:col-span-7">
            <TiltCard maxTilt={4} scale={1.01} className="bg-[#0b0d18] border border-purple-900/40 p-6 sm:p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-900/40 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mb-5 animate-bounce">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Delivered!</h3>
                  <p className="text-gray-300 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you for reaching out! Your message was delivered straight to <span className="text-purple-300 font-semibold">{PORTFOLIO_CONFIG.email}</span>. I'll get back to you shortly.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <button
                      onClick={() => setSent(false)}
                      className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition-all shadow-lg shadow-purple-900/30 cursor-pointer"
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

                  {/* Warning banner if Access Key is not connected */}
                  {!isKeyConfigured && (
                    <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/40 text-amber-200 text-xs flex flex-col gap-2">
                      <div className="flex items-center gap-2 font-semibold">
                        <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Connect Web3Forms Key to receive emails in your Gmail inbox:</span>
                      </div>
                      <p className="text-amber-200/80 leading-relaxed">
                        1. Visit <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="text-amber-300 underline font-semibold">web3forms.com</a> and enter <strong className="text-white">sudubhatjune23@gmail.com</strong>.<br />
                        2. Check your Gmail inbox for your free Access Key and paste it below.
                      </p>
                    </div>
                  )}

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs flex flex-col gap-2">
                      <span>{errorMsg}</span>
                      <button
                        type="button"
                        onClick={openGmailDirect}
                        className="self-start text-xs font-semibold text-rose-200 underline cursor-pointer hover:text-white"
                      >
                        👉 Click here to send via Gmail Compose directly
                      </button>
                    </div>
                  )}

                  {/* Name and Email Inputs */}
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

                  {/* Subject Input */}
                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handle}
                      placeholder="e.g. Full Stack Developer Opportunity / Project Inquiry"
                      className="w-full bg-[#06070d] border border-purple-900/50 text-white placeholder-gray-600 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all font-sans"
                    />
                  </div>

                  {/* Message Input */}
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
                      placeholder="Hi Sudarshan, I came across your portfolio and would like to talk about..."
                      className="w-full bg-[#06070d] border border-purple-900/50 text-white placeholder-gray-600 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none font-sans"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-1">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-lg shadow-purple-900/40 flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer text-sm"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          <span>Sending to your inbox...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-cyan-300" />
                          <span>Send to My Mail ✉️</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={openGmailDirect}
                      className="px-4 py-3 rounded-xl bg-[#121424] hover:bg-[#1a1c33] border border-purple-700/40 text-purple-200 text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
                      title="Open in Gmail Web composer directly"
                    >
                      <ExternalLink className="w-4 h-4 text-purple-400" />
                      <span>Open in Gmail</span>
                    </button>
                  </div>

                  {/* Web3Forms Key Configuration Panel */}
                  <div className="pt-2 text-center border-t border-purple-900/30">
                    <button
                      type="button"
                      onClick={() => setShowKeyInput(!showKeyInput)}
                      className="text-[11px] font-mono text-purple-300 hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <KeyRound className="w-3.5 h-3.5 text-cyan-400" />
                      <span>
                        {isKeyConfigured
                          ? '✅ Web3Forms Key Connected (Click to edit)'
                          : '⚙️ Paste Your Web3Forms Key Here (Takes 15 sec)'}
                      </span>
                    </button>

                    {(showKeyInput || !isKeyConfigured) && (
                      <div className="mt-3 p-3.5 rounded-xl bg-[#06070d] border border-purple-900/40 text-left">
                        <label className="block text-[11px] font-mono text-purple-300 mb-1.5">
                          Web3Forms Access Key:
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={customKey}
                            onChange={(e) => saveCustomKey(e.target.value)}
                            placeholder="e.g. 12345678-abcd-1234-ef01-123456789abc"
                            className="flex-1 bg-[#121424] border border-purple-800/40 text-white text-xs rounded-lg px-3 py-2 outline-none focus:border-purple-400 font-mono"
                          />
                          <a
                            href="https://web3forms.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3.5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-mono shrink-0 flex items-center gap-1 font-semibold"
                          >
                            <span>Get Free Key</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                        {keySavedToast && (
                          <p className="text-[11px] text-emerald-400 mt-1.5 flex items-center gap-1">
                            <Check className="w-3 h-3" />
                            <span>Access Key saved successfully! Your contact form is now active.</span>
                          </p>
                        )}
                        <p className="text-[10px] text-gray-400 mt-1.5 leading-relaxed">
                          Enter <strong>sudubhatjune23@gmail.com</strong> at <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline">web3forms.com</a> to get your free key instantly. Once pasted, messages deliver straight to your Gmail!
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