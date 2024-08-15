import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import NotificationButton from "./githubalert";
import { projects } from "../data/information"; // Importa la información de proyectos

export function Projects() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="p-24 mt-8 mb-12 relative text-center py-20 md:py-16 lg:py-20">
      <div className="absolute mt-4 mr-6 right-4 z-20">
        <NotificationButton />
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-4">Proyectos</h2>
      <p className="text-lg text-gray-600 mb-12">Proyectos.</p>

      <button
        id="scroll-left"
        onClick={scrollLeft}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full z-10"
      >
        <FaChevronLeft />
      </button>
      <button
        id="scroll-right"
        onClick={scrollRight}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full z-10"
      >
        <FaChevronRight />
      </button>

      <div
        id="scroll-container"
        ref={scrollContainerRef}
        className="flex overflow-hidden space-x-10"
        style={{ width: 'calc(100% - 10px)' }}
      >
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="group block bg-black relative rounded-lg overflow-hidden w-full max-w-[500px] max-h-[320px] flex-shrink-0"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-red-400">{project.category}</p>
              <p className="text-xl font-bold text-white sm:text-2xl">{project.title}</p>
              <div className="mt-40 sm:mt-15 lg:mt-54">
                <div className="translate-y-0 transform opacity-0 transition-all group-hover:-translate-y-6 group-hover:opacity-100">
                  <p className="text-sm text-gray-200">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
