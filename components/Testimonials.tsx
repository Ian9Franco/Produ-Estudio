"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Testimonial {
  id: number
  name: string
  nameColor: string // Added color for each user name
  messages: {
    text: string
    time: string
    isLast?: boolean
  }[]
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sofía",
    nameColor: "#FF6B6B", // Assigned unique color for each user
    messages: [
      { text: "Hola Macaaaa, siii todo HERMOSO", time: "11:12" },
      { text: "llegamos a casa el sábado y ya nos compraron uno", time: "11:12" },
      { text: "sos una genia nos encantó", time: "11:13", isLast: true },
    ],
  },
  {
    id: 2,
    name: "María",
    nameColor: "#4ECDC4",
    messages: [
      { text: "Quedé fascinada con la calidad", time: "14:30" },
      { text: "El acabado es perfecto", time: "14:31", isLast: true },
    ],
  },
  {
    id: 3,
    name: "Ana",
    nameColor: "#45B7D1",
    messages: [
      { text: "Súper recomendable!", time: "09:15" },
      { text: "Entrega rápida y excelente atención", time: "09:16" },
      { text: "Ya les encargué más prendas", time: "09:17", isLast: true },
    ],
  },
  {
    id: 4,
    name: "Carla",
    nameColor: "#96CEB4",
    messages: [
      { text: "Increíble trabajo", time: "16:45" },
      { text: "Superó mis expectativas", time: "16:46", isLast: true },
    ],
  },
]

function TypingMessage({ message, onComplete }: { message: string; onComplete: () => void }) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < message.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + message[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 50) // Typing speed
      return () => clearTimeout(timeout)
    } else {
      // Typing completed, wait a bit then call onComplete
      const timeout = setTimeout(onComplete, 800)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, message, onComplete])

  return <span>{displayedText}</span>
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [startX, setStartX] = useState(0)

  useEffect(() => {
    setCurrentMessageIndex(0)
    setIsTyping(true)
  }, [currentIndex])

  const handleMessageComplete = () => {
    const currentTestimonial = testimonials[currentIndex]
    if (currentMessageIndex < currentTestimonial.messages.length - 1) {
      // More messages to show
      setTimeout(() => {
        setCurrentMessageIndex((prev) => prev + 1)
      }, 500)
    } else {
      // All messages shown, advance to next testimonial after delay
      setIsTyping(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 2000)
    }
  }

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX
    const diff = startX - endX

    if (Math.abs(diff) > 50) {
      // Minimum swipe distance
      if (diff > 0) {
        nextTestimonial()
      } else {
        prevTestimonial()
      }
    }
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16 px-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Testimonios reales de quienes confían en nuestro trabajo
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto px-4">
        <div className="overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <div className="flex-1 max-w-md">
                <div className="mb-2 ml-auto max-w-[85%]">
                  <span className="text-sm font-medium" style={{ color: currentTestimonial.nameColor }}>
                    {currentTestimonial.name}
                  </span>
                </div>

                <div className="space-y-2">
                  {currentTestimonial.messages.slice(0, currentMessageIndex + 1).map((message, messageIndex) => (
                    <motion.div
                      key={messageIndex}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                      className={`relative rounded-2xl px-4 py-3 max-w-[85%] ml-auto shadow-lg ${
                        message.isLast ? "rounded-br-md" : ""
                      }`}
                      style={{
                        backgroundColor: "#25D366", // WhatsApp's official dark green color
                      }}
                    >
                      <p className="text-white text-sm leading-relaxed mb-1">
                        {messageIndex === currentMessageIndex && isTyping ? (
                          <TypingMessage message={message.text} onComplete={handleMessageComplete} />
                        ) : (
                          message.text
                        )}
                      </p>
                      <div className="flex justify-end">
                        <span className="text-gray-200 text-xs opacity-70">{message.time}</span>
                      </div>

                      {message.isLast && (
                        <div
                          className="absolute -bottom-0 -right-0 w-0 h-0 border-l-[10px] border-b-[10px] border-b-transparent"
                          style={{ borderLeftColor: "#128C7E" }}
                        ></div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center mt-12">
          <div className="flex space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative group transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 h-3 bg-white rounded-full"
                    : "w-3 h-3 bg-gray-500 rounded-full hover:bg-gray-400 hover:scale-110"
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              >
                {/* Active indicator with subtle glow */}
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-white rounded-full animate-pulse opacity-50"></div>
                )}

                {/* Hover effect for inactive dots */}
                {index !== currentIndex && (
                  <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
