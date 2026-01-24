const FacultyCard = ({ faculty }) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl group hover:-translate-y-2 transition-all duration-500 border border-slate-200">
      <div className="p-8">
        <div className="flex flex-col items-center">
          {/* Profile Image Container */}
          <div className="relative mb-6">
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg 
                          group-hover:border-blue-100 transition-colors duration-500">
              <img
                src={faculty.image}
                alt={faculty.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-emerald-500 rounded-full 
                          flex items-center justify-center shadow-lg">
              <span className="text-white font-bold">{faculty.experience.split(' ')[0]}+</span>
            </div>
          </div>
          
          {/* Faculty Info */}
          <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 
                        transition-colors duration-300">
            {faculty.name}
          </h3>
          <p className="text-blue-600 font-semibold text-lg mb-1">{faculty.subject}</p>
          <p className="text-slate-600 mb-6 text-center">{faculty.specialization}</p>
          
          {/* Details Grid */}
          <div className="w-full grid grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-50 p-3 rounded-lg">
              <div className="flex items-center gap-2 text-slate-600 mb-1">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium">Experience</span>
              </div>
              <p className="font-semibold text-slate-800">{faculty.experience}</p>
            </div>
            
            <div className="bg-slate-50 p-3 rounded-lg">
              <div className="flex items-center gap-2 text-slate-600 mb-1">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium">Qualification</span>
              </div>
              <p className="font-semibold text-slate-800 text-sm">{faculty.qualification}</p>
            </div>
          </div>
          
          {/* Email */}
          <div className="w-full bg-blue-50 p-3 rounded-lg mb-6">
            <div className="flex items-center gap-2 text-blue-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-medium truncate">{faculty.email}</span>
            </div>
          </div>
          
          {/* Contact Button */}
          <button className="w-full px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 font-semibold
                           group-hover:bg-blue-600 group-hover:text-white 
                           transition-all duration-300">
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Contact Faculty
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default FacultyCard;