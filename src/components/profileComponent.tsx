"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

function easeInOutQuad(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
export function ProfileComponent() {
  const t = useTranslations();
  const words = t.words;

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [speed, setSpeed] = useState(150);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const fullText = words[loopNum % words.length];
    let timeoutId: ReturnType<typeof setTimeout>;

    if (!isDeleting && text.length < fullText.length) {
      setSpeed(150);
      timeoutId = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, speed);
    } else if (!isDeleting && text.length === fullText.length) {
      timeoutId = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text.length > 0) {
      setSpeed(100);
      timeoutId = setTimeout(() => {
        setText(fullText.slice(0, text.length - 1));
      }, speed);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, loopNum, words, speed]);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (!section) return;

    const startY = window.scrollY;
    const offset = -90;
    const targetY = section.getBoundingClientRect().top + startY + offset;

    const distance = targetY - startY;
    const duration = 3600; // ms, ya muy lento
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutQuad(progress);

      window.scrollTo(0, startY + distance * ease);

      if (elapsed < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const handleDownloadCV = () => {
    window.open("./Aleff_Espinosa_Cordova.pdf", "_blank");
  };

  return (
    <motion.section
      id="inicio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="profile-section min-h-[100dvh] flex flex-col justify-center items-center relative overflow-hidden"
    >
      <div className="profile-container text-center px-4 md:px-8 z-10 max-w-4xl">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        >
          {t.profile.greeting}
        </motion.h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="w-full h-12 flex justify-center items-center mb-4"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 relative">
            <span className="relative">
              <span className="text-profile border-r-0 after:content-none">{text}</span>
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-md sm:text-lg md:text-xl lg:text-xl font-medium  max-w-2xl mx-auto leading-relaxed"
        >
          {t.profile.description}
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="connect-button px-6 py-3 font-medium shadow-lg flex items-center gap-2"
          >
            {t.profile.buttonContact}
          </motion.button>
        </motion.div>
      </div>

      {scrollY <= 10 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center z-10">
          <p className="text-sm">{t.profile.scrollIndicator}</p>
          <div className="mouse-icon mt-2">
            <div className="mouse-wheel w-4 h-8 bg-gray-600 rounded" />
          </div>
        </div>
      )}
    </motion.section>
  );
}
