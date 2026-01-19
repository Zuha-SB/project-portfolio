'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { allProjects, type Project } from '@/data/projects'

export default function ProjectsPage() {
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set())
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(allProjects.map(p => p.category)))

  const filteredProjects = selectedCategory
    ? allProjects.filter(p => p.category === selectedCategory)
    : allProjects

  const toggleExpand = (index: number, e: React.MouseEvent) => {
    e.stopPropagation()
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

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm py-4 shadow-md border-b border-white/5">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link 
            href="/"
            className="text-xl font-bold text-white transition-opacity duration-200 hover:opacity-80"
          >
            Zuha Beyabani
          </Link>
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="section-title">All Projects</h1>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                selectedCategory === null
                  ? 'bg-orange-600/20 text-orange-600 border border-orange-600/30'
                  : 'bg-gray-700/50 text-gray-400 border border-white/5 hover:border-white/20'
              }`}
            >
              All Projects
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-orange-600/20 text-orange-600 border border-orange-600/30'
                    : 'bg-gray-700/50 text-gray-400 border border-white/5 hover:border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`group bg-gray-700/50 rounded-lg p-6 border border-white/5 transition-all duration-300 hover:border-white/20 hover:bg-gray-700/70 ${
                  project.link ? 'cursor-pointer' : 'cursor-default'
                }`}
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

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

