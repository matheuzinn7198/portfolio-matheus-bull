export default function Skills() {
  const skills = {
    "Front-end": ["HTML", "CSS", "JavaScript", "React"],
    "Back-end": ["Node.js", "SQLite", "MySQL"],
    "Mobile": ["Flutter", "Dart"],
    "Ferramentas": ["Git/GitHub", "VS Code", "Figma", "Postman"]
  }

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Habilidades Técnicas</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">{category}</h3>
              <div className="space-y-3">
                {items.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}