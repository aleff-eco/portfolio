import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import NotificationButton from "./githubalert";
import { projects } from "../data/information";

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
    <section
      className="p-12 mt-8 mb-0 relative text-center" /* Eliminamos el mb-12 */
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="absolute mt-4 mr-6 right-4 z-20">
        <NotificationButton />
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-4">Proyectos</h2>
      <p className="text-lg text-gray-600 mb-4">Proyectos.</p> {/* Ajustamos el margin-bottom */}

      <button
        id="scroll-left"
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white p-2 bg-gray-600 bg-opacity-70 rounded-full z-10"
      >
        <FaChevronLeft />
      </button>
      <button
        id="scroll-right"
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white p-2 bg-gray-600 bg-opacity-70 rounded-full z-10"
      >
        <FaChevronRight />
      </button>

      <div
        id="scroll-container"
        ref={scrollContainerRef}
        className="flex overflow-hidden space-x-10"
        style={{ width: '100%' }}
      >
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="group block bg-black relative rounded-lg overflow-hidden w-full max-w-[500px] flex-shrink-0"
          >
            <div className="relative sm:p-8 lg:p-8 group">
              <p className="text-sm font-medium uppercase tracking-widest text-red-400 mb-2">{project.category}</p>
              <p className="text-xl font-bold text-white sm:text-2xl mb-4">{project.title}</p>
              {project.image}
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="text-xs sm:text-sm font-bold text-black bg-black bg-opacity-70 p-2 rounded-md mx-2 sm:mx-12 mb-4 sm:mb-12">
                  {project.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
