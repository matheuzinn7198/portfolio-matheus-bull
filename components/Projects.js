export default function Projects() {
  const projects = [
    {
      title: "Biblioteca Ler e Viver",
      description: "Sistema completo de gerenciamento de biblioteca desenvolvido com Java Spring Boot, MySQL e Thymeleaf. Inclui CRUD completo de livros, usuários e empréstimos.",
      tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Bootstrap"],
      githubUrl: "https://github.com/matheuzinn7198/biblioteca-ler-e-viver",
      image: "📚",
      featured: true
    },
    {
      title: "Portfólio Pessoal",
      description: "Site pessoal desenvolvido com Next.js, Tailwind CSS e EmailJS. Design responsivo e moderno com formulário de contato funcional.",
      tech: ["Next.js", "React", "Tailwind CSS", "EmailJS"],
      githubUrl: "https://github.com/matheuzinn7198/portfolio-matheus-bull",
      image: "🌐",
      featured: true
    },
    {
      title: "Sistema de Tarefas",
      description: "Aplicativo web para gerenciamento de tarefas diárias com funcionalidades de CRUD, filtros e armazenamento local.",
      tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      githubUrl: "#",
      image: "✅",
      featured: false
    },
    {
      title: "App Mobile Flutter",
      description: "Aplicativo mobile desenvolvido em Flutter para controle financeiro pessoal com gráficos e relatórios.",
      tech: ["Flutter", "Dart", "SQLite"],
      githubUrl: "#",
      image: "📱",
      featured: false
    },
    {
      title: "Landing Page Moderna",
      description: "Landing page responsiva para produto digital com animações CSS e design otimizado para conversão.",
      tech: ["HTML", "CSS", "JavaScript", "GSAP"],
      githubUrl: "#",
      image: "🚀",
      featured: false
    },
    {
      title: "API REST Node.js",
      description: "API RESTful desenvolvida com Node.js e Express para sistema de gerenciamento de conteúdo.",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
      githubUrl: "#",
      image: "⚡",
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-gray-800">
            Meus <span className="text-blue-600">Projetos</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvi durante minha jornada de aprendizado
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-700">
            🎯 Projetos em Destaque
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group border border-gray-100">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl text-white opacity-80 group-hover:scale-110 transition-transform duration-500">
                    {project.image}
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group/link"
                  >
                    <span>🔗 Ver no GitHub</span>
                    <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-700">
            💼 Outros Projetos
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-blue-100">
                <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <h4 className="text-lg font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition text-center">
                  {project.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 text-center leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded text-xs">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Ver Projeto →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}