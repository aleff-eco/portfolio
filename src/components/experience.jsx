import React, { useState } from 'react';

export function Experience() {
    const [showMore, setShowMore] = useState(false);

    const categories = [
        {
            title: 'Bitters hashtag waistcoat fashion axe chia unicorn',
            date: '12 Jun 2019',
            description: 'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.'
        },
        {
            title: 'Meditation bushwick direct trade taxidermy shaman',
            date: '12 Jun 2019',
            description: 'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.'
        },
        {
            title: 'Woke master cleanse drinking vinegar salvia',
            date: '12 Jun 2019',
            description: 'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.'
        }
    ];

    return (
        <section className=" body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Experiencia</h2>
                <div className="-my-8 divide-y-2 divide-gray-100">
                    {categories.slice(0, showMore ? categories.length : 2).map((category, index) => (
                        <div key={index} className="py-20 flex flex-wrap md:flex-nowrap fade-in">
                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span className="font-semibold title-font text-gray-700">CATEGORY</span>
                                <span className="mt-1 text-gray-500 text-sm">{category.date}</span>
                            </div>
                            <div className="md:flex-grow">
                                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{category.title}</h2>
                                <p className="leading-relaxed">{category.description}</p>
                                <a className="text-indigo-500 inline-flex items-center mt-4">
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
                        {showMore ? 'Ver menos' : 'Ver más'}
                    </button>
                </div>
            </div>
        </section>
    );
}
