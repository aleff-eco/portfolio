import React, { useEffect, useState } from 'react';
import '../styles/ProfileComponent.css'; // Asegúrate de crear y ajustar este archivo CSS

export function ProfileComponent() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="profile-section min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <div className="profile-container text-center p-4 md:p-8 lg:p-12">
                <img 
                    src="./1.jpeg" 
                    alt="Profile" 
                    className="profile-image w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full mb-4"
                />
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Hi I'm Franklin</h2>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                    Building digital products, brands, and experience.
                </h1>
                <p className="text-sm md:text-base lg:text-lg mb-4">
                    A Frontend Developer and Visual Designer with experience in web design, brand identity, and product design.
                </p>
                <button className="connect-button bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                    CONNECT WITH ME
                </button>
            </div>
            <div className={`scroll-down-container ${scrollY > 10 ? 'hidden' : ''} mt-4`}>
                <p className="text-sm">Scroll Down</p>
                <div className="mouse-icon mt-2">
                    <div className="mouse-wheel w-4 h-8 bg-gray-600 rounded"></div>
                </div>
            </div>
        </section>
    );
}
