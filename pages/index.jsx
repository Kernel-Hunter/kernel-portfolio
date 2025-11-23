import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold mb-4"
      >
        Karim (Kernel‑Hunter)
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.4, duration: 0.7 }}
        className="text-lg text-gray-300 text-center max-w-2xl"
      >
        Software engineering & AI enthusiast. Kernel explorer, ethical hacker, and systems tinkerer.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-10 p-4 bg-white/5 rounded-lg backdrop-blur-md"
      >
        <p>Welcome to my portfolio.</p>
      </motion.div>
    </div>
  )
}