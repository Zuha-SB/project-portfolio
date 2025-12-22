'use client'

import { useEffect, useRef, useState } from 'react'

export default function Skills() {
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

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
      accent: 'orange'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Flask', 'REST APIs', 'Databases', 'Microservices'],
      accent: 'amber'
    },
    {
      title: 'AI/ML',
      skills: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'],
      accent: 'orange-dark'
    }
  ]

  const getAccentColor = (accent: string) => {
    switch (accent) {
      case 'orange':
        return 'border-orange-600/15 text-orange-600/50'
      case 'amber':
        return 'border-amber-600/15 text-amber-600/50'
      case 'orange-dark':
        return 'border-orange-600/15 text-orange-600/55'
      default:
        return 'border-gray-500/30 text-gray-400'
    }
  }

  return (
    <section ref={sectionRef} id="skills" className="relative bg-gray-900 overflow-hidden">
      {/* Smooth fade transition at top to blend from about section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none z-0"></div>
      
      {/* Smooth fade transition at bottom to blend into projects section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-800 to-transparent pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-gray-800/50 rounded-lg p-6 border border-white/5 transition-all duration-500 hover:border-white/10 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className={`text-xl font-semibold mb-6 pb-3 border-b ${getAccentColor(category.accent)}`}>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1.5 bg-gray-700/50 rounded text-gray-300 text-sm border border-white/5 transition-all duration-200 hover:border-white/20 ${
                      isVisible 
                        ? 'opacity-100' 
                        : 'opacity-0'
                    }`}
                    style={{
                      transitionDelay: `${(index * 100) + (skillIndex * 30)}ms`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

