"use client";
import Link from "next/link"
import { Skills } from "./skills";
import { Projects } from "./projects";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { Experience } from "./experience";
import { Contact } from "./contact";
import { ProfileComponent} from "./profileComponent";
//import { RotatingText } from '@/styles/rotatingText';

export function Portfolio() {
  return (
    (<div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <ProfileComponent />


        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>)
  );
}