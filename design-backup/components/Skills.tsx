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
      icon: '⚛️',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
      gradient: 'from-blue-500 via-blue-400 to-cyan-400'
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'Python', 'Flask', 'REST APIs', 'Databases', 'Microservices'],
      gradient: 'from-green-500 via-emerald-500 to-teal-500'
    },
    {
      title: 'AI/ML',
      icon: '🤖',
      skills: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'],
      gradient: 'from-pink-500 via-rose-500 to-fuchsia-500'
    }
  ]

  return (
    <section ref={sectionRef} id="skills" className="relative bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`glass rounded-2xl p-8 card-hover glow-effect transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-3xl shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-4 py-2 glass rounded-lg text-gray-300 font-medium text-sm border border-white/10 transition-all duration-500 hover:scale-110 hover:border-white/30 hover:shadow-lg ${
                      isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                    }`}
                    style={{
                      transitionDelay: `${(index * 150) + (skillIndex * 50)}ms`
                    }}
                  >
                    <span className={`bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                      {skill}
                    </span>
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

