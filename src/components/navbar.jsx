import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-5 bg-[hsl(var(--navbar))] dark:bg-[hsl(var(--navbar))] text-primary-foreground shadow-lg transition-all duration-300">
      <div className="flex items-center gap-6">
        <img loading="lazy" src="./navbarGif.gif" alt="GIF" className="w-8 h-8" />
      </div>
      <nav className="hidden lg:flex items-center justify-center flex-grow">
        <Link href="#inicio" className="font-medium hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200 mx-4">
          Inicio
        </Link>
        <Link href="#skills" className="font-medium hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200 mx-4">
          Habilidades
        </Link>
        <Link href="#projects" className="font-medium hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200 mx-4">
          Proyectos
        </Link>
        <Link href="#experience" className="font-medium hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200 mx-4">
          Experiencia
        </Link>
        <Link href="#contact" className="font-medium hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200 mx-4">
          Contacto
        </Link>
      </nav>
      <div className="flex items-center gap-6">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-all duration-300 transform hover:scale-110"
        >
          {theme === 'light' ? <FaMoon className="w-6 h-6" /> : <FaSun className="w-6 h-6" />}
        </button>
        <button
          className="lg:hidden p-2 rounded-full text-primary-foreground hover:text-foreground transition-transform duration-300"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>
      <div className={`fixed inset-0 bg-primary bg-opacity-95 lg:hidden transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
        <div className="relative w-full h-full flex flex-col items-center justify-center p-6">
          {/* Botón para cerrar el menú */}
          <button
            className="absolute top-4 right-4 p-2 text-primary-foreground hover:text-foreground transition-transform duration-300"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            <FaTimes className="w-8 h-8" />
          </button>

          <Link href="#inicio" onClick={toggleMenu} className="block py-4 font-medium text-primary-foreground hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200">
            Inicio
          </Link>
          <Link href="#skills" onClick={toggleMenu} className="block py-4 font-medium text-primary-foreground hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200">
            Habilidades
          </Link>
          <Link href="#projects" onClick={toggleMenu} className="block py-4 font-medium text-primary-foreground hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200">
            Proyectos
          </Link>
          <Link href="#experience" onClick={toggleMenu} className="block py-4 font-medium text-primary-foreground hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200">
            Experiencia
          </Link>
          <Link href="#contact" onClick={toggleMenu} className="block py-4 font-medium text-primary-foreground hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200">
            Contacto
          </Link>
        </div>
      </div>
    </header>
  );
}
