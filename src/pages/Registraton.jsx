// client/src/pages/Registration.jsx
import React, { useState } from 'react';
import { 
  User, Mail, Phone, Lock, Eye, EyeOff, UserPlus, ChevronRight, Send, CheckCircle,
  BookOpen, Users, Home, FileText, Upload, Download, AlertCircle
} from 'lucide-react';
import '../styles/registration.css';

const Registration = ({ isLoggedIn, user }) => {
  const [step, setStep] = useState(isLoggedIn ? 1 : 0);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [applicationNumber, setApplicationNumber] = useState(null);

  const [authData, setAuthData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [formData, setFormData] = useState({
    studentName: '', dateOfBirth: '', gender: '', bloodGroup: '', nationality: 'Pakistani', religion: '',
    applyingGrade: '', section: '', academicYear: '2024-2025',
    previousSchool: '', previousSchoolAddress: '', lastGrade: '', reasonForLeaving: '',
    fatherName: '', fatherOccupation: '', fatherPhone: '', fatherEmail: '',
    motherName: '', motherOccupation: '', motherPhone: '', motherEmail: '',
    guardianName: '', guardianRelation: '', guardianPhone: '',
    street: '', city: '', state: 'Sindh', zipCode: '', country: 'Pakistan',
    birthCertificate: null, previousMarksheet: null, transferCertificate: null,
    studentPhoto: null, fatherCNIC: null, motherCNIC: null
  });

  const [errors, setErrors] = useState({});

  const sections = ['Primary', 'Middle', 'Senior'];
  const grades = {
    Primary: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'],
    Middle: ['Class 6', 'Class 7', 'Class 8'],
    Senior: ['O-Level Year 1', 'O-Level Year 2', 'A-Level Year 1 (AS)', 'A-Level Year 2 (A2)']
  };

  const handleAuthChange = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setErrors({ ...errors, [name]: 'File size should be less than 5MB' });
      return;
    }

    setFormData({ ...formData, [name]: file });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validateStep = (stepNumber) => {
    const newErrors = {};
    if (stepNumber === 0) {
      if (!authData.fullName) newErrors.fullName = 'Full name is required';
      if (!authData.email) newErrors.email = 'Email is required';
      if (!authData.phone) newErrors.phone = 'Phone number is required';
      if (!authData.password) newErrors.password = 'Password is required';
      if (authData.password !== authData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
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
    if (stepNumber === 5) {
      ['birthCertificate','studentPhoto','fatherCNIC'].forEach(field => {
        if (!formData[field]) newErrors[field] = 'This document is required';
      });
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) setStep(step + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(step)) return;
    setLoading(true);
    setTimeout(() => {
      const appNumber = `APP${new Date().getFullYear()}${String(Math.floor(Math.random() * 10000)).padStart(5, '0')}`;
      setApplicationNumber(appNumber);
      setShowSuccess(true);
      setLoading(false);
    }, 2000);
  };

  const downloadPDF = () => console.log('Downloading PDF...');

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
        <section className="auth-section section">
          <div className="container">
            <h2>Create Your Account</h2>
            <form>
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" name="fullName" value={authData.fullName} onChange={handleAuthChange} />
                {errors.fullName && <span className="error-message">{errors.fullName}</span>}
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input type="email" name="email" value={authData.email} onChange={handleAuthChange} />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label>Phone *</label>
                <input type="tel" name="phone" value={authData.phone} onChange={handleAuthChange} />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
              <div className="form-group password-input">
                <label>Password *</label>
                <input type={showPassword ? 'text':'password'} name="password" value={authData.password} onChange={handleAuthChange} />
                <button type="button" onClick={()=>setShowPassword(!showPassword)}>
                  {showPassword?<EyeOff />:<Eye />}
                </button>
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>
              <div className="form-group">
                <label>Confirm Password *</label>
                <input type={showPassword ? 'text':'password'} name="confirmPassword" value={authData.confirmPassword} onChange={handleAuthChange} />
                {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
              </div>
              <button type="button" onClick={handleNext}>Create Account & Continue</button>
            </form>
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
            <CheckCircle size={80} />
            <h1>Application Submitted Successfully!</h1>
            <p>Application Number: {applicationNumber}</p>
            <p>Student: {formData.studentName}</p>
            <p>Grade: {formData.applyingGrade} - {formData.section}</p>
            <button onClick={downloadPDF}><Download /> Download PDF</button>
            <button onClick={() => window.location.reload()}>Submit Another</button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="registration-page">
      <section className="registration-form-section section">
        <div className="container">
          <div className="progress-steps">
            {steps.map(s => (
              <div key={s.id} className={`progress-step ${step>=s.id?'active':''} ${step===s.id?'current':''}`}>
                {s.icon}<span>{s.title}</span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            {/* Step 1-5 rendered here depending on `step` */}
            {/* Step 4: Address */}
            {step === 4 && (
              <div className="form-step">
                <h2>Residential Address</h2>
                <div className="form-group">
                  <label>Street Address *</label>
                  <input type="text" name="street" value={formData.street} onChange={handleInputChange} />
                  {errors.street && <span className="error-message">{errors.street}</span>}
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>City *</label>
                    <input type="text" name="city" value={formData.city} onChange={handleInputChange} />
                    {errors.city && <span className="error-message">{errors.city}</span>}
                  </div>
                  <div className="form-group">
                    <label>State/Province *</label>
                    <input type="text" name="state" value={formData.state} onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label>Zip Code *</label>
                    <input type="text" name="zipCode" value={formData.zipCode} onChange={handleInputChange} />
                    {errors.zipCode && <span className="error-message">{errors.zipCode}</span>}
                  </div>
                </div>
                <div className="form-group">
                  <label>Country</label>
                  <input type="text" name="country" value={formData.country} onChange={handleInputChange} />
                </div>
              </div>
            )}

            {/* Step 5: Documents */}
            {step === 5 && (
              <div className="form-step">
                <h2>Upload Documents</h2>
                {['birthCertificate','studentPhoto','fatherCNIC','motherCNIC'].map(doc => (
                  <div key={doc} className="form-group">
                    <label>{doc.replace(/([A-Z])/g, ' $1')}</label>
                    <input type="file" name={doc} onChange={handleFileChange} />
                    {errors[doc] && <span className="error-message">{errors[doc]}</span>}
                  </div>
                ))}
              </div>
            )}

            {/* Navigation */}
            <div className="form-navigation">
              {step>1 && <button type="button" onClick={handleBack}>Back</button>}
              {step<5 && <button type="button" onClick={handleNext}>Continue <ChevronRight /></button>}
              {step===5 && <button type="submit">{loading?'Submitting...':'Submit Application'}</button>}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Registration;
