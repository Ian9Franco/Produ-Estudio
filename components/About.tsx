"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Conocé quiénes
              <br />
              estamos detrás
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Produ Estudio nace con el objetivo de acompañar a marcas emergentes y consolidadas en el desarrollo de sus
              colecciones. Tenemos experiencia en el rubro, entendemos las necesidades del mercado y apostamos por una
              forma de trabajo profesional, clara y cercana.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Creemos en la importancia de construir relaciones duraderas con nuestros clientes, basadas en la confianza
              mutua y la excelencia en cada proyecto.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/textile-workshop-interior-with-sewing-equipment-an.jpg"
                alt="Taller de confección Produ Estudio"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
