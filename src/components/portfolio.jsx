"use client";
import Link from "next/link"
import { Skills } from "./skills";
import { Projects } from "./projects";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { Experience } from "./experience";
import { Contact } from "./contact";
//import { RotatingText } from '@/styles/rotatingText';

export function Portfolio() {
  return (
    (<div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
      <section
        id="hero"
        className="w-full h-[60vh] bg-cover bg-center flex items-center justify-center">
        <div className="max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Bienvenido a mi portafolio.</h1>
          <div>
            <p className="mt-3 text-lg text-muted-foreground sm:mt-5 sm:text-xl lg:text-2xl">
              ¡Hola! Mi nombre es Aleff, pero también soy
            </p>
          </div>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
            <Link
              href="https://www.canva.com/design/DAGKbqKi2fU/iswtP-wMLgp-s0O3TvuVCQ/edit"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}>
              Ver curriculum
            </Link>
          </div>
        </div>
      </section>
      <div className="bg-background"></div>
        <section id="about" className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="/profilePicture.jpeg"
                  alt="Profile Photo"
                  className="rounded-full w-48 h-48 mx-auto md:mx-0" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Acerca de mi</h2>
                <p className="text-muted-foreground mb-6">
                Ingeniero en software con 2 años de experiencia en el desarrollo web Full-Stack; 
                creando experiencias con React, Bootstrap, Tailwind, HTML y CSS. Desarrollando soluciones con PHP, Laravel, JavaScript y TypeScript. 
                Gestionando servidores y bases de datos. Priorizando la escalabilidad y la mantenibilidad.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}>
                  Descargar CV
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>)
  );
}