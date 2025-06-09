// src/data/information.js
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
  FaUserCheck as SelfManagementIcon,
  FaCheckCircle as ResponsibilityIcon,
  AiFillPushpin as CommitmentIcon,
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
import { MdLanguage } from "react-icons/md";
import { RiHomeOfficeLine } from "react-icons/ri";
import { MdOutlineWork } from "react-icons/md";
import { LuSchool } from "react-icons/lu";

export const wordsKeys = ["words.0", "words.1", "words.2", "words.3"];

export const technicalSkills = [
  {
    key: "javascript",
    icon: <JavascriptIcon className="w-8 h-8" />,
    category: "language",
    subcategory: "backend",
    favorite: true,
  },
  {
    key: "python",
    icon: <PythonIcon className="w-8 h-8" />,
    category: "language",
    subcategory: "backend",
    favorite: false,
  },
  {
    key: "php",
    icon: <PHPIcon className="w-8 h-8" />,
    category: "language",
    subcategory: "backend",
    favorite: true,
  },
  {
    key: "java",
    icon: <JavaIcon className="w-8 h-8" />,
    category: "language",
    subcategory: "backend",
    favorite: false,
  },
  {
    key: "github",
    icon: <GitHubIcon className="w-8 h-8" />,
    category: "tool",
    subcategory: "version control",
    favorite: true,
  },
  {
    key: "gitlab",
    icon: <GitLabIcon className="w-8 h-8" />,
    category: "tool",
    subcategory: "version control",
    favorite: false,
  },
  {
    key: "bitbucket",
    icon: <BitbucketIcon className="w-8 h-8" />,
    category: "tool",
    subcategory: "version control",
    favorite: false,
  },
  {
    key: "postman",
    icon: <PostmanIcon className="w-8 h-8" />,
    category: "tool",
    subcategory: "testing",
    favorite: false,
  },
  {
    key: "nodejs",
    icon: <NodejsIcon className="w-8 h-8" />,
    category: "technology",
    subcategory: "backend",
    favorite: true,
  },
  {
    key: "docker",
    icon: <DockerIcon className="w-8 h-8" />,
    category: "technology",
    subcategory: "containerization",
    favorite: true,
  },
  {
    key: "sql",
    icon: <SqlIcon className="w-8 h-8" />,
    category: "technology",
    subcategory: "database",
    favorite: true,
  },
  {
    key: "css",
    icon: <CSSIcon className="w-8 h-8" />,
    category: "technology",
    subcategory: "frontend",
    favorite: true,
  },
  {
    key: "react",
    icon: <ReactIcon className="w-8 h-8" />,
    category: "framework",
    subcategory: "frontend",
    favorite: true,
  },
  {
    key: "bootstrap",
    icon: <BootstrapIcon className="w-8 h-8" />,
    category: "framework",
    subcategory: "frontend",
    favorite: false,
  },
  {
    key: "laravel",
    icon: <LaravelIcon className="w-8 h-8" />,
    category: "framework",
    subcategory: "backend",
    favorite: true,
  },
  {
    key: "tailwind",
    icon: <TailwindIcon className="w-8 h-8" />,
    category: "framework",
    subcategory: "frontend",
    favorite: true,
  },
  {
    key: "nextjs",
    icon: <NextjsIcon className="w-8 h-8" />,
    category: "framework",
    subcategory: "frontend",
    favorite: false,
  },
  {
    key: "español",
    icon: <MdLanguage className="w-8 h-8" />,
    category: "idioma",
    subcategory: "idioma",
    favorite: false,
  },
  {
    key: "ingles",
    icon: <MdLanguage className="w-8 h-8" />,
    category: "idioma",
    subcategory: "idioma",
    favorite: false,
  },
];

export const softSkills = [
  { key: "leadership", icon: <LeadershipIcon className="w-8 h-8" /> },
  { key: "teamwork", icon: <TeamworkIcon className="w-8 h-8" /> },
  { key: "problemSolving", icon: <ProblemSolvingIcon className="w-8 h-8" /> },
  { key: "responsibility", icon: <ResponsibilityIcon className="w-8 h-8" /> },
  { key: "communication", icon: <CommunicationIcon className="w-8 h-8" /> },
  { key: "creativity", icon: <CreativityIcon className="w-8 h-8" /> },
  { key: "adaptability", icon: <AdaptabilityIcon className="w-8 h-8" /> },
  { key: "timeManagement", icon: <TimeManagementIcon className="w-8 h-8" /> },
  {
    key: "criticalThinking",
    icon: <CriticalThinkingIcon className="w-8 h-8" />,
  },
  {
    key: "attentionToDetail",
    icon: <AttentionToDetailIcon className="w-8 h-8" />,
  },
  { key: "selfManagement", icon: <SelfManagementIcon className="w-8 h-8" /> },
];

export const categories = [
  { key: "", icon: <CiStar /> },
  { key: "favorites", icon: <CiStar /> },
  { key: "frontend", icon: <CiStar /> },
  { key: "backend", icon: <CiStar /> },
  { key: "idioma", icon: <CiStar /> },
];

export const companies = [
  { key: "romoTours", icon: <RiHomeOfficeLine /> },
  { key: "bniChiapas", icon: <RiHomeOfficeLine /> },
  { key: "fldch", icon: <RiHomeOfficeLine /> },
  { key: "inef", icon: <RiHomeOfficeLine /> },
  { key: "highTechPro", icon: <RiHomeOfficeLine /> },
  { key: "cybac", icon: <RiHomeOfficeLine /> },
  { key: "rufinoTamayo", icon: <RiHomeOfficeLine /> },
  { key: "waxRevolution", icon: <RiHomeOfficeLine /> },
  { key: "sanAngel", icon: <RiHomeOfficeLine /> },
  { key: "dBeefMax", icon: <RiHomeOfficeLine /> },
  { key: "sefina", icon: <RiHomeOfficeLine /> },
  { key: "sitram", icon: <RiHomeOfficeLine /> },
  { key: "strappberry", icon: <RiHomeOfficeLine /> },
  { key: "reichstag", icon: <RiHomeOfficeLine /> },
];

export const projects = [
  { key: "fldchWebApp", icon: <RiHomeOfficeLine /> },
  { key: "fldchCms", icon: <RiHomeOfficeLine /> },
  { key: "bniAdmin", icon: <RiHomeOfficeLine /> },
  { key: "reichstagWebApp", icon: <RiHomeOfficeLine /> },
  { key: "romoAdmin", icon: <RiHomeOfficeLine /> },
  { key: "rufinoAdmin", icon: <RiHomeOfficeLine /> },
  { key: "dBeefMaxWebApp", icon: <RiHomeOfficeLine /> },
  { key: "reinaPepiada", icon: <RiHomeOfficeLine /> },
  { key: "waxWebApp", icon: <RiHomeOfficeLine /> },
  { key: "userCrm", icon: <RiHomeOfficeLine /> },
  { key: "quoware", icon: <RiHomeOfficeLine /> },
  { key: "mangoApp", icon: <RiHomeOfficeLine /> },
];

export const experience = [
  { key: "cybac", icon: <MdOutlineWork /> },
  { key: "highTech", icon: <MdOutlineWork /> },
  { key: "waxIntern", icon: <MdOutlineWork /> },
  { key: "upChiapas", icon: <LuSchool /> },
];
