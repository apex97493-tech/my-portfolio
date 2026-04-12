import { motion } from 'framer-motion'
import { useTypewriter } from '../hooks/useTypewriter'

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function Hero() {
  const typed = useTypewriter(
    ['Cyber Security & Software Developer', 'MERN Stack Engineer', 'Penetration Tester', 'Full-Stack Builder'],
    80,
    2200
  )

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 md:px-8 lg:px-24 relative overflow-hidden bg-background"
    >
      {/* Background orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-tertiary/3 rounded-full blur-[160px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-24">
        {/* Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-label text-primary-dim mb-4 tracking-[0.2em] uppercase text-sm"
          >
            // PORTFOLIO_ROOT_INIT
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-headline font-bold text-on-surface tracking-tighter mb-6 leading-none"
          >
            Aman{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Singh
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex items-center gap-3 font-headline text-xl md:text-2xl text-on-surface-variant mb-10 min-h-[3rem]"
          >
            <span className="text-primary-dim font-bold text-2xl">_</span>
            <p className="border-r-2 border-primary-dim pr-2">
              {typed}
              <span className="animate-pulse">|</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={`${API}/api/download/cv-pdf`}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dim text-on-primary font-bold font-headline rounded shadow-lg neon-glow hover:scale-[1.02] transition-transform flex items-center gap-2"
            >
              <span className="material-symbols-outlined">picture_as_pdf</span>
              CV — PDF
            </a>
            <a
              href={`${API}/api/download/cv-docx`}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 border border-primary/50 hover:bg-primary/10 transition-colors font-bold font-headline text-primary rounded flex items-center gap-2"
            >
              <span className="material-symbols-outlined">description</span>
              CV — DOCX
            </a>
            <a
              href="#projects"
              className="px-8 py-4 border border-outline-variant hover:bg-surface-variant transition-colors font-bold font-headline text-on-surface rounded"
            >
              EXPLORE WORK
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 mt-8"
          >
            {[
              { icon: 'code', label: 'GitHub', href: 'https://github.com/amansingh' },
              { icon: 'business_center', label: 'LinkedIn', href: 'https://www.linkedin.com/in/aman-singh-7b9b9b352/' },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label text-xs uppercase tracking-widest"
              >
                <span className="material-symbols-outlined text-base">{s.icon}</span>
                {s.label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center lg:justify-end relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Glowing ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl -z-10" />
            <div className="absolute inset-2 rounded-full border border-primary/20" />
            <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-primary/30">
              <img
                src="/aman-picture.png"
                alt="Aman Singh"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-on-surface-variant"
      >
        <span className="font-label text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span className="material-symbols-outlined text-primary">keyboard_arrow_down</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
