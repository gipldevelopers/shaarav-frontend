import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 bg-spice-50/30">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative inline-block mb-8">
            <h1 className="text-[12rem] font-display font-black text-clove-100 leading-none select-none">
              404
            </h1>
          </div>

          <h2 className="text-4xl font-display font-bold text-clove-950 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-clove-600 mb-10 max-w-md mx-auto leading-relaxed">
            The page you’re searching for cannot be found at the moment. Continue exploring our range of premium spices crafted with authenticity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 px-8 py-3.5 bg-clove-950 text-spice-50 rounded-full font-bold transition-all hover:bg-clove-800 hover:shadow-lg hover:scale-105 active:scale-95"
            >
              <Home size={18} />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-8 py-3.5 border border-clove-200 text-clove-700 rounded-full font-bold transition-all hover:bg-spice-50 hover:border-clove-300"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="mt-20 flex justify-center gap-8 opacity-20">
          <div className="w-12 h-12 rounded-full bg-copper-500 blur-2xl" />
          <div className="w-16 h-16 rounded-full bg-clove-900 blur-3xl" />
          <div className="w-12 h-12 rounded-full bg-spice-300 blur-2xl" />
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
