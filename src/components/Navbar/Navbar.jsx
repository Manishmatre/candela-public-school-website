import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaPhoneAlt, FaChevronDown, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'About', 
      path: '/about',
      submenu: [
        { name: 'Our Story', path: '/about#story' },
        { name: 'Mission & Vision', path: '/about#mission' },
        { name: 'Leadership', path: '/about#leadership' },
        { name: 'Facilities', path: '/about#facilities' }
      ]
    },
    { 
      name: 'Academics', 
      path: '/academics',
      submenu: [
        { name: 'Curriculum', path: '/academics#curriculum' },
        { name: 'Programs', path: '/academics#programs' },
        { name: 'Faculty', path: '/academics#faculty' },
        { name: 'Academic Calendar', path: '/academics#calendar' }
      ]
    },
    { name: 'Gallery', path: '/gallery' },
    { 
      name: 'Admissions', 
      path: '/admissions',
      submenu: [
        { name: 'Process', path: '/admissions#process' },
        { name: 'Requirements', path: '/admissions#requirements' },
        { name: 'Tuition', path: '/admissions#tuition' },
        { name: 'Apply Now', path: '/admissions#apply' }
      ]
    },
    { name: 'Contact', path: '/contact' },
  ];

  // Toggle dropdown menu
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navigate = useNavigate();

  // Handle navigation with smooth scroll
  const handleNavigation = (path) => {
    if (location.pathname === '/') {
      const element = document.getElementById(path.replace('/', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(path.replace('/', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white text-sm py-2 border-b border-primary-light/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-2 md:mb-0">
              <a 
                href="tel:+919876543210" 
                className="flex items-center hover:text-accent-yellow transition-colors group"
                aria-label="Call us"
              >
                <FaPhoneAlt className="mr-2 text-accent-yellow group-hover:scale-110 transition-transform" /> 
                <span>+91 98765 43210</span>
              </a>
              <a 
                href="mailto:info@candelapublicschool.edu" 
                className="hidden sm:flex items-center hover:text-accent-yellow transition-colors"
                aria-label="Email us"
              >
                <span>info@candelapublicschool.edu</span>
              </a>
            </div>
            <div className="flex items-center space-x-5">
              <a href="#" className="hover:text-accent-yellow transition-colors text-base transform hover:scale-110" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-accent-yellow transition-colors text-base transform hover:scale-110" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-accent-yellow transition-colors text-base transform hover:scale-110" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-accent-yellow transition-colors text-base transform hover:scale-110" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        ref={navRef}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 shadow-md py-2 backdrop-blur-sm' : 'bg-white/90 backdrop-blur-sm py-3'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <motion.div 
                className="h-16 w-48 flex items-center relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img 
                  src={Logo} 
                  alt="Candela Public School" 
                  className="h-full w-full object-contain transition-all duration-300"
                />
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 bg-accent-yellow transform origin-left transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                />
              </motion.div>
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((item, index) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <motion.button 
                      className={`px-4 py-3 font-baloo font-semibold text-sm uppercase tracking-wider transition-colors relative group ${
                        location.pathname === item.path 
                          ? 'text-primary' 
                          : 'text-gray-700 hover:text-primary'
                      }`}
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      aria-expanded={activeDropdown === item.name}
                      aria-haspopup="true"
                      whileHover={{ 
                        color: '#1F4E79',
                        transition: { duration: 0.2 }
                      }}
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-yellow transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <motion.span 
                        className="inline-flex items-center ml-1"
                        animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaChevronDown className="text-xs mt-0.5" />
                      </motion.span>
                    </motion.button>
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div 
                          initial={{ opacity: 0, y: 15, scale: 0.98 }}
                          animate={{ opacity: 1, y: 10, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.98 }}
                          transition={{ 
                            type: 'spring', 
                            damping: 25, 
                            stiffness: 300,
                            delay: index * 0.05
                          }}
                          className="absolute left-0 mt-2 w-56 rounded-lg shadow-xl bg-white border border-gray-100 z-50 overflow-hidden"
                        >
                          {item.submenu.map((subItem, subIndex) => (
                            <motion.div
                              key={subItem.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + (subIndex * 0.05) }}
                              whileHover={{ 
                                x: 5,
                                transition: { type: 'spring', stiffness: 300 }
                              }}
                            >
                              <Link
                                to={subItem.path}
                                className="block px-5 py-3 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200 border-b border-gray-50 last:border-0 font-baloo font-medium"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {subItem.name}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-3 font-baloo font-semibold text-sm uppercase tracking-wider relative group transition-colors ${
                      location.pathname === item.path 
                        ? 'text-primary' 
                        : 'text-gray-700 hover:text-primary'
                    }`}
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="relative">
                      {item.name}
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent-yellow transition-all duration-300 ${
                        location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                    </span>
                  </Link>
                )}
              </div>
            ))}
            <div className="ml-6 flex items-center gap-3">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  to="/admissions" 
                  className="group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-yellow-300 to-yellow-400 text-blue-700 font-bold rounded-full text-sm shadow-lg hover:shadow-xl hover:shadow-yellow-300/40 transition-all duration-300 overflow-hidden transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center">
                    Enroll Now
                    <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-5 py-3 bg-pink-400 hover:bg-pink-500 text-white font-semibold rounded-full text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-pink-300/30"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              className="text-text-primary focus:outline-none p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-0 bg-white z-40 pt-24 px-6 overflow-y-auto lg:hidden shadow-2xl"
            >
              <div className="flex flex-col space-y-2 mt-4 pb-2">
                {navLinks.map((link, index) => (
                  <div key={link.name} className="border-b border-gray-100 last:border-0">
                    <div className="flex flex-col">
                      <Link
                        to={link.path}
                        className={`flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-baloo ${
                          location.pathname === link.path ? 'text-primary font-bold' : 'font-medium'
                        }`}
                        onClick={(e) => {
                          if (link.submenu) {
                            e.preventDefault();
                            toggleDropdown(index);
                          } else {
                            setIsOpen(false);
                          }
                        }}
                      >
                        <span>{link.name}</span>
                        {link.submenu && (
                          <motion.span
                            animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <FaChevronDown className="text-xs opacity-70" />
                          </motion.span>
                        )}
                      </Link>
                      
                      {/* Mobile Dropdown */}
                      {link.submenu && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: activeDropdown === index ? 'auto' : 0,
                            opacity: activeDropdown === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pl-6 py-2 space-y-1">
                            {link.submenu.map((subItem) => (
                              <motion.div
                                key={subItem.name}
                                whileHover={{ x: 8 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                              >
                                <Link
                                  to={subItem.path}
                                  className="block py-3 px-4 text-text-primary hover:text-primary rounded-lg transition-colors font-baloo font-medium"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                ))}
                <motion.a 
                  href="tel:+919876543210" 
                  className="flex items-center justify-center bg-primary text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all mt-2 shadow-md font-baloo font-semibold"
                  whileTap={{ scale: 0.98 }}
                >
                  <FaPhoneAlt className="mr-2" />
                  <span>+91 98765 43210</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
