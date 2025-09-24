"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const teamMembers = [
  {
    name: "Maca",
    role: "Owner",
    instagram: "maca_produ",
    avatar: "/equipo/maca.png",
    initials: "MA",
    isOwner: true,
  },
  {
    name: "Gretha",
    role: "Community Manager",
    instagram: "gretha_cm",
    avatar: "/equipo/gretha.png",
    initials: "GR",
    isOwner: false,
  },
]

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-black">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop & Medium Screens */}
        <div className="hidden md:grid md:grid-cols-5 gap-8 lg:gap-12 items-center">

          {/* --------------------------
              BLOQUE DE TEAM CARD COMENTADO
              Se puede habilitar más adelante si se necesita
          -------------------------- */}
          {/*
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-1"
          >
            <div className="border border-gray-700/70 rounded-2xl p-6 shadow-2xl shadow-black/20 backdrop-blur-sm">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">Nuestro Equipo</h3>
                <p className="text-sm text-gray-400">Las personas detrás de Produ Estudio</p>
              </div>

              <div className="space-y-5">
                {teamMembers.map((member, index) => (
                  <a
                    key={index}
                    href={`https://instagram.com/${member.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 group cursor-pointer"
                  >
                    <div
                      className={`flex-shrink-0 rounded-full overflow-hidden ${
                        member.isOwner ? "h-14 w-14" : "h-12 w-12"
                      } border-2 border-gray-600/50 shadow-lg`}
                    >
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        width={member.isOwner ? 56 : 48}
                        height={member.isOwner ? 56 : 48}
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <p
                          className={`font-semibold text-white ${
                            member.isOwner ? "text-lg" : "text-base"
                          } truncate`}
                        >
                          {member.name}
                        </p>
                        <span className="text-gray-500 group-hover:text-[#E1306C] transition-colors duration-200 truncate max-w-[140px] md:max-w-[120px]">
                          @{member.instagram}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mt-1 inline-block px-2 py-1 border border-gray-600 rounded-full text-center">
                        {member.role}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          */}

          {/* Text Content - Center */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-5 lg:col-span-2 text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
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

          {/* Image - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-5 lg:col-span-2 mt-8 lg:mt-0"
          >
            <div className="relative h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden">
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

        {/* Mobile */}
        <div className="md:hidden">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
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

          {/* BLOQUE DE TEAM CARD MOBILE COMENTADO */}
          {/*
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="border border-gray-700/70 rounded-2xl p-4 shadow-2xl shadow-black/20 backdrop-blur-sm">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white mb-1">Nuestro Equipo</h3>
                  <p className="text-xs text-gray-400">Las personas detrás de Produ Estudio</p>
                </div>
                <div className="space-y-4">
                  {teamMembers.map((member, index) => (
                    <a
                      key={index}
                      href={`https://instagram.com/${member.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 group cursor-pointer"
                    >
                      <div
                        className={`flex-shrink-0 rounded-full overflow-hidden ${
                          member.isOwner ? "h-12 w-12" : "h-10 w-10"
                        } border-2 border-gray-600/50 shadow-lg`}
                      >
                        <Image
                          src={member.avatar}
                          alt={member.name}
                          width={member.isOwner ? 48 : 40}
                          height={member.isOwner ? 48 : 40}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className={`font-semibold text-white ${
                            member.isOwner ? "text-base" : "text-sm"
                          } truncate`}
                        >
                          {member.name}
                        </p>
                        <span className="text-gray-500 group-hover:text-[#E1306C] transition-colors duration-200 text-xs truncate max-w-[90px]">
                          @{member.instagram}
                        </span>
                        <p className="text-xs text-gray-400 mt-1 inline-block px-2 py-1 border border-gray-600 rounded-full text-center">
                          {member.role}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64 rounded-2xl overflow-hidden">
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
          */}
        </div>
      </div>
    </section>
  )
}

export default About
