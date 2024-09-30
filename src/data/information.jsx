// src\data\information.jsx
import Image from "next/image";

import {
  FaComments as CommunicationIcon,
  FaUsers as TeamworkIcon,
  FaLightbulb as LeadershipIcon,
  FaPalette as CreativityIcon,
  FaCogs as ProblemSolvingIcon,
  FaSyncAlt as AdaptabilityIcon,
  FaClock as TimeManagementIcon,
  FaBrain as CriticalThinkingIcon,
} from "react-icons/fa";

import {
  FaJs as JavascriptIcon,
  FaPython as PythonIcon,
  FaPhp as PHPIcon,
  FaJava as JavaIcon,
  FaGithub as GitHubIcon,
  FaGitlab as GitLabIcon,
  FaNodeJs as NodejsIcon,
  FaDocker as DockerIcon,
  FaLinux as LinuxIcon,
  FaDatabase as SqlIcon,
  FaCss3 as CSSIcon,
  FaReact as ReactIcon,
  FaBootstrap as BootstrapIcon,
  FaLaravel as LaravelIcon,
  FaWindows as WindowsIcon,
  FaBitbucket as BitbucketIcon,
} from "react-icons/fa";

import { RiTailwindCssFill as TailwindIcon } from "react-icons/ri";

export const words = [
  "Ingeniero de software!",
  "Desarrollador web!",
  "Desarrollador Full-Stack!",
  "(⌐■_■)",
];

export const technicalSkills = [
  {
    name: "JavaScript",
    icon: <JavascriptIcon className="w-8 h-8" />,
    level: "95%",
    category: "language",
  },
  {
    name: "Python",
    icon: <PythonIcon className="w-8 h-8" />,
    level: "95%",
    category: "language",
  },
  {
    name: "PHP",
    icon: <PHPIcon className="w-8 h-8" />,
    level: "80%",
    category: "language",
  },
  {
    name: "Java",
    icon: <JavaIcon className="w-8 h-8" />,
    level: "70%",
    category: "language",
  },
  {
    name: "GitHub",
    icon: <GitHubIcon className="w-8 h-8" />,
    level: "90%",
    category: "tool",
  },
  {
    name: "GitLab",
    icon: <GitLabIcon className="w-8 h-8" />,
    level: "90%",
    category: "tool",
  },
  {
    name: "Node.js",
    icon: <NodejsIcon className="w-8 h-8" />,
    level: "80%",
    category: "technology",
  },
  {
    name: "Docker",
    icon: <DockerIcon className="w-8 h-8" />,
    level: "90%",
    category: "technology",
  },
  {
    name: "Linux",
    icon: <LinuxIcon className="w-8 h-8" />,
    level: "90%",
    category: "os",
  },
  {
    name: "SQL",
    icon: <SqlIcon className="w-8 h-8" />,
    level: "90%",
    category: "technology",
  },
  {
    name: "CSS",
    icon: <CSSIcon className="w-8 h-8" />,
    level: "75%",
    category: "technology",
  },
  {
    name: "React",
    icon: <ReactIcon className="w-8 h-8" />,
    level: "85%",
    category: "framework",
  },
  {
    name: "Bootstrap",
    icon: <BootstrapIcon className="w-8 h-8" />,
    level: "75%",
    category: "framework",
  },
  {
    name: "Laravel",
    icon: <LaravelIcon className="w-8 h-8" />,
    level: "80%",
    category: "framework",
  },
  {
    name: "MySQL",
    icon: <SqlIcon className="w-8 h-8" />,
    level: "80%",
    category: "technology",
  },
  {
    name: "Windows",
    icon: <WindowsIcon className="w-8 h-8" />,
    level: "100%",
    category: "os",
  },
  {
    name: "Tailwind",
    icon: <TailwindIcon className="w-8 h-8" />,
    level: "75%",
    category: "technology",
  },
  {
    name: "Bitbucket",
    icon: <BitbucketIcon className="w-8 h-8" />,
    level: "80%",
    category: "tool",
  },
];

export const softSkills = [
  { name: "Comunicación", icon: <CommunicationIcon className="w-8 h-8" /> },
  { name: "Trabajo en equipo", icon: <TeamworkIcon className="w-8 h-8" /> },
  { name: "Liderazgo", icon: <LeadershipIcon className="w-8 h-8" /> },
  { name: "Creatividad", icon: <CreativityIcon className="w-8 h-8" /> },
  {
    name: "Resolución de problemas",
    icon: <ProblemSolvingIcon className="w-8 h-8" />,
  },
  { name: "Adaptabilidad", icon: <AdaptabilityIcon className="w-8 h-8" /> },
  {
    name: "Gestión del tiempo",
    icon: <TimeManagementIcon className="w-8 h-8" />,
  },
  {
    name: "Pensamiento crítico",
    icon: <CriticalThinkingIcon className="w-8 h-8" />,
  },
];

export const categories = [
  { name: "Todo", key: "" },
  { name: "Lenguajes", key: "language" },
  { name: "Tecnologías", key: "technology" },
  { name: "Frameworks", key: "framework" },
  { name: "Sistemas Operativos", key: "os" },
  { name: "Herramientas", key: "tool" },
];

export const companies = [
  {
    name: "HitechPro",
    title: "Consultor TI",
    imageUrl: "/experience/htpro.svg",
    link: "https://htpro.dev/",
  },
  {
    name: "CYBAC",
    title: "Hosting - Soluciones TI",
    imageUrl: "/experience/cybac.svg",
    link: "https://grupocybac.com/",
  },
  {
    name: "Rufino Tamayo",
    title: "Centro educativo",
    imageUrl: "/experience/rufino.png",
    link: "https://www.rufinotamayo.edu.mx/",
  },
  {
    name: "Wax Revolution",
    title: "Centro de belleza - Spa",
    imageUrl: "/experience/wax.avif",
    link: "https://waxrevolution.com/",
  },
  {
    name: "San Ángel",
    title: "Grupo Dental ",
    imageUrl: "/experience/dental.png",
    link: "https://www.instagram.com/grupodentalsanangel?igsh=bzA1M2R6NWlxdGd5",
  },
  {
    name: "D BeefMax",
    title: "Tienda de carnes",
    imageUrl: "/experience/dbeef.png",
    link: "https://www.facebook.com/profile.php?id=61563282854180",
  },
];

export const projects = [
  {
    title: "Landing Page para un restaurante",
    imageSrc: "/projects/reinaPepiada.webp",
    imageAlt: "Proyecto React creando una calculadora",
    link: "https://github.com/aleff-eco/reina_pepiada",
    category: "Diseño Web",
  },
  {
    title: "CRM de usuarios",
    imageSrc: "/projects/crmUser.png",
    imageAlt: "Proyecto de CRM pra gestion de usuarios",
    link: "https://github.com/aleff-eco/Crud-PHP-Laravel",
    category: "Desarrollo Fullstack",
  },
  {
    title: "QUOWARE para la gestion de Negocios",
    imageSrc: "/projects/quoware.webp",
    imageAlt: "Aplicacion ",
    link: "https://github.com/usuario/ecommerce_project",
    category: "Desarrollo Mobile | Disponible en Playstore",
  },
  {
    title: "Red neuronal para clasificación de imagenes",
    imageSrc: "/projects/redNeuronal.png",
    imageAlt: "Red neuronal para clasificación del mango ataulfo",
    link: "https://github.com/aleff-eco/Red-neuronal-Clasificadora",
    category: "Desarrollo Backend | IA",
  },
  {
    title: "Aplicacion movil para consumo de una API",
    imageSrc: "/projects/mangoAnalyzer.png",
    imageAlt:
      "Aplicacion movil para consumo de una API para el analisis del mango ataulfo",
    link: "https://github.com/aleff-eco/Mobile-App-Ataulfo",
    category: "Diseño Mobile",
  },
  {
    title: "Analizador lexico, sintactico y semantico",
    imageSrc: "/projects/analizador.png",
    imageAlt:
      "Analizador lexico, sintactico y semantico, con consola de depuración.",
    link: "https://github.com/usuario/task_manager",
    category: "Desarrollo Fullstack",
  },
  {
    title: "Automata verificador de placas vehiculares",
    imageSrc: "/projects/automata2.png",
    imageAlt: "Sistema de Control de Versiones",
    link: "https://github.com/usuario/version_control",
    category: "Herramientas de Desarrollo",
  },
  {
    title: "React creando una calculadora",
    imageSrc: "/projects/reactCalculator.png",
    imageAlt: "Proyecto React creando una calculadora",
    link: "https://github.com/aleff-eco/Calculator-React/blob/Ale-Develop/project-image/React-calculator.png",
    category: "Diseño Web",
  },
];

export const experience = [
  {
    company: "High-Tech",
    companyUrl: "https://htpro.dev/",
    title: "Desarrollador Backend",
    date: "Mar 2024 - Actualmente",
    description: "Desarrollé con PHP, Laravel, Docker, MySQL y JavaScript.",
  },
  {
    company: "High-Tech",
    companyUrl: "https://htpro.dev/",
    title: "Desarrollador Full-Stack",
    date: "2023",
    description: "Desarrollé con PHP, Laravel, MySQL, JavaScript y React."
  },
  {
    company: "High-Tech",
    companyUrl: "https://htpro.dev/",
    title: "Desarrollador Full-Stack",
    date: "2023",
    description:
      "Desarrollé con PHP, Laravel, MySQL, JavaScript y React. Di mantenimiento y mejoré el proyecto, asegurando funcionalidad y rendimiento. Desarrollé e integré servicios. Expandí las capacidades del proyecto y mejoré la experiencia del usuario. Implementé y optimicé funcionalidades. Contribuí a la eficiencia y escalabilidad del sistema.",
  },
  {
    company: "High-Tech",
    companyUrl: "https://htpro.dev/",
    title: "Desarrollador Full-Stack",
    date: "2023",
    description:
      "Desarrollé con PHP, Laravel, MySQL, JavaScript y React. Di mantenimiento y mejoré el proyecto, asegurando funcionalidad y rendimiento. Desarrollé e integré servicios. Expandí las capacidades del proyecto y mejoré la experiencia del usuario. Implementé y optimicé funcionalidades. Contribuí a la eficiencia y escalabilidad del sistema.",
  },
];
