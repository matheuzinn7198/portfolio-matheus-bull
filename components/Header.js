import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-blue-800">MB</a>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
          </button>

          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">Sobre</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition">Habilidades</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition">Projetos</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contato</a>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <a href="#about" className="block text-gray-700 hover:text-blue-600">Sobre</a>
            <a href="#skills" className="block text-gray-700 hover:text-blue-600">Habilidades</a>
            <a href="#projects" className="block text-gray-700 hover:text-blue-600">Projetos</a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-600">Contato</a>
          </div>
        )}
      </nav>
    </header>
  )
}