// client/src/pages/Faculty.jsx
import React, { useState, useEffect } from 'react';
import '../styles/faculty.css';
import { 
  Search,
  Filter,
  Mail,
  Phone,
  Award,
  BookOpen,
  GraduationCap,
  Calendar,
  X,
  Linkedin,
  Twitter,
  ChevronRight,
  Star,
  TrendingUp,
  Users
} from 'lucide-react';
import '../styles/faculty.css';

const Faculty = () => {
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [filteredFaculty, setFilteredFaculty] = useState([]);

  // Subject categories
  const subjects = [
    'All',
    'Physics',
    'Biology',
    'Chemistry',
    'Mathematics',
    'English',
    'Science',
    'Computer Science'
  ];

  // Faculty data (In real app, this would come from backend API)
  const facultyData = [
    {
      id: 1,
      name: 'Dr. Muhammad Ali',
      photo: '/images/faculty/physics.jpg',
      email: 'muhammad.ali@excellenceschool.edu',
      phone: '+92-300-1234567',
      specialization: 'Physics',
      designation: 'Head of Science Department',
      education: [
        { degree: 'Ph.D. in Physics', institution: 'MIT, USA', year: '2010' },
        { degree: 'M.Sc. in Physics', institution: 'Cambridge University', year: '2005' },
        { degree: 'B.Sc. in Physics', institution: 'Oxford University', year: '2003' }
      ],
      experience: 15,
      expertise: ['Quantum Mechanics', 'Thermodynamics', 'Astrophysics', 'Nuclear Physics'],
      achievements: [
        'Best Teacher Award 2023',
        'Published 20+ research papers',
        'Guest lecturer at Harvard University',
        'Organized International Physics Olympiad'
      ],
      bio: 'Dr. Muhammad Ali is a passionate educator with over 15 years of experience in teaching physics. His innovative teaching methods have helped countless students develop a love for science.',
      joinedDate: '2008-08-15',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/muhammad-ali',
        twitter: 'https://twitter.com/dr_mali'
      }
    },
    {
      id: 2,
      name: 'Dr. Sarah Ahmed',
      photo: '/images/faculty/biology.jpg',
      email: 'sarah.ahmed@excellenceschool.edu',
      phone: '+92-300-2345678',
      specialization: 'Biology',
      designation: 'Senior Biology Teacher',
      education: [
        { degree: 'Ph.D. in Molecular Biology', institution: 'Stanford University', year: '2012' },
        { degree: 'M.Sc. in Biotechnology', institution: 'Yale University', year: '2008' },
        { degree: 'B.Sc. in Biology', institution: 'Harvard University', year: '2006' }
      ],
      experience: 12,
      expertise: ['Molecular Biology', 'Genetics', 'Cell Biology', 'Microbiology'],
      achievements: [
        'Excellence in Teaching Award 2022',
        'Research Grant from WHO',
        'Published in Nature Journal',
        'Developed innovative lab curriculum'
      ],
      bio: 'Dr. Sarah Ahmed brings cutting-edge biological research into the classroom, inspiring students to explore the wonders of life sciences.',
      joinedDate: '2011-09-01',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/sarah-ahmed',
        twitter: 'https://twitter.com/dr_sarah'
      }
    },
    {
      id: 3,
      name: 'Prof. Ahmed Hassan',
      photo: '/images/faculty/chemistry.jpg',
      email: 'ahmed.hassan@excellenceschool.edu',
      phone: '+92-300-3456789',
      specialization: 'Chemistry',
      designation: 'Chemistry Department Head',
      education: [
        { degree: 'Ph.D. in Organic Chemistry', institution: 'Cambridge University', year: '2009' },
        { degree: 'M.Sc. in Chemistry', institution: 'Oxford University', year: '2005' },
        { degree: 'B.Sc. in Chemistry', institution: 'University of London', year: '2003' }
      ],
      experience: 16,
      expertise: ['Organic Chemistry', 'Analytical Chemistry', 'Physical Chemistry', 'Biochemistry'],
      achievements: [
        'National Teacher Award 2021',
        '25+ publications in international journals',
        'Chemistry Olympiad Coach',
        'Laboratory Safety Certification Trainer'
      ],
      bio: 'Professor Ahmed Hassan has dedicated his career to making chemistry accessible and exciting for students of all levels.',
      joinedDate: '2007-08-20',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/ahmed-hassan'
      }
    },
    {
      id: 4,
      name: 'Ms. Fatima Khan',
      photo: '/images/faculty/math.jpg',
      email: 'fatima.khan@excellenceschool.edu',
      phone: '+92-300-4567890',
      specialization: 'Mathematics',
      designation: 'Senior Mathematics Teacher',
      education: [
        { degree: 'M.Phil. in Mathematics', institution: 'University of Cambridge', year: '2013' },
        { degree: 'M.Sc. in Applied Mathematics', institution: 'MIT', year: '2010' },
        { degree: 'B.Sc. in Mathematics', institution: 'Stanford University', year: '2008' }
      ],
      experience: 11,
      expertise: ['Calculus', 'Algebra', 'Geometry', 'Statistics', 'Number Theory'],
      achievements: [
        'Mathematics Excellence Award 2023',
        'IMO Team Coach',
        'Developed interactive math software',
        'Math Olympiad Gold Medalist'
      ],
      bio: 'Ms. Fatima Khan believes in making mathematics fun and accessible, helping students overcome their fear of numbers.',
      joinedDate: '2012-07-15',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/fatima-khan',
        twitter: 'https://twitter.com/math_fatima'
      }
    },
    {
      id: 5,
      name: 'Mr. Hassan Ali',
      photo: '/images/faculty/english.jpg',
      email: 'hassan.ali@excellenceschool.edu',
      phone: '+92-300-5678901',
      specialization: 'English',
      designation: 'English Language Coordinator',
      education: [
        { degree: 'M.A. in English Literature', institution: 'Oxford University', year: '2011' },
        { degree: 'B.A. in English', institution: 'Cambridge University', year: '2009' },
        { degree: 'TEFL Certification', institution: 'British Council', year: '2012' }
      ],
      experience: 13,
      expertise: ['English Literature', 'Creative Writing', 'Public Speaking', 'Linguistics'],
      achievements: [
        'Best Language Teacher 2022',
        'Published two poetry collections',
        'Drama Club Coordinator',
        'Debate Competition Champion Coach'
      ],
      bio: 'Mr. Hassan Ali inspires students to express themselves eloquently and discover the power of language.',
      joinedDate: '2010-08-01',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/hassan-ali',
        twitter: 'https://twitter.com/hassan_writes'
      }
    },
    {
      id: 6,
      name: 'Ms. Ayesha Mahmood',
      photo: '/images/faculty/science.jpg',
      email: 'ayesha.mahmood@excellenceschool.edu',
      phone: '+92-300-6789012',
      specialization: 'Science',
      designation: 'Middle School Science Teacher',
      education: [
        { degree: 'M.Sc. in General Science', institution: 'University of London', year: '2014' },
        { degree: 'B.Ed. in Science Education', institution: 'Columbia University', year: '2012' },
        { degree: 'B.Sc. in Science', institution: 'Yale University', year: '2010' }
      ],
      experience: 10,
      expertise: ['General Science', 'Environmental Science', 'Earth Science', 'STEM Education'],
      achievements: [
        'Innovative Teaching Award 2023',
        'Science Fair Organizer',
        'Environmental Club Founder',
        'STEM Workshop Facilitator'
      ],
      bio: 'Ms. Ayesha Mahmood makes science come alive through hands-on experiments and real-world applications.',
      joinedDate: '2013-09-01',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/ayesha-mahmood'
      }
    },
    {
      id: 7,
      name: 'Mr. Usman Tariq',
      photo: '/images/faculty/computer.jpg',
      email: 'usman.tariq@excellenceschool.edu',
      phone: '+92-300-7890123',
      specialization: 'Computer Science',
      designation: 'Head of IT Department',
      education: [
        { degree: 'M.Sc. in Computer Science', institution: 'Carnegie Mellon University', year: '2013' },
        { degree: 'B.Sc. in Software Engineering', institution: 'MIT', year: '2010' },
        { degree: 'Certified Ethical Hacker', institution: 'EC-Council', year: '2014' }
      ],
      experience: 11,
      expertise: ['Programming', 'Web Development', 'Artificial Intelligence', 'Cybersecurity', 'Robotics'],
      achievements: [
        'Tech Innovator Award 2023',
        'Coding Club Founder',
        'Hackathon Winner',
        'Published AI research papers'
      ],
      bio: 'Mr. Usman Tariq prepares students for the digital future by teaching cutting-edge technology and programming skills.',
      joinedDate: '2012-08-15',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/usman-tariq',
        twitter: 'https://twitter.com/usman_codes'
      }
    },
    {
      id: 8,
      name: 'Dr. Zainab Malik',
      photo: '/images/faculty/chemistry2.jpg',
      email: 'zainab.malik@excellenceschool.edu',
      phone: '+92-300-8901234',
      specialization: 'Chemistry',
      designation: 'Senior Chemistry Teacher',
      education: [
        { degree: 'Ph.D. in Inorganic Chemistry', institution: 'Yale University', year: '2011' },
        { degree: 'M.Sc. in Chemistry', institution: 'Harvard University', year: '2007' },
        { degree: 'B.Sc. in Chemistry', institution: 'Princeton University', year: '2005' }
      ],
      experience: 14,
      expertise: ['Inorganic Chemistry', 'Material Science', 'Coordination Chemistry', 'Crystallography'],
      achievements: [
        'Research Excellence Award 2022',
        'Published 30+ research papers',
        'International Chemistry Conference Speaker',
        'Lab Safety Expert'
      ],
      bio: 'Dr. Zainab Malik combines theoretical knowledge with practical applications to enhance student learning.',
      joinedDate: '2009-09-01',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/zainab-malik'
      }
    }
  ];

  // Filter faculty based on subject and search query
  useEffect(() => {
    let filtered = facultyData;

    // Filter by subject
    if (selectedSubject !== 'All') {
      filtered = filtered.filter(f => f.specialization === selectedSubject);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(f => 
        f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.expertise.some(e => e.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredFaculty(filtered);
  }, [selectedSubject, searchQuery]);

  const handleFacultyClick = (faculty) => {
    setSelectedFaculty(faculty);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedFaculty(null);
    document.body.style.overflow = 'auto';
  };

  const getYearsOfService = (joinDate) => {
    const joined = new Date(joinDate);
    const now = new Date();
    const years = now.getFullYear() - joined.getFullYear();
    return years;
  };

  return (
    <div className="faculty-page">
      {/* Hero Section */}
      <section className="faculty-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Our Distinguished Faculty</h1>
            <p className="hero-subtitle">
              Meet our team of passionate educators dedicated to nurturing excellence and inspiring young minds
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="faculty-stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <Users size={32} />
              </div>
              <h3>150+</h3>
              <p>Expert Teachers</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <Award size={32} />
              </div>
              <h3>95%</h3>
              <p>PhD Qualified</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <Star size={32} />
              </div>
              <h3>4.9/5</h3>
              <p>Average Rating</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <TrendingUp size={32} />
              </div>
              <h3>15+ Years</h3>
              <p>Avg. Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="faculty-filter-section">
        <div className="container">
          {/* Search Bar */}
          <div className="search-bar">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search by name, subject, or expertise..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          {/* Subject Filter */}
          <div className="subject-filter">
            <div className="filter-header">
              <Filter size={20} />
              <span>Filter by Subject:</span>
            </div>
            <div className="subject-buttons">
              {subjects.map((subject) => (
                <button
                  key={subject}
                  className={`subject-btn ${selectedSubject === subject ? 'active' : ''}`}
                  onClick={() => setSelectedSubject(subject)}
                >
                  {subject}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Grid Section */}
      <section className="faculty-grid-section section">
        <div className="container">
          {filteredFaculty.length > 0 ? (
            <>
              <div className="results-info">
                <p>Showing {filteredFaculty.length} {filteredFaculty.length === 1 ? 'teacher' : 'teachers'}</p>
              </div>
              <div className="faculty-grid">
                {filteredFaculty.map((faculty) => (
                  <div 
                    key={faculty.id} 
                    className="faculty-card"
                    onClick={() => handleFacultyClick(faculty)}
                  >
                    <div className="faculty-image">
                      <img src={faculty.photo} alt={faculty.name} />
                      <div className="faculty-overlay">
                        <button className="view-profile-btn">
                          View Profile
                          <ChevronRight size={18} />
                        </button>
                      </div>
                    </div>
                    <div className="faculty-info">
                      <span className="faculty-subject">{faculty.specialization}</span>
                      <h3 className="faculty-name">{faculty.name}</h3>
                      <p className="faculty-designation">{faculty.designation}</p>
                      <div className="faculty-meta">
                        <div className="meta-item">
                          <Award size={16} />
                          <span>{faculty.experience} years exp.</span>
                        </div>
                        <div className="meta-item">
                          <BookOpen size={16} />
                          <span>{faculty.education[0].degree.split(' in ')[0]}</span>
                        </div>
                      </div>
                      <div className="faculty-expertise">
                        {faculty.expertise.slice(0, 3).map((exp, index) => (
                          <span key={index} className="expertise-tag">{exp}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="no-results">
              <Search size={64} />
              <h3>No Faculty Found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Faculty Profile Modal */}
      {selectedFaculty && (
        <div className="faculty-modal-overlay" onClick={closeModal}>
          <div className="faculty-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-image">
                  <img src={selectedFaculty.photo} alt={selectedFaculty.name} />
                  <div className="years-badge">
                    {getYearsOfService(selectedFaculty.joinedDate)} Years with Us
                  </div>
                </div>
                <div className="modal-info">
                  <span className="modal-subject">{selectedFaculty.specialization}</span>
                  <h2>{selectedFaculty.name}</h2>
                  <p className="modal-designation">{selectedFaculty.designation}</p>
                  
                  <div className="contact-info">
                    <a href={`mailto:${selectedFaculty.email}`} className="contact-item">
                      <Mail size={18} />
                      <span>{selectedFaculty.email}</span>
                    </a>
                    <a href={`tel:${selectedFaculty.phone}`} className="contact-item">
                      <Phone size={18} />
                      <span>{selectedFaculty.phone}</span>
                    </a>
                  </div>

                  {selectedFaculty.socialMedia && (
                    <div className="social-links">
                      {selectedFaculty.socialMedia.linkedin && (
                        <a href={selectedFaculty.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin size={20} />
                        </a>
                      )}
                      {selectedFaculty.socialMedia.twitter && (
                        <a href={selectedFaculty.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                          <Twitter size={20} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="modal-body">
                <div className="bio-section">
                  <h3>About</h3>
                  <p>{selectedFaculty.bio}</p>
                </div>

                <div className="education-section">
                  <h3><GraduationCap size={24} /> Education</h3>
                  <div className="education-list">
                    {selectedFaculty.education.map((edu, index) => (
                      <div key={index} className="education-item">
                        <div className="edu-degree">{edu.degree}</div>
                        <div className="edu-institution">{edu.institution}</div>
                        <div className="edu-year">{edu.year}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="expertise-section">
                  <h3><BookOpen size={24} /> Areas of Expertise</h3>
                  <div className="expertise-tags">
                    {selectedFaculty.expertise.map((exp, index) => (
                      <span key={index} className="expertise-tag-large">{exp}</span>
                    ))}
                  </div>
                </div>

                <div className="achievements-section">
                  <h3><Award size={24} /> Achievements & Recognition</h3>
                  <ul className="achievements-list">
                    {selectedFaculty.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="stats-section">
                  <div className="stat-box">
                    <Calendar size={24} />
                    <div>
                      <strong>Joined</strong>
                      <p>{new Date(selectedFaculty.joinedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</p>
                    </div>
                  </div>
                  <div className="stat-box">
                    <Award size={24} />
                    <div>
                      <strong>Experience</strong>
                      <p>{selectedFaculty.experience} Years</p>
                    </div>
                  </div>
                  <div className="stat-box">
                    <BookOpen size={24} />
                    <div>
                      <strong>Specialization</strong>
                      <p>{selectedFaculty.specialization}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Faculty;