'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const roles = ['Software Engineer', 'AI Engineer', 'Full-Stack Developer', 'ML Engineer']
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const current = roles[currentRole]
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length + 1))
      }, 100)
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 2000)
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length - 1))
      }, 50)
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false)
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole, mounted, roles])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-0">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient bg-[length:200%_200%]"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="container mx-auto text-center px-4 relative z-10">
        <div className="animate-fade-in">
          <div className="mb-6 animate-float">
            <div className="inline-block px-4 py-2 glass rounded-full mb-8">
              <span className="text-sm text-blue-300">👋 Welcome to my portfolio</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-down">
            <span className="gradient-text">Zuha Beyabani</span>
          </h1>
          
          <div className="h-16 md:h-20 mb-6 flex items-center justify-center">
            <p className="text-2xl md:text-4xl font-semibold text-white text-center">
              <span className="inline-block">
                {displayText || '\u00A0'}
                <span className="animate-pulse text-blue-400 ml-1">|</span>
              </span>
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto animate-slide-up">
            Building innovative solutions across <span className="text-blue-400 font-semibold">Frontend</span>,{' '}
            <span className="text-purple-400 font-semibold">Backend</span>, and{' '}
            <span className="text-pink-400 font-semibold">AI/ML</span>
          </p>
          
          <div className="flex gap-6 justify-center flex-wrap animate-scale-in">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#projects"
              className="px-8 py-4 glass text-white rounded-lg font-medium transition-all duration-300 hover:scale-110 hover:bg-white/20 border-2 border-transparent hover:border-blue-400/50"
            >
              View Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

