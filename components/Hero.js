export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700 text-white pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="w-32 h-32 mx-auto mb-8 bg-white/20 rounded-full flex items-center justify-center">
          <span className="text-2xl font-bold">MB</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Matheus Bull
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Desenvolvedor em formação, sempre buscando evoluir e transformar ideias em código.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projects" 
            className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Ver Projetos
          </a>
          <a 
            href="#contact" 
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
          >
            Contato
          </a>
          <a 
            href="https://linkedin.com/in/matheus-bull-85277137a" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}