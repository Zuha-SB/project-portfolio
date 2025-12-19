export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Flask', 'REST APIs', 'Databases', 'Microservices'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'AI/ML',
      skills: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'],
      color: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <section id="skills" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} mb-4 flex items-center justify-center`}>
                <span className="text-white text-2xl font-bold">{category.title[0]}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

