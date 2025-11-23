import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 max-w-5xl mx-auto p-6">
      <motion.div initial={{ x:-20, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ duration:0.6 }}>
        <h1 className="text-4xl sm:text-5xl font-extrabold">I'm Karim (Kernel‑Hunter) <span className="text-teal-300">👋</span></h1>
        <p className="mt-4 text-gray-300 max-w-xl">Software engineering & AI enthusiast from Tunisia. Systems & security tinkerer, kernel explorer, ethical hacker, and creative maker.</p>
      </motion.div>
      <motion.div initial={{ scale:0.95, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ duration:0.6 }} className="flex justify-center md:justify-end">
        <div className="w-72 h-44 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-4 shadow-lg flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-full bg-teal-300 text-black flex items-center justify-center font-semibold">KM</div>
            <div className="mt-3">
              <div className="text-sm font-semibold">Karim Masmoudi</div>
              <div className="text-xs text-gray-300">Kernel‑Hunter</div>
            </div>
          </div>
          <div className="text-xs text-gray-400">Systems • Security • Creative Tech</div>
        </div>
      </motion.div>
    </section>
  )
}
