// client/src/pages/Home.jsx
import React from 'react';
import { Award, Users, BookOpen, TrendingUp, Target, Heart, ChevronRight, Star } from 'lucide-react';

const Home = ({ setCurrentPage }) => {
  const stats = [
    { icon: <Users />, value: '2500+', label: 'Students' },
    { icon: <Award />, value: '150+', label: 'Expert Faculty' },
    { icon: <BookOpen />, value: '38+', label: 'Years of GBHS' },
    { icon: <TrendingUp />, value: '95%', label: 'Success Rate' }
  ];

  const features = [
    {
      icon: <Target />,
      title: 'Quality Education',
      description: 'Comprehensive curriculum designed to foster academic excellence and critical thinking.'
    },
    {
      icon: <Users />,
      title: 'Expert Faculty',
      description: 'Highly qualified and experienced teachers dedicated to student success.'
    },
    {
      icon: <Heart />,
      title: 'Holistic Development',
      description: 'Focus on character building, sports, arts, and extracurricular activities.'
    },
    {
      icon: <Award />,
      title: 'Modern Facilities',
      description: 'State-of-the-art infrastructure with advanced laboratories and smart classrooms.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Ahmed',
      role: 'Parent',
      image: '/images/testimonials/parent1.jpg',
      text: 'Govt Boys High School Tharushah has transformed my child\'s learning journey. The teachers are supportive and the environment is nurturing.'
    },
    {
      name: 'Ali Hassan',
      role: 'Alumni',
      image: '/images/testimonials/alumni1.jpg',
      text: 'The foundation I received at Govt Boys High School Tharushah prepared me for success in university and beyond.'
    },
    {
      name: 'Fatima Khan',
      role: 'Current Student',
      image: '/images/testimonials/student1.jpg',
      text: 'I love the diverse learning opportunities and supportive community at our school.'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <span className="hero-badge">
                <Star size={16} />
                Established 1900
              </span>
              <h1 className="hero-title">
                Welcome to <span className="highlight">Govt Boys High School Tharushah</span>
              </h1>
              <p className="hero-description">
                Nurturing young minds with quality education, character building, and holistic development. 
                Join us in shaping future leaders and global citizens.
              </p>
              <div className="hero-buttons">
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={() => setCurrentPage('registration')}
                >
                  Apply for Admission
                  <ChevronRight size={20} />
                </button>
                <button 
                  className="btn btn-outline btn-lg"
                  onClick={() => setCurrentPage('about')}
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-image-wrapper">
                <img src="/images/hero-school.jpg" alt="School Building" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose GBHS School Tharushah?</h2>
            <p>Discover what makes us the preferred choice for quality education</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview-section">
        <div className="container">
          <div className="about-preview-content">
            <div className="about-preview-image">
              <img src="/images/about-preview.jpg" alt="Students Learning" />
            </div>
            <div className="about-preview-text">
              <h2>Building Future Leaders Since 1900</h2>
              <p>
                Govt Boys High School Tharushah has been at the forefront of quality education for over 
                three decades. Our commitment to academic excellence, character development, and holistic 
                growth has made us one of the most trusted educational institutions.
              </p>
              <p>
                We believe every child is unique and deserves personalized attention to unlock their 
                full potential. Our dedicated faculty, modern facilities, and innovative teaching 
                methods create an environment where students thrive.
              </p>
              <button 
                className="btn btn-primary"
                onClick={() => setCurrentPage('about')}
              >
                Read Our Story
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section">
        <div className="container">
          <div className="section-title">
            <h2>What Our Community Says</h2>
            <p>Hear from parents, students, and alumni about their experience</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="author-info">
                    <p className="author-name">{testimonial.name}</p>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Join Our GBHS Family?</h2>
            <p>Start your journey towards academic excellence and holistic development</p>
            <button 
              className="btn btn-accent btn-lg"
              onClick={() => setCurrentPage('registration')}
            >
              Apply Now
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;