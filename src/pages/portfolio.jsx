"use client";
import { Skills } from "../components/skills";
import { Projects } from "../components/projects";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Experience } from "../components/experience";
import { Contact } from "../components/contact";
import { ProfileComponent } from "../components/profileComponent";
import { Companies } from "../components/companies";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS

export default function Portfolio() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-out-sine',
    });
  }, []);
  
  

  return (
    <div className="flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <div>
          <ProfileComponent />
        </div>
        <div data-aos="fade-up">
          <Skills />
        </div>
        <div data-aos="fade-up">
          <Projects />
        </div>
        <div data-aos="fade-up">
          <Companies />
        </div>
        <div data-aos="fade-up">
          <Experience />
        </div>
        <div data-aos="fade-up">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
