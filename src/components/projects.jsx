import { useState, useEffect } from "react";
import Image from "next/image";
import NotificationButton from "./githubalert";
import { projects } from "../data/information";

export function Projects({ children }) {
  const [showAll, setShowAll] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [projectsToShow, setProjectsToShow] = useState(2); // Inicia con 2 proyectos

  useEffect(() => {
    function updateProjectsToShow() {
      if (window.innerWidth < 768) {
        // Dispositivos móviles
        setProjectsToShow(2);
      } else {
        // Tabletas y computadoras
        setProjectsToShow(3);
      }
    }

    // Llamar a la función inicialmente
    updateProjectsToShow();

    // Agregar event listener al redimensionar la ventana
    window.addEventListener("resize", updateProjectsToShow);

    // Limpiar el event listener al desmontar el componente
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

      <div className="relative max-w-full mx-auto px-8">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100 relative z-30">
          <div className="mb-12 md:mb-16 relative">
            <h1 className="text-3xl font-bold text-white md:text-3xl text-center px-2 m-4">
              Proyectos
            </h1>
            <p className="text-xl text-gray-100 text-center">
              Todos los proyectos en esta lista los he desarrollado y liderado
              con mucho entusiasmo.
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
              className="bg-white px-6 rounded-lg h-auto transform transition duration-300 project-card relative z-20"
              style={{
                opacity:
                  hoveredIndex === null || hoveredIndex === index ? 1 : 0.65,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a href={project.link} target="_blank" className="block">
                <div>
                  <h3 className="text-lg font-semibold text-black">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-md">{project.category}</p>
                </div>
                <div className="mt-4 flex justify-center">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    width={450}
                    height={250}
                    className="rounded-lg"
                  />
                </div>
                <div className="relative">
                  {/* Este div se oculta al hacer hover */}
                  <div
                    className={`${
                      hoveredIndex === index ? "hidden" : "block"
                    } absolute inset-0 flex justify-center items-center sm:mt-0`}
                  >
                    <p className="text-center font-semibold">Saber más</p>
                  </div>

                  {/* Información adicional que aparece con hover */}
                  <div
                    className={`mt-3 transition-opacity duration-500 ease-in-out ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <p className="text-sm text-gray-800 mx-4 my-2 sm:my-0">
                      <strong>Cargo: </strong> {project.occupation}
                    </p>
                    <p className="text-sm text-gray-800 mx-4 mt-1 hidden sm:block">
                      <strong>Descripción: </strong> {project.description}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          {!showAll ? (
            <button
              className="px-6 py-2 font-semibold border-2 rounded-lg duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:border-white border-black dark:text-white text-black hover:scale-105 transform"
              onClick={() => setShowAll(true)}
            >
              Ver más
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
