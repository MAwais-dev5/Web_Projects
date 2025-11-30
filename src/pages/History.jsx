// client/src/pages/History.jsx
import React, { useState } from 'react';
import '../styles/history.css';
import { 
  Calendar,
  Award,
  Users,
  TrendingUp,
  MapPin,
  Building,
  GraduationCap,
  Trophy,
  BookOpen,
  Target,
  Heart,
  Star,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Flag,
  Milestone
} from 'lucide-react';
import '../styles/history.css';

const History = () => {
  const [selectedDecade, setSelectedDecade] = useState(null);
  const [expandedMilestone, setExpandedMilestone] = useState(null);

  // Timeline data
  const timelineData = [
    {
      year: 1900,
      decade: '1980s',
      title: 'Foundation & Early Years',
      subtitle: 'The Beginning of GBHS',
      description: 'Govt Boys High School Tharushah was founded with a vision to provide world-class education in Tharushah, Sindh.',
      image: '/images/history/1985-foundation.jpg',
      milestones: [
        {
          date: 'January 1985',
          title: 'School Established',
          description: 'Govt Boys High School Tharushah opened its doors with 50 students and 8 dedicated teachers in a modest building.',
          icon: <Building />
        },
        {
          date: 'March 1985',
          title: 'First Academic Session',
          description: 'Commenced with Primary Section (Classes 1-5) following Cambridge Primary curriculum.',
          icon: <BookOpen />
        },
        {
          date: 'December 1985',
          title: 'First Annual Day',
          description: 'Celebrated our first annual day with cultural performances and prize distribution.',
          icon: <Trophy />
        }
      ],
      stats: {
        students: 50,
        faculty: 8,
        facilities: 1
      }
    },
    {
      year: 1990,
      decade: '1990s',
      title: 'Growth & Expansion',
      subtitle: 'Building the Foundation',
      description: 'Expanded to include Middle Section and introduced specialized science laboratories and computer education.',
      image: '/images/history/1990-expansion.jpg',
      milestones: [
        {
          date: 'September 1990',
          title: 'Middle Section Inaugurated',
          description: 'Extended education to Classes 6-8 with specialized subject teachers for sciences and mathematics.',
          icon: <GraduationCap />
        },
        {
          date: 'January 1992',
          title: 'Science Laboratories',
          description: 'Established state-of-the-art Physics, Chemistry, and Biology laboratories.',
          icon: <Sparkles />
        },
        {
          date: 'May 1995',
          title: 'Computer Lab Launch',
          description: 'Introduced computer education with a modern computer laboratory.',
          icon: <Target />
        },
        {
          date: 'December 1998',
          title: '500 Students Milestone',
          description: 'Student enrollment crossed 500, establishing us as a leading educational institution.',
          icon: <Users />
        }
      ],
      stats: {
        students: 500,
        faculty: 35,
        facilities: 2
      }
    },
    {
      year: 2000,
      decade: '2000s',
      title: 'Excellence & Recognition',
      subtitle: 'Rising to Prominence',
      description: 'Introduced O-Levels and A-Levels, achieved Cambridge certification, and won multiple national awards.',
      image: '/images/history/2000-recognition.jpg',
      milestones: [
        {
          date: 'August 2000',
          title: 'O-Levels Program Launched',
          description: 'Started Cambridge O-Level program, opening doors to international education standards.',
          icon: <Award />
        },
        {
          date: 'March 2003',
          title: 'A-Levels Introduction',
          description: 'Extended to A-Level education, completing the full Cambridge pathway.',
          icon: <GraduationCap />
        },
        {
          date: 'June 2005',
          title: 'Best School Award',
          description: 'Received "Best School in Sindh" award from the Provincial Education Department.',
          icon: <Trophy />
        },
        {
          date: 'January 2007',
          title: 'New Campus Building',
          description: 'Inaugurated a modern three-story building with smart classrooms and sports facilities.',
          icon: <Building />
        },
        {
          date: 'November 2009',
          title: '1000 Students Achieved',
          description: 'Enrollment exceeded 1000 students across all sections.',
          icon: <TrendingUp />
        }
      ],
      stats: {
        students: 1000,
        faculty: 75,
        facilities: 3
      }
    },
    {
      year: 2010,
      decade: '2010s',
      title: 'Innovation & Modernization',
      subtitle: 'Embracing Technology',
      description: 'Digital transformation with smart classrooms, e-learning platforms, and international collaborations.',
      image: '/images/history/2010-innovation.jpg',
      milestones: [
        {
          date: 'February 2010',
          title: 'Smart Classrooms',
          description: 'Introduced interactive smart boards and digital learning tools in all classrooms.',
          icon: <Sparkles />
        },
        {
          date: 'August 2012',
          title: 'Swimming Pool Complex',
          description: 'Opened Olympic-size swimming pool and indoor sports complex.',
          icon: <Trophy />
        },
        {
          date: 'January 2014',
          title: 'International Partnerships',
          description: 'Established exchange programs with schools in UK, USA, and UAE.',
          icon: <Flag />
        },
        {
          date: 'May 2016',
          title: 'STEM Excellence Center',
          description: 'Launched dedicated STEM center with robotics lab and innovation hub.',
          icon: <Target />
        },
        {
          date: 'September 2018',
          title: 'Top Cambridge Results',
          description: 'Students achieved record-breaking Cambridge examination results with 95% distinction rate.',
          icon: <Star />
        }
      ],
      stats: {
        students: 1800,
        faculty: 120,
        facilities: 5
      }
    },
    {
      year: 2020,
      decade: '2020s',
      title: 'GBHS in the Modern Era',
      subtitle: 'Leading Education Forward',
      description: 'Adapted to hybrid learning, expanded facilities, and continued excellence despite global challenges.',
      image: '/images/history/2020-modern.jpg',
      milestones: [
        {
          date: 'March 2020',
          title: 'Digital Learning Platform',
          description: 'Successfully transitioned to online learning during global pandemic without disrupting education.',
          icon: <BookOpen />
        },
        {
          date: 'August 2021',
          title: 'Arts & Culture Center',
          description: 'Inaugurated a dedicated arts center with music rooms, art studios, and theater.',
          icon: <Sparkles />
        },
        {
          date: 'January 2023',
          title: 'AI Lab Establishment',
          description: 'Opened artificial intelligence and machine learning laboratory for advanced computing.',
          icon: <Target />
        },
        {
          date: 'June 2024',
          title: '2500 Students Milestone',
          description: 'Reached 2500 students with 150+ faculty members, cementing our position as the leading school.',
          icon: <Users />
        },
        {
          date: 'Present',
          title: 'Continuous Excellence',
          description: 'Maintaining 95% success rate and producing top Cambridge achievers year after year.',
          icon: <Trophy />
        }
      ],
      stats: {
        students: 2500,
        faculty: 150,
        facilities: 8
      }
    }
  ];

  // Key achievements
  const achievements = [
    {
      icon: <Award />,
      value: '38+',
      label: 'Years of Excellence',
      color: '#f59e0b'
    },
    {
      icon: <Users />,
      value: '10,000+',
      label: 'Alumni Network',
      color: '#3b82f6'
    },
    {
      icon: <Trophy />,
      value: '100+',
      label: 'Awards & Recognition',
      color: '#10b981'
    },
    {
      icon: <Star />,
      value: '95%',
      label: 'Success Rate',
      color: '#8b5cf6'
    }
  ];

  // Legacy highlights
  const legacyHighlights = [
    {
      title: 'Academic Excellence',
      description: 'Consistently producing top Cambridge achievers with distinction rates above 90%.',
      icon: <BookOpen />
    },
    {
      title: 'Infrastructure Development',
      description: 'From a single building to a sprawling campus with world-class facilities.',
      icon: <Building />
    },
    {
      title: 'Community Impact',
      description: 'Educated over 10,000 students who have become leaders in various fields.',
      icon: <Heart />
    },
    {
      title: 'Innovation Pioneer',
      description: 'First school in the region to introduce smart classrooms and e-learning.',
      icon: <Sparkles />
    }
  ];

  const toggleDecade = (decade) => {
    setSelectedDecade(selectedDecade === decade ? null : decade);
  };

  const toggleMilestone = (id) => {
    setExpandedMilestone(expandedMilestone === id ? null : id);
  };

  return (
    <div className="history-page">
      {/* Hero Section */}
      <section className="history-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">
              <Calendar size={20} />
              Since 1985
            </span>
            <h1 className="hero-title">Our Journey of Excellence</h1>
            <p className="hero-subtitle">
              38 years of nurturing minds, building character, and shaping future leaders
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="container">
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card" style={{ '--card-color': achievement.color }}>
                <div className="achievement-icon" style={{ backgroundColor: achievement.color }}>
                  {achievement.icon}
                </div>
                <h3 className="achievement-value">{achievement.value}</h3>
                <p className="achievement-label">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section section">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>A Legacy of Excellence</h2>
              <p>
                Founded in 1985, Excellence International School began with a simple yet powerful vision: 
                to provide world-class education that nurtures young minds and builds future leaders. What 
                started as a modest institution with 50 students has grown into one of Sukkur's most 
                prestigious educational establishments.
              </p>
              <p>
                Over the past 38 years, we have remained committed to academic excellence, character 
                development, and holistic education. Our journey is marked by continuous innovation, 
                unwavering dedication, and the success of thousands of students who have passed through 
                our halls.
              </p>
              <p>
                From introducing the Cambridge curriculum to pioneering digital learning in the region, 
                we have always been at the forefront of educational innovation. Today, we stand proud 
                with a community of over 2,500 students, 150+ dedicated faculty members, and an alumni 
                network that spans the globe.
              </p>
            </div>
            <div className="intro-image">
              <img src="/images/history/school-heritage.jpg" alt="School Heritage" />
              <div className="image-badge">
                <Milestone size={32} />
                <span>38 Years Strong</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section section">
        <div className="container">
          <div className="section-title">
            <h2>Our Journey Through Time</h2>
            <p>Milestones that shaped our institution</p>
          </div>

          <div className="timeline">
            {timelineData.map((period, index) => (
              <div 
                key={period.year} 
                className={`timeline-item ${selectedDecade === period.decade ? 'expanded' : ''}`}
              >
                <div className="timeline-marker">
                  <div className="marker-dot"></div>
                  <div className="marker-line"></div>
                </div>

                <div className="timeline-content">
                  <div 
                    className="timeline-header"
                    onClick={() => toggleDecade(period.decade)}
                  >
                    <div className="timeline-year">{period.year}</div>
                    <div className="timeline-info">
                      <h3>{period.title}</h3>
                      <p className="timeline-subtitle">{period.subtitle}</p>
                      <p className="timeline-description">{period.description}</p>
                    </div>
                    <button className="expand-btn">
                      {selectedDecade === period.decade ? <ChevronDown /> : <ChevronRight />}
                    </button>
                  </div>

                  {selectedDecade === period.decade && (
                    <div className="timeline-details">
                      <div className="timeline-image">
                        <img src={period.image} alt={period.title} />
                      </div>

                      <div className="timeline-stats">
                        <div className="stat-item">
                          <Users size={24} />
                          <div>
                            <strong>{period.stats.students}</strong>
                            <span>Students</span>
                          </div>
                        </div>
                        <div className="stat-item">
                          <GraduationCap size={24} />
                          <div>
                            <strong>{period.stats.faculty}</strong>
                            <span>Faculty</span>
                          </div>
                        </div>
                        <div className="stat-item">
                          <Building size={24} />
                          <div>
                            <strong>{period.stats.facilities}</strong>
                            <span>Facilities</span>
                          </div>
                        </div>
                      </div>

                      <div className="milestones-list">
                        <h4>Key Milestones</h4>
                        {period.milestones.map((milestone, idx) => (
                          <div key={idx} className="milestone-item">
                            <div className="milestone-icon">{milestone.icon}</div>
                            <div className="milestone-content">
                              <div className="milestone-date">{milestone.date}</div>
                              <h5>{milestone.title}</h5>
                              <p>{milestone.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Highlights */}
      <section className="legacy-section section">
        <div className="container">
          <div className="section-title">
            <h2>Our Lasting Legacy</h2>
            <p>Impact that extends beyond the classroom</p>
          </div>

          <div className="legacy-grid">
            {legacyHighlights.map((highlight, index) => (
              <div key={index} className="legacy-card">
                <div className="legacy-icon">{highlight.icon}</div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Present Day Section */}
      <section className="present-day-section">
        <div className="container">
          <div className="present-content">
            <h2>Excellence Today</h2>
            <p>
              Today, Excellence International School stands as a beacon of quality education in Sukkur. 
              With state-of-the-art facilities, a dedicated team of educators, and a proven track record 
              of excellence, we continue to inspire and empower students to reach their full potential.
            </p>
            <p>
              Our commitment to innovation, academic rigor, and character development remains as strong 
              as it was on day one. As we look to the future, we remain dedicated to maintaining the 
              highest standards of education while adapting to the evolving needs of our students and society.
            </p>
            <div className="present-stats">
              <div className="present-stat">
                <MapPin size={28} />
                <div>
                  <strong>Modern Campus</strong>
                  <span>8 specialized facilities</span>
                </div>
              </div>
              <div className="present-stat">
                <Award size={28} />
                <div>
                  <strong>Cambridge Certified</strong>
                  <span>International standards</span>
                </div>
              </div>
              <div className="present-stat">
                <Trophy size={28} />
                <div>
                  <strong>Top Achievers</strong>
                  <span>95% success rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;