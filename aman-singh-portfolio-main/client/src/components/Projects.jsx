import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const projects = [
  {
    id: 1,
    title: 'Baatcheet',
    desc: 'Real-time collaboration platform featuring end-to-end encrypted messaging and shared workspace modules.',
    tags: ['Fullstack'],
    badges: [
      { label: 'MERN', bg: 'bg-primary-container', text: 'text-on-primary-container' },
      { label: 'Socket.io', bg: 'bg-secondary-container', text: 'text-on-secondary-container' },
    ],
    github: 'https://github.com/amansingh/batcheet',
    live: 'https://batcheet.vercel.app',
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&q=80',
    liveIcon: 'link',
    codeIcon: 'code',
  },
  {
    id: 2,
    title: 'Binary Classification ML',
    desc: 'Advanced ML model for predictive analytics with high-precision accuracy across multivariate datasets.',
    tags: ['ML'],
    badges: [
      { label: 'Python', bg: 'bg-tertiary-container', text: 'text-on-tertiary-container' },
      { label: 'TensorFlow', bg: 'bg-secondary-container', text: 'text-on-secondary-container' },
    ],
    github: 'https://github.com/amansingh/binary-classifier',
    live: null,
    image: 'https://images.unsplash.com/photo-1545987796-200677ee1011?w=600&q=80',
    liveIcon: null,
    codeIcon: 'code',
  },
  {
    id: 3,
    title: 'Traffic Light Simulation',
    desc: 'Intelligent urban traffic control system utilising algorithmic optimisation for real-world flow management.',
    tags: ['Simulation'],
    badges: [
      { label: 'C++', bg: 'bg-primary-container', text: 'text-on-primary-container' },
      { label: 'IoT', bg: 'bg-surface-variant', text: 'text-on-surface-variant' },
    ],
    github: 'https://github.com/amansingh/traffic-sim',
    live: null,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    liveIcon: null,
    codeIcon: 'code',
  },
]

const filters = ['All', 'Fullstack', 'ML', 'Simulation']

export default function Projects() {
  const [active, setActive] = useState('All')
  const [ref, visible] = useScrollAnimation(0.1)

  const filtered = active === 'All' ? projects : projects.filter(p => p.tags.includes(active))

  return (
    <section id="projects" className="py-24 px-6 md:px-8 lg:px-24 bg-surface-container-low">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl font-headline font-bold mb-4">Featured Labs</h2>
            <p className="text-on-surface-variant font-body">Production-grade deployments and research modules.</p>
          </div>
          <div className="flex gap-2 font-label text-xs flex-wrap">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded font-bold transition-all ${
                  active === f
                    ? 'bg-primary text-on-primary'
                    : 'border border-outline-variant hover:bg-surface-variant text-on-surface-variant'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative bg-surface-container rounded-xl overflow-hidden hover:translate-y-[-8px] transition-all duration-500 glass-panel"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-surface p-3 rounded-full hover:bg-primary transition-colors"
                      >
                        <span className="material-symbols-outlined text-on-surface">link</span>
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-surface p-3 rounded-full hover:bg-primary transition-colors"
                      >
                        <span className="material-symbols-outlined text-on-surface">code</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {p.badges.map(b => (
                      <span
                        key={b.label}
                        className={`text-[10px] uppercase font-bold tracking-widest px-2 py-1 ${b.bg} ${b.text} rounded`}
                      >
                        {b.label}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-headline font-bold mb-2">{p.title}</h3>
                  <p className="text-on-surface-variant text-sm mb-4 font-body">{p.desc}</p>
                  <div className="flex gap-3 pt-2 border-t border-outline-variant/20">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-xs text-on-surface-variant hover:text-primary transition-colors font-label"
                      >
                        <span className="material-symbols-outlined text-sm">code</span>
                        GitHub
                      </a>
                    )}
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-xs text-on-surface-variant hover:text-primary transition-colors font-label"
                      >
                        <span className="material-symbols-outlined text-sm">open_in_new</span>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
