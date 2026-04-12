import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const categories = [
  {
    icon: 'terminal',
    title: 'Frontend',
    color: 'primary',
    borderClass: 'border-primary/20',
    gradientClass: 'from-primary to-secondary',
    skills: [
      { name: 'React / Next.js', pct: 96 },
      { name: 'TailwindCSS', pct: 95 },
      { name: 'JavaScript / TypeScript', pct: 88 },
      { name: 'Framer Motion', pct: 82 },
    ],
  },
  {
    icon: 'dns',
    title: 'Backend',
    color: 'secondary',
    borderClass: 'border-secondary/20',
    gradientClass: 'from-secondary to-tertiary',
    skills: [
      { name: 'Node.js / Express', pct: 80 },
      { name: 'MongoDB / SQL', pct: 80 },
      { name: 'REST APIs', pct: 85 },
      { name: 'Socket.io', pct: 75 },
    ],
  },
  {
    icon: 'shield',
    title: 'Security & Tools',
    color: 'tertiary',
    borderClass: 'border-tertiary/20',
    gradientClass: 'from-tertiary to-primary',
    skills: [
      { name: 'Penetration Testing', pct: 70 },
      { name: 'Git / Docker', pct: 85 },
      { name: 'Linux / Bash', pct: 78 },
      { name: 'Network Security', pct: 65 },
    ],
  },
]

function SkillBar({ name, pct, gradient, visible, delay }) {
  return (
    <div>
      <div className="flex justify-between font-label text-sm mb-2">
        <span className="text-on-surface-variant">{name}</span>
        <span className="text-on-surface font-bold">{pct}%</span>
      </div>
      <div className="h-1 bg-surface-variant rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${gradient} rounded-full`}
          initial={{ width: 0 }}
          animate={visible ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
          style={{ boxShadow: '0 0 10px rgba(129,236,255,0.3)' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, visible] = useScrollAnimation(0.1)

  return (
    <section id="skills" className="py-24 px-6 md:px-8 lg:px-24 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-headline font-bold mb-4">Core Competencies</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto font-body">
            Leveraging a diverse technical stack to build secure, scalable, and user-centric digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.15 }}
              className={`p-8 bg-surface-container rounded group hover:bg-surface-variant transition-all border-b-4 ${cat.borderClass}`}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className={`material-symbols-outlined text-${cat.color} text-4xl`}>{cat.icon}</span>
                <h3 className="text-xl font-headline font-bold">{cat.title}</h3>
              </div>
              <div className="space-y-6">
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    pct={skill.pct}
                    gradient={cat.gradientClass}
                    visible={visible}
                    delay={ci * 0.15 + si * 0.1 + 0.3}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
