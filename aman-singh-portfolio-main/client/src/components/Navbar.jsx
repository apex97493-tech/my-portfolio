import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ darkMode, toggleDark }) {
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map(l => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.3 }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'nav-scrolled backdrop-blur-xl border-b border-outline-variant/10' : 'bg-transparent'}`}
      style={scrolled ? { backgroundColor: 'color-mix(in srgb, var(--color-surface) 90%, transparent)' } : {}}
    >
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter text-primary font-headline"
        >
          // AMAN_SINGH
        </motion.div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 font-headline tracking-tight">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors duration-200 ${
                active === link.href.replace('#', '')
                  ? 'text-primary font-bold border-b-2 border-primary pb-0.5'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleDark}
            className="hover:bg-primary/10 transition-all duration-300 p-2 rounded-full"
            aria-label="Toggle dark mode"
          >
            <span className="material-symbols-outlined text-primary">
              {darkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 text-on-surface-variant hover:text-primary"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Open menu"
          >
            <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface-container-low border-t border-outline-variant/10 px-6 py-4 flex flex-col gap-4 font-headline"
          >
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`transition-colors ${
                  active === link.href.replace('#', '')
                    ? 'text-primary font-bold'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
