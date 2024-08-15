import React, { useState } from 'react';
import { experience } from '../data/information';
import '../styles/Experience.css';

export function Experience() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="experience" className="body-font overflow-hidden">
      <div className="container px-24 py-24 mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Experiencia</h2>
        <div className="-my-8 divide-y-2 divide-gray-100">
          {experience.map((category, index) => (
            <div 
              key={index} 
              className={`experience-item py-20 flex flex-wrap md:flex-nowrap fade-in ${showMore || index < (window.innerWidth < 768 ? 1 : 2) ? 'show' : 'hide'}`}
            >
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">CATEGORY</span>
                <span className="mt-1 text-gray-500 text-sm">{category.date}</span>
              </div>
              <div className="md:flex-grow">
                <h3 className="text-lg font-medium text-gray-900 title-font mb-2">{category.title}</h3>
                <p className="leading-relaxed text-sm">{category.description}</p>
                <a className="text-indigo-500 text-sm inline-flex items-center mt-4">
                  Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 fade-in">
          <button
            className="bg-indigo-500 text-white py-2 px-4 rounded transition-transform duration-500 ease-in-out hover:scale-105"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Ver menos' : (
              <>
                Ver más <span className="dot-bouncing">
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
