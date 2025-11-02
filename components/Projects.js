export default function Projects() {
  const projects = [
    {
      title: "Biblioteca Ler e Viver",
      description: "Sistema completo de gerenciamento de biblioteca desenvolvido com Java Spring Boot e MySQL.",
      tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
      githubUrl: "https://github.com/matheuzinn7198/biblioteca-ler-e-viver"
    },
    {
      title: "Curso FrontEnd",
      description: "Práticas e exercícios de HTML, CSS e JavaScript para aprimoramento front-end.",
      tech: ["HTML", "CSS", "JavaScript"],
      githubUrl: "#"
    },
    {
      title: "Mobile App",
      description: "Aplicativo mobile desenvolvido em Flutter para gestão de tarefas diárias.",
      tech: ["Flutter", "Dart"],
      githubUrl: "#"
    },
    {
      title: "Introdução POO",
      description: "Exercícios e conceitos fundamentais de Programação Orientada a Objetos em Java.",
      tech: ["Java", "POO"],
      githubUrl: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Meus Projetos</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition group">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center">
                <div className="text-white text-4xl opacity-80 group-hover:scale-110 transition">
                  {project.tech[0].includes('Java') ? '☕' : 
                   project.tech[0].includes('Flutter') ? '📱' : '🌐'}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Ver no GitHub
                  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}