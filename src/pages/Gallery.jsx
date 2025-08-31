import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaSearch, 
  FaTimes, 
  FaChevronLeft, 
  FaChevronRight, 
  FaImages, 
  FaTrophy, 
  FaGraduationCap, 
  FaFutbol, 
  FaSchool, 
  FaChalkboardTeacher,
  FaArrowRight,
  FaDownload,
  FaVideo,
  FaPlay
} from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Sample gallery images (in a real app, these would come from an API)
const galleryImages = {
  all: [
    { id: 1, src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', category: 'campus' },
    { id: 2, src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80', category: 'events' },
    { id: 3, src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', category: 'sports' },
    { id: 4, src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1422&q=80', category: 'classrooms' },
    { id: 5, src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', category: 'sports' },
    { id: 6, src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', category: 'campus' },
    { id: 7, src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1422&q=80', category: 'classrooms' },
    { id: 8, src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80', category: 'events' },
  ],
  campus: [
    { id: 1, src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', category: 'campus' },
    { id: 6, src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', category: 'campus' },
  ],
  events: [
    { id: 2, src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80', category: 'events' },
    { id: 8, src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80', category: 'events' },
  ],
  sports: [
    { id: 3, src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', category: 'sports' },
    { id: 5, src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', category: 'sports' },
  ],
  classrooms: [
    { id: 4, src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1422&q=80', category: 'classrooms' },
    { id: 7, src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1422&q=80', category: 'classrooms' },
  ],
};

// Sample video items (YouTube). For real use, replace ids/urls with school videos
const galleryVideos = [
  { id: 'dQw4w9WgXcQ', title: 'Annual Day Highlights', platform: 'youtube' },
  { id: 'ysz5S6PUM-U', title: 'Campus Tour', platform: 'youtube' },
  { id: 'aqz-KE-bpKQ', title: 'Sports Meet Moments', platform: 'youtube' },
];

const categories = [
  { id: 'all', name: 'All Photos', icon: <FaImages className="mr-2" />, count: 8 },
  { id: 'campus', name: 'Campus', icon: <FaSchool className="mr-2" />, count: 2 },
  { id: 'events', name: 'Events', icon: <FaTrophy className="mr-2" />, count: 2 },
  { id: 'sports', name: 'Sports', icon: <FaFutbol className="mr-2" />, count: 2 },
  { id: 'classrooms', name: 'Classrooms', icon: <FaChalkboardTeacher className="mr-2" />, count: 2 },
  { id: 'videos', name: 'Videos', icon: <FaVideo className="mr-2" />, count: galleryVideos.length },
];

const imageTitles = {
  campus: 'Beautiful Campus Views',
  events: 'School Events & Celebrations',
  sports: 'Sports & Activities',
  classrooms: 'Modern Learning Spaces'
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const isVideos = selectedCategory === 'videos';
  const filteredImages = isVideos ? [] : (galleryImages[selectedCategory] || []);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };

  const goToPrev = () => {
    const newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  // Simulate loading state
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  return (
    <div className="pt-24 pb-20 px-4 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-16 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center z-10">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-baloo"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-yellow-300">Gallery</span>
          </motion.h1>
          <div className="w-24 h-1.5 bg-yellow-300 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 font-open-sans">
            Discover the vibrant life at Candela Public School through our photo collection
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a 
              href="#gallery-grid" 
              className="flex items-center bg-white text-primary px-6 py-3 rounded-full font-baloo font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Gallery <FaArrowRight className="ml-2" />
            </a>
            <a 
              href="/contact" 
              className="flex items-center border-2 border-white text-white px-6 py-3 rounded-full font-baloo font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Schedule a Visit
            </a>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-6xl mx-auto mb-16 px-4">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-bold text-center mb-6 font-baloo">
            {isVideos ? 'School Videos' : (selectedCategory === 'all' ? 'All Photos' : imageTitles[selectedCategory] || 'Gallery')}
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
                <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
          
          {!isVideos && (
          <div className="relative w-full max-w-2xl mb-8">
            <input
              type="text"
              placeholder="Search photos by keyword..."
              className="w-full pl-12 pr-6 py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm font-open-sans"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute left-4 top-4 text-gray-400" />
          </div>
          )}
        </div>
      </section>

      {/* Gallery Grid or Videos Grid */}
      <section id="gallery-grid" className="max-w-7xl mx-auto px-4">
        {isVideos ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryVideos.map((vid, index) => (
              <motion.div
                key={vid.id}
                className="relative overflow-hidden rounded-2xl shadow-lg bg-black cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => {
                  setSelectedVideo(vid);
                  document.body.style.overflow = 'hidden';
                }}
              >
                <img 
                  src={`https://img.youtube.com/vi/${vid.id}/hqdefault.jpg`} 
                  alt={vid.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 group-hover:bg-white transition-colors shadow-lg">
                    <FaPlay className="text-primary w-6 h-6 ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-semibold font-baloo">{vid.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <> 
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[...Array(8)].map((_, index) => (
                  <div key={index} className="bg-gray-200 rounded-xl h-64 animate-pulse"></div>
                ))}
              </div>
            ) : filteredImages.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={`${image.id}-${index}`}
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                    onClick={() => handleImageClick(image, index)}
                  >
                    <LazyLoadImage
                      src={image.src}
                      alt={`Gallery ${image.id}`}
                      effect="blur"
                      className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                      wrapperClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-bold text-lg mb-1 font-baloo">
                          {imageTitles[image.category] || 'School Event'}
                        </h3>
                        <p className="text-gray-200 text-sm font-open-sans">
                          {image.category.charAt(0).toUpperCase() + image.category.slice(1)} • {new Date().toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaSearch className="text-white" />
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl shadow-inner">
                <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaImages className="text-gray-400 text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2 font-baloo">No images found</h3>
                <p className="text-gray-500 max-w-md mx-auto font-open-sans">
                  We couldn't find any photos matching your search. Try a different category or keyword.
                </p>
              </div>
            )}
          </>
        )}
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {(selectedImage || selectedVideo) && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-6 right-6 text-white text-2xl p-2 rounded-full bg-black/50 hover:bg-white/10 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes className="w-6 h-6" />
            </motion.button>

            {/* Navigation Arrows for images only */}
            {!selectedVideo && (
              <>
                <motion.button
                  className="absolute left-6 text-white text-2xl p-4 rounded-full bg-black/50 hover:bg-white/10 transition-colors z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrev();
                  }}
                  whileHover={{ x: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaChevronLeft className="w-6 h-6" />
                </motion.button>
                <motion.button
                  className="absolute right-6 text-white text-2xl p-4 rounded-full bg-black/50 hover:bg-white/10 transition-colors z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaChevronRight className="w-6 h-6" />
                </motion.button>
              </>
            )}

            {/* Counter for images only */}
            {!selectedVideo && (
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <span className="inline-block bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                  {currentIndex + 1} of {filteredImages.length}
                </span>
              </div>
            )}

            {/* Content */}
            <div className="relative max-w-6xl w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              {selectedVideo ? (
                <motion.div 
                  className="relative w-full max-w-4xl aspect-video"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <iframe
                    className="w-full h-full rounded-xl shadow-2xl"
                    src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&rel=0`}
                    title={selectedVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </motion.div>
              ) : (
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    key={selectedImage.id}
                    src={selectedImage.src}
                    alt={`Gallery ${selectedImage.id}`}
                    className="max-h-[85vh] max-w-full rounded-xl shadow-2xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Image Info */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-white text-xl font-bold mb-1 font-baloo">
                          {imageTitles[selectedImage.category] || 'School Event'}
                        </h3>
                        <p className="text-gray-300 text-sm font-open-sans">
                          {selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)} • {new Date().toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-white/70 text-sm font-medium">
                          {currentIndex + 1} / {filteredImages.length}
                        </span>
                        <a 
                          href={selectedImage.src} 
                          download 
                          className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaDownload className="text-white w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
