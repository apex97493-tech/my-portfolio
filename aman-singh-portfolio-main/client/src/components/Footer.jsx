import { motion } from 'framer-motion'

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function Footer() {
  return (
    <footer className="bg-black w-full py-12 mt-auto">
      <div className="flex flex-col items-center gap-6 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary font-bold font-headline text-lg"
        >
          // AMAN_SINGH
        </motion.div>

        <div className="flex gap-8 flex-wrap justify-center">
          {[
            { label: 'GitHub', href: 'https://github.com/amansingh' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aman-singh-7b9b9b352/' },
            { label: 'Twitter', href: 'https://twitter.com/amansingh' },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors font-label text-xs tracking-widest uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href={`${API}/api/download/cv-pdf`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-xs font-label text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest"
          >
            <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
            CV PDF
          </a>
          <a
            href={`${API}/api/download/cv-docx`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-xs font-label text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest"
          >
            <span className="material-symbols-outlined text-sm">description</span>
            CV DOCX
          </a>
        </div>

        <p className="font-label text-xs tracking-widest uppercase text-on-surface-variant/50">
          © 2024 Aman Singh. Built with MERN Stack.
        </p>
      </div>
    </footer>
  )
}
