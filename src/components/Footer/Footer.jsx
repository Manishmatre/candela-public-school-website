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
  FaPaperPlane,
  FaSchool,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaBookOpen
} from 'react-icons/fa';
import Logo from '../../assets/logo.png';
import SubFooter from './SubFooter';

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
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'About Us', path: '/about', icon: '🏫' },
    { name: 'Academics', path: '/academics', icon: '📚' },
    { name: 'Admissions', path: '/admissions', icon: '✏️' },
    { name: 'Gallery', path: '/gallery', icon: '📸' },
    { name: 'Contact', path: '/contact', icon: '📞' },
  ];

  const parentResources = [
    { name: 'School Calendar', path: '/calendar', icon: '📅' },
    { name: 'Lunch Menu', path: '/lunch-menu', icon: '🍎' },
    { name: 'School Bus Routes', path: '/transportation', icon: '🚌' },
    { name: 'Uniform Policy', path: '/uniform', icon: '👕' },
    { name: 'PTA', path: '/pta', icon: '👨‍👩‍👧‍👦' },
    { name: 'FAQs', path: '/faq', icon: '❓' },
  ];

  const importantDates = [
    { date: 'Sep 5', event: 'First Day of School', year: '2025' },
    { date: 'Oct 10', event: 'Parent-Teacher Conferences', year: '2025' },
    { date: 'Nov 25-29', event: 'Fall Break', year: '2025' },
    { date: 'Dec 20', event: 'Winter Concert', year: '2025' },
  ];

  const contactInfo = [
    { 
      icon: <FaMapMarkerAlt className="text-primary text-xl" />, 
      text: 'Bakhrabad Sabujpally, Vill-Uttar Korkora, P.O.-Bakhrabad, P.S.-Belda, Dist-Paschim Medinipur, West Bengal 721424'
    },
    { 
      icon: <FaPhone className="text-primary text-xl" />, 
      text: '7908238939',
      link: 'tel:+917908238939'
    },
    { 
      icon: <FaPhone className="text-primary text-xl" />, 
      text: '9933970075',
      link: 'tel:+919933970075'
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
    <>
      <motion.footer 
        className="bg-gray-900 text-white pt-16 pb-8 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-yellow-500 to-green-500"></div>
        
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')]" />
        </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* School Info */}
          <motion.div 
            variants={itemVariants} 
            className="space-y-4"
          >
            <div className="mb-4">
              <img 
                src={Logo} 
                alt="Candela Public School" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Nurturing young minds with excellence in education since 2005. Our commitment is to provide a holistic learning environment that fosters academic achievement and personal growth.
            </p>
            <div className="flex space-x-3 mt-4">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`text-white text-lg p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors ${social.color}`}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b-2 border-red-600 inline-block">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={`quick-${index}`}
                    variants={itemVariants}
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Link 
                      to={link.path} 
                      className={`text-gray-100 hover:text-white transition-colors flex items-center text-sm py-1.5 font-medium hover:translate-x-1 ${
                        location.pathname === link.path ? 'text-yellow-300 font-semibold' : ''
                      }`}
                    >
                      <span className="mr-2">{link.icon}</span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b-2 border-blue-400 inline-block">Parent Resources</h3>
              <ul className="space-y-2">
                {parentResources.map((resource, index) => (
                  <motion.li 
                    key={`resource-${index}`}
                    variants={itemVariants}
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Link 
                      to={resource.path} 
                      className="text-gray-100 hover:text-white transition-colors flex items-center text-sm py-1.5 font-medium hover:translate-x-1"
                    >
                      <span className="mr-2">{resource.icon}</span>
                      {resource.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact & Important Dates */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b-2 border-green-500 inline-block">Contact Us</h3>
              <ul className="space-y-3">
                {contactInfo.map((item, index) => (
                  <motion.li 
                    key={`contact-${index}`}
                    variants={itemVariants}
                    className="flex items-start group"
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <span className="text-green-400 mr-3 mt-0.5 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-gray-300 hover:text-white transition-colors text-sm leading-relaxed"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-gray-300 text-sm leading-relaxed">{item.text}</span>
                    )}
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-4 bg-white/5 p-4 rounded-lg border-l-4 border-yellow-500">
                <div className="flex items-start">
                  <div className="bg-yellow-500/20 p-2 rounded-lg mr-3">
                    <FaSchool className="text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">School Hours</h4>
                    <p className="text-gray-300 text-xs mt-1">Mon-Fri: 8:00 AM - 3:00 PM</p>
                    <p className="text-gray-300 text-xs">Sat: 8:00 AM - 12:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b-2 border-purple-400 inline-block">Important Dates</h3>
              <ul className="space-y-3">
                {importantDates.map((date, index) => (
                  <motion.li 
                    key={`date-${index}`}
                    variants={itemVariants}
                    className="flex items-start"
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="bg-purple-500/20 text-purple-300 text-xs font-medium px-2 py-1 rounded mr-3 min-w-[60px] text-center">
                      {date.date}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-white font-medium">{date.event}</p>
                      <p className="text-xs text-gray-400">{date.year}</p>
                    </div>
                  </motion.li>
                ))}
                <motion.li 
                  variants={itemVariants}
                  className="mt-4"
                >
                  <Link 
                    to="/calendar" 
                    className="text-yellow-400 text-sm font-medium hover:underline inline-flex items-center"
                  >
                    View Full Calendar
                    <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.li>
              </ul>
            </div>
          </motion.div>

          {/* Newsletter & Quick Contact */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 p-6 rounded-xl border border-white/10">
              <div className="flex items-center mb-4">
                <div className="bg-white/10 p-2 rounded-lg mr-3">
                  <FaPaperPlane className="text-blue-300 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white">Stay Updated</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">Get the latest news, events, and updates from Candela Public School delivered to your inbox.</p>
              
              {isSubscribed ? (
                <motion.div 
                  className="bg-green-500/20 border border-green-500/30 text-green-300 px-4 py-3 rounded-lg text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Thank you for subscribing!
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full bg-white/10 border border-white/20 rounded-full px-5 py-3 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all pr-12"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity flex items-center"
                      aria-label="Subscribe"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Subscribe
                      <FaArrowRight className="ml-1 text-xs" />
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 text-center">We respect your privacy. Unsubscribe at any time.</p>
                </form>
              )}
            </div>
            
            {/* Quick Contact */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/5">
              <h4 className="text-lg font-semibold text-white mb-4">Need Help?</h4>
              <div className="space-y-3">
                <motion.a 
                  href="tel:+917908238939" 
                  className="flex items-center bg-white/5 hover:bg-white/10 p-3 rounded-lg transition-colors group"
                  whileHover={{ x: 3 }}
                >
                  <div className="bg-blue-500/20 p-2 rounded-lg mr-3 group-hover:bg-blue-500/30 transition-colors">
                    <FaPhone className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Call Us</p>
                    <p className="text-gray-400 text-xs">7908238939</p>
                  </div>
                </motion.a>
                <motion.a 
                  href="mailto:info@candelapublicschool.edu" 
                  className="flex items-center bg-white/5 hover:bg-white/10 p-3 rounded-lg transition-colors group"
                  whileHover={{ x: 3 }}
                >
                  <div className="bg-red-500/20 p-2 rounded-lg mr-3 group-hover:bg-red-500/30 transition-colors">
                    <FaEnvelope className="text-red-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Email Us</p>
                    <p className="text-gray-400 text-xs">info@candelapublicschool.edu</p>
                  </div>
                </motion.a>
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/10">
                <h5 className="text-sm font-medium text-white mb-3">Follow Us</h5>
                <div className="flex space-x-2">
                  {socialLinks.map((social, index) => (
                    <motion.a 
                      key={`social-${index}`}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors ${social.color} text-lg`}
                      whileHover={{ y: -2 }}
                      aria-label={social.name}
                      title={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
        </div>
      </motion.footer>
      <SubFooter />
    </>
  );
};

export default Footer;
