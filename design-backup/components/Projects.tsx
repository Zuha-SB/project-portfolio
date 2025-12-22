'use client'

import { useEffect, useRef, useState } from 'react'

export default function Projects() {
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
      link: 'https://zuha-sb.github.io/surah-quiz/'
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
        return 'from-purple-500 to-pink-500'
      case 'Web Development':
        return 'from-blue-500 to-cyan-500'
      case 'Full-Stack':
        return 'from-green-500 to-emerald-500'
      case 'Data Science':
        return 'from-orange-500 to-red-500'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <section ref={sectionRef} id="projects" className="relative bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group glass rounded-2xl p-6 card-hover glow-effect transition-all duration-700 cursor-pointer ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              } ${project.link ? '' : 'cursor-default'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={project.link ? () => window.open(project.link, '_blank') : undefined}
              onMouseEnter={(e) => {
                if (project.link) {
                  e.currentTarget.style.transform = 'translateY(-10px) rotateX(5deg)'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) rotateX(0)'
              }}
            >
              {/* Gradient accent bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${project.gradient} rounded-full mb-4`}></div>
              
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300 flex-1">
                  {project.title}
                </h3>
              </div>
              
              <span className={`inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r ${getCategoryColor(project.category)} bg-clip-text text-transparent border border-white/20 rounded-full mb-4`}>
                {project.category}
              </span>
              
              <p className="text-gray-400 mb-6 text-sm leading-relaxed line-clamp-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 glass text-gray-300 text-xs rounded-full border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {project.link && (
                <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                  <span className="text-sm font-medium">View Project</span>
                  <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

