import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhoneAlt, FaChevronDown } from 'react-icons/fa';
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

  return (
    <nav 
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 shadow-lg py-2' : 'bg-white/90 backdrop-blur-sm py-3'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="h-16 w-48 flex items-center">
              <img 
                src={Logo} 
                alt="Candela Public School" 
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Candela Public School</h1>
              <p className="text-xs text-gray-600">English Medium | Affiliated to CBSE</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="hidden md:flex space-x-1">
              {navLinks.map((link, index) => (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.path}
                    className={`flex items-center px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors rounded-lg ${
                      location.pathname === link.path ? 'text-primary font-semibold' : ''
                    }`}
                    onMouseEnter={() => link.submenu && setActiveDropdown(index)}
                    onClick={() => !link.submenu && setActiveDropdown(null)}
                  >
                    {link.name}
                    {link.submenu && (
                      <FaChevronDown className="ml-1 text-xs opacity-70 transition-transform group-hover:rotate-180" />
                    )}
                  </Link>
                  
                  {/* Desktop Dropdown */}
                  {link.submenu && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={activeDropdown === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className={`absolute left-0 mt-1 w-56 bg-white rounded-lg shadow-xl overflow-hidden ${
                        activeDropdown === index ? 'block' : 'hidden'
                      }`}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
            <motion.a 
              href="tel:+919876543210" 
              className="hidden lg:flex items-center bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPhoneAlt className="mr-2" />
              <span>+91 98765 43210</span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: 1, 
                height: 'auto',
                transition: { 
                  opacity: { duration: 0.3 },
                  height: { duration: 0.4, ease: 'easeInOut' }
                }
              }}
              exit={{ 
                opacity: 0, 
                height: 0,
                transition: { 
                  opacity: { duration: 0.2 },
                  height: { duration: 0.3, ease: 'easeInOut' }
                }
              }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-2 mt-4 pb-2">
                {navLinks.map((link, index) => (
                  <div key={link.name} className="border-b border-gray-100 last:border-0">
                    <div className="flex flex-col">
                      <Link
                        to={link.path}
                        className={`flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg ${
                          location.pathname === link.path ? 'text-primary font-semibold' : ''
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
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                className="block py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-lg text-sm"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                ))}
                <motion.a 
                  href="tel:+919876543210" 
                  className="flex items-center justify-center bg-primary text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all mt-2 shadow-md"
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
  );
};

export default Navbar;
