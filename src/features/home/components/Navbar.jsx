import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

function Navbar({ navigation, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigate = (sectionId) => {
    setIsOpen(false)
    onNavigate(sectionId)
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-clove-200/70 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-2 text-left"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-clove-950 text-spice-50 font-display font-bold text-lg">
              SGV
            </div>
            <span className="hidden sm:block font-display font-bold text-xl text-clove-950 tracking-wide">
              Shaarav
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 text-sm font-semibold text-clove-700">
              {navigation.map((item) => (
                <button
                  key={item.sectionId}
                  type="button"
                  onClick={() => handleNavigate(item.sectionId)}
                  className="transition-colors hover:text-clove-950"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => handleNavigate('contact')}
              className="rounded-full bg-clove-950 px-5 py-2.5 text-sm font-semibold text-spice-50 transition-all hover:bg-clove-900 hover:shadow-lg hover:shadow-clove-950/15"
            >
              Get Quote
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-clove-950 hover:text-clove-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-4 rounded-2xl border border-clove-200 bg-white/95 p-4 backdrop-blur-xl shadow-lg"
            >
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <button
                    key={item.sectionId}
                    type="button"
                    onClick={() => handleNavigate(item.sectionId)}
                    className="rounded-xl px-4 py-3 text-left text-sm font-semibold text-clove-800 hover:bg-spice-50"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => handleNavigate('contact')}
                  className="mt-2 w-full rounded-xl bg-clove-950 px-4 py-3 text-sm font-semibold text-spice-50"
                >
                  Get Quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Navbar
