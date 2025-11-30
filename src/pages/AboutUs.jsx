// client/src/pages/AboutUs.jsx
import React, { useState } from 'react';
import '../styles/aboutus.css';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe,
  Clock,
  Award,
  Users,
  Target,
  Eye,
  Heart,
  TrendingUp,
  BookOpen,
  Send,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin
} from 'lucide-react';
import '../styles/aboutus.css';

const AboutUs = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  // Contact Information
  const contactInfo = {
    address: 'Taxi Stop Naushahro Feroze, District Naushahro Feroze, Sindh, Pakistan',
    phone: '+92-300-1234567',
    email: 'info@excellenceschool.edu',
    alternatePhone: '+92-71-1234567',
    website: 'www.excellenceschool.edu',
    workingHours: 'Monday - Thursday & Saturday: 8:00 AM - 2:00 PM',
    saturday: 'Fridayday: 8:00 AM - 12:00 PM'
  };

  // Leadership Team
  const leadership = [
    {
      name: ' Karim Bux Siyal',
      position: 'Principal',
      image: '/images/team/principal.jpg',
      education: 'Ph.D. in Educational Leadership',
      experience: '25 years',
      email: 'principal@excellenceschool.edu',
      description: 'Leading educational excellence with vision and dedication.'
    },
    {
      name: 'Mrs. Fatima Khan',
      position: 'Vice Principal (Academics)',
      image: '/images/team/vice-principal.jpg',
      education: 'M.Ed. in Curriculum Development',
      experience: '18 years',
      email: 'vp.academics@excellenceschool.edu',
      description: 'Ensuring quality education and academic growth.'
    },
    {
      name: 'Mr. Ali Raza',
      position: 'Vice Principal (Administration)',
      image: '/images/team/vp-admin.jpg',
      education: 'MBA in Education Management',
      experience: '15 years',
      email: 'vp.admin@excellenceschool.edu',
      description: 'Managing operations and student welfare.'
    }
  ];

  // Core Values
  const values = [
    {
      icon: <Award />,
      title: 'GBHS',
      description: 'Striving for the highest standards in education and character development.'
    },
    {
      icon: <Heart />,
      title: 'Integrity',
      description: 'Upholding honesty, ethics, and moral values in all our actions.'
    },
    {
      icon: <Users />,
      title: 'Community',
      description: 'Building a supportive and inclusive learning environment for all.'
    },
    {
      icon: <BookOpen />,
      title: 'Innovation',
      description: 'Embracing modern teaching methods and educational technology.'
    },
    {
      icon: <Target />,
      title: 'Growth',
      description: 'Fostering continuous learning and personal development.'
    },
    {
      icon: <TrendingUp />,
      title: 'Leadership',
      description: 'Developing future leaders who make a positive impact on society.'
    }
  ];

  // Statistics
  const statistics = [
    { value: '38+', label: 'Years of GBHS', icon: <Award /> },
    { value: '2500+', label: 'Happy Students', icon: <Users /> },
    { value: '150+', label: 'Qualified Teachers', icon: <BookOpen /> },
    { value: '95%', label: 'Success Rate', icon: <TrendingUp /> }
  ];

  // Mission & Vision
  const missionVision = {
    mission: {
      icon: <Target />,
      title: 'Our Mission',
      content: 'To provide quality education that nurtures intellectual curiosity, critical thinking, and ethical values. We are committed to developing well-rounded individuals who are academically excellent, socially responsible, and prepared to face the challenges of the modern world.'
    },
    vision: {
      icon: <Eye />,
      title: 'Our Vision',
      content: 'To be a leading educational institution recognized for academic excellence, innovative teaching, and holistic student development. We envision creating global citizens who contribute positively to society and lead with integrity, compassion, and wisdom.'
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="aboutus-page">
      {/* Hero Section */}
      <section className="aboutus-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">About GBHS School Tharushah</h1>
            <p className="hero-subtitle">
              Shaping Minds, Building Character, Inspiring GBHS Tharushah Since 1900
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="introduction-section section">
        <div className="container">
          <div className="introduction-content">
            <div className="intro-text">
              <h2 className="section-heading">Welcome to Govt Boys High School Tharushah</h2>
              <p className="intro-description">
                For over three decades, Govt Boys High School Tharushah has been a beacon of quality 
                education in Tharushah, Sindh. Established in 1900, we have consistently maintained our 
                commitment to academic excellence, character building, and holistic development.
              </p>
              <p className="intro-description">
                Our institution stands as a testament to the power of dedicated educators, supportive 
                parents, and motivated students working together towards a common goal: creating future 
                leaders who will make a positive impact on society.
              </p>
              <p className="intro-description">
                We believe that every child is unique and possesses infinite potential. Our role is to 
                nurture this potential through innovative teaching methods, state-of-the-art facilities, 
                and a caring environment that encourages students to dream big and achieve their goals.
              </p>
            </div>
            <div className="intro-image">
              <img src="/images/about/school-building.jpg" alt="School Building" />
              <div className="image-overlay">
                <div className="overlay-content">
                  <Award size={48} />
                  <h3>100 Years of Govt Boys High School Tharushah</h3>
                  <p>Since 1900</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics-section">
        <div className="container">
          <div className="statistics-grid">
            {statistics.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-icon">{stat.icon}</div>
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section section">
        <div className="container">
          <div className="section-title">
            <h2>Our Mission & Vision</h2>
            <p>Guiding principles that drive our educational excellence</p>
          </div>
          
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-icon mission-icon">{missionVision.mission.icon}</div>
              <h3 className="card-title">{missionVision.mission.title}</h3>
              <p className="card-content">{missionVision.mission.content}</p>
            </div>
            
            <div className="vision-card">
              <div className="card-icon vision-icon">{missionVision.vision.icon}</div>
              <h3 className="card-title">{missionVision.vision.title}</h3>
              <p className="card-content">{missionVision.vision.content}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section section">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Values</h2>
            <p>The principles that define who we are and what we stand for</p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="leadership-section section">
        <div className="container">
          <div className="section-title">
            <h2>Our Leadership Team</h2>
            <p>Meet the dedicated professionals guiding our institution</p>
          </div>
          
          <div className="leadership-grid">
            {leadership.map((member, index) => (
              <div key={index} className="leader-card">
                <div className="leader-image">
                  <img src={member.image} alt={member.name} />
                  <div className="leader-overlay">
                    <a href={`mailto:${member.email}`} className="leader-email-btn">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
                <div className="leader-info">
                  <h3 className="leader-name">{member.name}</h3>
                  <p className="leader-position">{member.position}</p>
                  <p className="leader-description">{member.description}</p>
                  <div className="leader-details">
                    <div className="detail-item">
                      <BookOpen size={16} />
                      <span>{member.education}</span>
                    </div>
                    <div className="detail-item">
                      <Award size={16} />
                      <span>{member.experience} Experience</span>
                    </div>
                    <div className="detail-item">
                      <Mail size={16} />
                      <span>{member.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info-section section">
        <div className="container">
          <div className="section-title">
            <h2>Get In Touch</h2>
            <p>We'd love to hear from you. Reach out to us anytime!</p>
          </div>
          
          <div className="contact-content">
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon">
                  <MapPin size={32} />
                </div>
                <h3>Visit Us</h3>
                <p>{contactInfo.address}</p>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <Phone size={32} />
                </div>
                <h3>Call Us</h3>
                <p>{contactInfo.phone}</p>
                <p>{contactInfo.alternatePhone}</p>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <Mail size={32} />
                </div>
                <h3>Email Us</h3>
                <p>{contactInfo.email}</p>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <Clock size={32} />
                </div>
                <h3>Working Hours</h3>
                <p>{contactInfo.workingHours}</p>
                <p>{contactInfo.saturday}</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h3>Send Us a Message</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+92-300-0000000"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="What is this about?"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg"
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? (
                    <>
                      <div className="spinner-small"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
                
                {formStatus === 'success' && (
                  <div className="form-success">
                    <CheckCircle size={20} />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-section">
        <div className="container">
          <h3>Connect With Us</h3>
          <p>Follow us on social media for updates, events, and news</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link facebook">
              <Facebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link twitter">
              <Twitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link instagram">
              <Instagram size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link youtube">
              <Youtube size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;