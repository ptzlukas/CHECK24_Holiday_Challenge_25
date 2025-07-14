// app/components/Landing/StartScene.tsx
'use client'
import { motion } from 'framer-motion'

export default function StartScene() {
  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center justify-center">
      <motion.div
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        ✈️ Welcome to Your Holiday Adventure
      </motion.div>
      <motion.button
        className="mt-10 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
        whileHover={{ scale: 1.05 }}
        onClick={() => window.location.href = '/search'}
      >
        Let’s Start →
      </motion.button>
    </div>
  )
}
