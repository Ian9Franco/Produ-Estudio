"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const menuItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Preguntas Frecuentes", href: "#faq" },
    { name: "Contacto", href: "#contacto" },
  ]

  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      if (window.location.pathname !== "/") {
        router.push("/")
        setTimeout(() => {
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }, 100)
      } else {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }
    setIsMenuOpen(false)
  }

  const handleLogoClick = () => {
    router.push("/")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={handleLogoClick}
            className="flex-shrink-0 flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            {/* LOGO ANIMADO */}
            <motion.div
              initial={{ x: -250, opacity: 0 }}
              animate={{
                x: [ -250, 0, -15, 0 ], // entra -> rebota contra el título -> vuelve
                opacity: 1,
              }}
              transition={{
                duration: 1.4,
                ease: "easeOut",
                times: [0, 0.7, 0.85, 1],
              }}
              whileInView={{
                y: [0, -6, 0],
                transition: {
                  delay: 1.6,
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 3,
                },
              }}
            >
              <Image
                src="/images/logo-produ-estudio.png"
                alt="Produ Estudio Logo"
                width={68}
                height={68}
                className="rounded"
              />
            </motion.div>

            {/* TÍTULO */}
            <motion.h1
              className="text-xl font-bold text-white"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              PRODU ESTUDIO
            </motion.h1>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col justify-center items-center w-8 h-8 gap-1 relative"
            aria-label="Toggle menu"
          >
            {/* Lineas del burger */}
            <motion.span
              className="block w-6 h-0.5 bg-white rounded"
              animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-white rounded"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-white rounded"
              animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-sm border-b border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
