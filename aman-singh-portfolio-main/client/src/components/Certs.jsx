import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const certs = [
  {
    issuer: 'Red Hat',
    title: 'Enterprise Linux Certification',
    border: 'border-primary',
    textColor: 'group-hover:text-primary',
    issuerColor: 'text-primary-dim',
  },
  {
    issuer: 'Apache Foundation',
    title: 'Big Data with Spark',
    border: 'border-secondary',
    textColor: 'group-hover:text-secondary',
    issuerColor: 'text-secondary-dim',
  },
  {
    issuer: 'Coursera',
    title: 'Google Cyber Security',
    border: 'border-tertiary',
    textColor: 'group-hover:text-tertiary',
    issuerColor: 'text-tertiary-dim',
  },
  {
    issuer: 'IBM Professional',
    title: 'Full Stack Developer',
    border: 'border-primary',
    textColor: 'group-hover:text-primary',
    issuerColor: 'text-primary-dim',
  },
]

export default function Certs() {
  const [ref, visible] = useScrollAnimation(0.1)

  return (
    <section className="py-24 px-6 md:px-8 lg:px-24 bg-surface-container-low">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-headline font-bold mb-12 flex items-center gap-4"
        >
          <span className="material-symbols-outlined text-primary">verified</span>
          Professional Certifications
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-6 bg-surface-container rounded border-l-2 ${cert.border} hover:bg-surface-variant transition-colors group cursor-default`}
            >
              <p className={`text-xs font-label ${cert.issuerColor} mb-2 uppercase tracking-widest`}>
                {cert.issuer}
              </p>
              <h4 className={`font-bold text-on-surface ${cert.textColor} transition-colors font-headline`}>
                {cert.title}
              </h4>
              <div className="mt-3 flex items-center gap-1 text-xs text-on-surface-variant font-label">
                <span className="material-symbols-outlined text-sm">verified</span>
                Verified
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
