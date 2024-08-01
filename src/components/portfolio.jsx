"use client";
import Link from "next/link"
import { Input } from "@/components/input"
import { Textarea } from "@/components/textarea"
import { Button } from "@/components/button"
import { BsGithub, BsGitlab, BsLinkedin } from 'react-icons/bs';
import { VscAccount } from "react-icons/vsc";
import { Skills } from "./skills";
import { Projects } from "./projects";
//import { RotatingText } from '@/styles/rotatingText';

export function Portfolio() {
  return (
    (<div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header
        className="flex items-center justify-between px-4 py-5 sm:px-6 lg:px-10 bg-primary text-primary-foreground border-b">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <VscAccount  className="w-6 h-6" />
          <span className="font-semibold text-lg">Aleff Espinosa Cordova</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          <Link
            href="#"
            className="font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Home
          </Link>
          <Link
            href="#"
            className="font-medium hover:underline underline-offset-4"
            prefetch={false}>
            About Me
          </Link>
          <Link
            href="#"
            className="font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Projects
          </Link>
          <Link
            href="#"
            className="font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Skills
          </Link>
          <Link
            href="#"
            className="font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Experience
          </Link>
          <Link
            href="#"
            className="font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/in/aleff-espinosa-cordova-59b997296/"
            target="_blank"
            className="text-primary-foreground hover:text-foreground"
            prefetch={false}>
            <BsLinkedin className="w-5 h-5" />
          </Link>
          <Link
            href="https://gitlab.com/dev.aleffec"
            target="_blank"
            className="text-primary-foreground hover:text-foreground"
            prefetch={false}>
            <BsGitlab  className="w-5 h-5" />
          </Link>
          <Link
            href="https://github.com/"
            target="_blank"
            className="text-primary-foreground hover:text-foreground"
            prefetch={false}
          >
            <BsGithub className="w-5 h-5" />
          </Link>
        </div>
      </header>
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
        <Projects />
        <Skills />
        <section id="experience" className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Experiencia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card left aos-init aos-animate">
                <h3 className="text-xl font-bold mb-2">Desarrollador Back-End</h3>
                <p className="text-muted-foreground mb-4">HIGHTECH Process Counselours. | 2024  - Actualmente</p>
                
                <p className="text-muted-foreground mb-3 text-sm" >Tecnologías Utilizadas: PHP, Laravel, JavaScript, MySQL</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Lidere la Implementación de funcionalidades en los sistemas backend, resolví errores operativos y optimicé el rendimiento del sistema, obteniendo una mejora del 30% en la velocidad de los procesos.</li>
                  <li>Trabajé en entornos locales y dockerizados, aplicando el modelo MVC y la arquitectura de 3 capas.</li>
                  <li>Realicé pruebas y documentación con Postman, reduciendo el tiempo de resolución de errores.</li>
                  <li>Gestioné actividades y objetivos diarios con Trello, y participé activamente en reuniones diarias (Dailys).</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Practicante de Desarrollador Full-Stack</h3>
                <p className="text-muted-foreground mb-4">WAX Revolution. | 2023 - 2023</p>
                <p className="text-muted-foreground mb-3 text-sm" >Tecnologías Utilizadas: PHP, Laravel, JavaScript, MySQL</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Mantuve y desarrollé proyectos existentes, asegurando su correcta operación y optimizando su desempeño.</li>
                  <li>Planeé e integré servicios, expandiendo las capacidades, el alcance y mejorando la experiencia de usuario.</li>
                  <li>Optimicé funcionalidades, contribuyendo significativamente a la eficiencia y escalabilidad del sistema, 
                    logrando un aumento del 10% en el rendimiento sin comprometer la seguridad.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="py-12 md:py-16 lg:py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 tex  t-center">Contactame</h2>
            <div className="max-w-md mx-auto">
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-muted-foreground font-medium mb-2">
                    Name
                  </label>
                  <Input id="name" type="text" placeholder="Enter your name" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-muted-foreground font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-muted-foreground font-medium mb-2">
                    Message
                  </label>
                  <Textarea id="message" rows={5} placeholder="Enter your message" />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">&copy; 2024 Aleff Espinosa Córdova.</div>
          <nav className="flex items-center gap-4">
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              Projects
            </Link>
          </nav>
        </div>
      </footer>
    </div>)
  );
}


export function NetworkIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16v-5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v5" />
      <rect x="3" y="11" width="18" height="5" />
    </svg>
  );
}

export function MountainIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l7 11H5L12 2z" />
      <path d="M12 2v20" />
    </svg>
  );
}