"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Instagram } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    marca: "",
    tipoPrenda: "",
    cantidad: "",
    consulta: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Construir mensaje para Gmail
      const emailSubject = encodeURIComponent("Consulta desde la web")
      const emailBody = encodeURIComponent(
        `Hola!\n\nMe gustaría cotizar una producción:\n\n` +
          `Nombre: ${formData.nombre}\n` +
          `Marca: ${formData.marca}\n` +
          `Tipo de prenda: ${formData.tipoPrenda}\n` +
          `Cantidad aproximada: ${formData.cantidad || "No especificada"}\n` +
          `Consulta: ${formData.consulta}`
      )

      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=ian_franco1999@hotmail.com&su=${emailSubject}&body=${emailBody}`
      window.open(gmailUrl, "_blank")

      // Limpiar formulario y mostrar éxito
      setSubmitStatus("success")
      setFormData({
        nombre: "",
        marca: "",
        tipoPrenda: "",
        cantidad: "",
        consulta: "",
      })

      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch (error) {
      console.error("Error abriendo Gmail:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    if (name === "cantidad") {
      const numericValue = value.replace(/\D/g, "")
      setFormData({ ...formData, [name]: numericValue })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  return (
    <section id="contacto" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Hablemos de tu proyecto</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Contanos sobre tu marca y te ayudamos a hacer realidad tus diseños
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-white mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-200"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="marca" className="block text-sm font-medium text-white mb-2">
                    Marca *
                  </label>
                  <input
                    type="text"
                    id="marca"
                    name="marca"
                    required
                    value={formData.marca}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-200"
                    placeholder="Nombre de tu marca"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="tipoPrenda" className="block text-sm font-medium text-white mb-2">
                    Tipo de prenda *
                  </label>
                  <select
                    id="tipoPrenda"
                    name="tipoPrenda"
                    required
                    value={formData.tipoPrenda}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-white/10 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23000000' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: "right 0.5rem center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "1.5em 1.5em",
                    }}
                  >
                    <option value="" className="text-gray-500">
                      Seleccionar tipo
                    </option>
                    <option value="remeras" className="text-black">
                      Remeras
                    </option>
                    <option value="buzos" className="text-black">
                      Buzos
                    </option>
                    <option value="pantalones" className="text-black">
                      Pantalones
                    </option>
                    <option value="camperas" className="text-black">
                      Camperas
                    </option>
                    <option value="otros" className="text-black">
                      Otros
                    </option>
                  </select>
                </div>
                <div>
                  <label htmlFor="cantidad" className="block text-sm font-medium text-white mb-2">
                    Cantidad aproximada
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="cantidad"
                      name="cantidad"
                      value={formData.cantidad}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pr-20 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-200"
                      placeholder="50"
                    />
                    {formData.cantidad && (
                      <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                        unidades
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="consulta" className="block text-sm font-medium text-white mb-2">
                  Consulta *
                </label>
                <textarea
                  id="consulta"
                  name="consulta"
                  required
                  rows={4}
                  value={formData.consulta}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Contanos sobre tu proyecto, materiales, tiempos, etc."
                />
              </div>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-green-400 text-sm">¡Consulta enviada exitosamente! Te responderemos pronto.</p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 text-sm">Error al enviar. Por favor, intenta nuevamente.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? "Abriendo Gmail..." : "Enviar consulta"}
              </button>
            </form>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Otras formas de contacto</h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/5491130334881?text=Hola%20Produ%20Estudio!%20Me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20confección.%20¿Podrían%20brindarme%20información?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="h-6 w-6">
                    <svg viewBox="0 0 24 24" className="h-full w-full fill-green-400">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">WhatsApp</p>
                    <p className="text-gray-400">11 3033 4881</p>
                  </div>
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=produ.estudioml@gmail.com&su=Consulta%20desde%20la%20web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                >
                  <Mail className="h-6 w-6 text-blue-400 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400">produ.estudioml@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/produ.estudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                >
                  <Instagram className="h-6 w-6 text-pink-400 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <p className="text-white font-medium">Instagram</p>
                    <p className="text-gray-400">@produ.estudio</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-3">¿Por qué elegirnos?</h4>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Experiencia comprobada en el rubro</li>
                <li>✓ Atención personalizada y cercana</li>
                <li>✓ Tiempos de entrega respetados</li>
                <li>✓ Calidad garantizada en cada prenda</li>
                <li>✓ Asesoramiento integral incluido</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
