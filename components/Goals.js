export default function Goals() {
  const goals = [
    {
      icon: '🎯',
      title: 'Primeira Oportunidade',
      description: 'Busco meu primeiro estágio ou vaga júnior em desenvolvimento'
    },
    {
      icon: '🚀',
      title: 'Aprendizado Contínuo',
      description: 'Dominar novas tecnologias e frameworks do mercado'
    },
    {
      icon: '💼',
      title: 'Carreira Sólida',
      description: 'Construir uma carreira de sucesso na área de tecnologia'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl font-bold mb-6">
          Objetivos <span className="text-blue-200">Profissionais</span>
        </h2>
        <div className="w-24 h-1 bg-blue-300 mx-auto mb-12"></div>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-blue-100">
            Meu objetivo é ingressar no mercado de tecnologia, contribuindo com projetos reais e 
            aprendendo com profissionais experientes. Busco um ambiente que estimule o crescimento, 
            o trabalho em equipe e a inovação.
          </p>
          
          <blockquote className="text-2xl italic border-l-4 border-blue-300 pl-6 py-4 my-8 text-blue-100 max-w-2xl mx-auto">
            "Aprender é o primeiro passo para criar algo incrível."
          </blockquote>
        </div>

        {/* Goals Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {goals.map((goal, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">{goal.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{goal.title}</h3>
              <p className="text-blue-100 leading-relaxed">{goal.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact"
            className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
          >
            <span>💬 Vamos Conversar</span>
          </a>
          <a 
            href="https://github.com/matheuzinn7198"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center space-x-2"
          >
            <span>👨‍💻 Meu GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}