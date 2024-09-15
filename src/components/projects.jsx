import Image from "next/image";
import NotificationButton from "./githubalert";
import { projects } from "../data/information";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 bg-slate-900 mx-auto"
      style={{ width: "85%", zIndex: 1 }}
    >
      <div className="relative max-w-full mx-auto px-8">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 relative">
            <h1 className="text-3xl font-semibold text-white md:text-5xl text-center items-center">
              Algunos de mis proyectos
            </h1>
            <p className="text-xl text-gray-100 md:text-2xl text-center">
              Esto es un poco de las cosas que hago en mis tiempos libres:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center z-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white px-6 py-6 rounded-lg h-auto transform transition-transform duration-300 hover:scale-110 hover:z-50 project-card"
              style={{
                transition: "transform 0.3s ease, opacity 0.3s ease",
              }}
              onMouseEnter={() => {
                document.querySelectorAll(".project-card").forEach((el, i) => {
                  if (i !== index) {
                    el.style.opacity = "0.6";
                  }
                });
              }}
              onMouseLeave={() => {
                document.querySelectorAll(".project-card").forEach((el) => {
                  el.style.opacity = "1";
                });
              }}
            >
              <a href={project.link} className="block">
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
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="px-6 py-2 font-semibold border-2 rounded-lg duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:border-white border-black dark:text-white text-black hover:scale-105 transform transition-transform">
            Ver más
          </button>
        </div>
      </div>
    </section>
  );
}
