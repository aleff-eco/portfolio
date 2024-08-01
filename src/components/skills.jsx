import React, { useState } from 'react';
import Link from 'next/link';
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
} from 'react-icons/fa';

const skillsData = [
  { name: 'JavaScript', icon: <JavascriptIcon className="w-8 h-8" />, level: '90%', category: 'language' },
  { name: 'Python', icon: <PythonIcon className="w-8 h-8" />, level: '85%', category: 'language' },
  { name: 'PHP', icon: <PHPIcon className="w-8 h-8" />, level: '80%', category: 'language' },
  { name: 'Java', icon: <JavaIcon className="w-8 h-8" />, level: '75%', category: 'language' },
  { name: 'GitHub', icon: <GitHubIcon className="w-8 h-8" />, level: '85%', category: 'tool' },
  { name: 'GitLab', icon: <GitLabIcon className="w-8 h-8" />, level: '75%', category: 'tool' },
  { name: 'Node.js', icon: <NodejsIcon className="w-8 h-8" />, level: '85%', category: 'technology' },
  { name: 'Docker', icon: <DockerIcon className="w-8 h-8" />, level: '70%', category: 'technology' },
  { name: 'Linux', icon: <LinuxIcon className="w-8 h-8" />, level: '75%', category: 'os' },
  { name: 'SQL', icon: <SqlIcon className="w-8 h-8" />, level: '80%', category: 'technology' },
  { name: 'CSS', icon: <CSSIcon className="w-8 h-8" />, level: '80%', category: 'technology' },
  { name: 'React', icon: <ReactIcon className="w-8 h-8" />, level: '85%', category: 'framework' },
  { name: 'Bootstrap', icon: <BootstrapIcon className="w-8 h-8" />, level: '75%', category: 'framework' },
  { name: 'Laravel', icon: <LaravelIcon className="w-8 h-8" />, level: '85%', category: 'framework' },
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
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredSkills = selectedCategory
    ? skillsData.filter(skill => skill.category === selectedCategory)
    : skillsData;

  return (
    <section id="skills" className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Mis habilidades</h2>
        
        <div className="mb-8 text-center">
          {categories.map(category => (
            <Link
              key={category.key}
              href="#skills"
              onClick={() => setSelectedCategory(category.key)}
              className={`inline-flex items-center justify-center rounded-md px-4 py-2 m-2 text-sm font-medium text-white shadow-sm transition-colors ${
                selectedCategory === category.key ? 'bg-gray-600' : 'bg-gray-500 hover:bg-gray-400'
              }`}
              style={{
                backgroundColor: selectedCategory === category.key ? '#4B5563' : '#6B7280',
                color: 'white',
                borderRadius: '4px',
              }}
            >
              {category.name}
            </Link>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {filteredSkills.map(skill => (
            <div key={skill.name} className="flex items-center gap-4">
              {skill.icon}
              <div>
                <div className="text-lg font-bold">{skill.name}</div>
                <div className="w-40 bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{
                      width: skill.level,
                      maxWidth: '100%'
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
