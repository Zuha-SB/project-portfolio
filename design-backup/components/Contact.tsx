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
      icon: '✉️',
      href: 'mailto:syedazuhabeyabani@gmail.com',
      gradient: 'from-blue-500 to-cyan-500',
      description: 'syedazuhabeyabani@gmail.com'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      href: 'https://linkedin.com/in/zuhabeyabani',
      gradient: 'from-blue-600 to-blue-700',
      description: 'Connect with me'
    },
    {
      name: 'GitHub',
      icon: '💻',
      href: 'https://github.com/Zuha-SB',
      gradient: 'from-gray-700 to-gray-900',
      description: 'Check out my code'
    }
  ]

  return (
    <section ref={sectionRef} id="contact" className="relative bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Get In Touch</h2>
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision.
            </p>
            <p className="text-lg text-gray-400">
              Let's build something amazing together! 🚀
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group glass rounded-2xl p-8 text-center card-hover glow-effect transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${link.gradient} flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {link.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                  {link.name}
                </h3>
                <p className="text-sm text-gray-400">{link.description}</p>
                <div className="mt-4 flex items-center justify-center gap-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm">Visit</span>
                  <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </a>
            ))}
          </div>

          {/* Call to action */}
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '600ms' }}>
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to start a project?
              </h3>
              <p className="text-gray-400 mb-6">
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <a
                href="mailto:syedazuhabeyabani@gmail.com"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50"
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

