import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const items = [
  {
    period: '2021 — Present',
    title: 'JK Lakshmipat University',
    subtitle: 'B.Tech in Computer Science & Engineering',
    desc: 'Focusing on Full-Stack systems, Cybersecurity, and Data Structures. Maintaining consistent academic excellence while leading technical initiatives.',
    color: 'bg-primary',
    ring: 'ring-primary/20',
  },
  {
    period: 'Summer 2023',
    title: 'Cyber Security Intern',
    subtitle: 'Tech-Vision Sol.',
    desc: 'Conducted vulnerability assessments and implemented security hardening for client-facing web architectures. Hands-on experience with penetration testing tools.',
    color: 'bg-secondary',
    ring: 'ring-secondary/20',
  },
  {
    period: 'Early 2023',
    title: 'Freelance Developer',
    subtitle: 'Remote Projects',
    desc: 'Delivered high-converting landing pages and internal business tools for regional startups using the MERN ecosystem.',
    color: 'bg-tertiary',
    ring: 'ring-tertiary/20',
  },
]

export default function Timeline() {
  const [ref, visible] = useScrollAnimation(0.1)

  return (
    <section id="experience" className="py-24 px-6 md:px-8 lg:px-24 bg-background">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-headline font-bold mb-16 text-center"
        >
          Career Genesis
        </motion.h2>

        <div className="relative border-l-2 border-outline-variant/30 pl-8 space-y-12">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              {/* Pulsing dot */}
              <div className={`absolute -left-[41px] top-0 w-4 h-4 rounded-full ${item.color} ring-4 ${item.ring}`}>
                <div className={`absolute inset-0 rounded-full ${item.color} animate-ping opacity-40`} />
              </div>

              <div className="font-label text-xs text-primary-dim uppercase tracking-widest mb-2">
                {item.period}
              </div>
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-1">{item.title}</h3>
              <p className="text-on-surface-variant mb-4 font-body">{item.subtitle}</p>
              <p className="text-sm text-on-surface-variant leading-relaxed font-body">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
