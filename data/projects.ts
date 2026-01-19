export interface Project {
  title: string
  description: string
  tech: string[]
  category: string
  gradient: string
  link?: string
}

export const allProjects: Project[] = [
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
    title: 'Islamic Flashcard Generator',
    description: 'This tool converts Islamic book PDFs into Quizlet-compatible flashcards. Features automatic chapter/section detection, AI-powered learning point extraction, Arabic text preservation, and bilingual support (Arabic/English).',
    tech: ['AI/ML', 'PDF Processing', 'Web Development'],
    category: 'AI/ML',
    gradient: 'from-emerald-500 to-teal-500',
    link: 'https://islamic-flashcards.zuha.dev'
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
    title: '🎲 Ludo Master',
    description: 'A Ludo game built with Phaser.js as a Progressive Web App (PWA). Features classic gameplay with smooth animations, local multiplayer support (2-4 players), animated dice, safe spots, and victory celebrations. Works on web browsers, Android, and iOS devices with offline support.',
    tech: ['Phaser.js', 'Vite', 'JavaScript'],
    category: 'Web Development',
    gradient: 'from-purple-500 to-indigo-500',
    link: 'http://ludo.zuha.dev'
  },
  {
    title: 'MNIST & Iris Dataset Analysis',
    description: 'Comprehensive data analysis and machine learning exploration of classic datasets. Implemented various classification algorithms, feature engineering, and visualization techniques to extract insights.',
    tech: ['Python', 'scikit-learn', 'pandas', 'matplotlib'],
    category: 'Data Science',
    gradient: 'from-teal-500 to-green-500'
  }
]

export const featuredProjectTitles = [
  'ML Wiki RAG Pipeline',
  'ChessGPT',
  'Surah Quiz'
]

export const getFeaturedProjects = (): Project[] => {
  return allProjects.filter(project => 
    featuredProjectTitles.some(title => project.title.includes(title))
  )
}

