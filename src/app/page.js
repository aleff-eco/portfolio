"use client";
import { Portfolio } from "../components/portfolio";
import { Skills } from "../components/skills";
import { Projects } from "../components/projects";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Experience } from "../components/experience";
import { Contact } from "../components/contact";
import { ProfileComponent} from "../components/profileComponent";
import { AboutMe } from '../components/aboutMe';

function Home() {
  return (
    (<div className="flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <ProfileComponent />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>)
  );
} 

export default Home