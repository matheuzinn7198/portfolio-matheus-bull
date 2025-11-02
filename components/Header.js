import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm shadow-sm'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-blue-800 hover:text-blue-600 transition">
            Matheus Bull
          </a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center">
              <span className={`block h-0.5 bg-gray-800 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`block h-0.5 bg-gray-800 my-1 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block h-0.5 bg-gray-800 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </div>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition font-medium">Sobre</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition font-medium">Habilidades</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition font-medium">Projetos</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition font-medium">Contato</a>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="space-y-4 pb-4 border-t border-gray-200 pt-4">
            <a href="#about" className="block text-gray-700 hover:text-blue-600 transition font-medium" onClick={() => setIsMenuOpen(false)}>Sobre</a>
            <a href="#skills" className="block text-gray-700 hover:text-blue-600 transition font-medium" onClick={() => setIsMenuOpen(false)}>Habilidades</a>
            <a href="#projects" className="block text-gray-700 hover:text-blue-600 transition font-medium" onClick={() => setIsMenuOpen(false)}>Projetos</a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-600 transition font-medium" onClick={() => setIsMenuOpen(false)}>Contato</a>
          </div>
        </div>
      </nav>
    </header>
  )
}