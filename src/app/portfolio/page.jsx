// src/app/portfolio/page.jsx
import { AOSInit } from '@/components/AOSInit';
import { Navbar } from '@/components/navbar';
import { ProfileComponent } from '@/components/profileComponent';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Companies } from '@/components/companies';
import { Experience } from '@/components/experience';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { About } from '@/components/About';
import { Soon } from '@/components/Soon';

export const metadata = {
  title: 'Aleff Espinosa | Desarrollador Full-Stack · Chiapas, México',
  description:
    'Portafolio de Aleff Espinosa Córdova — desarrollador web full-stack en Chiapas, México. Proyectos con Laravel, React y Next.js.',
  alternates: {
    canonical: 'https://www.devaleff.com/',
  },
};

export default function PortfolioPage() {

  return (
    <div className="text-foreground">
      <AOSInit />
      <Navbar />
      <main className="flex-1">
        <ProfileComponent />

        <div data-aos="fade-up">
          <About />
        </div>

        <div data-aos="fade-up">
          <Soon />
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

        <div id="contact" data-aos="">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
