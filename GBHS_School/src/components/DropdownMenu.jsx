import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const subjects = [
    { name: 'Sindhi', path: '/faculty/sindhi' },
    { name: 'Physics', path: '/faculty/physics' },
    { name: 'Biology', path: '/faculty/biology' },
    { name: 'Chemistry', path: '/faculty/chemistry' },
    { name: 'Mathematics', path: '/faculty/mathematics' },
    { name: 'English', path: '/faculty/english' },
    { name: 'Computer Science', path: '/faculty/computer-science' }
  ]

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold 
                  text-slate-700 hover:text-blue-600 hover:bg-slate-50 
                  transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        Faculty
        <svg 
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 z-50 
                       border border-slate-200 animate-scale-in origin-top">
          <div className="px-3 py-2">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Departments
            </p>
          </div>
          <div className="border-t border-slate-100 pt-2">
            {subjects.map((subject) => (
              <NavLink
                key={subject.path}
                to={subject.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `block px-4 py-3 text-sm transition-all duration-200 
                   ${isActive 
                     ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-500' 
                     : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                   }`
                }
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                  <span className="font-medium">{subject.name}</span>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownMenu