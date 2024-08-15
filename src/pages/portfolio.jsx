"use client";
import { Skills } from "../components/skills";
import { Projects } from "../components/projects";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Experience } from "../components/experience";
import { Contact } from "../components/contact";
import { ProfileComponent} from "../components/profileComponent";

export function Portfolio() {
  return (
    (
    <div className="flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <ProfileComponent />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
    )
  );
}