// client/src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import '../styles/navbar.css';
import { 
  Menu, 
  X, 
  User, 
  LogOut, 
  GraduationCap, 
  ChevronDown,
  Home,
  Info,
  Users,
  BookOpen,
  Image,
  History,
  FileText,
  School,
  Settings
} from 'lucide-react';
import '../styles/navbar.css';

const Navbar = ({ currentPage, setCurrentPage, isLoggedIn, user, onLogout }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when window resizes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={18} /> },
    { id: 'about', label: 'About Us', icon: <Info size={18} /> },
    { id: 'faculty', label: 'Faculty', icon: <Users size={18} /> },
    { id: 'academics', label: 'Academics', icon: <BookOpen size={18} /> },
    { id: 'gallery', label: 'Gallery', icon: <Image size={18} /> },
    { id: 'history', label: 'History', icon: <History size={18} /> },
    { id: 'registration', label: 'Registration', icon: <FileText size={18} /> },
    { id: 'school', label: 'School', icon: <School size={18} /> }
  ];

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setDropdownOpen(false);
    if (onLogout) {
      onLogout();
    }
    handleNavClick('home');
  };

  const getInitials = (name) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-content">
            {/* Logo */}
            <div className="navbar-logo" onClick={() => handleNavClick('home')}>
              <div className="logo-icon-wrapper">
                <GraduationCap size={36} className="logo-icon" />
              </div>
              <div className="logo-text">
                <span className="logo-title">Govt Boys High School Tharushah</span>
                <span className="logo-tagline">Building Future Leaders</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <ul className="navbar-menu desktop-menu">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* User Actions */}
            <div className="navbar-actions">
              {isLoggedIn && user ? (
                <div className="user-menu" ref={dropdownRef}>
                  <button 
                    className="user-button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                  >
                    <div className="user-avatar">
                      {user.photo ? (
                        <img src={user.photo} alt={user.fullName} />
                      ) : (
                        <span className="avatar-initials">
                          {getInitials(user.fullName)}
                        </span>
                      )}
                    </div>
                    <span className="user-name">{user.fullName}</span>
                    <ChevronDown 
                      size={18} 
                      className={`dropdown-arrow ${dropdownOpen ? 'open' : ''}`}
                    />
                  </button>
                  
                  {dropdownOpen && (
                    <div className="dropdown-menu">
                      <div className="dropdown-header">
                        <div className="user-avatar-large">
                          {user.photo ? (
                            <img src={user.photo} alt={user.fullName} />
                          ) : (
                            <span className="avatar-initials">
                              {getInitials(user.fullName)}
                            </span>
                          )}
                        </div>
                        <p className="user-name-header">{user.fullName}</p>
                        <p className="user-email">{user.email}</p>
                        <span className="user-role-badge">{user.role || 'Parent'}</span>
                      </div>
                      
                      <div className="dropdown-divider"></div>
                      
                      <button 
                        className="dropdown-item" 
                        onClick={() => handleNavClick('profile')}
                      >
                        <User size={18} />
                        <span>My Profile</span>
                      </button>
                      
                      {user.role === 'parent' && (
                        <button 
                          className="dropdown-item" 
                          onClick={() => handleNavClick('my-applications')}
                        >
                          <FileText size={18} />
                          <span>My Applications</span>
                        </button>
                      )}
                      
                      {(user.role === 'admin' || user.role === 'faculty') && (
                        <button 
                          className="dropdown-item" 
                          onClick={() => handleNavClick('dashboard')}
                        >
                          <Settings size={18} />
                          <span>Dashboard</span>
                        </button>
                      )}
                      
                      <div className="dropdown-divider"></div>
                      
                      <button 
                        className="dropdown-item logout" 
                        onClick={handleLogout}
                      >
                        <LogOut size={18} />
                        <span>Logout</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button 
                  className="btn btn-primary btn-sm login-btn"
                  onClick={() => handleNavClick('login')}
                >
                  <User size={18} />
                  <span> Register</span>
                </button>
              )}

              {/* Mobile Menu Toggle */}
              <button 
                className="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <ul className="mobile-menu-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    className={`mobile-nav-link ${currentPage === item.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    <span className="mobile-nav-icon">{item.icon}</span>
                    <span className="mobile-nav-text">{item.label}</span>
                    {currentPage === item.id && (
                      <span className="mobile-nav-indicator"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {isLoggedIn && user && (
              <div className="mobile-user-section">
                <div className="mobile-user-info">
                  <div className="user-avatar">
                    {user.photo ? (
                      <img src={user.photo} alt={user.fullName} />
                    ) : (
                      <span className="avatar-initials">
                        {getInitials(user.fullName)}
                      </span>
                    )}
                  </div>
                  <div className="user-details">
                    <p className="user-name">{user.fullName}</p>
                    <p className="user-email">{user.email}</p>
                  </div>
                </div>
                
                <div className="mobile-user-actions">
                  <button 
                    className="mobile-action-btn"
                    onClick={() => handleNavClick('profile')}
                  >
                    <User size={18} />
                    <span>Profile</span>
                  </button>
                  <button 
                    className="mobile-action-btn logout"
                    onClick={handleLogout}
                  >
                    <LogOut size={18} />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;