// client/src/pages/Registration.jsx
import React, { useState } from 'react';
import { 
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Upload,
  FileText,
  CheckCircle,
  AlertCircle,
  Download,
  Eye,
  EyeOff,
  Lock,
  Users,
  BookOpen,
  Home,
  CreditCard,
  Save,
  Send,
  X,
  ChevronRight,
  UserPlus,
  LogIn
} from 'lucide-react';
import '../styles/registration.css';

const Registration = ({ isLoggedIn, user }) => {
  const [step, setStep] = useState(isLoggedIn ? 1 : 0);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [applicationNumber, setApplicationNumber] = useState(null);

  // Authentication form data
  const [authData, setAuthData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  // Registration form data
  const [formData, setFormData] = useState({
    // Student Information
    studentName: '',
    dateOfBirth: '',
    gender: '',
    bloodGroup: '',
    nationality: 'Pakistani',
    religion: '',
    
    // Applying For
    applyingGrade: '',
    section: '',
    academicYear: '2024-2025',
    
    // Previous School
    previousSchool: '',
    previousSchoolAddress: '',
    lastGrade: '',
    reasonForLeaving: '',
    
    // Parent/Guardian Information
    fatherName: '',
    fatherOccupation: '',
    fatherPhone: '',
    fatherEmail: '',
    motherName: '',
    motherOccupation: '',
    motherPhone: '',
    motherEmail: '',
    guardianName: '',
    guardianRelation: '',
    guardianPhone: '',
    
    // Address
    street: '',
    city: '',
    state: 'Sindh',
    zipCode: '',
    country: 'Pakistan',
    
    // Documents
    birthCertificate: null,
    previousMarksheet: null,
    transferCertificate: null,
    studentPhoto: null,
    fatherCNIC: null,
    motherCNIC: null
  });

  const [errors, setErrors] = useState({});

  const sections = ['Primary', 'Middle', 'Senior'];
  const grades = {
    Primary: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'],
    Middle: ['Class 6', 'Class 7', 'Class 8'],
    Senior: ['O-Level Year 1', 'O-Level Year 2', 'A-Level Year 1 (AS)', 'A-Level Year 2 (A2)']
  };

  const handleAuthChange = (e) => {
    setAuthData({
      ...authData,
      [e.target.name]: e.target.value
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors({
          ...errors,
          [name]: 'File size should be less than 5MB'
        });
        return;
      }
      
      setFormData({
        ...formData,
        [name]: file
      });
      
      if (errors[name]) {
        setErrors({
          ...errors,
          [name]: ''
        });
      }
    }
  };

  const validateStep = (stepNumber) => {
    const newErrors = {};
    
    if (stepNumber === 0) {
      if (!authData.fullName) newErrors.fullName = 'Full name is required';
      if (!authData.email) newErrors.email = 'Email is required';
      if (!authData.phone) newErrors.phone = 'Phone number is required';
      if (!authData.password) newErrors.password = 'Password is required';
      if (authData.password !== authData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }
    
    if (stepNumber === 1) {
      if (!formData.studentName) newErrors.studentName = 'Student name is required';
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
      if (!formData.gender) newErrors.gender = 'Gender is required';
    }
    
    if (stepNumber === 2) {
      if (!formData.applyingGrade) newErrors.applyingGrade = 'Grade is required';
      if (!formData.section) newErrors.section = 'Section is required';
    }
    
    if (stepNumber === 3) {
      if (!formData.fatherName) newErrors.fatherName = 'Father name is required';
      if (!formData.fatherPhone) newErrors.fatherPhone = 'Father phone is required';
      if (!formData.motherName) newErrors.motherName = 'Mother name is required';
    }
    
    if (stepNumber === 4) {
      if (!formData.street) newErrors.street = 'Street address is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.zipCode) newErrors.zipCode = 'Zip code is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(step)) {
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const appNumber = `APP${new Date().getFullYear()}${String(Math.floor(Math.random() * 10000)).padStart(5, '0')}`;
      setApplicationNumber(appNumber);
      setShowSuccess(true);
      setLoading(false);
    }, 2000);
  };

  const downloadPDF = () => {
    // In real app, this would generate and download a PDF
    console.log('Downloading PDF...');
  };

  const steps = [
    { id: 0, title: 'Create Account', icon: <UserPlus /> },
    { id: 1, title: 'Student Info', icon: <User /> },
    { id: 2, title: 'Academic Details', icon: <BookOpen /> },
    { id: 3, title: 'Parent/Guardian', icon: <Users /> },
    { id: 4, title: 'Address', icon: <Home /> },
    { id: 5, title: 'Documents', icon: <FileText /> }
  ];

  if (!isLoggedIn && step === 0) {
    return (
      <div className="registration-page">
        <section className="registration-hero">
          <div className="hero-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Admission Registration</h1>
              <p className="hero-subtitle">Join Excellence International School - Your journey to excellence begins here</p>
            </div>
          </div>
        </section>

        <section className="auth-section section">
          <div className="container">
            <div className="auth-container">
              <div className="auth-header">
                <UserPlus size={48} />
                <h2>Create Your Account</h2>
                <p>Please create an account to proceed with the admission application</p>
              </div>

              <form className="auth-form">
                <div className="form-group">
                  <label className="form-label">
                    <User size={18} />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    className={`form-control ${errors.fullName ? 'error' : ''}`}
                    placeholder="Enter your full name"
                    value={authData.fullName}
                    onChange={handleAuthChange}
                  />
                  {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">
                      <Mail size={18} />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      className={`form-control ${errors.email ? 'error' : ''}`}
                      placeholder="your.email@example.com"
                      value={authData.email}
                      onChange={handleAuthChange}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <Phone size={18} />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className={`form-control ${errors.phone ? 'error' : ''}`}
                      placeholder="+92-300-0000000"
                      value={authData.phone}
                      onChange={handleAuthChange}
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">
                      <Lock size={18} />
                      Password *
                    </label>
                    <div className="form-group">
                      <label className="form-label">State/Province *</label>
                      <input
                        type="text"
                        name="state"
                        className="form-control"
                        placeholder="Enter state"
                        value={formData.state}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Zip/Postal Code *</label>
                      <input
                        type="text"
                        name="zipCode"
                        className={`form-control ${errors.zipCode ? 'error' : ''}`}
                        placeholder="Enter zip code"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                      />
                      {errors.zipCode && <span className="error-message">{errors.zipCode}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Country</label>
                      <input
                        type="text"
                        name="country"
                        className="form-control"
                        value={formData.country}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Documents */}
              {step === 5 && (
                <div className="form-step">
                  <h2 className="step-heading">
                    <FileText size={28} />
                    Required Documents
                  </h2>
                  <p className="step-description">Upload the required documents (Max size: 5MB per file)</p>

                  <div className="documents-grid">
                    <div className="upload-box">
                      <input
                        type="file"
                        id="birthCertificate"
                        name="birthCertificate"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        hidden
                      />
                      <label htmlFor="birthCertificate" className="upload-label">
                        <Upload size={32} />
                        <span>Birth Certificate *</span>
                        {formData.birthCertificate ? (
                          <span className="file-name">{formData.birthCertificate.name}</span>
                        ) : (
                          <span className="upload-hint">Click to upload</span>
                        )}
                      </label>
                    </div>

                    <div className="upload-box">
                      <input
                        type="file"
                        id="previousMarksheet"
                        name="previousMarksheet"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        hidden
                      />
                      <label htmlFor="previousMarksheet" className="upload-label">
                        <Upload size={32} />
                        <span>Previous Marksheet</span>
                        {formData.previousMarksheet ? (
                          <span className="file-name">{formData.previousMarksheet.name}</span>
                        ) : (
                          <span className="upload-hint">Click to upload</span>
                        )}
                      </label>
                    </div>

                    <div className="upload-box">
                      <input
                        type="file"
                        id="transferCertificate"
                        name="transferCertificate"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        hidden
                      />
                      <label htmlFor="transferCertificate" className="upload-label">
                        <Upload size={32} />
                        <span>Transfer Certificate</span>
                        {formData.transferCertificate ? (
                          <span className="file-name">{formData.transferCertificate.name}</span>
                        ) : (
                          <span className="upload-hint">Click to upload</span>
                        )}
                      </label>
                    </div>

                    <div className="upload-box">
                      <input
                        type="file"
                        id="studentPhoto"
                        name="studentPhoto"
                        accept=".jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        hidden
                      />
                      <label htmlFor="studentPhoto" className="upload-label">
                        <Upload size={32} />
                        <span>Student Photo *</span>
                        {formData.studentPhoto ? (
                          <span className="file-name">{formData.studentPhoto.name}</span>
                        ) : (
                          <span className="upload-hint">Click to upload</span>
                        )}
                      </label>
                    </div>

                    <div className="upload-box">
                      <input
                        type="file"
                        id="fatherCNIC"
                        name="fatherCNIC"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        hidden
                      />
                      <label htmlFor="fatherCNIC" className="upload-label">
                        <Upload size={32} />
                        <span>Father's CNIC *</span>
                        {formData.fatherCNIC ? (
                          <span className="file-name">{formData.fatherCNIC.name}</span>
                        ) : (
                          <span className="upload-hint">Click to upload</span>
                        )}
                      </label>
                    </div>

                    <div className="upload-box">
                      <input
                        type="file"
                        id="motherCNIC"
                        name="motherCNIC"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        hidden
                      />
                      <label htmlFor="motherCNIC" className="upload-label">
                        <Upload size={32} />
                        <span>Mother's CNIC</span>
                        {formData.motherCNIC ? (
                          <span className="file-name">{formData.motherCNIC.name}</span>
                        ) : (
                          <span className="upload-hint">Click to upload</span>
                        )}
                      </label>
                    </div>
                  </div>

                  <div className="info-box">
                    <AlertCircle size={20} />
                    <div>
                      <strong>Important:</strong>
                      <p>Please ensure all documents are clear and legible. Accepted formats: PDF, JPG, PNG (Max 5MB each)</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Form Navigation */}
              <div className="form-navigation">
                {step > 1 && (
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={handleBack}
                  >
                    Back
                  </button>
                )}

                {step < 5 && (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleNext}
                  >
                    Continue
                    <ChevronRight size={20} />
                  </button>
                )}

                {step === 5 && (
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <div className="spinner"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Submit Application
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;="password-input">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        className={`form-control ${errors.password ? 'error' : ''}`}
                        placeholder="Create a strong password"
                        value={authData.password}
                        onChange={handleAuthChange}
                      />
                      <button
                        type="button"
                        className="toggle-password"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    {errors.password && <span className="error-message">{errors.password}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <Lock size={18} />
                      Confirm Password *
                    </label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      className={`form-control ${errors.confirmPassword ? 'error' : ''}`}
                      placeholder="Re-enter your password"
                      value={authData.confirmPassword}
                      onChange={handleAuthChange}
                    />
                    {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                  onClick={handleNext}
                >
                  Create Account & Continue
                  <ChevronRight size={20} />
                </button>

                <p className="auth-footer">
                  Already have an account? <a href="#login">Login here</a>
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (showSuccess) {
    return (
      <div className="registration-page">
        <section className="success-section">
          <div className="container">
            <div className="success-container">
              <div className="success-icon">
                <CheckCircle size={80} />
              </div>
              <h1>Application Submitted Successfully!</h1>
              <p className="success-message">
                Your admission application has been received. We will review your application and contact you soon.
              </p>
              
              <div className="application-details">
                <h3>Application Details</h3>
                <div className="detail-item">
                  <strong>Application Number:</strong>
                  <span className="app-number">{applicationNumber}</span>
                </div>
                <div className="detail-item">
                  <strong>Student Name:</strong>
                  <span>{formData.studentName}</span>
                </div>
                <div className="detail-item">
                  <strong>Applying For:</strong>
                  <span>{formData.applyingGrade} - {formData.section} Section</span>
                </div>
                <div className="detail-item">
                  <strong>Submission Date:</strong>
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
              </div>

              <div className="success-actions">
                <button className="btn btn-primary" onClick={downloadPDF}>
                  <Download size={20} />
                  Download Application PDF
                </button>
                <button className="btn btn-outline" onClick={() => window.location.reload()}>
                  Submit Another Application
                </button>
              </div>

              <div className="next-steps">
                <h3>What's Next?</h3>
                <ul>
                  <li>
                    <CheckCircle size={20} />
                    <span>We will review your application within 3-5 business days</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>You will receive an email confirmation with further instructions</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Our admissions team will contact you to schedule an interview</span>
                  </li>
                  <li>
                    <CheckCircle size={20} />
                    <span>Keep your application number for future reference</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="registration-page">
      <section className="registration-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Admission Registration</h1>
            <p className="hero-subtitle">Complete the form below to apply for admission</p>
          </div>
        </div>
      </section>

      <section className="registration-form-section section">
        <div className="container">
          {/* Progress Steps */}
          <div className="progress-steps">
            {steps.filter(s => isLoggedIn || s.id === 0).map((stepItem, index) => (
              <div
                key={stepItem.id}
                className={`progress-step ${step >= stepItem.id ? 'active' : ''} ${step === stepItem.id ? 'current' : ''}`}
              >
                <div className="step-icon">{stepItem.icon}</div>
                <span className="step-title">{stepItem.title}</span>
              </div>
            ))}
          </div>

          {/* Form Content */}
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Student Information */}
              {step === 1 && (
                <div className="form-step">
                  <h2 className="step-heading">
                    <User size={28} />
                    Student Information
                  </h2>
                  <p className="step-description">Please provide accurate information about the student</p>

                  <div className="form-group">
                    <label className="form-label">Student Full Name *</label>
                    <input
                      type="text"
                      name="studentName"
                      className={`form-control ${errors.studentName ? 'error' : ''}`}
                      placeholder="Enter student's full name"
                      value={formData.studentName}
                      onChange={handleInputChange}
                    />
                    {errors.studentName && <span className="error-message">{errors.studentName}</span>}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Date of Birth *</label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        className={`form-control ${errors.dateOfBirth ? 'error' : ''}`}
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                      />
                      {errors.dateOfBirth && <span className="error-message">{errors.dateOfBirth}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Gender *</label>
                      <select
                        name="gender"
                        className={`form-control ${errors.gender ? 'error' : ''}`}
                        value={formData.gender}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.gender && <span className="error-message">{errors.gender}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Blood Group</label>
                      <select
                        name="bloodGroup"
                        className="form-control"
                        value={formData.bloodGroup}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Religion</label>
                      <input
                        type="text"
                        name="religion"
                        className="form-control"
                        placeholder="Enter religion"
                        value={formData.religion}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Nationality</label>
                    <input
                      type="text"
                      name="nationality"
                      className="form-control"
                      placeholder="Enter nationality"
                      value={formData.nationality}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Academic Details */}
              {step === 2 && (
                <div className="form-step">
                  <h2 className="step-heading">
                    <BookOpen size={28} />
                    Academic Details
                  </h2>
                  <p className="step-description">Select the grade and section you're applying for</p>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Section *</label>
                      <select
                        name="section"
                        className={`form-control ${errors.section ? 'error' : ''}`}
                        value={formData.section}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Section</option>
                        {sections.map(section => (
                          <option key={section} value={section}>{section}</option>
                        ))}
                      </select>
                      {errors.section && <span className="error-message">{errors.section}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Grade/Class *</label>
                      <select
                        name="applyingGrade"
                        className={`form-control ${errors.applyingGrade ? 'error' : ''}`}
                        value={formData.applyingGrade}
                        onChange={handleInputChange}
                        disabled={!formData.section}
                      >
                        <option value="">Select Grade</option>
                        {formData.section && grades[formData.section]?.map(grade => (
                          <option key={grade} value={grade}>{grade}</option>
                        ))}
                      </select>
                      {errors.applyingGrade && <span className="error-message">{errors.applyingGrade}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Academic Year</label>
                    <input
                      type="text"
                      name="academicYear"
                      className="form-control"
                      value={formData.academicYear}
                      onChange={handleInputChange}
                      readOnly
                    />
                  </div>

                  <h3 className="sub-heading">Previous School Information</h3>

                  <div className="form-group">
                    <label className="form-label">Previous School Name</label>
                    <input
                      type="text"
                      name="previousSchool"
                      className="form-control"
                      placeholder="Enter previous school name"
                      value={formData.previousSchool}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Previous School Address</label>
                    <input
                      type="text"
                      name="previousSchoolAddress"
                      className="form-control"
                      placeholder="Enter previous school address"
                      value={formData.previousSchoolAddress}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Last Grade Completed</label>
                      <input
                        type="text"
                        name="lastGrade"
                        className="form-control"
                        placeholder="e.g., Class 4"
                        value={formData.lastGrade}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Reason for Leaving</label>
                      <input
                        type="text"
                        name="reasonForLeaving"
                        className="form-control"
                        placeholder="Optional"
                        value={formData.reasonForLeaving}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Parent/Guardian Information */}
              {step === 3 && (
                <div className="form-step">
                  <h2 className="step-heading">
                    <Users size={28} />
                    Parent/Guardian Information
                  </h2>
                  <p className="step-description">Please provide contact information for parents or guardians</p>

                  <h3 className="sub-heading">Father's Information</h3>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Father's Name *</label>
                      <input
                        type="text"
                        name="fatherName"
                        className={`form-control ${errors.fatherName ? 'error' : ''}`}
                        placeholder="Enter father's name"
                        value={formData.fatherName}
                        onChange={handleInputChange}
                      />
                      {errors.fatherName && <span className="error-message">{errors.fatherName}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Occupation</label>
                      <input
                        type="text"
                        name="fatherOccupation"
                        className="form-control"
                        placeholder="Enter occupation"
                        value={formData.fatherOccupation}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        name="fatherPhone"
                        className={`form-control ${errors.fatherPhone ? 'error' : ''}`}
                        placeholder="+92-300-0000000"
                        value={formData.fatherPhone}
                        onChange={handleInputChange}
                      />
                      {errors.fatherPhone && <span className="error-message">{errors.fatherPhone}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        name="fatherEmail"
                        className="form-control"
                        placeholder="email@example.com"
                        value={formData.fatherEmail}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <h3 className="sub-heading">Mother's Information</h3>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Mother's Name *</label>
                      <input
                        type="text"
                        name="motherName"
                        className={`form-control ${errors.motherName ? 'error' : ''}`}
                        placeholder="Enter mother's name"
                        value={formData.motherName}
                        onChange={handleInputChange}
                      />
                      {errors.motherName && <span className="error-message">{errors.motherName}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Occupation</label>
                      <input
                        type="text"
                        name="motherOccupation"
                        className="form-control"
                        placeholder="Enter occupation"
                        value={formData.motherOccupation}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        name="motherPhone"
                        className="form-control"
                        placeholder="+92-300-0000000"
                        value={formData.motherPhone}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        name="motherEmail"
                        className="form-control"
                        placeholder="email@example.com"
                        value={formData.motherEmail}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <h3 className="sub-heading">Guardian Information (if applicable)</h3>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Guardian's Name</label>
                      <input
                        type="text"
                        name="guardianName"
                        className="form-control"
                        placeholder="Enter guardian's name"
                        value={formData.guardianName}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Relation</label>
                      <input
                        type="text"
                        name="guardianRelation"
                        className="form-control"
                        placeholder="e.g., Uncle, Aunt"
                        value={formData.guardianRelation}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Guardian's Phone</label>
                    <input
                      type="tel"
                      name="guardianPhone"
                      className="form-control"
                      placeholder="+92-300-0000000"
                      value={formData.guardianPhone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Address */}
              {step === 4 && (
                <div className="form-step">
                  <h2 className="step-heading">
                    <Home size={28} />
                    Residential Address
                  </h2>
                  <p className="step-description">Provide your complete residential address</p>

                  <div className="form-group">
                    <label className="form-label">Street Address *</label>
                    <input
                      type="text"
                      name="street"
                      className={`form-control ${errors.street ? 'error' : ''}`}
                      placeholder="House/Plot number, Street name"
                      value={formData.street}
                      onChange={handleInputChange}
                    />
                    {errors.street && <span className="error-message">{errors.street}</span>}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">City *</label>
                      <input
                        type="text"
                        name="city"
                        className={`form-control ${errors.city ? 'error' : ''}`}
                        placeholder="Enter city"
                        value={formData.city}
                        onChange={handleInputChange}
                      />
                      {errors.city && <span className="error-message">{errors.city}</span>}
                    </div>

                    </div>
                    <div className="form-group">
                      <label className="form-label">State/Province *</label>
                      <input
                        type="text"
                        name="state"
                        className="form-control"
                        placeholder="Enter state"
                        value={formData.state}
                        onChange={handleInputChange}
                        />
                    </div>