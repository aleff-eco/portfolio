import React, { useState } from "react";
import "../app/globals.css";
import { technicalSkills, softSkills, categories } from "@/data/information";
import { PiLineVerticalBold } from "react-icons/pi";

export function Skills() {
  const [selectedSkillType, setSelectedSkillType] = useState("technical");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSkillTypeClick = (type) => {
    if (selectedSkillType !== type) {
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedSkillType(type);
        setIsTransitioning(false);
        setSelectedCategory("");
      }, 200);
    }
  };

  const handleCategoryClick = (categoryKey) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedCategory(categoryKey);
      setIsTransitioning(false);
    }, 200);
  };

  const filteredTechnicalSkills = selectedCategory
    ? technicalSkills.filter((skill) => {
        if (selectedCategory === "favorites") {
          return skill.favorite; // Mostrar todas las skills con favorite: true
        } else if (selectedCategory === "frontend") {
          return skill.subcategory === "frontend";
        } else if (selectedCategory === "backend") {
          return skill.subcategory === "backend";
        }
        return skill.category === selectedCategory;
      })
    : technicalSkills;

  return (
    <section id="skills" className="md:py-12 lg:py-16">
      <div className="container mx-auto sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold md:text-3xl text-center">
          Mis habilidades
        </h2>

        <div className="flex justify-center space-x-8 text-center mt-6">
          <button
            onClick={() => handleSkillTypeClick("technical")}
            className={`relative text-xl font-medium transition-transform duration-300 pb-2 ${
              selectedSkillType === "technical"
                ? "text-[hsl(var(--light-gray))] border-b-2 border-[hsl(var(--foreground))]"
                : "text-[hsl(var(--light-gray))]"
            } hover:scale-105`}
          >
            Técnicas
          </button>
          <button
            onClick={() => handleSkillTypeClick("soft")}
            className={`relative text-xl font-medium transition-transform duration-300 pb-2 ${
              selectedSkillType === "soft"
                ? "text-[hsl(var(--light-gray))] border-b-2 border-[hsl(var(--foreground))]"
                : "text-[hsl(var(--light-gray))]"
            } hover:scale-105`}
          >
            Blandas
          </button>
        </div>

        {selectedSkillType === "technical" && (
          <div className="m-4 pb-8 text-center mt-8">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => handleCategoryClick(category.key)}
                className={`inline-flex items-center justify-center rounded-md px-4 py-2 m-2 text-sm md:text-md font-medium shadow-2xl border-2 border-transparent hover:underline-offset-4 transition-all duration-200 hover:scale-105 transform ${
                  selectedCategory === category.key
                    ? "border-2 text-[hsl(var(--foreground))] border-[hsl(var(--foreground))] bg-[hsl(var(--background))] scale-105 "
                    : ""
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}

        <div
          className={`transition-opacity duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 justify-center m-8 lg:pl-20">
            {selectedSkillType === "technical"
              ? filteredTechnicalSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-4 mt-4"
                  >
                    <div className="icon-wrapper ">{skill.icon}</div>
                    <div>
                      <div className="text-lg font-bold">{skill.name}</div>
                      <div className="flex items-center">
                        <span className="text-sm font-medium mr-1 underline-offset-4">
                          {skill.level}
                        </span>
                        {/* <PiLineVerticalBold />
                        <span className="text-sm font-medium ml-1">
                          {skill.years}
                        </span> */}
                      </div>
                    </div>
                  </div>
                ))
              : softSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-2 mt-8 text-center justify-center"
                  >
                    <div className="bg-muted rounded-md flex items-center justify-center w-12 h-12 icon-wrapper">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}
