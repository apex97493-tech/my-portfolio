import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Timeline from '../components/Timeline'
import Certs from '../components/Certs'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }, [darkMode])

  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary/30 selection:text-primary min-h-screen">
      <Navbar darkMode={darkMode} toggleDark={() => setDarkMode(d => !d)} />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Certs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
