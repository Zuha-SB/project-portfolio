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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-800">
      {/* Sunrise glow effect - orange glow from bottom center with rising/sinking animation */}
      <div className="absolute bottom-0 left-1/2 w-full h-[60%] animate-sunrise-pulse origin-bottom" 
           style={{
             background: 'radial-gradient(ellipse 100% 60% at 50% 100%, rgba(234, 88, 12, 0.18) 0%, rgba(234, 88, 12, 0.1) 25%, rgba(234, 88, 12, 0.05) 45%, transparent 70%)',
             filter: 'brightness(1)'
           }}>
      </div>
      {/* More intense orange layer that brightens as it rises */}
      <div className="absolute bottom-0 left-1/2 w-full h-[60%] origin-bottom animate-sunrise-pulse animate-rise-brightness" 
           style={{
             background: 'radial-gradient(ellipse 100% 60% at 50% 100%, rgba(249, 115, 22, 0.3) 0%, rgba(249, 115, 22, 0.15) 25%, rgba(249, 115, 22, 0.08) 45%, transparent 70%)'
           }}>
      </div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.008)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Smooth fade transition at bottom to blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-800 to-transparent pointer-events-none z-5"></div>

      <div className="container mx-auto text-center px-4 relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            Zuha Beyabani
          </h1>
          
          <div className="h-12 md:h-16 mb-6 flex items-center justify-center">
            <p className="text-xl md:text-3xl font-medium text-gray-300 text-center">
              <span className="inline-block">
                {displayText || '\u00A0'}
                <span className="text-orange-600/40 ml-1">|</span>
              </span>
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Building innovative solutions across Frontend, Backend, and AI/ML
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#contact"
              className="px-8 py-3 bg-orange-600/60 text-white rounded-lg font-medium transition-all duration-200 hover:bg-orange-600/70 hover:shadow-lg"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-transparent text-orange-600/50 border border-orange-600/20 rounded-lg font-medium transition-all duration-200 hover:bg-orange-600/5 hover:border-orange-600/30"
            >
              View Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

