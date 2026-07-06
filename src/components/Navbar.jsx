import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { mainNavLinks } from '../data/navData'
import { AppIcon } from './icons/AppIcon'

function isLinkActive(pathname, link) {
  if (link.children) {
    return link.children.some((child) => pathname === child.path)
  }
  return pathname === link.path
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [visaOpen, setVisaOpen] = useState(false)
  const [mobileVisaOpen, setMobileVisaOpen] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef(null)

  useEffect(() => {
    setMobileOpen(false)
    setVisaOpen(false)
    setMobileVisaOpen(false)
  }, [location])

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setVisaOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const linkClass = (active) =>
    `px-2 py-2 rounded-lg text-xs font-semibold transition-all duration-200 whitespace-nowrap ${
      active ? 'text-red-600 bg-red-50' : 'text-red-600 hover:text-red-700 hover:bg-red-50'
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="container-custom flex items-center justify-between h-24 px-4 md:px-8">
        <Link to="/" className="flex items-center flex-shrink-0">
          <img
            src="/logo.png"
            alt="Maverick Ghouse Logo"
            className="h-20 w-52 md:h-24 md:w-60 object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>

        <nav className="hidden xl:flex items-center gap-0.5">
          {mainNavLinks.map((link) =>
            link.children ? (
              <div
                key={link.name}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setVisaOpen(true)}
                onMouseLeave={() => setVisaOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setVisaOpen(!visaOpen)}
                  className={`${linkClass(isLinkActive(location.pathname, link))} inline-flex items-center gap-1`}
                  aria-expanded={visaOpen}
                  aria-haspopup="true"
                >
                  {link.name}
                  <span className={`text-[10px] transition-transform duration-200 ${visaOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>
                <AnimatePresence>
                  {visaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 min-w-[180px] bg-white rounded-xl shadow-lg border border-gray-100 py-2 overflow-hidden"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-4 py-2.5 text-xs font-semibold transition-colors ${
                            location.pathname === child.path
                              ? 'text-red-600 bg-red-50'
                              : 'text-red-600 hover:bg-red-50'
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={linkClass(location.pathname === link.path)}
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        <div className="hidden xl:flex items-center gap-4 flex-shrink-0">
          <Link
            to="/contact"
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-xs font-semibold transition-all duration-300 whitespace-nowrap"
          >
            Book Free Consultation
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden p-2 rounded-lg text-red-600"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <AppIcon name="x" size="lg" /> : <AppIcon name="menu" size="lg" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-t border-gray-200 overflow-hidden max-h-[80vh] overflow-y-auto"
          >
            <nav className="container-custom px-4 py-4 flex flex-col gap-1">
              {mainNavLinks.map((link) =>
                link.children ? (
                  <div key={link.name}>
                    <button
                      type="button"
                      onClick={() => setMobileVisaOpen(!mobileVisaOpen)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isLinkActive(location.pathname, link) ? 'text-red-600 bg-red-50' : 'text-red-600 hover:bg-red-50'
                      }`}
                    >
                      {link.name}
                      <span className={`text-xs transition-transform duration-200 ${mobileVisaOpen ? 'rotate-180' : ''}`}>▼</span>
                    </button>
                    <AnimatePresence>
                      {mobileVisaOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 mt-1 flex flex-col gap-1 overflow-hidden"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                                location.pathname === child.path ? 'text-red-600 bg-red-50' : 'text-red-600 hover:bg-red-50'
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === link.path ? 'text-red-600 bg-red-50' : 'text-red-600 hover:bg-red-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}

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
