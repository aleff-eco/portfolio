import React, { useState, useEffect } from "react";
import { experience } from "../data/information";
import "../styles/Experience.css";

export function Experience() {
  const [showMore, setShowMore] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setIsClient(true);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <section id="experience" className="body-font overflow-hidden">
      <div className="container max-w-7xl sm:max-w-full px-20 pt-10 pb-20 mx-auto md:max-w-[80%]">
        <h2 className="text-3xl font-bold mt-12 text-center pt-10">Trayectoria</h2>
        <div className=" divide-y-2 divide-gray-100">
          {experience.map((category, index) => (
            <div
              key={index}
              className={`experience-item py-20 flex flex-wrap md:flex-nowrap fade-in ${
                showMore || index < (windowWidth < 768 ? 1 : 2)
                  ? "show"
                  : "hide"
              }`}
            >
              <div className="md:w-1/4 md:mb-0 mb-10 flex-shrink-0 flex flex-col overflow-hidden">
                <div className="flex items-center">
                  <span className="icon-wrapper pr-2">{category.icon}</span>
                  <a
                    href={category.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold title-font text-xl text-gray-700 hover:underline pr-6 truncate max-w-full"
                  >
                    {category.company}
                  </a>
                </div>
                <span className="mt-8 text-gray-500 text-sm">
                  {category.date}
                </span>
              </div>
              <div className="md:flex-grow pt-6">
                <h3 className="text-lg font-bold text-gray-900 title-font mb-2">
                  {category.title}
                </h3>
                {category.descriptionTitle && (
                  <>
                    {/* <h4 className="font-semibold">
                      {category.descriptionTitle}
                    </h4> */}
                    <p className="mb-2 tracking-wide"><strong>{category.descriptionTech}</strong></p>
                    <ul className="list-disc ml-5 tracking-normal">
                      {category.descriptionPoints?.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </>
                )}
                {!category.descriptionTitle && <p>{category.description}</p>}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-2 fade-in dark:border-white border-black">
          <button
            className="bg-indigo-500 text-white px-4 py-2 font-semibold border-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 dark:border-white border-black dark:text-white text-black"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? (
              "Ver menos"
            ) : (
              <>
                Ver más{" "}
                <span className="dot-bouncing">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
