import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { schoolInfo, achievementStats, coreValues } from '../data/constants'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const heroImages = [
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1920&q=80'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroImages.length])

  return (
    <div className="animate-fade-in">
      {/* Hero Section with Image Slider */}
      <section className="relative h-screen  text-white overflow-hidden" style={{minHeight: '600px'}}>
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={image} 
                alt={`School ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Gradient Overlay - Tailwind CSS 4 Colors */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgb(23,37,84,0.9),rgb(76,29,149,0.9),rgb(112,26,117,0.85))]"></div>
        
        {/* Animated Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-fuchsia-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-xl px-6 py-3 rounded-full mb-8 border border-white/20 shadow-lg">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold tracking-wide">Established {schoolInfo.established}</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Nurturing Minds,
              <span className="block mt-2 bg-[linear-gradient(90deg,#22d3ee,#60a5fa,#a78bfa)] bg-clip-text text-transparent">
                Govt Boys High School Tharushah
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-white/85 mb-10 max-w-2xl leading-relaxed">
              At {schoolInfo.name}, we combine academic excellence with character building 
              to prepare students for success in a rapidly changing world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/registration" className="group px-8 py-4 rounded-2xl bg-[linear-gradient(90deg,#06b6d4,#3b82f6,#8b5cf6)] text-white font-bold text-lg shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
                <span className="flex items-center justify-center gap-2">
                  🚀 Start Your Journey
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link to="/about" className="px-8 py-4 rounded-2xl border-2 border-white/60 backdrop-blur-xl bg-white/10 text-white font-bold text-lg hover:bg-white/20 hover:border-white/80 transition-all duration-300 hover:scale-105 shadow-lg">
                📖 Discover More
              </Link>
            </div>
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-12 bg-[linear-gradient(90deg,#22d3ee,#a78bfa)] shadow-lg shadow-cyan-500/50' 
                  : 'w-2.5 bg-white/40 hover:bg-white/70 hover:w-8'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[linear-gradient(135deg,#f8fafc,#dbeafe,#ede9fe)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievementStats.map((stat, index) => (
              <div key={index} className="group text-center p-8 rounded-3xl bg-white/80 backdrop-blur-sm
                                        border-2 border-blue-100 hover:border-violet-400 
                                        hover:shadow-2xl hover:shadow-violet-500/20 
                                        transition-all duration-500 hover:-translate-y-3">
                <div className="text-6xl mb-5 group-hover:scale-125 transition-transform duration-500">{stat.icon}</div>
                <div className="text-5xl font-bold bg-[linear-gradient(135deg,#2563eb,#7c3aed,#c026d3)] bg-clip-text text-transparent mb-3">{stat.value}</div>
                <div className="text-slate-700 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[linear-gradient(135deg,#172554,#4c1d95,#701a75)] text-white relative overflow-hidden">
        {/* Animated Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-fuchsia-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-violet-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              The principles that guide our educational philosophy and daily practices
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 
                                        border-2 border-white/20 hover:bg-white/20 hover:border-white/50
                                        shadow-2xl hover:shadow-3xl transition-all duration-500 
                                        hover:-translate-y-3">
                <div className={`w-20 h-20 rounded-3xl mb-6 flex items-center justify-center 
                              transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-xl
                              ${value.color === 'blue' ? 'bg-[linear-gradient(135deg,#22d3ee,#3b82f6,#8b5cf6)]' : 
                                value.color === 'emerald' ? 'bg-[linear-gradient(135deg,#34d399,#14b8a6,#06b6d4)]' : 
                                'bg-[linear-gradient(135deg,#a78bfa,#a855f7,#d946ef)]'}`}>
                  <span className="text-4xl">{value.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-300 transition-colors">{value.title}</h3>
                <p className="text-white/85 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-[linear-gradient(90deg,#2563eb,#7c3aed,#c026d3)] text-white px-6 py-3 rounded-full 
                              text-sm font-bold mb-6 shadow-xl">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  About Our School
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  A Legacy of Excellence in <span className="bg-[linear-gradient(90deg,#2563eb,#7c3aed,#c026d3)] text-transparent bg-clip-text">Education</span>
                </h2>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  For over {new Date().getFullYear() - parseInt(schoolInfo.established)} years, 
                  {schoolInfo.name} has been at the forefront of educational innovation. 
                  Our commitment to holistic development ensures students excel academically 
                  while developing strong character and leadership skills.
                </p>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  With state-of-the-art facilities, experienced faculty, and a nurturing 
                  environment, we prepare students to become confident, responsible, and 
                  successful global citizens.
                </p>
                <Link to="/about" className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-[linear-gradient(90deg,#2563eb,#7c3aed,#c026d3)] text-white font-bold text-lg shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105 group">
                  Learn Our Story
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="group rounded-3xl overflow-hidden shadow-2xl border-4 border-white hover:border-blue-400 transition-all duration-500 hover:shadow-blue-500/30">
                    <img 
                      src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600" 
                      alt="School Campus" 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="group rounded-3xl overflow-hidden shadow-2xl border-4 border-white hover:border-violet-400 transition-all duration-500 hover:shadow-violet-500/30">
                    <img 
                      src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=600" 
                      alt="Classroom" 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="group rounded-3xl overflow-hidden shadow-2xl border-4 border-white hover:border-fuchsia-400 transition-all duration-500 hover:shadow-fuchsia-500/30">
                    <img 
                      src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=600" 
                      alt="Science Lab" 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="group rounded-3xl overflow-hidden shadow-2xl border-4 border-white hover:border-cyan-400 transition-all duration-500 hover:shadow-cyan-500/30">
                    <img 
                      src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600" 
                      alt="Sports" 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[linear-gradient(90deg,#059669,#0d9488,#0891b2)] text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-300 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xl px-6 py-3 rounded-full mb-6 border border-white/30">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-300"></span>
              </span>
              <span className="text-sm font-bold tracking-wide">🎓 Admissions Open</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Join Our Community?</h2>
            <p className="text-xl mb-10 text-white/95 leading-relaxed">
              Admissions are open for the upcoming academic year. 
              Limited seats available for each grade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/registration" className="group px-10 py-5 rounded-2xl bg-white text-emerald-700 font-bold text-lg hover:bg-slate-50 transition-all duration-300 shadow-2xl hover:shadow-white/50 hover:scale-105">
                <span className="flex items-center justify-center gap-2">
                  🚀 Apply Now
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link to="/contact" className="px-10 py-5 rounded-2xl border-2 border-white backdrop-blur-xl bg-white/15 text-white font-bold text-lg hover:bg-white/25 transition-all duration-300 shadow-xl hover:scale-105">
                📅 Schedule a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home