export default function Projects() {
  const projects = [
    {
      title: 'Basic LLM from Scratch',
      description: 'Built a large language model from the ground up, implementing transformer architecture, attention mechanisms, and training pipeline. Demonstrates deep understanding of neural network fundamentals and NLP.',
      tech: ['Python', 'PyTorch', 'Transformers', 'NLP'],
      category: 'AI/ML'
    },
    {
      title: 'MNIST & Iris Dataset Analysis',
      description: 'Comprehensive data analysis and machine learning exploration of classic datasets. Implemented various classification algorithms, feature engineering, and visualization techniques to extract insights.',
      tech: ['Python', 'scikit-learn', 'pandas', 'matplotlib'],
      category: 'Data Science'
    },
    {
      title: 'ML for Space Debris Orbital Paths',
      description: 'Machine learning model to predict and analyze orbital trajectories of space debris. Applied predictive modeling techniques to address space sustainability challenges.',
      tech: ['Python', 'Machine Learning', 'Data Analysis'],
      category: 'AI/ML'
    },
    {
      title: 'Interactive Tic-Tac-Toe with AI',
      description: 'Web-based tic-tac-toe game featuring multiple AI opponents including Minimax, Alpha-Beta Pruning, Utility-based, and Random players. Demonstrates game theory algorithms and interactive web development.',
      tech: ['Next.js', 'TypeScript', 'React', 'Algorithms'],
      category: 'Full-Stack'
    },
    {
      title: 'Surah Quiz',
      description: 'Interactive quiz game where users select a surah and are challenged to fill in the blank for missing words in each ayah. Tests knowledge of the Quran through an engaging, educational format.',
      tech: ['React Native', 'Expo', 'JavaScript'],
      category: 'Web Development',
      link: 'https://zuha-sb.github.io/surah-quiz/'
    },
    {
      title: 'ML Wiki RAG Pipeline',
      description: 'End-to-end Retrieval-Augmented Generation system with multiple chunking strategies (fixed, sentence, semantic, recursive), hybrid dense + sparse retrieval with cross-encoder re-ranking, and comprehensive IR evaluation metrics.',
      tech: ['Python', 'FAISS', 'Sentence Transformers', 'Flask'],
      category: 'AI/ML',
      link: 'https://github.com/Zuha-SB/ml-wiki-rag'
    },
    {
      title: 'ChessGPT',
      description: 'GPT-style transformer trained to predict chess moves by learning from a grandmaster\'s games. Built a custom tokenizer for chess notation, implemented logit masking for legal move generation, and explored how language models can capture individual playing styles.',
      tech: ['Python', 'PyTorch', 'Transformers', 'NLP'],
      category: 'AI/ML'
    }
  ]

  return (
    <section id="projects" className="bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow ${project.link ? 'cursor-pointer' : ''}`}
              onClick={project.link ? () => window.open(project.link, '_blank') : undefined}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <span className="text-sm text-blue-600 font-medium">{project.category}</span>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <div className="mt-4">
                  <span className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    View Project →
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

