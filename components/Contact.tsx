export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision. Feel free to reach out!
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:syedazuhabeyabani@gmail.com"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/zuhabeyabani"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Zuha-SB"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

