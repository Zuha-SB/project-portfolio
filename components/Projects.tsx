'use client'

import { useEffect, useRef, useState } from 'react'

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

  const projects = [
    {
      title: 'ML Wiki RAG Pipeline',
      description: 'End-to-end Retrieval-Augmented Generation system with multiple chunking strategies (fixed, sentence, semantic, recursive), hybrid dense + sparse retrieval with cross-encoder re-ranking, and comprehensive IR evaluation metrics.',
      tech: ['Python', 'FAISS', 'Sentence Transformers', 'Flask'],
      category: 'AI/ML',
      gradient: 'from-purple-500 to-pink-500',
      link: 'https://github.com/Zuha-SB/ml-wiki-rag'
    },
    {
      title: 'ChessGPT',
      description: 'GPT-style transformer trained to predict chess moves by learning from a grandmaster\'s games. Built a custom tokenizer for chess notation, implemented logit masking for legal move generation, and explored how language models can capture individual playing styles.',
      tech: ['Python', 'PyTorch', 'Transformers', 'NLP'],
      category: 'AI/ML',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Surah Quiz',
      description: 'Interactive quiz game where users select a surah and are challenged to fill in the blank for missing words in each ayah. Tests knowledge of the Quran through an engaging, educational format.',
      tech: ['React Native', 'Expo', 'JavaScript'],
      category: 'Web Development',
      gradient: 'from-green-500 to-emerald-500',
      link: 'https://surah-quiz.zuha.dev'
    },
    {
      title: 'Interactive Tic-Tac-Toe with AI',
      description: 'Web-based tic-tac-toe game featuring 5 AI opponents implementing different strategies: Random, Goal-Based, Utility-Based evaluation, Minimax, and Alpha-Beta Pruning. Explored game theory algorithms and optimal decision-making in adversarial games.',
      tech: ['Python', 'Flask', 'HTML', 'Algorithms'],
      category: 'Full-Stack',
      gradient: 'from-orange-500 to-red-500',
      link: 'https://tic-tac-toe.zuha.dev'
    },
    {
      title: 'Make Happy - Mental Wellness',
      description: 'A user-centered web application designed to promote mental wellness by generating whimsical, humorous, and playful personalized sentences about users. Built with modern React patterns and Next.js, features dynamic content generation and responsive design principles.',
      tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
      category: 'Web Development',
      gradient: 'from-pink-500 to-rose-500',
      link: 'https://make-happy.zuha.dev'
    },
    {
      title: 'Basic LLM from Scratch',
      description: 'Built a large language model from the ground up, implementing transformer architecture, attention mechanisms, and training pipeline. Demonstrates deep understanding of neural network fundamentals and NLP.',
      tech: ['Python', 'PyTorch', 'Transformers', 'NLP'],
      category: 'AI/ML',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'ML for Space Debris Orbital Paths',
      description: 'Machine learning model to predict and analyze orbital trajectories of space debris. Applied predictive modeling techniques to address space sustainability challenges.',
      tech: ['Python', 'Machine Learning', 'Data Analysis'],
      category: 'AI/ML',
      gradient: 'from-cyan-500 to-blue-500',
      link: 'https://devpost.com/software/space-debris-ai-machine-learning-for-debris-analysis'
    },
    {
      title: 'Middle-Earth Messenger',
      description: 'A Streamlit chat application that lets you converse with characters from The Lord of the Rings. Each character speaks in their authentic voice, drawing from their quotes and wiki lore. Features character selection, conversation memory, and rich lore integration.',
      tech: ['Python', 'Streamlit', 'Vertex AI', 'NLP'],
      category: 'AI/ML',
      gradient: 'from-amber-500 to-yellow-500',
      link: 'https://tolkien.zuha.dev'
    },
    {
      title: 'MNIST & Iris Dataset Analysis',
      description: 'Comprehensive data analysis and machine learning exploration of classic datasets. Implemented various classification algorithms, feature engineering, and visualization techniques to extract insights.',
      tech: ['Python', 'scikit-learn', 'pandas', 'matplotlib'],
      category: 'Data Science',
      gradient: 'from-teal-500 to-green-500'
    }
  ]

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
      </div>
    </section>
  )
}

