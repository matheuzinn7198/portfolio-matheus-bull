export default function About() {
  const traits = [
    { icon: '💡', text: 'Curioso e criativo' },
    { icon: '⚙️', text: 'Focado em resultados' },
    { icon: '🤝', text: 'Trabalho bem em equipe' },
    { icon: '🚀', text: 'Sempre aprendendo' }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Sobre Mim</h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-8 text-center leading-relaxed">
            Sou estudante de Desenvolvimento de Sistemas pelo SENAI e entusiasta de tecnologia desde cedo. 
            Tenho grande interesse por programação, design e inovação, e busco constantemente aprender 
            novas linguagens e frameworks. Meu foco é criar soluções úteis e eficientes, combinando 
            lógica, criatividade e boas práticas.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {traits.map((trait, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition">
                <div className="text-2xl mb-2">{trait.icon}</div>
                <p className="text-gray-700 font-medium">{trait.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}