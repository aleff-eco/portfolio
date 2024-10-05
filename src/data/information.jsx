// src\data\information.jsx
import { CiStar } from "react-icons/ci";

import {
  FaComments as CommunicationIcon,
  FaUsers as TeamworkIcon,
  FaLightbulb as LeadershipIcon,
  FaPalette as CreativityIcon,
  FaCogs as ProblemSolvingIcon,
  FaSyncAlt as AdaptabilityIcon,
  FaClock as TimeManagementIcon,
  FaBrain as CriticalThinkingIcon,
  FaUserCheck as SelfManagementIcon, // Autogestión
  FaCheckCircle as ResponsibilityIcon, // Responsabilidad
  AiFillPushpin as CommitmentIcon, // Compromiso
} from "react-icons/fa";

import { SiPostman as PostmanIcon } from "react-icons/si";
import { FaPaintbrush as AttentionToDetailIcon } from "react-icons/fa6";

import {
  FaJs as JavascriptIcon,
  FaPython as PythonIcon,
  FaPhp as PHPIcon,
  FaJava as JavaIcon,
  FaGithub as GitHubIcon,
  FaGitlab as GitLabIcon,
  FaNodeJs as NodejsIcon,
  FaDocker as DockerIcon,
  FaDatabase as SqlIcon,
  FaCss3 as CSSIcon,
  FaReact as ReactIcon,
  FaBootstrap as BootstrapIcon,
  FaLaravel as LaravelIcon,
  FaBitbucket as BitbucketIcon,
} from "react-icons/fa";

import { SiNextdotjs as NextjsIcon } from "react-icons/si";

import { RiTailwindCssFill as TailwindIcon } from "react-icons/ri";

import { RiHomeOfficeLine } from "react-icons/ri";

import { MdOutlineWork, MdLanguage } from "react-icons/md";

import { LuSchool } from "react-icons/lu";

export const words = [
  "¡Ingeniero de software!",
  "¡Desarrollador web!",
  "¡Desarrollador Full-Stack!",
  "(⌐■_■)",
];

