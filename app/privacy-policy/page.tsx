"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"


export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <div className="bg-gradient-to-b from-gray-900 to-black border-b border-gray-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="text-center">
                <div className="flex justify-center mb-8">
                     <motion.div
                        initial={{ opacity: 0, y: -120 }}
                        animate={{ opacity: 1, y: [ -120, 0, -15, 0 ] }} // solo bounce inicial
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        >
                        <motion.div
                            animate={{ y: [0, -6, 0] }} // float suave
                            transition={{ repeat: Infinity, repeatType: "mirror", duration: 3, ease: "easeInOut" }}
                        >
                            <Image
                            src="/images/logo-produ-estudio.png"
                            alt="Produ Estudio Logo"
                            width={160}
                            height={160}
                            className="rounded-lg"
                            />
                        </motion.div>
                        </motion.div>



                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
                    Política de Privacidad
                </h1>
                <p className="text-lg text-gray-400 mb-2">
                    Última actualización: {new Date().toLocaleDateString("es-ES")}
                </p>
                <div className="w-24 h-1 bg-white mx-auto mt-6"></div>
                </div>
            </div>
            </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="space-y-12">
          <section className="bg-gray-900/50 rounded-lg p-6 md:p-8 border border-gray-800">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm mr-4">
                1
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">Información que Recopilamos</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
              En Produ Estudio, recopilamos información que nos proporcionas directamente cuando:
            </p>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Te comunicas con nosotros a través de WhatsApp, Instagram o correo electrónico
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Solicitas información sobre nuestros servicios de confección
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Compartes detalles sobre tu proyecto o marca
              </li>
            </ul>
          </section>

          <section className="bg-gray-900/50 rounded-lg p-6 md:p-8 border border-gray-800">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm mr-4">
                2
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">Cómo Utilizamos tu Información</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
              Utilizamos la información recopilada para:
            </p>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Responder a tus consultas y brindar información sobre nuestros servicios
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Desarrollar presupuestos personalizados para tu proyecto
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Mantener comunicación durante el proceso de confección
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Mejorar nuestros servicios y experiencia del cliente
              </li>
            </ul>
          </section>

          <section className="bg-gray-900/50 rounded-lg p-6 md:p-8 border border-gray-800">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm mr-4">
                3
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">Compartir Información</h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              No vendemos, intercambiamos ni transferimos tu información personal a terceros sin tu consentimiento,
              excepto cuando sea necesario para completar tu pedido o cuando la ley lo requiera.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-lg p-6 md:p-8 border border-gray-800">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm mr-4">
                4
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">Seguridad de los Datos</h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Implementamos medidas de seguridad apropiadas para proteger tu información personal contra acceso no
              autorizado, alteración, divulgación o destrucción.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-lg p-6 md:p-8 border border-gray-800">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm mr-4">
                5
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">Tus Derechos</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">Tienes derecho a:</p>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Acceder a la información personal que tenemos sobre ti
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Solicitar la corrección de información inexacta
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Solicitar la eliminación de tu información personal
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Retirar tu consentimiento en cualquier momento
              </li>
            </ul>
          </section>

          <section className="bg-gray-900/50 rounded-lg p-6 md:p-8 border border-gray-800">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm mr-4">
                6
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">Contacto</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
              Si tienes preguntas sobre esta Política de Privacidad, puedes contactarnos a través de:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-black/50 rounded-lg p-4 border border-gray-700">
                <p className="text-white font-medium text-sm">WhatsApp</p>
                <p className="text-gray-300 text-sm">+54 9 11 3033-4881</p>
              </div>
              <div className="bg-black/50 rounded-lg p-4 border border-gray-700">
                <p className="text-white font-medium text-sm">Instagram</p>
                <p className="text-gray-300 text-sm">@produ_estudio</p>
              </div>
              <div className="bg-black/50 rounded-lg p-4 border border-gray-700">
                <p className="text-white font-medium text-sm">Email</p>
                <p className="text-gray-300 text-sm">info@produEstudio.com</p>
              </div>
            </div>
          </section>

          <section className="bg-gray-900/50 rounded-lg p-6 md:p-8 border border-gray-800">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm mr-4">
                7
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">Cambios a esta Política</h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Te notificaremos
              sobre cambios significativos publicando la nueva política en nuestro sitio web.
            </p>
          </section>

          <section className="bg-gray-900/30 rounded-lg p-6 md:p-8 border border-gray-700 mt-12">
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Este sitio web es mantenido y actualizado por el desarrollador web responsable de su implementación {" "}
                <a
                  href="https://ian-pontorno-portfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:text-gray-300 transition-colors duration-200"
                >
                  Ian Pontorno
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
