import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function Contact() {
  const [ref, visible] = useScrollAnimation(0.1)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-8 lg:px-24 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-headline font-bold mb-8 leading-tight">
            Ready to build the{' '}
            <span className="text-primary">secure</span> future?
          </h2>
          <p className="text-lg text-on-surface-variant mb-12 font-body">
            I'm always looking for collaborative projects or technical challenges. Reach out if you'd like to
            discuss a project, an opportunity, or just talk tech.
          </p>
          <div className="space-y-6">
            {[
              { icon: 'alternate_email', label: 'Email', value: 'amansingh@jklu.edu.in' },
              { icon: 'location_on', label: 'Base', value: 'Jaipur, Rajasthan' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <p className="text-xs font-label text-on-surface-variant uppercase tracking-widest">{item.label}</p>
                  <p className="text-lg font-headline font-bold text-on-surface">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-surface-container p-8 rounded-2xl glass-panel border border-outline-variant/10"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-primary transition-all p-3 text-on-surface outline-none rounded-t font-body placeholder:text-on-surface-variant/40"
                />
              </div>
              <div>
                <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-primary transition-all p-3 text-on-surface outline-none rounded-t font-body placeholder:text-on-surface-variant/40"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Let's discuss your project..."
                rows={5}
                className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-primary transition-all p-3 text-on-surface outline-none rounded-t font-body placeholder:text-on-surface-variant/40 resize-none"
              />
            </div>

            {status === 'success' && (
              <p className="text-primary text-sm font-label flex items-center gap-2">
                <span className="material-symbols-outlined text-base">check_circle</span>
                Message sent successfully!
              </p>
            )}
            {status === 'error' && (
              <p className="text-error text-sm font-label flex items-center gap-2">
                <span className="material-symbols-outlined text-base">error</span>
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-4 bg-primary text-on-primary font-headline font-bold rounded shadow-lg neon-glow hover:bg-primary-dim transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
