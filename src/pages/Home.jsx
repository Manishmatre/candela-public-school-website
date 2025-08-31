import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaLaptop, FaChalkboardTeacher, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home = () => {
  const [counters, setCounters] = useState([
    { id: 1, target: 18, text: 'Years of Excellence', current: 0 },
    { id: 2, target: 1200, text: 'Students Enrolled', current: 0 },
    { id: 3, target: 75, text: 'Qualified Teachers', current: 0 },
  ]);

  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const interval = 30; // Update interval in ms
    const steps = duration / interval;
    
    counters.forEach((counter, index) => {
      const increment = counter.target / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= counter.target) {
          current = counter.target;
          clearInterval(timer);
        }
        
        setCounters(prevCounters => 
          prevCounters.map(item => 
            item.id === counter.id 
              ? { ...item, current: Math.ceil(current) } 
              : item
          )
        );
      }, interval);
      
      return () => clearInterval(timer);
    });
  }, []);

  const features = [
    {
      icon: '🎨',
      title: 'Creative Learning',
      description: 'Spark imagination through art, music, and hands-on activities that make learning an adventure!',
      color: 'from-yellow-200 to-yellow-400',
      delay: 0.1
    },
    {
      icon: '🧩',
      title: 'Play-Based Curriculum',
      description: 'Learning through play with activities designed to develop social, emotional, and cognitive skills.',
      color: 'from-blue-200 to-blue-400',
      delay: 0.2
    },
    {
      icon: '🌱',
      title: 'Nature Exploration',
      description: 'Outdoor learning experiences that connect children with nature and the world around them.',
      color: 'from-green-200 to-green-400',
      delay: 0.3
    },
    {
      icon: '👩‍🏫',
      title: 'Caring Teachers',
      description: 'Passionate educators who create a warm, nurturing environment for your little ones to thrive.',
      color: 'from-pink-200 to-pink-400',
      delay: 0.4
    },
    {
      icon: '🍎',
      title: 'Healthy Meals',
      description: 'Nutritious and delicious meals prepared daily to fuel growing minds and bodies.',
      color: 'from-red-200 to-red-400',
      delay: 0.5
    },
    {
      icon: '🎉',
      title: 'Fun Events',
      description: 'Regular celebrations, performances, and special activities that create lasting memories.',
      color: 'from-purple-200 to-purple-400',
      delay: 0.6
    }
  ];

  return (
    <div>
      {/* Hero Section - Kids Theme */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-400 to-purple-400 text-white py-16 md:py-24">
        {/* Playful Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Shapes */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-300 rounded-full opacity-70 animate-float"></div>
          <div className="absolute top-1/4 right-20 w-12 h-12 bg-pink-300 rounded-full opacity-70 animate-float animation-delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/4 w-14 h-14 bg-green-300 rounded-full opacity-70 animate-float animation-delay-2000"></div>
          <div className="absolute top-1/3 right-1/4 w-10 h-10 bg-orange-300 rounded-full opacity-70 animate-float animation-delay-1500"></div>
          
          {/* Decorative Elements */}
          <div className="absolute bottom-10 left-1/4 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          <div className="absolute top-10 right-1/4 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block bg-yellow-300 text-blue-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4 shadow-md">
                🎉 Welcome to Our Colorful World! 🎨
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight font-baloo tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Where <span className="text-yellow-300">Little Stars</span> <br className="hidden md:block" />
              <span className="text-pink-300">Shine Bright</span> at <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">
                Candela Kids
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-10 text-white max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A joyful learning journey filled with laughter, creativity, and <br className="hidden md:block" />
              endless possibilities for your little ones! 🌈
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link 
                to="/admissions" 
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-300 to-yellow-400 text-blue-700 font-bold rounded-full text-lg shadow-lg hover:shadow-xl hover:shadow-yellow-300/40 transition-all duration-300 overflow-hidden transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  🎨 Join the Fun!
                  <FaArrowRight className="ml-3 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
              
              <Link 
                to="/contact" 
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-pink-400 hover:bg-pink-500 text-white font-semibold rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-300/30"
              >
                <span className="relative z-10 flex items-center">
                  🎈 Schedule a Visit
                </span>
              </Link>
            </motion.div>
            
            {/* Stats Counter */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto bg-white/20 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/30 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {counters.map((counter) => (
                <motion.div 
                  key={counter.id} 
                  className="text-center bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-yellow-200 mb-1">
                    {counter.current.toLocaleString()}+
                  </div>
                  <div className="text-white text-sm md:text-base font-medium">{counter.text}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* Animated Scrolling Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-10 h-16 border-2 border-white/30 rounded-full flex justify-center p-1"
          >
            <motion.div 
              className="w-1 h-4 bg-white rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            />
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Column - Image with Decorative Elements */}
            <motion.div 
              className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Happy children learning and playing" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-100 rounded-full -z-10"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-100 rounded-full -z-10"></div>
              
              {/* Fun Facts */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <motion.div 
                  className="bg-blue-50 p-4 rounded-xl text-center border-2 border-blue-100"
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl font-bold text-blue-600 mb-1">18+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </motion.div>
                <motion.div 
                  className="bg-yellow-50 p-4 rounded-xl text-center border-2 border-yellow-100"
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="text-3xl font-bold text-yellow-600 mb-1">98%</div>
                  <div className="text-sm text-gray-600">Happy Parents</div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Right Column - Content */}
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block bg-yellow-100 text-yellow-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                About Our School
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Nurturing Young Minds with <span className="text-blue-500">Love & Care</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Candela Public School, we believe every child is unique and full of potential. Our nurturing environment fosters creativity, curiosity, and a lifelong love for learning.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-800">Child-Centered Learning</h4>
                    <p className="text-gray-600 text-sm">Our curriculum is designed around each child's unique needs and interests.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-800">Experienced Educators</h4>
                    <p className="text-gray-600 text-sm">Passionate teachers dedicated to your child's growth and happiness.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-800">Safe & Stimulating</h4>
                    <p className="text-gray-600 text-sm">A secure environment where children explore, discover, and thrive.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/about" 
                  className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
                >
                  Learn More About Us
                </Link>
                <Link 
                  to="/admissions" 
                  className="px-8 py-3 bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-50 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
                >
                  Join Our Family
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Admission Open Banner */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                🎉 Admission Open for Academic Year 2025-26! 🎉
              </h2>
              <p className="text-purple-100">
                Limited seats available for Playgroup to UKG. Secure your child's future today!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/admission" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg shadow-md hover:bg-purple-50 transition-all duration-300 transform hover:scale-105"
              >
                Apply Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                to="/virtual-tour" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300"
              >
                Take a Virtual Tour
              </Link>
            </div>
          </div>
          
          {/* Countdown Timer */}
          <div className="mt-6 pt-4 border-t border-purple-400 border-opacity-30">
            <div className="flex justify-center">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 inline-flex items-center">
                <div className="text-center px-4">
                  <div className="text-2xl font-bold">15</div>
                  <div className="text-xs uppercase tracking-wider text-purple-100">Days</div>
                </div>
                <div className="text-2xl text-purple-200">:</div>
                <div className="text-center px-4">
                  <div className="text-2xl font-bold">08</div>
                  <div className="text-xs uppercase tracking-wider text-purple-100">Hours</div>
                </div>
                <div className="text-2xl text-purple-200">:</div>
                <div className="text-center px-4">
                  <div className="text-2xl font-bold">42</div>
                  <div className="text-xs uppercase tracking-wider text-purple-100">Minutes</div>
                </div>
                <div className="text-2xl text-purple-200">:</div>
                <div className="text-center px-4">
                  <div className="text-2xl font-bold">30</div>
                  <div className="text-xs uppercase tracking-wider text-purple-100">Seconds</div>
                </div>
                <div className="ml-6 pl-6 border-l border-purple-400 border-opacity-30">
                  <div className="text-sm text-purple-100">Early Bird Discount Ends In</div>
                  <div className="text-yellow-300 font-bold">Hurry! Limited Time Offer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Our Magical Learning World
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Where every day is a new adventure in learning and growing together!
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-300 to-pink-400 mx-auto mt-6 rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: feature.delay }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="h-full bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-yellow-200">
                  <div className={`w-16 h-16 rounded-2xl mb-6 mx-auto flex items-center justify-center text-3xl bg-gradient-to-br ${feature.color} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link 
              to="/programs" 
              className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              Explore Our Programs
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Our Programs
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Age-Appropriate Learning <span className="text-blue-500">Journeys</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our carefully designed programs that grow with your child, from first steps to first grade!
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Program 1 - Toddlers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-100">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl mb-3">
                      👶
                    </div>
                    <h3 className="text-2xl font-bold">Tiny Explorers</h3>
                    <p className="text-blue-100">1.5 - 2.5 years</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    A gentle introduction to school life with sensory play, music, and movement activities that encourage exploration and early social skills.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Sensory play & exploration</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Music & movement</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Early social skills</span>
                    </li>
                  </ul>
                  <Link 
                    to="/programs/tiny-explorers" 
                    className="inline-flex items-center text-blue-500 font-medium group-hover:text-blue-600 transition-colors"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Program 2 - Preschool */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-yellow-100">
                <div className="h-48 bg-gradient-to-r from-yellow-400 to-yellow-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl mb-3">
                      🎨
                    </div>
                    <h3 className="text-2xl font-bold">Preschool Pals</h3>
                    <p className="text-yellow-100">2.5 - 4 years</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    A balanced program focusing on early literacy, numeracy, and creative expression through play-based learning and hands-on activities.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Early literacy & numeracy</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Creative arts & crafts</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Social & emotional development</span>
                    </li>
                  </ul>
                  <Link 
                    to="/programs/preschool-pals" 
                    className="inline-flex items-center text-yellow-500 font-medium group-hover:text-yellow-600 transition-colors"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Program 3 - Pre-K */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-100">
                <div className="h-48 bg-gradient-to-r from-purple-400 to-purple-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577896851231-70ef188a54ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl mb-3">
                      🎓
                    </div>
                    <h3 className="text-2xl font-bold">Pre-K Prep</h3>
                    <p className="text-purple-100">4 - 5 years</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    A comprehensive program that prepares children for kindergarten with a focus on early academics, problem-solving, and independence.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Kindergarten readiness</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">STEM exploration</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Confidence building</span>
                    </li>
                  </ul>
                  <Link 
                    to="/programs/pre-k-prep" 
                    className="inline-flex items-center text-purple-500 font-medium group-hover:text-purple-600 transition-colors"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/programs" 
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              View All Programs
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* School Activities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-pink-100 text-pink-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Fun & Learning
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Our <span className="text-pink-500">School Activities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the exciting range of activities that make learning fun and engaging for your little ones!
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Activity 1 */}
            <motion.div 
              className="group relative overflow-hidden rounded-2xl shadow-lg h-80"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541692641319-981cc79ee78a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <div className="w-14 h-14 bg-pink-500 rounded-xl flex items-center justify-center text-2xl mb-4">
                  🎨
                </div>
                <h3 className="text-2xl font-bold mb-2">Arts & Crafts</h3>
                <p className="text-pink-100 mb-4">Unleash creativity with painting, drawing, and craft projects</p>
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ul className="space-y-2 text-sm text-pink-100">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-pink-300 rounded-full mr-2"></span>
                      Finger painting
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-pink-300 rounded-full mr-2"></span>
                      Collage making
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-pink-300 rounded-full mr-2"></span>
                      Clay modeling
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Activity 2 */}
            <motion.div 
              className="group relative overflow-hidden rounded-2xl shadow-lg h-80"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/40 to-transparent"></div>
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center text-2xl mb-4">
                  🎵
                </div>
                <h3 className="text-2xl font-bold mb-2">Music & Movement</h3>
                <p className="text-blue-100 mb-4">Explore rhythm, dance, and musical expression</p>
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ul className="space-y-2 text-sm text-blue-100">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-2"></span>
                      Sing-along sessions
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-2"></span>
                      Rhythm games
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-2"></span>
                      Dance & movement
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Activity 3 */}
            <motion.div 
              className="group relative overflow-hidden rounded-2xl shadow-lg h-80"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-green-800/70 via-green-800/40 to-transparent"></div>
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center text-2xl mb-4">
                  🌱
                </div>
                <h3 className="text-2xl font-bold mb-2">Nature Exploration</h3>
                <p className="text-green-100 mb-4">Connect with nature through hands-on outdoor activities</p>
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ul className="space-y-2 text-sm text-green-100">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-300 rounded-full mr-2"></span>
                      Gardening
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-300 rounded-full mr-2"></span>
                      Nature walks
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-300 rounded-full mr-2"></span>
                      Science experiments
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Activity 4 */}
            <motion.div 
              className="group relative overflow-hidden rounded-2xl shadow-lg h-80"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/70 via-yellow-600/40 to-transparent"></div>
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <div className="w-14 h-14 bg-yellow-500 rounded-xl flex items-center justify-center text-2xl mb-4">
                  🧩
                </div>
                <h3 className="text-2xl font-bold mb-2">Storytelling & Drama</h3>
                <p className="text-yellow-100 mb-4">Spark imagination through stories and role-play</p>
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ul className="space-y-2 text-sm text-yellow-100">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full mr-2"></span>
                      Puppet shows
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full mr-2"></span>
                      Dress-up play
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full mr-2"></span>
                      Story creation
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/activities" 
              className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              Explore All Activities
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
              Happy Parents, Happy Kids
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear what our parents and little stars have to say about their journey with us!
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-300 to-pink-400 mx-auto mt-6 rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg border-2 border-pink-100 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-pink-100 rounded-full opacity-30"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center text-pink-600 text-xl font-bold mr-4">
                    AS
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Aarav Sharma</h4>
                    <p className="text-sm text-gray-500">Parent of Riya (Age 4)</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "My daughter looks forward to school every single day. The teachers are incredibly caring and creative in their teaching methods. She's learned so much in just a few months!"
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-100 rounded-full opacity-20"></div>
            </motion.div>
            
            {/* Testimonial 2 */}
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-100 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-100 rounded-full opacity-30"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 text-xl font-bold mr-4">
                    PK
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Priya Kapoor</h4>
                    <p className="text-sm text-gray-500">Parent of Arjun (Age 5)</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "The progress I've seen in my son's social skills and confidence is remarkable. The teachers truly understand early childhood development and make learning so much fun!"
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-yellow-100 rounded-full opacity-20"></div>
            </motion.div>
            
            {/* Child's Drawing/Note */}
            <motion.div 
              className="bg-gradient-to-br from-yellow-50 to-pink-50 p-6 rounded-2xl shadow-lg border-2 border-yellow-100 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="absolute top-4 right-4 text-4xl">🎨</div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-800 mb-4">From Our Little Artists</h3>
                <div className="bg-white p-4 rounded-lg border-2 border-dashed border-pink-200 mb-4">
                  <div className="h-32 flex items-center justify-center">
                    <span className="text-4xl">✏️</span>
                    <span className="text-4xl ml-2">🎨</span>
                    <span className="text-4xl ml-2">✂️</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  "I love my school! We paint, sing, and play every day!" - Maya, Age 4
                </p>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-pink-100 rounded-full opacity-30"></div>
            </motion.div>
          </div>
          
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              to="/testimonials" 
              className="inline-flex items-center px-6 py-2.5 text-md font-medium text-pink-600 hover:text-pink-700 group"
            >
              Read More Stories
              <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-baloo2 mb-6">Begin Your Child's Journey to Excellence</h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-open-sans">
            Join our nurturing community where young minds blossom through innovative learning and personalized attention. 
            Limited seats available for the upcoming academic session.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/admissions" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Apply for Admission <FaArrowRight className="ml-2" />
            </Link>
            <Link 
              to="/virtual-tour" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Take a Virtual Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
