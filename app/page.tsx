import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import TicTacToe from '@/components/TicTacToe'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <TicTacToe />
      <Contact />
    </main>
  )
}

