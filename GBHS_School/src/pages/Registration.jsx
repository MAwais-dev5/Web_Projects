import { useState } from 'react'
import { schoolInfo } from '../data/constants'

const Registration = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    motherName: '',
    dateOfBirth: '',
    gender: '',
    class: '',
    email: '',
    phone: '',
    address: '',
    previousSchool: '',
    emergencyContact: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const classes = [
    'Playgroup', 'Nursery', 'KG', 'Class 1', 'Class 2', 'Class 3', 
    'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 
    'Class 9', 'Class 10', 'Class 11', 'Class 12'
  ]

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.studentName.trim()) newErrors.studentName = 'Student name is required'
    if (!formData.fatherName.trim()) newErrors.fatherName = 'Father name is required'
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required'
    if (!formData.gender) newErrors.gender = 'Gender is required'
    if (!formData.class) newErrors.class = 'Class is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.address.trim()) newErrors.address = 'Address is required'
    
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async () => {
    const validationErrors = validateForm()
    
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true)
      
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const registration = {
        ...formData,
        id: Date.now(),
        registrationDate: new Date().toISOString(),
        status: 'pending'
      }
      
      setIsSubmitted(true)
      setIsSubmitting(false)
      setFormData({
        studentName: '',
        fatherName: '',
        motherName: '',
        dateOfBirth: '',
        gender: '',
        class: '',
        email: '',
        phone: '',
        address: '',
        previousSchool: '',
        emergencyContact: ''
      })
      
      setTimeout(() => setIsSubmitted(false), 5000)
    } else {
      setErrors(validationErrors)
    }
  }

  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <section className="relative bg-[linear-gradient(to_bottom_right,rgb(23_37_84),rgb(88_28_135),rgb(112_26_117))] text-white py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-fuchsia-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-xl px-6 py-3 rounded-full mb-8 border border-white/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-300"></span>
              </span>
              <span className="text-sm font-bold tracking-wide">ADMISSIONS OPEN</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Student Registration
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Begin your educational journey with <span className="font-bold bg-[linear-gradient(to_right,rgb(34_211_238),rgb(167_139_250))] bg-clip-text text-transparent">{schoolInfo.name}</span>
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/20">
                <span className="text-2xl">📝</span>
                <span>Easy Application</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/20">
                <span className="text-2xl">⚡</span>
                <span>Quick Response</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/20">
                <span className="text-2xl">🎓</span>
                <span>Limited Seats</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-20 bg-[linear-gradient(to_bottom_right,rgb(248_250_252),rgb(239_246_255),rgb(237_233_254))]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Message */}
          {isSubmitted && (
            <div className="mb-10 p-8 bg-[linear-gradient(to_bottom_right,rgb(236_253_245),rgb(240_253_250))]
                          border-2 border-emerald-300 rounded-3xl text-center 
                          shadow-2xl shadow-emerald-500/20 animate-scale-in">
              <div className="inline-flex items-center justify-center w-20 h-20 
                            bg-[linear-gradient(to_bottom_right,rgb(52_211_153),rgb(20_184_166))] rounded-full mb-6 shadow-xl">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-3">Application Submitted Successfully! 🎉</h3>
              <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
                Thank you for your interest in {schoolInfo.name}. Our admissions team will contact you within 2 business days.
              </p>
              <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-lg border border-emerald-200">
                <span className="text-slate-600 font-medium">Application ID:</span>
                <span className="text-emerald-600 font-bold text-lg">#{Date.now().toString().slice(-8)}</span>
              </div>
            </div>
          )}

          {/* Form Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border-2 border-blue-100">
            <div className="text-center mb-12">
              <div className="inline-block bg-[linear-gradient(to_right,rgb(37_99_235),rgb(124_58_237),rgb(192_38_211))] text-white px-6 py-2 
                            rounded-full text-sm font-bold mb-6 shadow-lg">
                Academic Year 2024-2025
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Admission Application Form
              </h2>
              <p className="text-lg text-slate-600">
                Please fill in all required fields marked with <span className="text-red-500 font-bold">*</span>
              </p>
            </div>

            <div className="space-y-12">
              {/* Personal Information Section */}
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[linear-gradient(to_bottom,rgb(59_130_246),rgb(139_92_246),rgb(192_38_211))] rounded-full"></div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[linear-gradient(to_bottom_right,rgb(59_130_246),rgb(139_92_246))] flex items-center justify-center text-white shadow-lg">
                    <span className="text-xl">👤</span>
                  </div>
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Student Name */}
                  <div className="group">
                    <label className="block text-slate-700 mb-3 font-semibold text-sm">
                      Student Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl border-2 ${
                        errors.studentName 
                          ? 'border-red-300 bg-red-50' 
                          : 'border-slate-200 hover:border-blue-300 focus:border-blue-500'
                      } focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 font-medium`}
                      placeholder="Enter student's full name"
                    />
                    {errors.studentName && (
                      <p className="text-red-500 text-sm mt-2 flex items-center gap-2 animate-shake">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {errors.studentName}
                      </p>
                    )}
                  </div>

                  {/* Father Name */}
                  <div className="group">
                    <label className="block text-slate-700 mb-3 font-semibold text-sm">
                      Father's Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl border-2 ${
                        errors.fatherName 
                          ? 'border-red-300 bg-red-50' 
                          : 'border-slate-200 hover:border-blue-300 focus:border-blue-500'
                      } focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 font-medium`}
                      placeholder="Enter father's name"
                    />
                    {errors.fatherName && (
                      <p className="text-red-500 text-sm mt-2 flex items-center gap-2 animate-shake">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {errors.fatherName}
                      </p>
                    )}
                  </div>

                  {/* Mother Name */}
                  <div className="group">
                    <label className="block text-slate-700 mb-3 font-semibold text-sm">
                      Mother's Name
                    </label>
                    <input
                      type="text"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 hover:border-blue-300 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 font-medium"
                      placeholder="Enter mother's name"
                    />
                  </div>

                  {/* Date of Birth */}
                  <div className="group">
                    <label className="block text-slate-700 mb-3 font-semibold text-sm">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl border-2 ${
                        errors.dateOfBirth 
                          ? 'border-red-300 bg-red-50' 
                          : 'border-slate-200 hover:border-blue-300 focus:border-blue-500'
                      } focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 font-medium`}
                    />
                    {errors.dateOfBirth && (
                      <p className="text-red-500 text-sm mt-2 flex items-center gap-2 animate-shake">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {errors.dateOfBirth}
                      </p>
                    )}
                  </div>

                  {/* Gender */}
                  <div className="group">
                    <label className="block text-slate-700 mb-3 font-semibold text-sm">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl border-2 ${
                        errors.gender 
                          ? 'border-red-300 bg-red-50' 
                          : 'border-slate-200 hover:border-blue-300 focus:border-blue-500'
                      } focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 font-medium`}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.gender && (
                      <p className="text-red-500 text-sm mt-2 flex items-center gap-2 animate-shake">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {errors.gender}
                      </p>
                    )}
                  </div>

                  {/* Class */}
                  <div className="group">
                    <label className="block text-slate-700 mb-3 font-semibold text-sm">
                      Class Applying For <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="class"
                      value={formData.class}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl border-2 ${
                        errors.class 
                          ? 'border-red-300 bg-red-50' 
                          : 'border-slate-200 hover:border-blue-300 focus:border-blue-500'
                      } focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 font-medium`}
                    >
                      <option value="">Select Class</option>
                      {classes.map((cls, index) => (
                        <option key={index} value={cls}>{cls}</option>
                      ))}
                    </select>
                    {errors.class && (
                      <p className="text-red-500 text-sm mt-2 flex items-center gap-2 animate-shake">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {errors.class}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Contact Information Section */}
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[linear-gradient(to_bottom,rgb(139_92_246),rgb(192_38_211),rgb(236_72_153))] rounded-full"></div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[linear-gradient(to_bottom_right,rgb(139_92_246),rgb(192_38_211))] flex items-center justify-center text-white shadow-lg">
                    <span className="text-xl">📞</span>
                  </div>
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-slate-700 mb-3 font-semibold text-sm">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl border-2 ${
                        errors.email 
                          ? 'border-red-300 bg-red-50' 
                          : 'border-slate-200 hover:border-blue-300 focus:border-blue-500'
                      } focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 font-medium`}
                      placeholder="example@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-2 flex items-center gap-2 animate-shake">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="group">
                    <label className="block text-slate-700 mb-3 font-semibold text-sm">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl border-2 ${
                        errors.phone 
                          ? 'border-red-300 bg-red-50' 
                          : 'border-slate-200 hover:border-blue-300 focus:border-blue-500'
                      } focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 font-medium`}
                      placeholder="+92-XXX-XXXXXXX"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-2 flex items-center gap-2 animate-shake">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="group">
                    <label className="block text-slate-700 mb-3 font-semibold text-sm">
                      Emergency Contact
                    </label>
                    <input
                      type="tel"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 hover:border-blue-300 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 font-medium"
                      placeholder="Emergency contact number"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-slate-700 mb-3 font-semibold text-sm">
                      Previous School (if any)
                    </label>
                    <input
                      type="text"
                      name="previousSchool"
                      value={formData.previousSchool}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 hover:border-blue-300 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 font-medium"
                      placeholder="Name of previous school"
                    />
                  </div>
                </div>

                <div className="mt-6 group">
                  <label className="block text-slate-700 mb-3 font-semibold text-sm">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-5 py-4 rounded-xl border-2 ${
                      errors.address 
                        ? 'border-red-300 bg-red-50' 
                        : 'border-slate-200 hover:border-blue-300 focus:border-blue-500'
                    } focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 font-medium resize-none`}
                    placeholder="Enter complete address with city and postal code"
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-2 animate-shake">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.address}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`group w-full px-10 py-6 rounded-2xl bg-[linear-gradient(to_right,rgb(37_99_235),rgb(124_58_237),rgb(192_38_211))] text-white font-bold text-lg shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing Application...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-3">
                      Submit Application
                      <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  )}
                </button>
                
                <p className="mt-6 text-sm text-slate-500 text-center leading-relaxed">
                  By submitting this form, you agree to our 
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold mx-1 hover:underline">Terms of Service</a>
                  and
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold ml-1 hover:underline">Privacy Policy</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[linear-gradient(to_bottom_right,rgb(248_250_252),rgb(219_234_254))] rounded-3xl p-10 lg:p-12 shadow-xl border-2 border-blue-100">
            <h3 className="text-4xl font-bold text-center mb-4 bg-[linear-gradient(to_right,rgb(29_78_216),rgb(109_40_217),rgb(192_38_211))] bg-clip-text text-transparent">
              Required Documents for Admission
            </h3>
            <p className="text-center text-slate-600 mb-12 text-lg">
              Please prepare the following documents for a smooth admission process
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-12 h-12 bg-[linear-gradient(to_bottom_right,rgb(59_130_246),rgb(139_92_246))] rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">📄</span>
                  </div>
                  Mandatory Documents
                </h4>
                <ul className="space-y-4">
                  {[
                    "Original birth certificate",
                    "Previous school leaving certificate",
                    "4 recent passport-sized photographs",
                    "Parent/guardian CNIC copy (both sides)",
                    "Medical fitness certificate",
                    "B-Form or Child Registration Certificate"
                  ].map((doc, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <div className="w-6 h-6 rounded-lg bg-[linear-gradient(to_bottom_right,rgb(52_211_153),rgb(20_184_166))] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md group-hover:scale-110 transition-transform">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-violet-100 hover:shadow-xl transition-all duration-300">
                <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-12 h-12 bg-[linear-gradient(to_bottom_right,rgb(139_92_246),rgb(217_70_239))] rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">📋</span>
                  </div>
                  Admission Process
                </h4>
                <div className="space-y-5">
                  {[
                    { step: "1", title: "Form Submission", desc: "Complete and submit this form", color: "bg-[linear-gradient(to_bottom_right,rgb(59_130_246),rgb(6_182_212))]" },
                    { step: "2", title: "Document Verification", desc: "Submit required documents", color: "bg-[linear-gradient(to_bottom_right,rgb(139_92_246),rgb(168_85_247))]" },
                    { step: "3", title: "Assessment Test", desc: "Academic evaluation (if applicable)", color: "bg-[linear-gradient(to_bottom_right,rgb(217_70_239),rgb(236_72_153))]" },
                    { step: "4", title: "Parent Interview", desc: "Meeting with parents", color: "bg-[linear-gradient(to_bottom_right,rgb(16_185_129),rgb(20_184_166))]" },
                    { step: "5", title: "Admission Decision", desc: "Notification within 7 days", color: "bg-[linear-gradient(to_bottom_right,rgb(245_158_11),rgb(249_115_22))]" }
                  ].map((process) => (
                    <div key={process.step} className="flex gap-4 group hover:bg-slate-50 p-3 rounded-xl transition-all duration-300">
                      <div className={`w-12 h-12 ${process.color} rounded-xl 
                                    flex items-center justify-center flex-shrink-0 font-bold text-white text-lg shadow-lg group-hover:scale-110 transition-transform`}>
                        {process.step}
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-900 mb-1">{process.title}</h5>
                        <p className="text-sm text-slate-600">{process.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-8 bg-[linear-gradient(to_bottom_right,rgb(239_246_255),rgb(245_243_255))] rounded-2xl border-2 border-blue-200 shadow-lg">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 bg-[linear-gradient(to_bottom_right,rgb(251_191_36),rgb(249_115_22))] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl">
                  <span className="text-3xl">⏰</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                    Important Note
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  </h4>
                  <p className="text-slate-700 leading-relaxed mb-4 text-base">
                    Admissions are processed on a <span className="font-bold text-blue-700">first-come, first-served basis</span>. 
                    Early application is recommended as seats are limited for each grade level.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-5">
                    <a href="tel:+923007654321" className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-blue-200 hover:border-blue-400 group">
                      <span className="text-xl">📞</span>
                      <span className="font-semibold text-slate-700 group-hover:text-blue-700 transition-colors">+92-300-7654321</span>
                    </a>
                    <a href="mailto:admissions@school.edu" className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-violet-200 hover:border-violet-400 group">
                      <span className="text-xl">📧</span>
                      <span className="font-semibold text-slate-700 group-hover:text-violet-700 transition-colors">admissions@school.edu</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[linear-gradient(to_bottom_right,rgb(23_37_84),rgb(88_28_135),rgb(112_26_117))] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-fuchsia-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl lg:text-5xl font-bold mb-4">Why Choose {schoolInfo.name}?</h3>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Join a community dedicated to excellence in education and character development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🎓", title: "Expert Faculty", desc: "Highly qualified and experienced teachers committed to student success" },
              { icon: "🏆", title: "Proven Results", desc: "100% success rate with top positions in board examinations" },
              { icon: "🌟", title: "Holistic Development", desc: "Focus on academics, sports, arts, and character building" },
              { icon: "💻", title: "Modern Facilities", desc: "State-of-the-art labs, library, and sports infrastructure" }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-[linear-gradient(to_bottom_right,rgb(34_211_238),rgb(59_130_246))] rounded-2xl flex items-center justify-center mb-5 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <span className="text-4xl">{item.icon}</span>
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-white/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[linear-gradient(to_bottom_right,rgb(248_250_252),rgb(239_246_255),rgb(237_233_254))]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold bg-[linear-gradient(to_right,rgb(29_78_216),rgb(109_40_217),rgb(192_38_211))] bg-clip-text text-transparent mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-slate-600 text-lg">Got questions? We've got answers!</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "When is the admission deadline?",
                a: "Admissions are open throughout the year, but we recommend applying early as seats fill up quickly. Priority is given to applications received before March 31st for the upcoming academic year."
              },
              {
                q: "What is the age requirement for admission?",
                a: "Students must be 3+ years for Playgroup, 4+ for Nursery, 5+ for KG, and 6+ for Class 1. Age is calculated as of September 1st of the admission year."
              },
              {
                q: "Is there an entrance test?",
                a: "Yes, for students applying to Class 1 and above, a basic assessment test is conducted to understand the student's academic level. This helps us place students in the appropriate class."
              },
              {
                q: "What are the fee payment options?",
                a: "We offer flexible payment plans including monthly, quarterly, and annual payment options. Fee details will be provided during the admission process."
              },
              {
                q: "Do you provide transportation?",
                a: "Yes, we have a comprehensive transportation network covering major areas of the city. Route details and transport fees will be shared upon request."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100 hover:border-violet-300 hover:shadow-xl transition-all duration-300">
                <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[linear-gradient(to_bottom_right,rgb(59_130_246),rgb(139_92_246))] flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg">
                    Q
                  </span>
                  {faq.q}
                </h4>
                <p className="text-slate-600 leading-relaxed pl-11">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Still have questions?</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[linear-gradient(to_right,rgb(37_99_235),rgb(124_58_237),rgb(192_38_211))] text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Contact Admissions Office
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Registration