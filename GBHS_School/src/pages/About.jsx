import React from 'react';

// Mock data - replace with your actual imports
const schoolInfo = {
  name: "Green Valley High School",
  established: "1985"
};

const coreValues = [
  { icon: "🎓", title: "Excellence", description: "Pursuing the highest standards in academics and character" },
  { icon: "🤝", title: "Integrity", description: "Building trust through honesty and ethical behavior" },
  { icon: "💡", title: "Innovation", description: "Embracing creativity and forward-thinking approaches" },
  { icon: "❤️", title: "Compassion", description: "Caring for others and fostering empathy" },
  { icon: "🌍", title: "Global Citizenship", description: "Preparing students for an interconnected world" },
  { icon: "🎯", title: "Leadership", description: "Developing confident and responsible leaders" }
];

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
    <div className="min-h-screen bg-[linear-gradient(to_bottom,rgb(248_250_252),rgb(255_255_255))]">
      {/* Hero Section */}
      <div className="relative bg-[linear-gradient(to_bottom_right,rgb(5_150_105),rgb(13_148_136),rgb(8_145_178))] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              Our Story Since {schoolInfo.established}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              About <span className="text-yellow-300">{schoolInfo.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-50 font-light max-w-3xl mx-auto">
              Where tradition meets innovation in education
            </p>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(248 250 252)"/>
          </svg>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-emerald-500 hover:shadow-2xl transition-shadow duration-300">
            <div className="text-5xl font-bold text-emerald-600 mb-2">
              {new Date().getFullYear() - parseInt(schoolInfo.established)}+
            </div>
            <div className="text-gray-600 font-semibold">Years of Excellence</div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-teal-500 hover:shadow-2xl transition-shadow duration-300">
            <div className="text-5xl font-bold text-teal-600 mb-2">2000+</div>
            <div className="text-gray-600 font-semibold">Current Students</div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-cyan-500 hover:shadow-2xl transition-shadow duration-300">
            <div className="text-5xl font-bold text-cyan-600 mb-2">5000+</div>
            <div className="text-gray-600 font-semibold">Successful Alumni</div>
          </div>
        </div>
      </div>

      {/* Journey Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Educational Journey</h2>
          <div className="w-24 h-1 bg-[linear-gradient(to_right,rgb(16_185_129),rgb(20_184_166))] mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            Founded in <span className="font-semibold text-emerald-600">{schoolInfo.established}</span>, {schoolInfo.name} began as a small institution with a big vision: to provide quality education that empowers students to reach their full potential.
          </p>
          <p>
            Over the decades, we have grown into a premier educational institution, consistently adapting to changing educational needs while maintaining our core values of excellence, integrity, and compassion.
          </p>
          <p>
            Our alumni network spans across the globe, with graduates excelling in medicine, engineering, arts, social sciences, and entrepreneurship. Their success stories are a testament to our commitment to holistic education.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-[linear-gradient(to_bottom_right,rgb(241_245_249),rgb(248_250_252))] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-emerald-500">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To create a transformative educational experience that fosters intellectual curiosity, critical thinking, and ethical values. We aim to prepare students to become responsible global citizens and lifelong learners who contribute positively to society.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-teal-500">
              <div className="text-6xl mb-4">👁️</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be recognized as a leading educational institution that sets the standard for academic excellence, innovative teaching, and holistic development. We envision a community where every student discovers their unique potential and develops the skills to succeed in an ever-changing world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Guiding Principles</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The foundation upon which we build our educational community
          </p>
          <div className="w-24 h-1 bg-[linear-gradient(to_right,rgb(16_185_129),rgb(20_184_166))] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-emerald-500 hover:-translate-y-2"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership Team */}
      <div className="bg-[linear-gradient(to_bottom_right,rgb(236_253_245),rgb(240_253_250),rgb(236_254_255))] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to educational excellence
            </p>
            <div className="w-24 h-1 bg-[linear-gradient(to_right,rgb(16_185_129),rgb(20_184_166))] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {administration.map((admin, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={admin.image}
                  alt={admin.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{admin.name}</h3>
                  <p className="text-emerald-600 font-semibold mb-3">{admin.position}</p>
                  <p className="text-gray-600 text-sm mb-4">{admin.bio}</p>
                  <div className="text-sm text-gray-500 space-y-1">
                    <p><span className="font-semibold">Qualification:</span> {admin.qualification}</p>
                    <p><span className="font-semibold">Experience:</span> {admin.experience}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Facilities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">State-of-the-Art Facilities</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Modern infrastructure designed to enhance learning experiences
          </p>
          <div className="w-24 h-1 bg-[linear-gradient(to_right,rgb(16_185_129),rgb(20_184_166))] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Smart Classrooms", count: "50+", icon: "🏫", color: "emerald" },
            { name: "Science Labs", count: "5", icon: "🔬", color: "teal" },
            { name: "Computer Labs", count: "3", icon: "💻", color: "cyan" },
            { name: "Library", count: "1", icon: "📚", color: "blue" },
            { name: "Sports Complex", count: "1", icon: "⚽", color: "green" },
            { name: "Auditorium", count: "2", icon: "🎭", color: "purple" },
            { name: "Art Studios", count: "3", icon: "🎨", color: "pink" },
            { name: "Cafeteria", count: "2", icon: "🍽️", color: "orange" }
          ].map((facility, index) => (
            <div
              key={index}
              className="group bg-[linear-gradient(to_bottom_right,rgb(255_255_255),rgb(249_250_251))] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center border-t-4 border-emerald-500"
            >
              <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">
                {facility.icon}
              </div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">{facility.count}</div>
              <div className="text-gray-700 font-semibold">{facility.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;