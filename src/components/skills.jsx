import { 
    FaJs as JavascriptIcon, 
    FaPython as PythonIcon, 
    FaPhp as PHPIcon, 
    FaDart as DartIcon, 
    FaJava as JavaIcon, 
    FaTypescript as TypescriptIcon, 
    FaGithub as GitHubIcon, 
    FaGitlab as GitLabIcon, 
    FaNodeJs as NodejsIcon, 
    FaDocker as DockerIcon, 
    FaLinux as LinuxIcon, 
    FaDatabase as SqlIcon, 
    FaTailwindcss as TailwindIcon, 
    FaCss3 as CSSIcon, 
    FaReact as ReactIcon, 
    FaBootstrap as BootstrapIcon, 
    FaLaravel as LaravelIcon, 
    //FaLaragon as LaragonIcon 
  } from 'react-icons/fa';
import { BsGrid3X3GapFill } from 'react-icons/bs';

export function Skills() {
  return (
    <section id="skills" className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Mis habilidades</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex items-center gap-4">
                <JavascriptIcon  className="w-8 h-8" />
                <div>
                  <div className="text-lg font-bold">JavaScript</div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }} />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <JavaIcon  className="w-8 h-8" />
                <div>
                  <div className="text-lg font-bold">Laragon</div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "5%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}