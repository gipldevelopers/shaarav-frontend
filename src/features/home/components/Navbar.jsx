import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navbar({ navigation }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)

  const productLinks = [
    { label: 'Whole Spices', path: '/products/whole-spices' },
    { label: 'Powder Spices', path: '/products/powder-spices' },
    { label: 'Tea & Coffee', path: '/products/Tea-Coffee' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle closing mobile menu on navigation
  useEffect(() => {
    setIsOpen(false)
  }, [location])

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
          <Link
            to="/"
            className="flex items-center gap-2 text-left"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-clove-950 text-spice-50 font-display font-bold text-lg">
              SGV
            </div>
            <span className="hidden sm:block font-display font-bold text-xl text-clove-950 tracking-wide">
              Shaarav
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 text-sm font-bold text-clove-700 uppercase tracking-wider">
              {navigation.filter(item => !item.hidden).map((item) => (
                <div 
                  key={item.path}
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => item.label === 'Our Product' && setIsDropdownOpen(true)}
                  onMouseLeave={() => item.label === 'Our Product' && setIsDropdownOpen(false)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1 transition-colors hover:text-copper-700 ${
                      location.pathname === item.path || (item.label === 'Our Product' && location.pathname.startsWith('/products/'))
                        ? 'text-copper-700' 
                        : ''
                    }`}
                  >
                    {item.label}
                    {item.label === 'Our Product' && (
                      <ChevronDown size={16} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    )}
                  </Link>

                  {item.label === 'Our Product' && (
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-48 rounded-2xl border border-clove-100 bg-white p-2 shadow-xl"
                        >
                          {productLinks.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className={`block rounded-xl px-4 py-2.5 text-sm font-bold text-clove-700 hover:bg-spice-50 hover:text-copper-700 transition-all ${
                                location.pathname === subItem.path ? 'bg-spice-50 text-copper-700' : ''
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
            <Link
              to="/contact-us"
              className="rounded-full bg-clove-950 px-6 py-2.5 text-sm font-bold text-spice-50 transition-all hover:bg-clove-900 hover:shadow-lg hover:shadow-clove-950/15"
            >
              Get Quote
            </Link>
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
                {navigation.filter(item => !item.hidden).map((item) => (
                  <div key={item.path}>
                    <div className="flex items-center gap-1">
                      <Link
                        to={item.path}
                        className={`flex-grow rounded-xl px-4 py-3 text-left text-sm font-bold text-clove-800 hover:bg-spice-50 ${location.pathname === item.path ? 'text-copper-700 bg-spice-50' : ''}`}
                      >
                        {item.label}
                      </Link>
                      {item.label === 'Our Product' && (
                        <button
                          type="button"
                          onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                          className="p-3 text-clove-950 hover:bg-spice-50 rounded-xl"
                        >
                          <ChevronDown size={20} className={`transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>
                    {item.label === 'Our Product' && isMobileDropdownOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-4 flex flex-col gap-1 mt-1 mb-2 overflow-hidden"
                      >
                        {productLinks.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={`rounded-xl px-4 py-2 text-left text-xs font-bold text-clove-600 hover:bg-spice-50 ${location.pathname === subItem.path ? 'text-copper-700 bg-spice-50' : ''}`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
                <Link
                  to="/contact-us"
                  className="mt-2 w-full rounded-xl bg-clove-950 px-4 py-3 text-center text-sm font-bold text-spice-50"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Navbar
