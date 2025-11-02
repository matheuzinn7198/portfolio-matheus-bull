export default function About() {
  const traits = [
    { 
      icon: '💡', 
      title: 'Curioso e Criativo',
      description: 'Sempre explorando novas tecnologias e soluções inovadoras'
    },
    { 
      icon: '⚙️', 
      title: 'Focado em Resultados',
      description: 'Comprometido com a entrega de soluções eficientes e de qualidade'
    },
    { 
      icon: '🤝', 
      title: 'Trabalho em Equipe',
      description: 'Excelente comunicação e colaboração em projetos coletivos'
    },
    { 
      icon: '🚀', 
      title: 'Evolução Constante',
      description: 'Aprendizado contínuo e busca por melhorias constantes'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-gray-800">
            Sobre <span className="text-blue-600">Mim</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed">
                Sou estudante de <span className="text-blue-600 font-semibold">Desenvolvimento de Sistemas pelo SENAI</span> e entusiasta de tecnologia desde cedo. 
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Tenho grande interesse por <span className="text-blue-600">programação, design e inovação</span>, e busco constantemente aprender 
                novas linguagens e frameworks. Meu foco é criar <span className="text-blue-600">soluções úteis e eficientes</span>, combinando 
                lógica, criatividade e boas práticas.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Atualmente no <span className="text-blue-600">3º ano do Ensino Médio</span>, concilio os estudos regulares com o curso técnico, 
                desenvolvendo tanto habilidades técnicas quanto competências interpessoais.
              </p>
            </div>
            
            {/* Traits Grid */}
            <div className="grid grid-cols-2 gap-6">
              {traits.map((trait, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100 group"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {trait.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {trait.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {trait.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}