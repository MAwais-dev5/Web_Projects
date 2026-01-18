import { useState } from 'react'
import { galleryImages } from '../data/constants'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Photos', count: galleryImages.length },
    { id: 'campus', name: 'Campus', count: 2 },
    { id: 'labs', name: 'Laboratories', count: 2 },
    { id: 'facilities', name: 'Facilities', count: 1 },
    { id: 'sports', name: 'Sports', count: 1 },
    { id: 'events', name: 'Events', count: 1 },
  ]

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  const handleImageClick = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction) => {
    if (!selectedImage) return
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    let nextIndex
    
    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % filteredImages.length
    } else {
      nextIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    }
    
    setSelectedImage(filteredImages[nextIndex])
  }

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Campus Gallery</h1>
            <p className="text-xl text-slate-600">
              Explore our state-of-the-art facilities and vibrant campus life
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300
                  ${activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <div 
                  key={image.id}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer 
                           shadow-lg hover:shadow-2xl transition-all duration-500"
                  onClick={() => handleImageClick(image)}
                >
                  <div className="relative" style={{aspectRatio: '4/3', overflow: 'hidden'}}>
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 
                               transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity 
                                duration-500 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                      <p className="text-sm text-slate-200 capitalize">{image.category}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm 
                                rounded-full p-2 opacity-0 group-hover:opacity-100 
                                transition-opacity duration-500">
                    <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-slate-400 mb-6">
                <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-700 mb-3">No Images Found</h3>
              <p className="text-slate-500">Select a different category to view photos</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 
                      animate-fade-in">
          <div className="relative max-w-6xl w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-16 right-0 text-white hover:text-blue-300 
                       transition-colors duration-300 flex items-center gap-2"
            >
              <span className="text-lg font-medium">Close</span>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm 
                       text-white hover:bg-white/20 rounded-full p-4 transition-all duration-300
                       hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm 
                       text-white hover:bg-white/20 rounded-full p-4 transition-all duration-300
                       hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative rounded-xl overflow-hidden" style={{aspectRatio: '16/9'}}>
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-full object-contain bg-black"
              />
            </div>

            {/* Image Info */}
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full">
                <span className="text-sm font-medium text-white capitalize">{selectedImage.category}</span>
              </div>
              <div className="mt-4 text-sm text-slate-300">
                <span className="font-medium">Image {filteredImages.findIndex(img => img.id === selectedImage.id) + 1}</span>
                <span className="mx-2">•</span>
                <span>{filteredImages.length} total</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Stats */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Smart Classrooms", icon: "🏫" },
              { value: "5", label: "Science Labs", icon: "🔬" },
              { value: "10+", label: "Play Areas", icon: "🎯" },
              { value: "1", label: "Auditorium", icon: "🎭" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg 
                                        hover:shadow-2xl transition-all duration-500 border border-slate-200">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-blue-700 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery