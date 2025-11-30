// client/src/pages/Academics.jsx
import React, { useState } from 'react';
import { GraduationCap } from "lucide-react";
import '../styles/academics.css';
import { 
  BookOpen,
  Users,
  Award,
  TrendingUp,
  ChevronRight,
  ChevronDown,
  CheckCircle,
  Clock,
  Calendar,
  Target,
  Lightbulb,
  FlaskConical,
  Palette,
  Music,
  Trophy,
  Globe,
  Calculator,
  Microscope,
  Laptop,
  BookMarked,
  X
} from 'lucide-react';
import '../styles/academics.css';

const Academics = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [expandedProgram, setExpandedProgram] = useState(null);

  // Academic sections data
  const academicSections = [
    {
      id: 'primary',
      name: 'Primary Section',
      icon: <Users />,
      color: '#10b981',
      description: 'Building strong foundations in early education (Class 1-5)',
      ageRange: '6-10 years',
      totalStudents: 850,
      grades: [
        {
          grade: 'Class 1',
          subjects: ['English', 'Mathematics', 'Science', 'Urdu', 'Islamic Studies', 'Art & Craft', 'Physical Education'],
          focus: 'Foundation building and basic literacy',
          curriculum: 'Cambridge Primary Curriculum',
          activities: ['Story Telling', 'Drawing', 'Basic Sports', 'Music']
        },
        {
          grade: 'Class 2',
          subjects: ['English', 'Mathematics', 'Science', 'Urdu', 'Islamic Studies', 'Computer Basics', 'Art & Craft'],
          focus: 'Reading, writing and basic numeracy',
          curriculum: 'Cambridge Primary Curriculum',
          activities: ['Reading Club', 'Math Games', 'Nature Walks', 'Arts']
        },
        {
          grade: 'Class 3',
          subjects: ['English', 'Mathematics', 'Science', 'Urdu', 'Islamic Studies', 'Social Studies', 'Computer Studies'],
          focus: 'Enhanced learning and comprehension',
          curriculum: 'Cambridge Primary Curriculum',
          activities: ['Science Club', 'Drama', 'Sports Day', 'Creative Writing']
        },
        {
          grade: 'Class 4',
          subjects: ['English', 'Mathematics', 'Science', 'Urdu', 'Islamic Studies', 'Social Studies', 'Computer Studies'],
          focus: 'Critical thinking and problem solving',
          curriculum: 'Cambridge Primary Curriculum',
          activities: ['Quiz Competitions', 'Field Trips', 'Art Exhibition', 'Music Classes']
        },
        {
          grade: 'Class 5',
          subjects: ['English', 'Mathematics', 'Science', 'Urdu', 'Islamic Studies', 'Social Studies', 'Computer Studies'],
          focus: 'Preparation for middle school',
          curriculum: 'Cambridge Primary Checkpoint',
          activities: ['Science Fair', 'Debate Club', 'Sports Teams', 'Leadership Programs']
        }
      ]
    },
    {
      id: 'middle',
      name: 'Middle Section',
      icon: <BookOpen />,
      color: '#3b82f6',
      description: 'Developing skills and knowledge (Class 6-8)',
      ageRange: '11-13 years',
      totalStudents: 720,
      grades: [
        {
          grade: 'Class 6',
          subjects: ['English', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Urdu', 'Islamic Studies', 'Pakistan Studies', 'Computer Science'],
          focus: 'Introduction to specialized sciences',
          curriculum: 'Cambridge Lower Secondary',
          activities: ['Science Projects', 'Literary Society', 'Athletics', 'Robotics Club']
        },
        {
          grade: 'Class 7',
          subjects: ['English', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Urdu', 'Islamic Studies', 'Pakistan Studies', 'Computer Science'],
          focus: 'Advanced concepts and applications',
          curriculum: 'Cambridge Lower Secondary',
          activities: ['Model UN', 'Coding Club', 'Basketball', 'Environmental Club']
        },
        {
          grade: 'Class 8',
          subjects: ['English', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Urdu', 'Islamic Studies', 'Pakistan Studies', 'Computer Science'],
          focus: 'Preparation for O-Levels',
          curriculum: 'Cambridge Lower Secondary Checkpoint',
          activities: ['Research Projects', 'Public Speaking', 'Swimming', 'Social Service']
        }
      ]
    },
    {
      id: 'senior',
      name: 'Senior Section',
      icon: <GraduationCap />,
      color: '#f59e0b',
      description: 'Excellence in higher education (O-Levels & A-Levels)',
      ageRange: '14-18 years',
      totalStudents: 930,
      grades: [
        {
          grade: 'O-Level Year 1',
          subjects: ['English Language', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'Urdu', 'Islamiyat', 'Pakistan Studies'],
          focus: 'Cambridge O-Level preparation',
          curriculum: 'Cambridge IGCSE',
          activities: ['Model United Nations', 'Science Olympiad', 'Sports Excellence', 'Community Service']
        },
        {
          grade: 'O-Level Year 2',
          subjects: ['English Language', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'Urdu', 'Islamiyat', 'Pakistan Studies'],
          focus: 'O-Level examinations and career guidance',
          curriculum: 'Cambridge IGCSE',
          activities: ['Career Counseling', 'University Prep', 'Leadership Training', 'Entrepreneurship Club']
        },
        {
          grade: 'A-Level Year 1 (AS)',
          subjects: ['Choose 3-4 from: Mathematics, Physics, Chemistry, Biology, Computer Science, Economics, Business Studies, Psychology'],
          focus: 'Specialized subject mastery',
          curriculum: 'Cambridge A-Level',
          activities: ['Research Projects', 'Internships', 'University Applications', 'TEDx Events']
        },
        {
          grade: 'A-Level Year 2 (A2)',
          subjects: ['Continuation of AS subjects with advanced modules'],
          focus: 'A-Level examinations and university admissions',
          curriculum: 'Cambridge A-Level',
          activities: ['Final Year Projects', 'University Visits', 'Career Fairs', 'Alumni Networking']
        }
      ]
    }
  ];

  // Special programs
  const specialPrograms = [
    {
      id: 1,
      title: 'STEM Excellence Program',
      icon: <FlaskConical />,
      color: '#8b5cf6',
      description: 'Advanced Science, Technology, Engineering, and Mathematics curriculum with hands-on projects and research opportunities.',
      features: [
        'State-of-the-art laboratories',
        'Robotics and coding workshops',
        'Science fair participation',
        'Industry expert mentorship',
        'International competitions'
      ]
    },
    {
      id: 2,
      title: 'Arts & Culture Program',
      icon: <Palette />,
      color: '#ec4899',
      description: 'Comprehensive arts education including visual arts, performing arts, music, and cultural studies.',
      features: [
        'Professional art studios',
        'Theater and drama productions',
        'Music and choir programs',
        'Annual art exhibitions',
        'Cultural exchange programs'
      ]
    },
    {
      id: 3,
      title: 'Sports & Athletics',
      icon: <Trophy />,
      color: '#f59e0b',
      description: 'Developing physical fitness, teamwork, and sportsmanship through various athletic programs.',
      features: [
        'Olympic-size swimming pool',
        'Indoor sports complex',
        'Professional coaching',
        'Inter-school competitions',
        'Sports scholarship opportunities'
      ]
    },
    {
      id: 4,
      title: 'Language Proficiency',
      icon: <Globe />,
      color: '#06b6d4',
      description: 'Multilingual education program focusing on English, Urdu, and international language options.',
      features: [
        'Native speaker instructors',
        'Language exchange programs',
        'International certifications',
        'Debate and public speaking',
        'Cultural immersion activities'
      ]
    },
    {
      id: 5,
      title: 'Technology & Innovation',
      icon: <Laptop />,
      color: '#6366f1',
      description: 'Cutting-edge technology education preparing students for the digital future.',
      features: [
        'Computer labs with latest equipment',
        'Programming and app development',
        'AI and machine learning basics',
        'Cybersecurity awareness',
        'Tech startup incubation'
      ]
    },
    {
      id: 6,
      title: 'Leadership Development',
      icon: <Target />,
      color: '#10b981',
      description: 'Building future leaders through character education and leadership training.',
      features: [
        'Student council programs',
        'Community service projects',
        'Public speaking workshops',
        'Entrepreneurship training',
        'Mentorship programs'
      ]
    }
  ];

  // Academic features
  const academicFeatures = [
    {
      icon: <BookMarked />,
      title: 'Cambridge Curriculum',
      description: 'International standard education recognized worldwide'
    },
    {
      icon: <Users />,
      title: 'Small Class Sizes',
      description: 'Maximum 25 students per class for personalized attention'
    },
    {
      icon: <Award />,
      title: 'Expert Faculty',
      description: 'Highly qualified teachers with advanced degrees'
    },
    {
      icon: <Lightbulb />,
      title: 'Innovative Teaching',
      description: 'Modern teaching methods and technology integration'
    },
    {
      icon: <CheckCircle />,
      title: 'Regular Assessments',
      description: 'Continuous evaluation and progress tracking'
    },
    {
      icon: <TrendingUp />,
      title: '95% Success Rate',
      description: 'Outstanding academic performance and university admissions'
    }
  ];

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    setSelectedGrade(null);
  };

  const handleGradeClick = (grade) => {
    setSelectedGrade(grade);
  };

  const closeModal = () => {
    setSelectedSection(null);
    setSelectedGrade(null);
  };

  const toggleProgram = (id) => {
    setExpandedProgram(expandedProgram === id ? null : id);
  };

  const getSubjectIcon = (subject) => {
    const icons = {
      'Mathematics': <Calculator size={18} />,
      'Physics': <FlaskConical size={18} />,
      'Chemistry': <FlaskConical size={18} />,
      'Biology': <Microscope size={18} />,
      'Science': <Microscope size={18} />,
      'Computer': <Laptop size={18} />,
      'English': <BookOpen size={18} />,
      'Urdu': <BookOpen size={18} />
    };

    for (let key in icons) {
      if (subject.includes(key)) return icons[key];
    }
    return <BookOpen size={18} />;
  };

  return (
    <div className="academics-page">
      {/* Hero Section */}
      <section className="academics-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Academic Excellence</h1>
            <p className="hero-subtitle">
              Comprehensive education programs designed to nurture academic brilliance and holistic development
            </p>
          </div>
        </div>
      </section>

      {/* Academic Features */}
      <section className="academic-features-section">
        <div className="container">
          <div className="features-grid">
            {academicFeatures.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Sections */}
      <section className="academic-sections section">
        <div className="container">
          <div className="section-title">
            <h2>Our Academic Sections</h2>
            <p>Choose a section to explore grades, subjects, and curriculum details</p>
          </div>

          <div className="sections-grid">
            {academicSections.map((section) => (
              <div 
                key={section.id} 
                className="section-card"
                onClick={() => handleSectionClick(section)}
                style={{ '--section-color': section.color }}
              >
                <div className="section-icon" style={{ backgroundColor: section.color }}>
                  {section.icon}
                </div>
                <h3>{section.name}</h3>
                <p className="section-description">{section.description}</p>
                <div className="section-meta">
                  <div className="meta-item">
                    <Users size={16} />
                    <span>{section.totalStudents} Students</span>
                  </div>
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{section.ageRange}</span>
                  </div>
                </div>
                <div className="section-grades">
                  <span>{section.grades.length} Grades Available</span>
                </div>
                <button className="explore-btn">
                  Explore Section
                  <ChevronRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="special-programs-section section">
        <div className="container">
          <div className="section-title">
            <h2>Special Programs & Activities</h2>
            <p>Beyond academics - enrichment programs for holistic development</p>
          </div>

          <div className="programs-grid">
            {specialPrograms.map((program) => (
              <div key={program.id} className="program-card">
                <div className="program-header" onClick={() => toggleProgram(program.id)}>
                  <div className="program-icon" style={{ backgroundColor: program.color }}>
                    {program.icon}
                  </div>
                  <div className="program-info">
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                  </div>
                  <button className="expand-btn">
                    {expandedProgram === program.id ? <ChevronDown /> : <ChevronRight />}
                  </button>
                </div>
                
                {expandedProgram === program.id && (
                  <div className="program-details">
                    <h4>Program Features:</h4>
                    <ul>
                      {program.features.map((feature, index) => (
                        <li key={index}>
                          <CheckCircle size={18} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Detail Modal */}
      {selectedSection && (
        <div className="section-modal-overlay" onClick={closeModal}>
          <div className="section-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="modal-header" style={{ background: `linear-gradient(135deg, ${selectedSection.color}, ${selectedSection.color}dd)` }}>
              <div className="modal-icon">{selectedSection.icon}</div>
              <h2>{selectedSection.name}</h2>
              <p>{selectedSection.description}</p>
              <div className="header-stats">
                <div className="stat">
                  <Users size={20} />
                  <span>{selectedSection.totalStudents} Students</span>
                </div>
                <div className="stat">
                  <Calendar size={20} />
                  <span>{selectedSection.ageRange}</span>
                </div>
                <div className="stat">
                  <BookOpen size={20} />
                  <span>{selectedSection.grades.length} Grades</span>
                </div>
              </div>
            </div>

            <div className="modal-body">
              <h3>Grades & Curriculum</h3>
              <div className="grades-list">
                {selectedSection.grades.map((grade, index) => (
                  <div key={index} className="grade-item">
                    <div 
                      className="grade-header"
                      onClick={() => handleGradeClick(selectedGrade?.grade === grade.grade ? null : grade)}
                    >
                      <div className="grade-title">
                        <h4>{grade.grade}</h4>
                        <span className="curriculum-badge">{grade.curriculum}</span>
                      </div>
                      <button className="grade-expand-btn">
                        {selectedGrade?.grade === grade.grade ? <ChevronDown /> : <ChevronRight />}
                      </button>
                    </div>

                    {selectedGrade?.grade === grade.grade && (
                      <div className="grade-details">
                        <div className="detail-section">
                          <h5><Target size={18} /> Learning Focus</h5>
                          <p>{grade.focus}</p>
                        </div>

                        <div className="detail-section">
                          <h5><BookOpen size={18} /> Subjects ({grade.subjects.length})</h5>
                          <div className="subjects-grid">
                            {grade.subjects.map((subject, idx) => (
                              <div key={idx} className="subject-tag">
                                {getSubjectIcon(subject)}
                                <span>{subject}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="detail-section">
                          <h5><Trophy size={18} /> Co-curricular Activities</h5>
                          <div className="activities-list">
                            {grade.activities.map((activity, idx) => (
                              <span key={idx} className="activity-tag">{activity}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="academics-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Join Our Academic Excellence?</h2>
            <p>Enroll your child in our world-class educational programs</p>
            <button className="btn btn-accent btn-lg">
              Apply for Admission
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;