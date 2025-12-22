'use client'

import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:syedazuhabeyabani@gmail.com',
      description: 'syedazuhabeyabani@gmail.com'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/zuhabeyabani',
      description: 'Connect with me'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Zuha-SB',
      description: 'View my work'
    }
  ]

  return (
    <section ref={sectionRef} id="contact" className="relative bg-gray-900 overflow-hidden">
      {/* Smooth fade transition at top to blend from projects section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Get In Touch</h2>
        <div className="max-w-3xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <p className="text-lg md:text-xl text-gray-300 mb-4">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision.
            </p>
            <p className="text-base text-gray-400">
              Feel free to reach out if you'd like to connect.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`bg-gray-800/50 rounded-lg p-6 text-center border border-white/5 transition-all duration-300 hover:border-orange-600/15 hover:bg-gray-800/70 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {link.name}
                </h3>
                <p className="text-sm text-gray-400">{link.description}</p>
              </a>
            ))}
          </div>

          {/* Call to action */}
          <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '300ms' }}>
            <div className="bg-gray-800/50 rounded-lg p-8 max-w-2xl mx-auto border border-white/5">
              <h3 className="text-xl font-semibold text-white mb-3">
                Ready to start a project?
              </h3>
              <p className="text-gray-400 mb-6 text-sm">
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <a
                href="mailto:syedazuhabeyabani@gmail.com"
                className="inline-block px-6 py-3 bg-orange-600/60 text-white rounded-lg font-medium transition-all duration-200 hover:bg-orange-600/70 hover:shadow-lg"
              >
                Send me an email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

