"use client"

import { Instagram } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer className="bg-black border-t border-white/10 py-12" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              {/* Animación SOLO en el logo */}
             <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={isInView ? { 
                opacity: 1, 
                x: [ -80, 0, -10, 0 ] 
              } : {}}
              transition={{ 
                duration: 0.8, // más rápido que el header
                ease: "easeOut",
                times: [0, 0.6, 0.8, 1] 
              }}
            >
              <Image
                src="/images/logo-produ-estudio.png"
                alt="Produ Estudio Logo"
                width={96}
                height={96}
                className="rounded"
              />
            </motion.div>

              {/* El título queda fijo */}
              <h3 className="text-xl font-bold text-white">PRODU ESTUDIO</h3>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Fabricamos prendas para marcas de streetwear y básicos con calidad, compromiso y confianza.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <a href="/terms-of-use" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Seguinos</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/produ.estudio"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
              >
                <Instagram className="h-5 w-5 text-pink-400 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a
                href="https://wa.me/5491130334881?text=Hola%20Produ%20Estudio!%20Me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20confección.%20¿Podrían%20brindarme%20información?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="h-5 w-5 group-hover:scale-110 transition-transform duration-200">
                  <svg viewBox="0 0 24 24" className="h-full w-full fill-green-400">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="text-center space-y-2">
            <p className="text-gray-400">© 2025 Produ Estudio – Todos los derechos reservados.</p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xs text-gray-500 font-serif italic"
            >
              Sitio desarrollado con{" "}
              <span className="text-red-400 text-sm animate-heartbeat">♥</span> por{" "}
              <a
                href="https://ian9franco.github.io/Portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200 underline decoration-dotted underline-offset-2"
              >
                Ian Pontorno
              </a>
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
