import React, { useEffect, useState } from 'react';
import '../styles/ProfileComponent.css';
import { words } from '@/data/information';

export function ProfileComponent() {
  const [scrollY, setScrollY] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      setTypingSpeed(isDeleting ? 100 : 150);
    };

    const typingTimeout = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, loopNum]);

  return (
    <section className="profile-section min-90vh flex flex-col justify-center items-center bg-gray-100">
      <div className="profile-container text-center md:pt-8 lg:pt-12">
        <img
          src="./profilePic.jpeg"
          alt="Profile"
          className="profile-image w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full mb-4"
        />
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">¡Hola! Soy Aleff.</h2>
        <div className="w-full h-12 flex justify-center items-center">
          <h2 id="typewriter" className="text-xl font-bold ">{text}</h2>
        </div>
        <p className="text-sm md:text-base lg:text-lg mb-4 w-3/4">
          Ingeniero de software con 2 años de experiencia en el desarrollo web, me dedico a crear experiencias y desarrollar soluciones a la medida.
        </p>
        <button href="#contact" className="connect-button text-white py-2 px-4 rounded transition">
          Contactame
        </button>
        <div className={`scroll-down-container ${scrollY > 10 ? 'hidden' : ''} mt-4`}>
          <p className="text-sm">Deslizar</p>
          <div className="mouse-icon mt-2">
            <div className="mouse-wheel w-4 h-8 bg-gray-600 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
