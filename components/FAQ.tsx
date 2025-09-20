"use client"

import { motion } from "framer-motion"
import { Disclosure } from "@headlessui/react"
import { ChevronDownIcon } from "lucide-react"

const FAQ = () => {
  const faqs = [
    {
      question: "¿Qué tipo de marcas trabajan?",
      answer:
        "Nos especializamos en streetwear y básicos, pero nos adaptamos a diferentes estilos y necesidades. Trabajamos tanto con marcas emergentes como consolidadas.",
    },
    {
      question: "¿Tienen mínimo de producción?",
      answer:
        "Sí, manejamos mínimos de producción, pero son accesibles y flexibles según el tipo de prenda y complejidad del proyecto. Consultanos por tu caso específico.",
    },
    {
      question: "¿Puedo traer mis propios materiales?",
      answer:
        "Absolutamente. Podés traer tus propios materiales y nosotros nos encargamos del proceso productivo. También ofrecemos asesoramiento sobre la calidad y características de los textiles.",
    },
    {
      question: "¿Cuánto demora la entrega?",
      answer:
        "Los tiempos dependen del tipo de prenda y la cantidad solicitada. Siempre damos tiempos claros y realistas desde el inicio del proyecto, y nos comprometemos a cumplirlos.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Preguntas frecuentes</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <Disclosure key={index} as="div" className="border border-white/10 rounded-lg">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between items-center px-6 py-4 text-left text-white hover:bg-white/5 transition-colors duration-200">
                    <span className="text-lg font-medium">{faq.question}</span>
                    <ChevronDownIcon
                      className={`${open ? "rotate-180" : ""} h-5 w-5 text-white transition-transform duration-200`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
