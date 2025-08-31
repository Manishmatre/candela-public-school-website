import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaLinkedin, 
  FaArrowRight,
  FaPaperPlane
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isHovered, setIsHovered] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your backend
      console.log('Subscribed with:', email);
      setIsSubscribed(true);
      setEmail('');
      // Reset subscription message after 5 seconds
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };
  
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const contactInfo = [
    { 
      icon: <FaMapMarkerAlt className="text-primary text-xl" />, 
      text: '123 Education Street, Knowledge City, India - 123456'
    },
    { 
      icon: <FaPhone className="text-primary text-xl" />, 
      text: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    { 
      icon: <FaEnvelope className="text-primary text-xl" />, 
      text: 'info@candelapublicschool.edu',
      link: 'mailto:info@candelapublicschool.edu'
    },
  ];

  const socialLinks = [
    { 
      icon: <FaFacebook />, 
      name: 'Facebook',
      url: 'https://facebook.com/candelapublicschool',
      color: 'hover:text-[#1877F2]'
    },
    { 
      icon: <FaTwitter />, 
      name: 'Twitter',
      url: 'https://twitter.com/candelaschool',
      color: 'hover:text-[#1DA1F2]'
    },
    { 
      icon: <FaInstagram />, 
      name: 'Instagram',
      url: 'https://instagram.com/candelaschool',
      color: 'hover:text-[#E1306C]'
    },
    { 
      icon: <FaYoutube />, 
      name: 'YouTube',
      url: 'https://youtube.com/c/candelaschool',
      color: 'hover:text-[#FF0000]'
    },
    { 
      icon: <FaLinkedin />, 
      name: 'LinkedIn',
      url: 'https://linkedin.com/school/candela-public-school',
      color: 'hover:text-[#0077B5]'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.footer 
      className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-20 pb-12 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-5" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
      }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* School Info */}
          <motion.div variants={itemVariants} className="relative group">
            <motion.div 
              className="flex items-center mb-6 group"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="bg-primary text-white p-2 rounded-lg mr-3">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Candela Public School</h2>
            </motion.div>
            <p className="text-gray-400 mb-6">
              Shaping bright futures through quality education, experienced teachers, and holistic development since 2005.
            </p>
            <motion.div className="flex space-x-3 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} text-xl transition-colors p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50`}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="relative">
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-700 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link 
                    to={link.path} 
                    className={`text-gray-400 hover:text-white transition-colors flex items-center group ${
                      location.pathname === link.path ? 'text-primary font-medium' : ''
                    }`}
                  >
                    <motion.span 
                      className="w-2 h-2 bg-primary rounded-full mr-3 transform group-hover:scale-150 transition-transform"
                      initial={false}
                      animate={location.pathname === link.path ? { scale: 1.5 } : { scale: 1 }}
                    />
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all group-hover:w-full"></span>
                    </span>
                    <FaArrowRight className="ml-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="relative">
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-700 inline-block">Contact Us</h3>
            <ul className="space-y-5">
              {contactInfo.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start group"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <span className="mt-1 mr-3 text-primary group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      className="text-gray-400 hover:text-white transition-colors flex-1"
                    >
                      <span className="relative">
                        {item.text}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
                      </span>
                    </a>
                  ) : (
                    <span className="text-gray-400">{item.text}</span>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="relative">
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-700 inline-block">Newsletter</h3>
            <p className="text-gray-400 mb-6">Subscribe to our newsletter for the latest updates, news, and events.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div 
                className="relative"
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address" 
                  className="w-full px-5 py-3 pr-12 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-500 transition-all"
                  required
                  aria-label="Email address for newsletter subscription"
                />
                <button 
                  type="submit" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary p-2 transition-colors"
                  aria-label="Submit subscription"
                >
                  <FaPaperPlane className="text-lg" />
                </button>
              </motion.div>
              
              {isSubscribed && (
                <motion.div 
                  className="text-green-400 text-sm mt-2 flex items-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Thank you for subscribing!
                </motion.div>
              )}
              
              <p className="text-xs text-gray-500 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">
              © {currentYear} Candela Public School. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/privacy-policy" 
                className="hover:text-white transition-colors hover:underline"
                onMouseEnter={() => setIsHovered('privacy')}
                onMouseLeave={() => setIsHovered(null)}
              >
                Privacy Policy
                {isHovered === 'privacy' && (
                  <motion.span 
                    className="block h-0.5 bg-primary mt-0.5"
                    layoutId="footer-underline"
                    initial={false}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 30
                    }}
                  />
                )}
              </Link>
              <Link 
                to="/terms" 
                className="hover:text-white transition-colors hover:underline"
                onMouseEnter={() => setIsHovered('terms')}
                onMouseLeave={() => setIsHovered(null)}
              >
                Terms of Service
                {isHovered === 'terms' && (
                  <motion.span 
                    className="block h-0.5 bg-primary mt-0.5"
                    layoutId="footer-underline"
                    initial={false}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 30
                    }}
                  />
                )}
              </Link>
              <Link 
                to="/sitemap" 
                className="hover:text-white transition-colors hover:underline"
                onMouseEnter={() => setIsHovered('sitemap')}
                onMouseLeave={() => setIsHovered(null)}
              >
                Sitemap
                {isHovered === 'sitemap' && (
                  <motion.span 
                    className="block h-0.5 bg-primary mt-0.5"
                    layoutId="footer-underline"
                    initial={false}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 30
                    }}
                  />
                )}
              </Link>
            </div>
          </div>
          <div className="mt-6 text-xs text-gray-600 text-center">
            <p>Designed with ❤️ for the future leaders of tomorrow</p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
