import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import DropdownMenu from './DropdownMenu'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/registration', label: 'Registration' },
    { path: '/contact', label: 'Contact Us' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">GBHS</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary-700">GBHS Tharushah</h1>
              <p className="text-sm text-primary-600">Excellence in Education</p>
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-primary-600 bg-primary-300'
                      : 'text-primary-700 hover:text-primary-600 hover:bg-primary-200'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <DropdownMenu />
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-primary-700 hover:bg-primary-50"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-primary-200">
            <div className="flex flex-col gap-2">
              {navItems.map(item => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg font-medium ${
                      isActive
                        ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-500'
                        : 'text-primary-700 hover:bg-primary-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
