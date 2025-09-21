"use client"

import { motion, type Variants, easeOut } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"

const Services = () => {
  const [activeService, setActiveService] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [isUserInteracting, setIsUserInteracting] = useState(false)
  const [clickedService, setClickedService] = useState<number | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const services = [
    {
      icon: "🧷",
      title: "Moldería",
      description: "Desarrollo de patrones precisos para cada diseño",
      image: "/images/molderia.jpg",
    },
    {
      icon: "✂️",
      title: "Corte",
      description: "Corte profesional con máxima precisión",
      image: "/images/corte.jpg",
    },
    {
      icon: "🪡",
      title: "Confección",
      description: "Costura de alta calidad con acabados perfectos",
      image: "/images/confeccion.jpg",
    },
    {
      icon: "📦",
      title: "Embolsado final",
      description: "Empaque y presentación lista para la venta",
      image: "/images/embolsado.jpg",
    },
    {
      icon: "💡",
      title: "Asesoramiento integral",
      description: "Consultoría en todo el proceso productivo",
      image: "/images/asesoramiento.jpg",
    },
  ]

  useEffect(() => {
    const startAutoCarousel = () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      intervalRef.current = setInterval(() => {
        if (!isUserInteracting && !isHovering) {
          setActiveService((prev) => (prev + 1) % services.length)
        }
      }, 4000)
    }

    startAutoCarousel()

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [services.length, isUserInteracting, isHovering])

  const handleServiceClick = (index: number) => {
    setActiveService(index)
    setClickedService(index)
    setIsUserInteracting(true)

    // Clear existing timeout
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    // Set new timeout for 5 seconds
    timeoutRef.current = setTimeout(() => {
      setIsUserInteracting(false)
      setClickedService(null)
    }, 5000)
  }

  const handleServiceHover = (index: number) => {
    if (!isUserInteracting) {
      setActiveService(index)
    }
  }

  const handleServicesMouseEnter = () => {
    setIsHovering(true)
  }

  const handleServicesMouseLeave = () => {
    setIsHovering(false)
    // If user was interacting via click, reset the timer
    if (isUserInteracting && timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => {
        setIsUserInteracting(false)
        setClickedService(null)
      }, 5000)
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  // Variants para el contenedor
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // Variants para cada item
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut, // <-- aquí usamos el easing importado
      },
    },
  }

  return (
    <section id="servicios" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Todo lo que tu marca necesita,
            <br />
            en un solo lugar
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Services List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => handleServiceHover(index)}
                onClick={() => handleServiceClick(index)}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                  activeService === index ? "bg-white/15 border-white/30" : "hover:bg-white/10"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-lg overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <motion.div
              key={activeService}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={services[activeService].image || "/placeholder.svg"}
                alt={services[activeService].title}
                fill
                className={`object-cover transition-all duration-500 ${isHovering || isUserInteracting ? "grayscale-0" : "grayscale"}`}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </motion.div>

            {/* Service indicator */}
            <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2">
              <p className="text-white font-semibold">{services[activeService].title}</p>
            </div>

            {/* Dots indicator */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleServiceClick(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeService === index ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Nuestro equipo te acompaña desde el desarrollo inicial hasta el producto terminado, cuidando cada detalle y
            respetando tus tiempos.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
