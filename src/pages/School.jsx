// client/src/pages/School.jsx
import React, { useState } from 'react';
import { 
  Target,
  Eye,
  Award,
  Heart,
  Users,
  BookOpen,
  TrendingUp,
  Mail,
  Phone,
  Linkedin,
  Quote,
  Star,
  Crown,
  Sparkles,
  Shield,
  Zap,
  ChevronDown,
  Building,
  Calendar,
  GraduationCap
} from 'lucide-react';
import '../styles/school.css';

const School = () => {
  const [expandedValue, setExpandedValue] = useState(null);

  // Principal Profile
  const principalProfile = {
    name: 'Karim Bux Siyal',
    photo: '/images/team/principal-profile.jpg',
    designation: 'Principal',
    education: [
      'Ph.D. in Educational Leadership - Harvard University',
      'M.Ed. in Curriculum Development - Oxford University',
      'B.Ed. in Education - Cambridge University'
    ],
    experience: 25,
    email: 'principal@excellenceschool.edu',
    phone: '+92-300-1234567',
    joinedYear: 2005,
    achievements: [
      'National Education Award 2023',
      'Best Principal Award - Sindh 2022',
      'Published 15+ research papers on education',
      'Speaker at International Education Conferences'
    ],
    message: `It is my privilege and honor to serve as the Principal of Excellence International School. 
    For over 25 years, I have dedicated my life to education, and I can say with confidence that our 
    school represents the pinnacle of academic excellence and character development.

    Our mission is not just to educate minds, but to nurture souls, build character, and create future 
    leaders who will make a positive impact on society. Every student who walks through our doors is 
    unique, talented, and full of potential. Our role is to unlock that potential and guide them towards 
    achieving their dreams.

    We believe in holistic education that goes beyond textbooks. Our dedicated faculty, state-of-the-art 
    facilities, and innovative teaching methods create an environment where students don't just learn – 
    they thrive, grow, and excel.

    I invite you to join our Excellence family, where your child's success is our commitment, and their 
    future is our mission.`,
    quote: 'Education is not the filling of a pail, but the lighting of a fire.',
    quoteAuthor: 'W.B. Yeats'
  };

  // Admin Profile
  const adminProfile = {
    name: 'Mr. Ali Raza',
    photo: '/images/team/admin-profile.jpg',
    designation: 'School Administrator',
    education: [
      'MBA in Education Management - IBA',
      'B.Sc. in Business Administration - LUMS'
    ],
    experience: 15,
    email: 'admin@excellenceschool.edu',
    phone: '+92-300-7654321',
    specialization: 'Operations & Student Welfare',
    responsibilities: [
      'Overall school operations management',
      'Student welfare and discipline',
      'Infrastructure and facility management',
      'Administrative staff coordination',
      'Budget and financial planning',
      'Parent-teacher communication'
    ]
  };

  // Mission
  const mission = {
    icon: <Target />,
    title: 'Our Mission',
    description: `To provide world-class education that nurtures intellectual curiosity, critical thinking, 
    and ethical values. We are committed to developing well-rounded individuals who are academically excellent, 
    socially responsible, and prepared to face the challenges of the modern world. Through innovative teaching 
    methods, dedicated faculty, and a supportive environment, we empower students to reach their full potential 
    and become future leaders.`
  };

  // Vision
  const vision = {
    icon: <Eye />,
    title: 'Our Vision',
    description: `To be a leading educational institution recognized globally for academic excellence, innovative 
    teaching, and holistic student development. We envision creating global citizens who are not only academically 
    brilliant but also compassionate, ethical, and socially responsible. Our goal is to inspire a generation of 
    leaders, thinkers, and change-makers who will contribute positively to society and lead with integrity, wisdom, 
    and compassion.`
  };

  // Core Values
  const coreValues = [
    {
      id: 1,
      icon: <Award />,
      title: 'Excellence',
      shortDesc: 'Striving for the highest standards in everything we do',
      fullDesc: `We pursue excellence in academics, character development, and extracurricular activities. 
      Our commitment to quality education ensures that every student receives the best possible learning experience. 
      We set high standards and provide the support needed to achieve them.`
    },
    {
      id: 2,
      icon: <Heart />,
      title: 'Integrity',
      shortDesc: 'Upholding honesty, ethics, and moral values',
      fullDesc: `Integrity is the foundation of our institution. We believe in honest communication, ethical 
      behavior, and moral courage. We teach our students the importance of truthfulness, fairness, and doing 
      what is right, even when no one is watching.`
    },
    {
      id: 3,
      icon: <Users />,
      title: 'Community',
      shortDesc: 'Building a supportive and inclusive environment',
      fullDesc: `We foster a sense of belonging and community where every student, teacher, and parent feels 
      valued and respected. Our inclusive environment celebrates diversity and encourages collaboration, teamwork, 
      and mutual support.`
    },
    {
      id: 4,
      icon: <Sparkles />,
      title: 'Innovation',
      shortDesc: 'Embracing modern teaching and creative thinking',
      fullDesc: `We continuously innovate our teaching methods, embrace new technologies, and encourage creative 
      thinking. Our students are prepared for the future by learning to adapt, innovate, and think outside the box.`
    },
    {
      id: 5,
      icon: <Shield />,
      title: 'Responsibility',
      shortDesc: 'Developing accountable and ethical citizens',
      fullDesc: `We instill a strong sense of personal and social responsibility in our students. They learn 
      to be accountable for their actions, contribute to their communities, and make ethical decisions that 
      benefit society.`
    },
    {
      id: 6,
      icon: <Zap />,
      title: 'Empowerment',
      shortDesc: 'Enabling students to reach their full potential',
      fullDesc: `We empower students by building their confidence, developing their skills, and encouraging 
      their passions. Every student is given the tools, opportunities, and support needed to discover and 
      pursue their dreams.`
    }
  ];

  const toggleValue = (id) => {
    setExpandedValue(expandedValue === id ? null : id);
  };

  return (
    <div className="school-page">
      {/* Hero Section */}
      <section className="school-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <Crown size={64} />
            <h1 className="hero-title">Our School</h1>
            <p className="hero-subtitle">
              Mission, Vision, Leadership & Values that Define Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section section">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card mission-card">
              <div className="mv-icon mission-icon">{mission.icon}</div>
              <h2>{mission.title}</h2>
              <p>{mission.description}</p>
            </div>

            <div className="mv-card vision-card">
              <div className="mv-icon vision-icon">{vision.icon}</div>
              <h2>{vision.title}</h2>
              <p>{vision.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal Profile Section */}
      <section className="principal-section section">
        <div className="container">
          <div className="section-title">
            <Crown size={32} />
            <h2>Message from the Principal</h2>
            <p>Leadership that inspires excellence</p>
          </div>

          <div className="principal-profile">
            <div className="principal-image-section">
              <div className="principal-image">
                <img src={principalProfile.photo} alt={principalProfile.name} />
                <div className="principal-badge">
                  <Star size={24} />
                  <span>{principalProfile.experience} Years</span>
                </div>
              </div>

              <div className="principal-info-card">
                <h3>{principalProfile.name}</h3>
                <p className="designation">{principalProfile.designation}</p>
                
                <div className="contact-items">
                  <a href={`mailto:${principalProfile.email}`} className="contact-item">
                    <Mail size={18} />
                    <span>{principalProfile.email}</span>
                  </a>
                  <a href={`tel:${principalProfile.phone}`} className="contact-item">
                    <Phone size={18} />
                    <span>{principalProfile.phone}</span>
                  </a>
                </div>

                <div className="principal-stats">
                  <div className="stat">
                    <Calendar size={20} />
                    <div>
                      <strong>Joined</strong>
                      <span>{principalProfile.joinedYear}</span>
                    </div>
                  </div>
                  <div className="stat">
                    <GraduationCap size={20} />
                    <div>
                      <strong>Experience</strong>
                      <span>{principalProfile.experience} Years</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="principal-content">
              <div className="principal-message">
                <h3>A Message of Excellence</h3>
                {principalProfile.message.split('\n\n').map((para, index) => (
                  <p key={index}>{para.trim()}</p>
                ))}
              </div>

              <div className="principal-quote">
                <Quote size={48} />
                <blockquote>
                  {principalProfile.quote}
                </blockquote>
                <cite>— {principalProfile.quoteAuthor}</cite>
              </div>

              <div className="principal-education">
                <h4><GraduationCap size={24} /> Education</h4>
                <ul>
                  {principalProfile.education.map((edu, index) => (
                    <li key={index}>{edu}</li>
                  ))}
                </ul>
              </div>

              <div className="principal-achievements">
                <h4><Award size={24} /> Achievements & Recognition</h4>
                <ul>
                  {principalProfile.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Profile Section */}
      <section className="admin-section section">
        <div className="container">
          <div className="section-title">
            <Building size={32} />
            <h2>School Administration</h2>
            <p>Ensuring smooth operations and student welfare</p>
          </div>

          <div className="admin-profile">
            <div className="admin-image">
              <img src={adminProfile.photo} alt={adminProfile.name} />
            </div>

            <div className="admin-info">
              <h3>{adminProfile.name}</h3>
              <p className="admin-designation">{adminProfile.designation}</p>
              <p className="admin-specialization">{adminProfile.specialization}</p>

              <div className="admin-contact">
                <a href={`mailto:${adminProfile.email}`} className="admin-contact-item">
                  <Mail size={18} />
                  <span>{adminProfile.email}</span>
                </a>
                <a href={`tel:${adminProfile.phone}`} className="admin-contact-item">
                  <Phone size={18} />
                  <span>{adminProfile.phone}</span>
                </a>
              </div>

              <div className="admin-education">
                <h4>Education</h4>
                <ul>
                  {adminProfile.education.map((edu, index) => (
                    <li key={index}>{edu}</li>
                  ))}
                </ul>
              </div>

              <div className="admin-responsibilities">
                <h4>Key Responsibilities</h4>
                <ul>
                  {adminProfile.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div className="admin-experience">
                <Award size={24} />
                <div>
                  <strong>{adminProfile.experience} Years</strong>
                  <span>of Administrative Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section section">
        <div className="container">
          <div className="section-title">
            <Sparkles size={32} />
            <h2>Our Core Values</h2>
            <p>The principles that guide us in everything we do</p>
          </div>

          <div className="values-grid">
            {coreValues.map((value) => (
              <div
                key={value.id}
                className={`value-card ${expandedValue === value.id ? 'expanded' : ''}`}
                onClick={() => toggleValue(value.id)}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p className="value-short">{value.shortDesc}</p>
                
                {expandedValue === value.id && (
                  <p className="value-full">{value.fullDesc}</p>
                )}
                
                <button className="expand-btn">
                  {expandedValue === value.id ? 'Show Less' : 'Learn More'}
                  <ChevronDown className={expandedValue === value.id ? 'rotated' : ''} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="school-cta-section">
        <div className="container">
          <div className="cta-content">
            <Crown size={64} />
            <h2>Join Our Excellence Family</h2>
            <p>Where your child's success is our commitment and their future is our mission</p>
            <button className="btn btn-accent btn-lg">
              Apply for Admission
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default School;