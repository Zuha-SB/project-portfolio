'use client'

import { useEffect, useRef, useState } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
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

  const highlights = [
    {
      icon: '🚀',
      title: 'Full-Stack Expertise',
      description: 'Building end-to-end solutions from UI to backend infrastructure'
    },
    {
      icon: '🤖',
      title: 'AI/ML Integration',
      description: 'Leveraging machine learning to create intelligent, data-driven applications'
    },
    {
      icon: '⚡',
      title: 'Performance Focus',
      description: 'Optimizing applications for speed, scalability, and user experience'
    },
    {
      icon: '🎨',
      title: 'Clean Code',
      description: 'Writing maintainable, well-documented, and elegant solutions'
    }
  ]

  return (
    <section ref={sectionRef} id="about" className="relative bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">About Me</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
              I'm a passionate <span className="gradient-text font-semibold">software engineer</span> with expertise spanning across multiple domains.
              I love building scalable applications, creating intuitive user experiences, and
              exploring the cutting edge of <span className="text-purple-400 font-semibold">artificial intelligence</span> and <span className="text-pink-400 font-semibold">machine learning</span>.
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
              With a strong foundation in both frontend and backend development, I bring
              full-stack capabilities to every project. My experience in AI/ML allows me to
              integrate intelligent features and data-driven solutions into applications.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              I'm always eager to learn new technologies and tackle challenging problems
              that make a <span className="text-blue-400 font-semibold">real impact</span>.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`glass rounded-xl p-6 card-hover glow-effect transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{highlight.title}</h3>
                    <p className="text-gray-400">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

