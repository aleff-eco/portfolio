"use client";

import React, { useState, useEffect, useRef } from "react";
import { technicalSkills, softSkills, categories } from "@/data/information";
import { useTranslations } from "../hooks/useTranslations";

export function Skills() {
  const t = useTranslations();
  const [selectedSkillType, setSelectedSkillType] = useState("technical");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  useEffect(() => {
    let intervalId;
    if (!hasInteracted && isInView)
      intervalId = setInterval(toggleSkillType, 10000);
    return () => intervalId && clearInterval(intervalId);
  }, [hasInteracted, isInView]);

  const toggleSkillType = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedSkillType((prev) =>
        prev === "technical" ? "soft" : "technical"
      );
      setSelectedCategory("");
      setIsTransitioning(false);
    }, 200);
  };

  const handleSkillTypeClick = (type) => {
    setHasInteracted(true);
    if (selectedSkillType !== type) toggleSkillType();
  };

  const handleCategoryClick = (key) => {
    setHasInteracted(true);
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedCategory(key);
      setIsTransitioning(false);
    }, 200);
  };

  const filteredTechnical = selectedCategory
    ? technicalSkills.filter((skill) =>
        selectedCategory === "favorites"
          ? skill.favorite
          : skill.category === selectedCategory ||
            skill.subcategory === selectedCategory
      )
    : technicalSkills;

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="md:py-12 lg:py-16 bg-background text-foreground"
    >
      <div className="container mx-auto sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center">{t.skills.title}</h2>

        <div className="flex justify-center space-x-8 text-center mt-6">
          <button
            onClick={() => handleSkillTypeClick("technical")}
            className={`relative text-xl font-medium pb-2 transition-transform duration-300 hover:scale-105 ${
              selectedSkillType === "technical"
                ? "border-b-2 border-foreground"
                : "border-b-2 border-transparent"
            }`}
          >
            {t.skills.technical}
          </button>

          <button
            onClick={() => handleSkillTypeClick("soft")}
            className={`relative text-xl font-medium pb-2 transition-transform duration-300 hover:scale-105 ${
              selectedSkillType === "soft"
                ? "border-b-2 border-foreground"
                : "border-b-2 border-transparent"
            }`}
          >
            {t.skills.soft}
          </button>
        </div>

        {selectedSkillType === "technical" && (
          <div className="m-4 pb-8 text-center mt-8">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => handleCategoryClick(cat.key)}
                className={`inline-flex items-center justify-center m-2 px-4 py-2 text-sm font-medium rounded-md border transition-all duration-200 hover:scale-105 ${
                  selectedCategory === cat.key
                    ? "border-foreground bg-[hsl(var(--background-secondary))]"
                    : "border-border/40 hover:border-border"
                }`}
              >
                {t.categories[cat.key]}
              </button>
            ))}
          </div>
        )}

        <div
          className={`transition-opacity duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center m-8 lg:pl-20">
            {selectedSkillType === "technical"
              ? filteredTechnical.map((skill) => {
                  const data = t.technicalSkills[skill.key];
                  return (
                    <div
                      key={skill.key}
                      className="flex items-center gap-2 mt-2 pl-4 xl:pl-14"
                    >
                      <div className="icon-wrapper">{skill.icon}</div>

                      <div>
                        <div className="text-lg font-bold">{data.name}</div>
                        <div className="text-sm text-foreground/70">
                          {data.level}
                          {/* • {data.years} */}
                        </div>
                      </div>
                    </div>
                  );
                })
              : softSkills.map((skill) => (
                  <div
                    key={skill.key}
                    className="flex flex-col items-center gap-2 mt-8 text-center pr-6"
                  >
                    <div className="bg-muted rounded-md flex items-center justify-center w-12 h-12 icon-wrapper">
                      {skill.icon}
                    </div>

                    <span className="text-sm font-medium">
                      {t.softSkills[skill.key]}
                    </span>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}
