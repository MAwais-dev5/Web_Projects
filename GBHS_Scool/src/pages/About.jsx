import { schoolInfo, coreValues } from '../data/constants'

const About = () => {
  const administration = [
    { 
      name: "Mr Karim Bux Siyal", 
      position: "Principal", 
      experience: "25 years", 
      qualification: "Ph.D. Education Management",
      bio: "Visionary leader with extensive experience in educational administration",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400"
    },
    { 
      name: "Ms. Sarah Ahmed", 
      position: "Vice Principal", 
      experience: "18 years", 
      qualification: "M.Ed. Curriculum Development",
      bio: "Expert in modern teaching methodologies and student development",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400"
    },
    { 
      name: "Mr. Ali Raza", 
      position: "Head of Academics", 
      experience: "20 years", 
      qualification: "M.Phil. Physics, M.Ed.",
      bio: "Specializes in academic planning and quality assurance",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400"
    },
    { 
      name: "Dr. Fatima Zubair", 
      position: "Dean of Students", 
      experience: "15 years", 
      qualification: "Ph.D. Educational Psychology",
      bio: "Focuses on student welfare and holistic development",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&h=400"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-blue-100 text-blue-700 px-6 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold">Our Story Since {schoolInfo.established}</span>
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              About {schoolInfo.name}
            </h1>
            <p className="text-xl text-slate-600">
              Where tradition meets innovation in education
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{aspectRatio: '4/3'}}>
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200" 
                  alt="School Campus" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="relative -bottom-6 -right-6 w-48 h-48 bg-emerald-500 rounded-3xl 
                            flex items-center justify-center shadow-2xl">
                <div className="text-center text-white absolute">
                  <div className="text-4xl font-bold">
                    {new Date().getFullYear() - parseInt(schoolInfo.established)}+
                  </div>
                  <div className="text-sm font-semibold">Years of Excellence</div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                Our Educational Journey
              </h2>
              <div className="space-y-6 text-slate-600">
                <p>
                  Founded in {schoolInfo.established}, {schoolInfo.name} began as a small 
                  institution with a big vision: to provide quality education that empowers 
                  students to reach their full potential.
                </p>
                <p>
                  Over the decades, we have grown into a premier educational institution, 
                  consistently adapting to changing educational needs while maintaining our 
                  core values of excellence, integrity, and compassion.
                </p>
                <p>
                  Our alumni network spans across the globe, with graduates excelling in 
                  medicine, engineering, arts, social sciences, and entrepreneurship. 
                  Their success stories are a testament to our commitment to holistic education.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="text-2xl font-bold text-blue-700 mb-2">2000+</div>
                  <div className="text-sm font-medium text-slate-700">Current Students</div>
                </div>
                <div className="bg-emerald-50 p-6 rounded-xl">
                  <div className="text-2xl font-bold text-emerald-700 mb-2">5000+</div>
                  <div className="text-sm font-medium text-slate-700">Successful Alumni</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-8">
                <span className="text-3xl text-white">🎯</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To create a transformative educational experience that fosters intellectual 
                curiosity, critical thinking, and ethical values. We aim to prepare students 
                to become responsible global citizens and lifelong learners who contribute 
                positively to society.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200">
              <div className="w-20 h-20 bg-emerald-600 rounded-2xl flex items-center justify-center mb-8">
                <span className="text-3xl text-white">👁️</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To be recognized as a leading educational institution that sets the standard 
                for academic excellence, innovative teaching, and holistic development. 
                We envision a community where every student discovers their unique potential 
                and develops the skills to succeed in an ever-changing world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Guiding Principles</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The foundation upon which we build our educational community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="flex gap-6 p-6 rounded-2xl hover:bg-slate-50 
                                        transition-all duration-300">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center shrink-0
                              ${value.color === 'blue' ? 'bg-blue-100' : 
                                value.color === 'emerald' ? 'bg-emerald-100' : 'bg-violet-100'}`}>
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Administration */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to educational excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {administration.map((admin, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-500 border border-slate-200">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-lg">
                  <img
                    src={admin.image}
                    alt={admin.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{admin.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{admin.position}</p>
                <p className="text-slate-600 text-sm mb-4">{admin.bio}</p>
                <div className="space-y-2">
                  <div className="text-sm text-slate-500">
                    <span className="font-medium">Qualification:</span> {admin.qualification}
                  </div>
                  <div className="text-sm text-slate-500">
                    <span className="font-medium">Experience:</span> {admin.experience}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">State-of-the-Art Facilities</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Modern infrastructure designed to enhance learning experiences
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Smart Classrooms", count: "50+", icon: "🏫" },
              { name: "Science Labs", count: "5", icon: "🔬" },
              { name: "Computer Labs", count: "3", icon: "💻" },
              { name: "Library", count: "1", icon: "📚" },
              { name: "Sports Complex", count: "1", icon: "⚽" },
              { name: "Auditorium", count: "2", icon: "🎭" },
              { name: "Art Studios", count: "3", icon: "🎨" },
              { name: "Cafeteria", count: "2", icon: "🍽️" }
            ].map((facility, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-xl text-center hover:bg-blue-50 
                                        transition-all duration-300">
                <div className="text-3xl mb-4">{facility.icon}</div>
                <div className="text-2xl font-bold text-slate-900 mb-1">{facility.count}</div>
                <div className="text-sm font-medium text-slate-700">{facility.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About