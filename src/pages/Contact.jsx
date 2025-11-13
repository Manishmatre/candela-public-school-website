import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

// FAQ Schema for SEO
const addFAQSchema = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the school timings at Candela Public School?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our regular school hours are from 8:00 AM to 2:30 PM, Monday through Friday. We are located at Bakhrabad Sabujpally, Vill-Uttar Korkora, P.O.-Bakhrabad, Dist-Paschim Medinipur, West Bengal 721424."
        }
      },
      {
        "@type": "Question", 
        "name": "How can I apply for admission at Candela Public School?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can start the admission process by filling out our online inquiry form or by visiting our admissions office. Please visit our Admissions page for detailed information about requirements and procedures."
        }
      },
      {
        "@type": "Question",
        "name": "What curriculum does Candela Public School follow?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Candela Public School follows the CBSE (Central Board of Secondary Education) curriculum from Playgroup to Class 12, providing quality education with modern teaching methods."
        }
      },
      {
        "@type": "Question",
        "name": "Does Candela Public School provide transportation services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer safe and reliable transportation services covering various routes across Paschim Medinipur district. Please contact our office for route details and availability."
        }
      },
      {
        "@type": "Question",
        "name": "What facilities are available at Candela Public School?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our school features modern classrooms, well-equipped laboratories, library, sports facilities, computer lab, art room, and a safe playground for holistic development of students."
        }
      },
      {
        "@type": "Question",
        "name": "What is the fee structure at Candela Public School?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our fee structure varies by grade level and includes tuition, activities, and facilities. Please contact our admissions office for detailed fee information and payment plans."
        }
      }
    ]
  };

  // Remove existing FAQ schema if present
  const existingSchema = document.querySelector('script[type="application/ld+json"][data-faq]');
  if (existingSchema) {
    existingSchema.remove();
  }

  // Add new FAQ schema
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-faq', 'true');
  script.textContent = JSON.stringify(faqSchema);
  document.head.appendChild(script);
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('contact'); // 'contact' or 'visit'

  // Add FAQ schema on component mount for SEO
  useEffect(() => {
    addFAQSchema();
    
    // Cleanup function to remove schema when component unmounts
    return () => {
      const schema = document.querySelector('script[type="application/ld+json"][data-faq]');
      if (schema) {
        schema.remove();
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Contact form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-primary" />,
      title: 'Our Location',
      description: 'Bakhrabad Sabujpally, Vill-Uttar Korkora, P.O.-Bakhrabad, Dist-Paschim Medinipur, West Bengal 721424',
      link: 'https://www.google.com/maps/search/?api=1&query=Bakhrabad+Sabujpally,+Uttar+Korkora,+Bakhrabad,+Paschim+Medinipur,+West+Bengal+721424',
      linkText: 'View on Map'
    },
    {
      icon: <FaPhoneAlt className="text-2xl text-primary" />,
      title: 'Phone Number',
      description: '7908238939 / 9933970075',
      link: 'tel:+917908238939',
      linkText: 'Call Now'
    },
    {
      icon: <FaEnvelope className="text-2xl text-primary" />,
      title: 'Email Address',
      description: 'info@candelapublicschool.edu',
      link: 'mailto:info@candelapublicschool.edu',
      linkText: 'Send Email'
    },
    {
      icon: <FaClock className="text-2xl text-primary" />,
      title: 'Working Hours',
      description: 'Mon - Fri: 8:00 AM - 4:00 PM',
      subDescription: 'Saturday: 9:00 AM - 1:00 PM',
      link: '/about#hours',
      linkText: 'View Full Schedule'
    }
  ];

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
            Get in <span className="text-yellow-300">Touch</span>
          </motion.h1>
          <div className="w-24 h-1.5 bg-yellow-300 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 font-open-sans">
            We're here to help and answer any questions you might have. We look forward to hearing from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a 
              href="#contact-form" 
              className="flex items-center bg-white text-primary px-6 py-3 rounded-full font-baloo font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Send a Message <FaPaperPlane className="ml-2" />
            </a>
            <a 
              href="#contact-info" 
              className="flex items-center border-2 border-white text-white px-6 py-3 rounded-full font-baloo font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Contact Info
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact-info" className="max-w-6xl mx-auto mb-20">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Can We <span className="text-primary">Help You?</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Feel free to reach out to us through any of these channels. Our team is here to assist you.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                <div className="space-y-1 mb-4">
                  <p className="text-gray-700">{item.description}</p>
                  {item.subDescription && <p className="text-gray-600 text-sm">{item.subDescription}</p>}
                </div>
                <a 
                  href={item.link} 
                  className="inline-flex items-center text-primary font-medium group-hover:text-primary-dark transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.linkText}
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form and Map */}
      <div className="max-w-6xl mx-auto mb-20">
        <section id="contact-form">
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 p-8 md:p-12">
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
              <p className="text-gray-600">Fill out the form and our team will get back to you within 24 hours.</p>
            </motion.div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitSuccess && (
                <motion.div 
                  className="p-4 bg-green-50 text-green-700 rounded-xl flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaCheckCircle className="text-green-500 text-xl mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">Message Sent Successfully!</h3>
                    <p className="text-sm">Thank you for contacting us. We'll get back to you soon.</p>
                  </div>
                </motion.div>
              )}
              
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Your Name <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none transition-all duration-200"
                      required
                      placeholder="John Doe"
                    />
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none transition-all duration-200"
                    required
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none transition-all duration-200"
                    placeholder="+1 (555) 123-4567"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">Subject <span className="text-red-500">*</span></label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none transition-all duration-200"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="Admission Inquiry">Admission Inquiry</option>
                      <option value="General Information">General Information</option>
                      <option value="Academic Programs">Academic Programs</option>
                      <option value="Campus Visit">Schedule a Campus Visit</option>
                      <option value="Other">Other</option>
                    </select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    viewport={{ once: true }}
                    className="col-span-2"
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Your Message <span className="text-red-500">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none transition-all duration-200 resize-none"
                      required
                      placeholder="Type your message here..."
                    ></textarea>
                  </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                  className="col-span-2 pt-2"
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-lg transform hover:-translate-y-0.5'
                    }`}
                  >
                    {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </>
                  )}
                  </button>
                  
                  {submitSuccess && (
                    <motion.div 
                      className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg flex items-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <FaCheckCircle className="mr-2" />
                      Your message has been sent successfully!
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </form>
            
            </div>
            
            {/* Map Section */}
            <div className="w-full lg:w-1/2 h-96 lg:h-auto">
              <div className="w-full h-full overflow-hidden rounded-2xl shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.869775654586!2d87.3456789!3d22.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d5d5d5d5d5d5d%3A0x5d5d5d5d5d5d5d5d!2sCandela%20Public%20School!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl shadow-lg w-full"
                  title="Candela Public School Location"
                ></iframe>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-xl text-center max-w-xs mx-4">
                <h3 className="text-xl font-bold mb-2">Our Location</h3>
                <p className="text-gray-600 mb-4">Bakhrabad Sabujpally, Vill-Uttar Korkora, P.O.-Bakhrabad, Dist-Paschim Medinipur, West Bengal 721424</p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Bakhrabad+Sabujpally,+Uttar+Korkora,+Bakhrabad,+Paschim+Medinipur,+West+Bengal+721424" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                >
                  View on Google Maps
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
      </div>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="space-y-4">
          {[
            {
              question: "What are the school hours?",
              answer: "Our regular school hours are from 8:00 AM to 2:30 PM, Monday through Friday. Early childhood programs may have different schedules."
            },
            {
              question: "How can I apply for admission?",
              answer: "You can start the admission process by filling out our online inquiry form or by visiting our admissions office. Please visit our Admissions page for detailed information."
            },
            {
              question: "Do you offer transportation services?",
              answer: "Yes, we provide safe and reliable transportation services for students. Routes and availability may vary based on location."
            },
            {
              question: "What extracurricular activities are available?",
              answer: "We offer a wide range of extracurricular activities including sports, music, arts, debate, robotics, and various clubs to cater to different interests."
            },
            {
              question: "How can parents get involved in school activities?",
              answer: "Parents can join our Parent-Teacher Association (PTA), volunteer for events, attend parent-teacher meetings, and participate in various school committees."
            }
          ].map((faq, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button 
                className="w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => setActiveTab(activeTab === ('faq' + index) ? null : ('faq' + index))}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <svg 
                    className={`w-5 h-5 text-primary transform transition-transform ${activeTab === ('faq' + index) ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div 
                className={`px-6 pb-4 ${activeTab === ('faq' + index) ? 'block' : 'hidden'}`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600">Still have questions?</p>
          <a 
            href="mailto:info@candelapublicschool.edu" 
            className="inline-block mt-2 text-primary font-medium hover:underline"
          >
            Contact our support team
          </a>
        </div>
      </section>
      
      {/* Emergency Contact Banner */}
      <div className="mt-16 bg-red-50 border-l-4 border-red-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">Emergency Contact</h3>
            <div className="mt-2 text-sm text-red-700">
              <p>For emergencies during school hours, please call our main office at <a href="tel:+917908238939" className="font-medium underline">7908238939</a>.</p>
              <p className="mt-1">For after-hours emergencies, please contact the school administrator at <a href="tel:+919933970075" className="font-medium underline">9933970075</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
