import { useState, useEffect } from 'react'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = "Desenvolvedor em Formação"

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white pt-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Avatar/Logo */}
        <div className="w-40 h-40 mx-auto mb-8 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
          <div className="text-4xl font-bold bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
            MB
          </div>
        </div>
        
        {/* Name and Title */}
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          Matheus Bull
        </h1>
        
        <div className="h-12 mb-8">
          <p className="text-2xl md:text-3xl text-blue-100 font-light">
            {displayText}<span className="animate-pulse">|</span>
          </p>
        </div>
        
        {/* Description */}
        <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Transformando ideias em código e buscando evolução constante através da tecnologia
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#projects" 
            className="group bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
          >
            <span>🚀 Ver Projetos</span>
          </a>
          <a 
            href="#contact" 
            className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center space-x-2"
          >
            <span>💬 Vamos Conversar</span>
          </a>
          <a 
            href="https://linkedin.com/in/matheus-bull-85277137a" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center space-x-2"
          >
            <span>💼 LinkedIn</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white/60 hover:text-white transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}