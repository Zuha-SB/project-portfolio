export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white py-0">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
          Zuha Beyabani
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 mb-4">
          Software Engineer
        </p>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Building innovative solutions across Frontend, Backend, and AI/ML
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#contact"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
          >
            View Work
          </a>
        </div>
      </div>
    </section>
  )
}

