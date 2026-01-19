'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { getFeaturedProjects } from '@/data/projects'

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set())
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

  const projects = getFeaturedProjects()

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI/ML':
        return 'text-orange-600/50 border-orange-600/15'
      case 'Web Development':
        return 'text-orange-600/50 border-orange-600/15'
      case 'Full-Stack':
        return 'text-amber-600/50 border-amber-600/15'
      case 'Data Science':
        return 'text-orange-600/55 border-orange-600/15'
      default:
        return 'text-gray-400 border-gray-500/30'
    }
  }

  const toggleExpand = (index: number, e: React.MouseEvent) => {
    e.stopPropagation() // Prevent card click when clicking read more
    setExpandedProjects(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const isExpanded = (index: number) => expandedProjects.has(index)

  return (
    <section ref={sectionRef} id="projects" className="relative bg-gray-800 overflow-hidden">
      {/* Smooth fade transition at top to blend from skills section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-800 to-transparent pointer-events-none z-0"></div>
      
      {/* Smooth fade transition at bottom to blend into contact section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-gray-700/50 rounded-lg p-6 border border-white/5 transition-all duration-300 hover:border-white/20 hover:bg-gray-700/70 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-5'
              } ${project.link ? 'cursor-pointer' : 'cursor-default'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={project.link ? () => window.open(project.link, '_blank') : undefined}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-white flex-1">
                  {project.title}
                </h3>
              </div>
              
              <span className={`inline-block px-2.5 py-1 text-xs font-medium ${getCategoryColor(project.category)} border rounded-full mb-4`}>
                {project.category}
              </span>
              
              <p className={`text-gray-400 mb-4 text-sm leading-relaxed ${!isExpanded(index) ? 'line-clamp-4' : ''}`}>
                {project.description}
              </p>
              
              <button
                onClick={(e) => toggleExpand(index, e)}
                className="text-orange-600/70 hover:text-orange-600 text-xs font-medium mb-4 transition-colors duration-200"
              >
                {isExpanded(index) ? 'Read less' : 'Read more'}
              </button>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2.5 py-1 bg-gray-600/50 text-gray-300 text-xs rounded border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {project.link && (
                <div className="flex items-center gap-2 text-orange-600/50 text-sm font-medium">
                  <span>View Project</span>
                  <span>→</span>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600/20 hover:bg-orange-600/30 text-orange-600 border border-orange-600/30 rounded-lg transition-all duration-200 font-medium"
          >
            <span>View All Projects</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

