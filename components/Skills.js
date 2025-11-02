export default function Skills() {
  const skills = {
    "Front-end": [
      { name: "HTML", level: 90, color: "bg-orange-500" },
      { name: "CSS", level: 85, color: "bg-blue-500" },
      { name: "JavaScript", level: 80, color: "bg-yellow-500" },
      { name: "React", level: 75, color: "bg-cyan-500" }
    ],
    "Back-end": [
      { name: "Node.js", level: 70, color: "bg-green-500" },
      { name: "SQLite", level: 75, color: "bg-teal-500" },
      { name: "MySQL", level: 70, color: "bg-blue-600" }
    ],
    "Mobile": [
      { name: "Flutter", level: 65, color: "bg-sky-500" },
      { name: "Dart", level: 70, color: "bg-blue-400" }
    ],
    "Ferramentas": [
      { name: "Git/GitHub", level: 85, color: "bg-gray-700" },
      { name: "VS Code", level: 90, color: "bg-blue-500" },
      { name: "Figma", level: 60, color: "bg-purple-500" },
      { name: "Postman", level: 75, color: "bg-orange-400" }
    ]
  }

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-gray-800">
            Minhas <span className="text-blue-600">Habilidades</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo para transformar ideias em realidade
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 text-center">
                {category}
              </h3>
              <div className="space-y-4">
                {items.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition">
                        {skill.name}
                      </span>
                      <span className="text-xs font-bold text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out group-hover:scale-105`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">2+</div>
              <div className="text-gray-600">Anos de Estudo</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Projetos Desenvolvidos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Dedicado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}