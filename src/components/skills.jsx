import React, { useState } from 'react';
import '../styles/Skills.css';
import { FaComments as CommunicationIcon, FaUsers as TeamworkIcon, FaLightbulb as LeadershipIcon, FaPalette as CreativityIcon, FaCogs as ProblemSolvingIcon, FaSyncAlt as AdaptabilityIcon, FaClock as TimeManagementIcon, FaBrain as CriticalThinkingIcon } from 'react-icons/fa';

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
  FaBitbucket as BitbucketIcon
} from 'react-icons/fa';
import { RiTailwindCssFill as TailwindIcon } from "react-icons/ri";

const technicalSkills = [
  { name: 'JavaScript', icon: <JavascriptIcon className="w-8 h-8" />, level: '95%', category: 'language' },
  { name: 'Python', icon: <PythonIcon className="w-8 h-8" />, level: '95%', category: 'language' },
  { name: 'PHP', icon: <PHPIcon className="w-8 h-8" />, level: '80%', category: 'language' },
  { name: 'Java', icon: <JavaIcon className="w-8 h-8" />, level: '70%', category: 'language' },
  { name: 'GitHub', icon: <GitHubIcon className="w-8 h-8" />, level: '90%', category: 'tool' },
  { name: 'GitLab', icon: <GitLabIcon className="w-8 h-8" />, level: '90%', category: 'tool' },
  { name: 'Node.js', icon: <NodejsIcon className="w-8 h-8" />, level: '80%', category: 'technology' },
  { name: 'Docker', icon: <DockerIcon className="w-8 h-8" />, level: '90%', category: 'technology' },
  { name: 'Linux', icon: <LinuxIcon className="w-8 h-8" />, level: '90%', category: 'os' },
  { name: 'SQL', icon: <SqlIcon className="w-8 h-8" />, level: '90%', category: 'technology' },
  { name: 'CSS', icon: <CSSIcon className="w-8 h-8" />, level: '75%', category: 'technology' },
  { name: 'React', icon: <ReactIcon className="w-8 h-8" />, level: '85%', category: 'framework' },
  { name: 'Bootstrap', icon: <BootstrapIcon className="w-8 h-8" />, level: '75%', category: 'framework' },
  { name: 'Laravel', icon: <LaravelIcon className="w-8 h-8" />, level: '80%', category: 'framework' },
  { name: 'MySQL', icon: <SqlIcon className="w-8 h-8" />, level: '80%', category: 'technology' },
  { name: 'Windows', icon: <WindowsIcon className="w-8 h-8" />, level: '100%', category: 'os' },
  { name: 'Tailwind', icon: <TailwindIcon className="w-8 h-8" />, level: '75%', category: 'technology' },
  { name: 'Bitbucket', icon: <BitbucketIcon className="w-8 h-8" />, level: '80%', category: 'tool' },
];

const softSkills = [
  { name: 'Comunicación', icon: <CommunicationIcon className="w-8 h-8" /> },
  { name: 'Trabajo en equipo', icon: <TeamworkIcon className="w-8 h-8" /> },
  { name: 'Liderazgo', icon: <LeadershipIcon className="w-8 h-8" /> },
  { name: 'Creatividad', icon: <CreativityIcon className="w-8 h-8" /> },
  { name: 'Resolución de problemas', icon: <ProblemSolvingIcon className="w-8 h-8" /> },
  { name: 'Adaptabilidad', icon: <AdaptabilityIcon className="w-8 h-8" /> },
  { name: 'Gestión del tiempo', icon: <TimeManagementIcon className="w-8 h-8" /> },
  { name: 'Pensamiento crítico', icon: <CriticalThinkingIcon className="w-8 h-8" /> },
];

const categories = [
  { name: 'Todo', key: '' },
  { name: 'Lenguajes', key: 'language' },
  { name: 'Tecnologías', key: 'technology' },
  { name: 'Frameworks', key: 'framework' },
  { name: 'Sistemas Operativos', key: 'os' },
  { name: 'Herramientas', key: 'tool' },
];

export function Skills() {
  const [selectedSkillType, setSelectedSkillType] = useState('technical');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSkillTypeClick = (type) => {
    setSelectedSkillType(type);
    setSelectedCategory('');
  };

  const filteredTechnicalSkills = selectedCategory
    ? technicalSkills.filter(skill => skill.category === selectedCategory)
    : technicalSkills;

  return (
    <section id="skills" className="md:p-10 lg:py-16">
      <div className="container mx-auto sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold md:text-3xl text-center">Mis habilidades</h2>

        <div className="flex justify-center space-x-8 text-center mt-6">
          <button
            onClick={() => handleSkillTypeClick('technical')}
            className={`relative text-base font-medium transition-transform duration-300 pb-2 ${selectedSkillType === 'technical' ? 'text-black active-skill' : 'text-gray-600'
              } hover:scale-105`}
          >
            Técnicas
          </button>
          <button
            onClick={() => handleSkillTypeClick('soft')}
            className={`relative text-base font-medium transition-transform duration-300 pb-2 ${selectedSkillType === 'soft' ? 'text-black active-skill' : 'text-gray-600'
              } hover:scale-105`}
          >
            Blandas
          </button>
        </div>

        {selectedSkillType === 'technical' && (
          <div className="m-4 pb-8 text-center mt-8">
            {categories.map(category => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`inline-flex items-center justify-center rounded-md px-4 py-2 m-2 text-sm font-medium text-white shadow-sm underline-offset-4 hover:scale-110 transition-transform duration-200 ${selectedCategory === category.key ? 'bg-gray-600' : 'bg-gray-500 hover:bg-gray-400'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 ml-6">
          {selectedSkillType === 'technical'
            ? filteredTechnicalSkills.map(skill => (
              <div key={skill.name} className="flex items-center gap-3 mt-4">
                {skill.icon}
                <div>
                  <div className="text-lg font-bold">{skill.name}</div>
                  <div className=" bg-muted rounded-full h-2 min-w-24">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{
                        width: skill.level,
                        maxWidth: '100%',
                      }}
                    />
                  </div>
                </div>
              </div>
            ))
            : softSkills.map(skill => (
              <div key={skill.name} className="flex flex-col items-center gap-2 mt-8">
                <div className="bg-muted rounded-md flex items-center justify-center w-12 h-12">
                  {skill.icon} {/* Aquí se muestra el ícono */}
                </div>
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
