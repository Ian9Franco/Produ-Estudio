"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function TermsOfUsePage() {
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
                    Terminos de uso
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
              <h2 className="text-xl md:text-2xl font-semibold text-white">Aceptación de los Términos</h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Al acceder y utilizar los servicios de Produ Estudio, aceptas estar sujeto a estos Términos de Uso. Si no
              estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-lg p-6 md:p-8 border border-gray-800">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm mr-4">
                2
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">Descripción de los Servicios</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
              Produ Estudio ofrece servicios de confección especializada que incluyen:
            </p>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Confección de prendas para marcas de streetwear
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Producción de básicos de alta calidad
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Desarrollo de prototipos y muestras
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Asesoramiento en procesos de producción textil
              </li>
            </ul>
          </section>

          <section className="bg-gray-900/50 rounded-lg p-6 md:p-8 border border-gray-800">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm mr-4">
                3
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">Proceso de Pedidos</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
              El proceso de trabajo incluye las siguientes etapas:
            </p>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Consulta inicial y análisis de requerimientos
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Desarrollo de presupuesto personalizado
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Confirmación de pedido y condiciones
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Proceso de producción según cronograma acordado
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Control de calidad y entrega
              </li>
            </ul>
          </section>

          <section className="bg-gray-900/50 rounded-lg p-6 md:p-8 border border-gray-800">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm mr-4">
                4
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">Precios y Pagos</h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Los precios se establecen según las especificaciones de cada proyecto. Se requiere un anticipo del 50%
              para iniciar la producción, y el saldo restante se abona contra entrega. Los precios pueden variar según
              la complejidad, materiales y cantidades solicitadas.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-lg p-6 md:p-8 border border-gray-800">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm mr-4">
                5
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">Tiempos de Entrega</h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Los tiempos de entrega se establecen según la complejidad y volumen de cada pedido. Nos comprometemos a
              cumplir con los plazos acordados, aunque factores externos pueden ocasionar demoras que serán comunicadas
              oportunamente.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-lg p-6 md:p-8 border border-gray-800">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm mr-4">
                6
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">Calidad y Garantías</h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Garantizamos la calidad de nuestros productos según los estándares acordados. En caso de defectos de
              confección, nos hacemos responsables de las correcciones necesarias dentro de los 30 días posteriores a la
              entrega.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-lg p-6 md:p-8 border border-gray-800">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm mr-4">
                7
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">Propiedad Intelectual</h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Respetamos los derechos de propiedad intelectual de nuestros clientes. Toda información, diseños y
              especificaciones proporcionadas serán tratadas con confidencialidad y no serán utilizadas para otros
              fines.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-lg p-6 md:p-8 border border-gray-800">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm mr-4">
                8
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">Limitación de Responsabilidad</h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Nuestra responsabilidad se limita al valor del servicio contratado. No seremos responsables por daños
              indirectos, pérdida de ganancias o consecuencias derivadas del uso de nuestros productos.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-lg p-6 md:p-8 border border-gray-800">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm mr-4">
                9
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">Modificaciones</h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en
              vigor inmediatamente después de su publicación en nuestro sitio web.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-lg p-6 md:p-8 border border-gray-800">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm mr-4">
                10
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">Contacto</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
              Para consultas sobre estos Términos de Uso, puedes contactarnos:
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
