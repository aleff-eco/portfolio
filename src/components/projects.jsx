import { useState, useEffect } from "react";
import Image from "next/image";
import NotificationButton from "./githubalert";
import { projects } from "../data/information";

export function Projects({ children }) {
  const [showAll, setShowAll] = useState(false);
  const [projectsToShow, setProjectsToShow] = useState(2);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    function detectTouchDevice() {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    }
    detectTouchDevice();

    function updateProjectsToShow() {
      if (window.innerWidth < 768) {
        setProjectsToShow(2);
      } else {
        setProjectsToShow(3);
      }
    }

    updateProjectsToShow();
    window.addEventListener("resize", updateProjectsToShow);

    return () => {
      window.removeEventListener("resize", updateProjectsToShow);
    };
  }, []);

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, projectsToShow);

  return (
    <section
      id="projects"
      className="relative py-20 bg-slate-900 mx-auto"
      style={{ width: "85%", zIndex: 1 }}
    >
      {children}

      <div className="relative max-w-full mx-auto px-2">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100 relative z-30 flex justify-center items-center">
          <div className="mb-12 md:mb-16 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-white md:text-3xl text-center px-2 m-4">
              Proyectos
            </h1>
            <p className="lg:max-w-[750px] p-2 text-xl text-center">
              Estos proyectos representan mi experiencia profesional, de la cual estoy orgulloso por haber liderado, desarrollado tanto de forma individual como colaborativa.
            </p>
          </div>
        </div>

        <div className="absolute top-0 right-0 pl-6 z-50">
          <NotificationButton />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center z-10">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className={`bg-card/95 flex-col justify-center items-center bg-opacity-50 rounded-lg shadow-lg overflow-hidden max-w-lg w-full transition-opacity duration-300 ${
                hoveredIndex === null || hoveredIndex === index
                  ? "opacity-100"
                  : "opacity-50"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                width={450}
                height={250}
                loading="lazy"
                style={{
                  borderTopLeftRadius: "11px",
                  borderTopRightRadius: "13px",
                }}
                className="w-full p-1 h-64 object-cover self-start"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  <a
                    href={project.link}
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h2>

                <p className="text-gray-700 leading-tight italic">
                  {project.description}
                </p>
              </div>
              <div className="flex px-6 pb-6">
                <span className="text-md font-semibold">
                  {project.occupation}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          {!showAll ? (
            <button
              className="px-6 py-2 font-semibold border-2 rounded-lg duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:border-white border-black dark:text-white text-black hover:scale-105 transform"
              onClick={() => setShowAll(true)}
            >
              Ver más {" "}
              <span className="dot-bouncing">
                  <span></span>
                  <span></span>
                  <span></span>
              </span>
            </button>
          ) : (
            <button
              className="px-6 py-2 font-semibold border-2 rounded-lg duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:border-white border-black dark:text-white text-black hover:scale-105 transform"
              onClick={() => setShowAll(false)}
            >
              Ver menos
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
