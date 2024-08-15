import React, { useState } from 'react';
import '../styles/Skills.css';
import { technicalSkills, softSkills, categories } from '../data/information';

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
