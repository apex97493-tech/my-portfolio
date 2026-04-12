import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About() {
  const [ref, visible] = useScrollAnimation(0.15)

  return (
    <section id="about" className="py-24 px-6 md:px-8 lg:px-24 bg-surface-container-low">
      <div
        ref={ref}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        {/* Image col */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/30" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-secondary/30" />
          <div className="bg-surface-container h-[480px] w-full rounded shadow-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <img
              src="/aman-picture.png"
              alt="Aman Singh — professional headshot"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        {/* Text col */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <h2 className="text-4xl font-headline font-bold mb-8 flex items-center gap-4">
            <span className="text-primary-dim font-light opacity-50">01.</span> About Me
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-6 font-body">
            I am a high-performance Full-Stack Developer specialising in the MERN stack and Cyber Security.
            My approach integrates the structural integrity of complex architecture with the proactive defence
            of modern security protocols.
          </p>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-10 font-body">
            Based in Rajasthan, I bridge the gap between creative UI design and robust backend logistics.
            Currently pursuing B.Tech CSE at JK Lakshmipat University (2021–Present).
          </p>

          <div className="grid grid-cols-2 gap-6 font-label mb-8">
            {[
              { label: 'Location', value: 'Jaipur, Rajasthan' },
              { label: 'Focus', value: 'Full Stack & SecOps' },
              { label: 'University', value: 'JK Lakshmipat Univ.' },
              { label: 'Email', value: 'amansingh@jklu.edu.in' },
            ].map(item => (
              <div key={item.label} className="p-4 border border-outline-variant rounded">
                <p className="text-xs text-primary-dim uppercase tracking-widest mb-1">{item.label}</p>
                <p className="text-on-surface text-sm">{item.value}</p>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary/40 text-primary hover:bg-primary/10 transition-colors font-headline font-bold rounded"
          >
            <span className="material-symbols-outlined text-base">send</span>
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
