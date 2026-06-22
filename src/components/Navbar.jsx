import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../data/siteData'
import { AppIcon } from './icons/AppIcon'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="container-custom flex items-center justify-between h-20 px-4 md:px-8">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Maverick Ghouse Logo"
            className="h-16 w-40 object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                location.pathname === link.path
                  ? 'text-red-600 bg-red-50'
                  : 'text-red-600 hover:text-red-700 hover:bg-red-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden xl:flex items-center gap-4">
          <Link
            to="/contact"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-xs font-semibold transition-all duration-300"
          >
            Book Free Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden p-2 rounded-lg text-red-600"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <AppIcon name="x" size="lg" />
          ) : (
            <AppIcon name="menu" size="lg" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <nav className="container-custom px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-red-600 bg-red-50'
                      : 'text-red-600 hover:bg-red-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/contact"
                className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-center text-sm font-semibold"
              >
                Book Free Consultation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}