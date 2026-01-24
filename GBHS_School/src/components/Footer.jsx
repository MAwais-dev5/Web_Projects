import { NavLink } from 'react-router-dom'
import { schoolInfo } from '../data/constants'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/registration', label: 'Admissions' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/faculty', label: 'Faculty Directory' },
  ]

  const subjects = [
    { path: '/faculty/sindhi', label: 'Sindhi' },
    { path: '/faculty/physics', label: 'Physics' },
    { path: '/faculty/biology', label: 'Biology' },
    { path: '/faculty/chemistry', label: 'Chemistry' },
    { path: '/faculty/mathematics', label: 'Mathematics' },
    { path: '/faculty/computer-science', label: 'Computer Science' },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* School Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">GBHS</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">GBHS Tharushah</h3>
                <p className="text-slate-300">Excellence in Education Since {schoolInfo.established}</p>
              </div>
            </div>
            <p className="text-slate-300 mb-8 max-w-2xl">
              Shaping young minds for a brighter tomorrow through quality education, 
              modern teaching methodologies, and holistic development.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 font-semibold transition-all duration-300 hover:shadow-lg">
                Visit Campus
              </button>
              <button className="px-6 py-3 rounded-lg border-2 border-white/30 text-white hover:bg-white/10 font-semibold transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-3 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className="text-slate-300 hover:text-white transition-colors duration-300 
                             flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-0 
                                  group-hover:opacity-100 transition-opacity duration-300"></div>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-3 border-b border-white/10">
              Contact Information
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-slate-300 text-sm">{schoolInfo.address}</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-slate-300 text-sm">{schoolInfo.phone}</p>
                  <p className="text-slate-300 text-sm">Admissions: +92-300-7654321</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-violet-500/20 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-slate-300 text-sm">{schoolInfo.email}</p>
                  <p className="text-slate-300 text-sm">admissions@gbhschool.edu.pk</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400">
              &copy; {currentYear} Govt Boys High School Tharushah. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer