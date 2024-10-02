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

import { SiNextdotjs as NextjsIcon } from "react-icons/si";

import { RiTailwindCssFill as TailwindIcon } from "react-icons/ri";

import { RiHomeOfficeLine } from "react-icons/ri";

import { MdOutlineWork } from "react-icons/md";

export const words = [
  "¡Ingeniero de software!",
  "¡Desarrollador web!",
  "¡Desarrollador Full-Stack!",
  "(⌐■_■)",
  "Amante de los gatos y la carpintería",
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
    name: "Bitbucket",
    icon: <BitbucketIcon className="w-8 h-8" />,
    level: "80%",
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
    name: "SQL",
    icon: <SqlIcon className="w-8 h-8" />,
    level: "90%",
    category: "technology",
  },
  {
    name: "MySQL",
    icon: <SqlIcon className="w-8 h-8" />,
    level: "80%",
    category: "technology",
  },
  {
    name: "SQLite",
    icon: <SqlIcon className="w-8 h-8" />,
    level: "70%",
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
    name: "Tailwind",
    icon: <TailwindIcon className="w-8 h-8" />,
    level: "75%",
    category: "framework",
  },
  {
    name: "Next.js",
    icon: <NextjsIcon className="w-8 h-8" />,
    level: "85%",
    category: "framework",
  },
  {
    name: "Linux",
    icon: <LinuxIcon className="w-8 h-8" />,
    level: "90%",
    category: "os",
  },
  {
    name: "Windows",
    icon: <WindowsIcon className="w-8 h-8" />,
    level: "100%",
    category: "os",
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
  { name: "Herramientas", key: "tool" },
  { name: "Frameworks y Librerías", key: "framework" },
  { name: "Tecnologías", key: "technology" },
  { name: "Sistemas Operativos", key: "os" },
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
  {
    name: "REICHSTAG",
    title: "Edificaciones",
    imageUrl: "/experience/reichstag.png",
    link: "https://reichstag.com.mx/",
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
    icon: <MdOutlineWork className="w-6 h-6" />,
    company: "CYBAC - TI",
    companyUrl: "https://grupocybac.com/",
    title: "Desarrollador full-stack",
    date: "julio 2024 - Actualmente",
    descriptionTitle: "Desarrollador Backend",
    descriptionTech: "Desarrollé con: PHP, Laravel, Docker, MySQL y JavaScript.",
    descriptionPoints: [
      "Implementé funcionalidades en los sistemas backend.",
      "Resolví errores operativos y optimicé el rendimiento del sistema.",
      "Trabajé en entornos locales y dockerizados, aplicando el modelo MVC y arquitectura de 3 capas.",
      "Realicé pruebas y documentación con Postman.",
      "Aseguré código de calidad, escalable y mantenible.",
      "Gestioné actividades con Trello, logrando objetivos diarios.",
      "Asistí y participé en reuniones diarias (Dailys)."
    ]
  },
  {
    icon: <RiHomeOfficeLine className="w-6 h-6" />,
    company: "High-Tech",
    companyUrl: "https://htpro.dev/",
    title: "Desarrollador Full-Stack",
    date: "Marzo 2024 - julio 2024",
    descriptionTitle: "Desarrollador Full-Stack",
    descriptionTech: "Desarrollé con: PHP, Laravel, MySQL, JavaScript y React.",
    descriptionPoints: [
      "Di mantenimiento y mejoré el proyecto, asegurando funcionalidad y rendimiento.",
      "Desarrollé e integré servicios.",
      "Expandí las capacidades del proyecto y mejoré la experiencia del usuario.",
      "Implementé y optimicé funcionalidades.",
      "Contribuí a la eficiencia y escalabilidad del sistema."
    ]
  },  
  {
    icon: <RiHomeOfficeLine className="w-6 h-6" />,
    company: "Unity.com.mx",
    companyUrl: "https://unity.com.mx/",
    title: "Desarrollador Full-Stack",
    date: "2023",
    descriptionTitle: "Desarrollador Full-Stack",
    descriptionTech: "Desarrollé con: WordPress, PHP, MySQL y JavaScript.",
    descriptionPoints: [
      "Integré sistemas de seguridad en WordPress para proteger la infraestructura del sitio.",
      "Desarrollé e integré plugins personalizados para mejorar la funcionalidad del sistema.",
      "Realicé cambios en las vistas del frontend, asegurando una mejor experiencia de usuario.",
      "Implementé prácticas de ocultación (hide) para asegurar información sensible.",
      "Mantuve y optimicé la funcionalidad general del sitio, mejorando su rendimiento."
    ]
  },  
  {
    icon: <RiHomeOfficeLine className="w-6 h-6" />,
    company: "High-Tech",
    companyUrl: "https://htpro.dev/",
    title: "Desarrollador Full-Stack",
    date: "2023",
    description:
      "Desarrollé con PHP, Laravel, MySQL, JavaScript y React. Di mantenimiento y mejoré el proyecto, asegurando funcionalidad y rendimiento. Desarrollé e integré servicios. Expandí las capacidades del proyecto y mejoré la experiencia del usuario. Implementé y optimicé funcionalidades. Contribuí a la eficiencia y escalabilidad del sistema.",
  },
];
