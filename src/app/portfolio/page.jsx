// src/app/portfolio/page.jsx
'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Navbar } from '@/components/navbar';
import { ProfileComponent } from '@/components/profileComponent';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Companies } from '@/components/companies';
import { Experience } from '@/components/experience';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { About } from '@/components/About';
import { Soon} from '@/components/Soon'

export default function PortfolioPage() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 400,
      easing: 'ease-in-out-sine',
    });
  }, []);

  return (
    <div className="flex flex-col text-foreground">
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