export const technicalSkills = [
  {
    name: "JavaScript",
    icon: <JavascriptIcon className="w-8 h-8" />,
    level: "Avanzado",
    years: "4 años",
    category: "language",
    subcategory: "backend",
    favorite: true,
  },
  {
    name: "Python",
    icon: <PythonIcon className="w-8 h-8" />,
    level: "Intermedio",
    years: "4 años",
    category: "language",
    subcategory: "backend",
    favorite: false,
  },
  {
    name: "PHP",
    icon: <PHPIcon className="w-8 h-8" />,
    level: "Avanzado",
    years: "4 años",
    category: "language",
    subcategory: "backend",
    favorite: true,
  },
  {
    name: "Java",
    icon: <JavaIcon className="w-8 h-8" />,
    level: "Intermedio",
    years: "4 años",
    category: "language",
    subcategory: "backend",
    favorite: false,
  },
  {
    name: "GitHub",
    icon: <GitHubIcon className="w-8 h-8" />,
    level: "Avanzado",
    years: "4 años",
    category: "tool",
    subcategory: "version control",
    favorite: true,
  },
  {
    name: "GitLab",
    icon: <GitLabIcon className="w-8 h-8" />,
    level: "Avanzado",
    years: "4 años",
    category: "tool",
    subcategory: "version control",
    favorite: false,
  },
  {
    name: "Bitbucket",
    icon: <BitbucketIcon className="w-8 h-8" />,
    level: "Avanzado",
    years: "4 años",
    category: "tool",
    subcategory: "version control",
    favorite: false,
  },
  {
    name: "Postman",
    icon: <PostmanIcon className="w-8 h-8" />,
    level: "Avanzado",
    years: "4 años",
    category: "tool",
    subcategory: "testing",
    favorite: false,
  },
  {
    name: "Node.js",
    icon: <NodejsIcon className="w-8 h-8" />,
    level: "Avanzado",
    years: "4 años",
    category: "technology",
    subcategory: "backend",
    favorite: true,
  },
  {
    name: "Docker",
    icon: <DockerIcon className="w-8 h-8" />,
    level: "Avanzado",
    years: "4 años",
    category: "technology",
    subcategory: "containerization",
    favorite: true,
  },
  {
    name: "SQL",
    icon: <SqlIcon className="w-8 h-8" />,
    level: "Avanzado",
    years: "4 años",
    category: "technology",
    subcategory: "database",
    favorite: true,
  },
  {
    name: "CSS",
    icon: <CSSIcon className="w-8 h-8" />,
    level: "Intermedio",
    years: "4 años",
    category: "technology",
    subcategory: "frontend",
    favorite: true,
  },
  {
    name: "React",
    icon: <ReactIcon className="w-8 h-8" />,
    level: "Intermedio",
    years: "4 años",
    category: "framework",
    subcategory: "frontend",
    favorite: true,
  },
  {
    name: "Bootstrap",
    icon: <BootstrapIcon className="w-8 h-8" />,
    level: "Intermedio",
    years: "4 años",
    category: "framework",
    subcategory: "frontend",
    favorite: false,
  },
  {
    name: "Laravel",
    icon: <LaravelIcon className="w-8 h-8" />,
    level: "Avanzado",
    years: "4 años",
    category: "framework",
    subcategory: "backend",
    favorite: true,
  },
  {
    name: "Tailwind",
    icon: <TailwindIcon className="w-8 h-8" />,
    level: "Avanzado",
    years: "4 años",
    category: "framework",
    subcategory: "frontend",
    favorite: true,
  },
  {
    name: "Next.js",
    icon: <NextjsIcon className="w-8 h-8" />,
    level: "Intermedio",
    years: "4 años",
    category: "framework",
    subcategory: "frontend",
    favorite: false,
  },
  {
    name: "Español",
    icon: <MdLanguage className="w-8 h-8" />,
    level: "Nativo",
    years: "4 años",
    category: "idioma",
    subcategory: "idioma",
    favorite: false,
  },
  {
    name: "Inglés",
    icon: <MdLanguage className="w-8 h-8" />,
    level: "Avanzado",
    years: "4 años",
    category: "idioma",
    subcategory: "idioma",
    favorite: false,
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
  {
    name: "Atención al detalle",
    icon: <AttentionToDetailIcon className="w-8 h-8" />,
  },
  { name: "Responsabilidad", icon: <ResponsibilityIcon className="w-8 h-8" /> },

  { name: "Autogestión", icon: <SelfManagementIcon className="w-8 h-8" /> },
];

export const categories = [
  { name: "🌌 Todo", key: "" },
  { name: "⭐ Favoritos", key: "favorites" },
  { name: "🖼️ Frontend", key: "frontend" },
  { name: "⚙️ Backend", key: "backend" },
  { name: "🌐 Idiomas", key: "idioma" },
  { name: "Lenguajes", key: "language" },
  { name: "Herramientas", key: "tool" },
  { name: "Frameworks y Librerías", key: "framework" },
  { name: "Tecnologías", key: "technology" },
];

export const companies = [
  {
    name: "HighTech Pro",
    title: "Consultoría TI",
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
    title: "Institución educativa",
    imageUrl: "/experience/rufino.png",
    link: "https://www.rufinotamayo.edu.mx/",
  },
  {
    name: "Wax Revolution",
    title: "Centro de belleza, Spa",
    imageUrl: "/experience/wax.avif",
    link: "https://waxrevolution.com/",
  },
  {
    name: "San Ángel",
    title: "Grupo de salud dental",
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
    title: "Aplicacion Web para REICHSTAG",
    imageSrc: "/projects/reichstag.png",
    imageAlt: "Desarrollo de un sitio web con next.js para reichstag.com.mx", 
    link: "https://reichstag.com.mx/",
    category: "Desarrollo Web fullstack",
  },
  {
    title: "Aplicacion Web para D BeefMax",
    imageSrc: "/projects/dbeefmax.png",
    imageAlt: "Desarrollo de un sitio web para una carniceria con panel administrativo en PHP", 
    link: "https://dbeefmaxboutique.com/",
    category: "Desarrollo Web fullstack",
  },
  {
    title: "Sitio web para REINA PEPIADA",
    imageSrc: "/projects/reinaPepiada.webp",
    imageAlt: "Un sitio web para un restaurante de comida venezolana",
    link: "https://reinapepiada.com.mx/",
    category: "Desarrollo Web frontend",
  },
  {
    title: "CRM de usuarios",
    imageSrc: "/projects/crmUser.png",
    imageAlt: "Proyecto CRM para gestión de usuarios",
    link: "https://github.com/aleff-eco/Crud-PHP-Laravel",
    category: "Desarrollo web Fullstack",
  },
  {
    title: "QUOWARE para la gestion de Negocios",
    imageSrc: "/projects/quoware.webp",
    imageAlt: "Aplicación móvil",
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
      "Aplicación móvil para consumir una API destinada al análisis del mango ataulfo",
    link: "https://github.com/aleff-eco/Mobile-App-Ataulfo",
    category: "Aplicación móvil ",
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
    category: "Herramientas de análisis",
  },
  {
    title: "React creando una calculadora",
    imageSrc: "/projects/reactCalculator.png",
    imageAlt: "Proyecto React creando una calculadora",
    link: "https://github.com/aleff-eco/Calculator-React/blob/Ale-Develop/project-image/React-calculator.png",
    category: "Frontend",
  },
];

export const experience = [
  {
    icon: <MdOutlineWork className="w-6 h-6" />,
    company: "CYBAC - TI",
    companyUrl: "https://grupocybac.com/",
    title: "Desarrollador full-stack",
    date: "Julio 2024 - Actualmente",
    descriptionTitle: "Desarrollador Backend",
    descriptionTech:
      "Desarrollé con: PHP, Laravel, MySQL, JavaScript, Livewire, Tailwind y Viu.",
    descriptionPoints: [
      "Lideré el desarrollo de proyectos web como 'reina pepiada,' 'dbeefmax,' y 'reichstag'.",
      "Asesoré, revisé y evalué a más de 10 pasantes, asegurando la entrega de soluciones de excelente calidad",
      "Desplegué y mantuve aplicaciones asegurando excelente rendimiento, SEO y seguridad.",
      "Implementé funcionalidades en los sistemas backend, optimizando el rendimiento y corrigiendo errores.",
      "Realicé pruebas y documentación técnica de cada proyecto.",
      "Aseguré la calidad del código, garantizando su escalabilidad y fácil mantenimiento",
      "Hice uso de Github y Bitbucket para el control de versiones.",
    ],
  },
  {
    icon: <RiHomeOfficeLine className="w-6 h-6" />,
    company: "HIGH - TECH",
    companyUrl: "https://htpro.dev/",
    title: "Desarrollador Backend",
    date: "Marzo 2024 - Julio 2024",
    descriptionTitle: "Desarrollador Backend",
    descriptionTech:
      "Desarrollé con: PHP, Laravel, Docker, MySQL y JavaScript.",
    descriptionPoints: [
      "Hice entrega de la primera y segunda version del proyecto 'Tareas Pro'.",
      "Cree más de 30 funcionalidades nuevas para mejorar la experiencia del usuario.",
      "Resolví errores operativos y optimicé el rendimiento del proyecto.",
      "Trabajé en entornos locales y dockerizados, aplicando el modelo MVC y arquitectura de 3 capas.",
      "Realicé pruebas y documentación con Postman.",
      "Aseguré código de calidad, escalable y mantenible, siguiendo las mejores practicas.",
      "Gestioné actividades con Trello, logrando objetivos diarios.",
      "Asistí y participé en reuniones diarias (Dailys).",
    ],
  },
  {
    icon: <RiHomeOfficeLine className="w-6 h-6" />,
    company: "Unity.com.mx",
    companyUrl: "https://unity.com.mx/",
    title: "Desarrollador Full-Stack",
    date: "Febrero 2023 - Agosto 2023",
    descriptionTitle: "Desarrollador Full-Stack",
    descriptionTech: "Desarrollé con: WordPress, PHP, MySQL y JavaScript.",
    descriptionPoints: [
      "Integré sistemas de seguridad en WordPress para proteger la infraestructura del sitio.",
      "Desarrollé e integré plugins personalizados para mejorar la funcionalidad del sistema.",
      "Realicé cambios en las vistas del frontend, asegurando una mejor experiencia de usuario.",
      "Implementé prácticas para asegurar información sensible.",
      "Mantuve y optimicé la funcionalidad general del sitio, mejorando su rendimiento.",
      "Realice actualizaciones y mejoras por parte del servidor, asegurando la estabilidad del sitio.",
    ],
  },
  {
    icon: <RiHomeOfficeLine className="w-6 h-6" />,
    company: "Wax Revolution",
    companyUrl: "https://waxrevolution.com/",
    title: "Desarrollador Full-Stack",
    date: "2022 - 2023",
    descriptionTitle: "Desarrollador Full-Stack - Pasante",
    descriptionTech: "Desarrollé con: PHP, MySQL, JavaScript.",
    descriptionPoints: [
      "Realicé mantenimiento de sistemas existentes para asegurar la estabilidad y funcionalidad continua.",
      "Implementé nuevas funcionalidades para optimizar la experiencia del usuario y mejorar el flujo de trabajo interno.",
      "Desarrollé mejoras en el backend utilizando PHP y MySQL.",
      "Optimicé el rendimiento del sistema, reduciendo tiempos de carga y mejorando la eficiencia del procesamiento de datos.",
      "Apliqué correcciones de errores y realicé mejoras en el código para asegurar un funcionamiento fluido del sistema.",
      "Colaboré con diferentes equipos para asegurar la integración de nuevas funcionalidades sin interrumpir el servicio.",
    ],
  },
  {
    icon: <LuSchool className="w-6 h-6" />,
    company: "Universidad Politécnica de Chiapas",
    companyUrl: "https://www.upchiapas.edu.mx/",
    title: "Ingeniera en Software",
    date: "2020 - 2023",
    description:
      "Cursé la Ingeniería de Software en la Universidad Politécnica de Chiapas, donde adquirí sólidas habilidades en desarrollo de software utilizando tecnologías como PHP, Laravel, MySQL, JavaScript y React. Participé en proyectos integrales, donde diseñé, desarrollé y mantuve aplicaciones web, optimizando su rendimiento y escalabilidad. Además, integré servicios de backend y frontend, mejorando la experiencia del usuario. Durante este periodo, también implementé prácticas ágiles y participé en el ciclo completo de desarrollo de software.",
  },
];
