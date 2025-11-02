export default function Goals() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Objetivos Profissionais</h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-xl mb-8 leading-relaxed">
            Meu objetivo é ingressar no mercado de tecnologia, contribuindo com projetos reais e 
            aprendendo com profissionais experientes. Busco um ambiente que estimule o crescimento, 
            o trabalho em equipe e a inovação.
          </p>
          
          <blockquote className="text-2xl italic border-l-4 border-white pl-6 py-4 my-8">
            "Aprender é o primeiro passo para criar algo incrível."
          </blockquote>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a 
              href="#contact"
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Vamos Conversar
            </a>
            <a 
              href="https://github.com/matheuzinn7198"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Meu GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}