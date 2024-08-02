import { useState } from 'react';
import { BsGithub, BsGitlab, BsLinkedin } from 'react-icons/bs';
import { VscAccount } from "react-icons/vsc";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex items-center justify-between px-4 py-5 sm:px-6 lg:px-10 bg-primary text-primary-foreground border-b">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <VscAccount className="w-auto h-6 ml-2 mr-2" />
                <span className="font-semibold text-lg mr-2">Aleff Espinosa Cordova</span>
            </Link>
            <nav className="hidden lg:flex items-center gap-8">
                <Link href="#" className="font-medium hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200" prefetch={false}>
                    Inicio
                </Link>
                <Link href="#" className="font-medium hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200" prefetch={false}>
                    Sobre Mí
                </Link>
                <Link href="#" className="font-medium hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200" prefetch={false}>
                    Proyectos
                </Link>
                <Link href="#" className="font-medium hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200" prefetch={false}>
                    Habilidades
                </Link>
                <Link href="#" className="font-medium hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200" prefetch={false}>
                    Experiencia
                </Link>
                <Link href="#" className="font-medium hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200" prefetch={false}>
                    Contacto
                </Link>
            </nav>
            <div className="flex items-center gap-6">
                <Link href="https://www.linkedin.com/in/aleff-espinosa-cordova-59b997296/" target="_blank" className="text-primary-foreground hover:text-foreground hover:scale-140 transition-transform duration-200" prefetch={false}>
                    <BsLinkedin className="w-5 h-5" />
                </Link>
                <Link href="https://gitlab.com/dev.aleffec" target="_blank" className="text-primary-foreground hover:text-foreground hover:scale-140 transition-transform duration-200" prefetch={false}>
                    <BsGitlab className="w-5 h-5" />
                </Link>
                <Link href="https://github.com/aleff-eco/" target="_blank" className="text-primary-foreground hover:text-foreground hover:scale-140 transition-transform duration-200" prefetch={false}>
                    <BsGithub className="w-5 h-5" />
                </Link>
                <button className="lg:hidden text-primary-foreground hover:text-foreground" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                </button>
            </div>
            {isOpen && (
                <div className="lg:hidden absolute top-0 right-0 min-w-[180px]  h-auto bg-primary bg-opacity-90 flex justify-start transition-transform duration-300 ease-in-out transform translate-x-0">
                    <div className="bg-primary p-6 w-full h-full">
                        <div className="flex justify-end mb-4 mt-1/3 bg-opacity-50">
                            <button className="text-primary-foreground hover:text-foreground" onClick={() => setIsOpen(false)}>
                                <FaTimes className="w-6 h-6" />
                            </button>
                        </div>
                        <Link href="#" className="block py-2 px-4 font-medium hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200" prefetch={false}>
                            Inicio
                        </Link>
                        <Link href="#" className="block py-2 px-4 font-medium hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200" prefetch={false}>
                            Sobre Mí
                        </Link>
                        <Link href="#" className="block py-2 px-4 font-medium hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200" prefetch={false}>
                            Proyectos
                        </Link>
                        <Link href="#" className="block py-2 px-4 font-medium hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200" prefetch={false}>
                            Habilidades
                        </Link>
                        <Link href="#" className="block py-2 px-4 font-medium hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200" prefetch={false}>
                            Experiencia
                        </Link>
                        <Link href="#" className="block py-2 px-4 font-medium hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200" prefetch={false}>
                            Contacto
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
