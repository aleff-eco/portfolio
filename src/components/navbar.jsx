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

  return (
    <header className="top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-5 sm:px-6 lg:px-10 bg-primary text-primary-foreground ">
      <div className="flex items-center gap-6">
        <img loading="lazy" src="./navbarGif.gif" alt="GIF" className="w-8 h-8" />
      </div>
      <nav className="hidden lg:flex items-center justify-center flex-grow">
        <Link href="#inicio" className="font-medium hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200 mx-4" prefetch={false}>
          Inicio
        </Link>
        <Link href="#skills" className="font-medium hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200 mx-4" prefetch={false}>
          Habilidades
        </Link>
        <Link href="#projects" className="font-medium hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200 mx-4" prefetch={false}>
          Proyectos
        </Link>
        <Link href="#experience" className="font-medium hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200 mx-4" prefetch={false}>
          Experiencia
        </Link>
        <Link href="#contact" className="font-medium hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200 mx-4" prefetch={false}>
          Contacto
        </Link>
      </nav>
      <div className="flex items-center gap-6">
        {/* Botón de modo oscuro */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-all duration-300 transform hover:scale-110"
        >
          {theme === 'light' ? <FaMoon className="w-6 h-6" /> : <FaSun className="w-6 h-6" />}
        </button>
        {/* Botón para abrir/cerrar menú en pantallas pequeñas */}
        <button className="lg:hidden text-primary-foreground hover:text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden absolute top-0 right-0 min-w-[180px] h-auto bg-primary bg-opacity-90 flex transition-transform duration-300 ease-in-out transform translate-x-0">
          <div className="bg-primary p-6 w-full h-full">
            <div className="flex justify-end mb-4 mt-1/3 bg-opacity-50">
              <button className="text-primary-foreground hover:text-foreground" onClick={() => setIsOpen(false)}>
                <FaTimes className="w-6 h-6" />
              </button>
            </div>
            <Link href="#inicio" className="block py-2 px-4 font-medium hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200" prefetch={false}>
              Inicio
            </Link>
            <Link href="#skills" className="block py-2 px-4 font-medium hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200" prefetch={false}>
              Habilidades
            </Link>
            <Link href="#projects" className="block py-2 px-4 font-medium hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200" prefetch={false}>
              Proyectos
            </Link>
            <Link href="#experience" className="block py-2 px-4 font-medium hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200" prefetch={false}>
              Experiencia
            </Link>
            <Link href="#contact" className="block py-2 px-4 font-medium hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200" prefetch={false}>
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
