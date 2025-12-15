'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-900">Zuha Beyabani</div>
        <div className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('tictactoe')}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Play
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  )
}

