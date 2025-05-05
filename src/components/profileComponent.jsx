// app/components/ProfileComponent.jsx
"use client"

import "../app/globals.css"
import "../styles/ProfileComponent.css"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { words } from "@/data/information"
import { Download, Mail } from "lucide-react"

export function ProfileComponent() {
  const [scrollY, setScrollY] = useState(0)
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  // Detectar scroll para ocultar indicator
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Efecto typewriter
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length
      const fullText = words[i]
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
      const updated = isDeleting
        ? fullText.slice(0, text.length - 1)
        : fullText.slice(0, text.length + 1)
      setText(updated)
      setTypingSpeed(isDeleting ? 100 : 150)
    }
    const t = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(t)
  }, [text, isDeleting, loopNum])

  const scrollToContact = () => {
    const section = document.getElementById("contact")
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleDownloadCV = () => {
    window.open("./Aleff_Espinosa_Cordova.pdf", "_blank")
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="profile-section min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
    >
      <div className="profile-container text-center px-4 md:px-8 z-10 max-w-4xl">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600"
        >
          ¡Hola! Soy Aleff.
        </motion.h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="w-full h-12 flex justify-center items-center mb-4"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 relative">
            <span className="relative">
              {text}
              <motion.span
                className="absolute top-0 right-[-8px] w-[2px] h-full bg-gray-700"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-md sm:text-lg md:text-xl lg:text-xl font-medium text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Ingeniero de software con 3 años de trayectoria en el desarrollo web. Me especializo en crear experiencias
          únicas y soluciones a la medida.
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
            className="connect-button px-6 py-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white font-medium shadow-lg flex items-center gap-2"
          >
            Contactame
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadCV}
            className="download-button px-6 py-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white font-medium shadow-lg flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Descarga mi CV
          </motion.button>
        </motion.div>
      </div>

      {scrollY <= 10 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center z-10">
          <p className="text-sm">Deslizar</p>
          <div className="mouse-icon mt-2">
            <div className="mouse-wheel w-4 h-8 bg-gray-600 rounded" />
          </div>
        </div>
      )}
    </motion.section>
  )
}
