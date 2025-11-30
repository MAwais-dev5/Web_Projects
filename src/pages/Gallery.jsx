
// client/src/pages/Gallery.jsx
import React, { useState, useEffect } from 'react';
import "../styles/gallery.css";
import { 
  Image as ImageIcon,
  Video,
  Calendar,
  Filter,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Download,
  Share2,
  Heart,
  Eye,
  Grid,
  List,
  ZoomIn,
  MapPin,
  Clock,
  Users,
  Trophy,
  Palette,
  Microscope,
  Music,
  Plane
} from 'lucide-react';
import '../styles/gallery.css';

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gallery data
  const galleryItems = [
    {
      id: 1,
      type: 'photo',
      category: 'Sports',
      title: 'Annual Sports Day 2024',
      description: 'Students participating in various athletic events during our annual sports day celebration.',
      mediaUrl: '/images/gallery/sports-day-1.jpg',
      thumbnail: '/images/gallery/thumbs/sports-day-1.jpg',
      date: '2024-03-15',
      location: 'School Sports Ground',
      views: 1250,
      likes: 348
    },
    {
      id: 2,
      type: 'video',
      category: 'Cultural',
      title: 'Cultural Festival Highlights',
      description: 'A glimpse into our vibrant cultural festival featuring traditional dances and performances.',
      mediaUrl: '/videos/cultural-festival.mp4',
      thumbnail: '/images/gallery/thumbs/cultural-fest.jpg',
      date: '2024-02-20',
      location: 'Main Auditorium',
      views: 2100,
      likes: 567,
      duration: '5:32'
    },
    {
      id: 3,
      type: 'photo',
      category: 'Academic',
      title: 'Science Fair 2024',
      description: 'Students showcasing innovative science projects and experiments.',
      mediaUrl: '/images/gallery/science-fair-1.jpg',
      thumbnail: '/images/gallery/thumbs/science-fair-1.jpg',
      date: '2024-04-10',
      location: 'Science Labs',
      views: 890,
      likes: 234
    },
    {
      id: 4,
      type: 'photo',
      category: 'Ceremony',
      title: 'Graduation Ceremony 2024',
      description: 'Proud graduates receiving their diplomas in a memorable ceremony.',
      mediaUrl: '/images/gallery/graduation-1.jpg',
      thumbnail: '/images/gallery/thumbs/graduation-1.jpg',
      date: '2024-05-25',
      location: 'Main Hall',
      views: 3200,
      likes: 892
    },
    {
      id: 5,
      type: 'video',
      category: 'Annual Day',
      title: 'Annual Day Performance',
      description: 'Outstanding performances by our talented students at the annual day function.',
      mediaUrl: '/videos/annual-day.mp4',
      thumbnail: '/images/gallery/thumbs/annual-day.jpg',
      date: '2024-06-15',
      location: 'Main Auditorium',
      views: 4500,
      likes: 1203,
      duration: '8:45'
    },
    {
      id: 6,
      type: 'photo',
      category: 'Trip',
      title: 'Educational Tour to Museum',
      description: 'Students exploring history and culture during an educational trip.',
      mediaUrl: '/images/gallery/museum-trip.jpg',
      thumbnail: '/images/gallery/thumbs/museum-trip.jpg',
      date: '2024-03-28',
      location: 'National Museum',
      views: 1100,
      likes: 298
    },
    {
      id: 7,
      type: 'photo',
      category: 'Sports',
      title: 'Inter-School Cricket Championship',
      description: 'Our cricket team securing victory in the inter-school championship.',
      mediaUrl: '/images/gallery/cricket-match.jpg',
      thumbnail: '/images/gallery/thumbs/cricket-match.jpg',
      date: '2024-04-22',
      location: 'School Cricket Ground',
      views: 1580,
      likes: 445
    },
    {
      id: 8,
      type: 'photo',
      category: 'Cultural',
      title: 'Art Exhibition Opening',
      description: 'Students displaying their creative artwork in the annual art exhibition.',
      mediaUrl: '/images/gallery/art-exhibition.jpg',
      thumbnail: '/images/gallery/thumbs/art-exhibition.jpg',
      date: '2024-02-10',
      location: 'Art Gallery',
      views: 950,
      likes: 312
    },
    {
      id: 9,
      type: 'video',
      category: 'Academic',
      title: 'Robotics Competition',
      description: 'Our robotics team demonstrating their innovative projects.',
      mediaUrl: '/videos/robotics.mp4',
      thumbnail: '/images/gallery/thumbs/robotics.jpg',
      date: '2024-05-05',
      location: 'Computer Lab',
      views: 1750,
      likes: 523,
      duration: '6:18'
    },
    {
      id: 10,
      type: 'photo',
      category: 'Ceremony',
      title: 'Prize Distribution Ceremony',
      description: 'Recognizing and rewarding academic and extracurricular achievements.',
      mediaUrl: '/images/gallery/prize-ceremony.jpg',
      thumbnail: '/images/gallery/thumbs/prize-ceremony.jpg',
      date: '2024-06-30',
      location: 'Main Hall',
      views: 2300,
      likes: 678
    },
    {
      id: 11,
      type: 'photo',
      category: 'Sports',
      title: 'Swimming Gala',
      description: 'Students competing in various swimming events.',
      mediaUrl: '/images/gallery/swimming.jpg',
      thumbnail: '/images/gallery/thumbs/swimming.jpg',
      date: '2024-04-15',
      location: 'School Pool',
      views: 1420,
      likes: 389
    },
    {
      id: 12,
      type: 'video',
      category: 'Cultural',
      title: 'Music Concert',
      description: 'A mesmerizing musical evening by our talented music club.',
      mediaUrl: '/videos/music-concert.mp4',
      thumbnail: '/images/gallery/thumbs/music-concert.jpg',
      date: '2024-03-12',
      location: 'Main Auditorium',
      views: 2800,
      likes: 756,
      duration: '7:22'
    }
  ];

  // Filter options
  const typeFilters = [
    { id: 'all', label: 'All Media', icon: <Grid /> },
    { id: 'photo', label: 'Photos', icon: <ImageIcon /> },
    { id: 'video', label: 'Videos', icon: <Video /> }
  ];

  const categoryFilters = [
    { id: 'all', label: 'All Categories', icon: <Filter /> },
    { id: 'Sports', label: 'Sports', icon: <Trophy /> },
    { id: 'Cultural', label: 'Cultural', icon: <Palette /> },
    { id: 'Academic', label: 'Academic', icon: <Microscope /> },
    { id: 'Ceremony', label: 'Ceremony', icon: <Users /> },
    { id: 'Annual Day', label: 'Annual Day', icon: <Calendar /> },
    { id: 'Trip', label: 'Trips', icon: <Plane /> }
  ];

  // Filter gallery items
  useEffect(() => {
    let filtered = galleryItems;

    // Filter by type
    if (selectedFilter !== 'all') {
      filtered = filtered.filter(item => item.type === selectedFilter);
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredItems(filtered);
  }, [selectedFilter, selectedCategory, searchQuery]);

  const openLightbox = (item, index) => {
    setSelectedMedia(item);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
    document.body.style.overflow = 'auto';
  };

  const navigateMedia = (direction) => {
    let newIndex = currentIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredItems.length;
    } else {
      newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    }
    setCurrentIndex(newIndex);
    setSelectedMedia(filteredItems[newIndex]);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleLike = (e, itemId) => {
    e.stopPropagation();
    // In real app, this would call API to like the item
    console.log('Liked item:', itemId);
  };

  const handleShare = (e, item) => {
    e.stopPropagation();
    // In real app, this would open share dialog
    console.log('Share item:', item);
  };

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Our Gallery</h1>
            <p className="hero-subtitle">
              Capturing memorable moments and celebrating achievements
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="gallery-filter-section">
        <div className="container">
          {/* Search Bar */}
          <div className="search-bar">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search photos, videos, or events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          {/* Type Filters */}
          <div className="type-filters">
            {typeFilters.map((filter) => (
              <button
                key={filter.id}
                className={`type-filter-btn ${selectedFilter === filter.id ? 'active' : ''}`}
                onClick={() => setSelectedFilter(filter.id)}
              >
                {filter.icon}
                <span>{filter.label}</span>
              </button>
            ))}
          </div>

          {/* Category Filters */}
          <div className="category-filters">
            {categoryFilters.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.icon}
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="view-controls">
            <span className="results-count">
              {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} found
            </span>
            <div className="view-mode-toggle">
              <button
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                title="Grid View"
              >
                <Grid size={20} />
              </button>
              <button
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
                title="List View"
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid/List */}
      <section className="gallery-content-section section">
        <div className="container">
          {filteredItems.length > 0 ? (
            <div className={`gallery-${viewMode}`}>
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`gallery-item ${viewMode}-item`}
                  onClick={() => openLightbox(item, index)}
                >
                  <div className="item-thumbnail">
                    <img src={item.thumbnail} alt={item.title} />
                    {item.type === 'video' && (
                      <div className="video-overlay">
                        <Play size={48} />
                        {item.duration && (
                          <span className="video-duration">{item.duration}</span>
                        )}
                      </div>
                    )}
                    <div className="item-overlay">
                      <button className="zoom-btn">
                        <ZoomIn size={24} />
                      </button>
                    </div>
                  </div>

                  <div className="item-info">
                    <div className="item-header">
                      <span className="item-category">{item.category}</span>
                      <div className="item-type">
                        {item.type === 'photo' ? <ImageIcon size={16} /> : <Video size={16} />}
                      </div>
                    </div>

                    <h3 className="item-title">{item.title}</h3>
                    {viewMode === 'list' && (
                      <p className="item-description">{item.description}</p>
                    )}

                    <div className="item-meta">
                      <div className="meta-item">
                        <Calendar size={16} />
                        <span>{formatDate(item.date)}</span>
                      </div>
                      <div className="meta-item">
                        <MapPin size={16} />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <div className="item-stats">
                      <button 
                        className="stat-btn"
                        onClick={(e) => handleLike(e, item.id)}
                      >
                        <Heart size={16} />
                        <span>{item.likes}</span>
                      </button>
                      <div className="stat-item">
                        <Eye size={16} />
                        <span>{item.views}</span>
                      </div>
                      <button 
                        className="stat-btn"
                        onClick={(e) => handleShare(e, item)}
                      >
                        <Share2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <Search size={64} />
              <h3>No Items Found</h3>
              <p>Try adjusting your filters or search query</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={28} />
          </button>

          <button 
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              navigateMedia('prev');
            }}
          >
            <ChevronLeft size={32} />
          </button>

          <button 
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              navigateMedia('next');
            }}
          >
            <ChevronRight size={32} />
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-media">
              {selectedMedia.type === 'photo' ? (
                <img src={selectedMedia.mediaUrl} alt={selectedMedia.title} />
              ) : (
                <video controls autoPlay>
                  <source src={selectedMedia.mediaUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            <div className="lightbox-info">
              <div className="lightbox-header">
                <div>
                  <span className="lightbox-category">{selectedMedia.category}</span>
                  <h2>{selectedMedia.title}</h2>
                </div>
                <button className="download-btn">
                  <Download size={20} />
                </button>
              </div>

              <p className="lightbox-description">{selectedMedia.description}</p>

              <div className="lightbox-meta">
                <div className="meta-group">
                  <Calendar size={18} />
                  <span>{formatDate(selectedMedia.date)}</span>
                </div>
                <div className="meta-group">
                  <MapPin size={18} />
                  <span>{selectedMedia.location}</span>
                </div>
                {selectedMedia.duration && (
                  <div className="meta-group">
                    <Clock size={18} />
                    <span>{selectedMedia.duration}</span>
                  </div>
                )}
              </div>

              <div className="lightbox-actions">
                <button 
                  className="action-btn like-btn"
                  onClick={() => handleLike({}, selectedMedia.id)}
                >
                  <Heart size={20} />
                  <span>{selectedMedia.likes} Likes</span>
                </button>
                <div className="action-btn">
                  <Eye size={20} />
                  <span>{selectedMedia.views} Views</span>
                </div>
                <button 
                  className="action-btn share-btn"
                  onClick={() => handleShare({}, selectedMedia)}
                >
                  <Share2 size={20} />
                  <span>Share</span>
                </button>
              </div>

              <div className="lightbox-counter">
                {currentIndex + 1} / {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;