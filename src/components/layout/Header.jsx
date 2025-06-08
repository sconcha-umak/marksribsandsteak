import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-secondary text-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-primary hover:text-yellow-400 transition-colors duration-300">
              Mark's Ribs and Steak
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a 
                  href="#home" 
                  className="hover:text-primary transition-colors duration-300 text-sm lg:text-base font-medium py-2 px-1 border-b-2 border-transparent hover:border-primary"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#menu" 
                  className="hover:text-primary transition-colors duration-300 text-sm lg:text-base font-medium py-2 px-1 border-b-2 border-transparent hover:border-primary"
                >
                  Menu
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="hover:text-primary transition-colors duration-300 text-sm lg:text-base font-medium py-2 px-1 border-b-2 border-transparent hover:border-primary"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="hover:text-primary transition-colors duration-300 text-sm lg:text-base font-medium py-2 px-1 border-b-2 border-transparent hover:border-primary"
                >
                  Contact
                </a>              </li>
              <li>
                <Link
                  to="/login"
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-yellow-400 transition-colors duration-300"
                >
                  Login
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-secondary bg-opacity-95 backdrop-blur-sm">
          <a
            href="#home"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary hover:bg-white hover:bg-opacity-10 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#menu"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary hover:bg-white hover:bg-opacity-10 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Menu
          </a>
          <a
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary hover:bg-white hover:bg-opacity-10 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary hover:bg-white hover:bg-opacity-10 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact          </a>
          <Link
            to="/login"
            className="w-full text-left bg-primary text-white px-4 py-2 rounded-md hover:bg-yellow-400 transition-colors duration-300 block"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  )
}