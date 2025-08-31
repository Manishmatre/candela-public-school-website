import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

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
      description: '123 Education Street, Mumbai, Maharashtra 400001',
      link: 'https://maps.google.com',
      linkText: 'View on Map'
    },
    {
      icon: <FaPhoneAlt className="text-2xl text-primary" />,
      title: 'Phone Number',
      description: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
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
    <div className="pt-32 pb-20 px-4">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center mb-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary">Contact</span> Us
        </motion.h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We'd love to hear from you. Reach out to us with any questions or to schedule a visit.
        </p>
      </section>

      {/* Contact Information */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-1">{item.description}</p>
              {item.subDescription && <p className="text-gray-600 text-sm">{item.subDescription}</p>}
              <a 
                href={item.link} 
                className="inline-block mt-3 text-primary font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.linkText}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Form */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold">Send Us a Message</h2>
                <p className="text-gray-600">We'll get back to you as soon as possible</p>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6">
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg flex items-start">
                    <FaCheckCircle className="text-green-500 text-xl mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Message Sent Successfully!</h3>
                      <p className="text-sm">Thank you for contacting us. We'll get back to you soon.</p>
                    </div>
                  </div>
                )}
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="Admission Inquiry">Admission Inquiry</option>
                      <option value="General Question">General Question</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Complaint">Complaint</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors flex items-center justify-center"
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
              </form>
            </div>
          </motion.div>
          
          {/* Map and Additional Info */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Map */}
            <div className="bg-gray-100 rounded-xl overflow-hidden mb-6 h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.26485886413!2d72.8245153158498!3d19.05538898710165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8df0b2e7c5b%3A0x1adcee9a4a2b4f3d!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="School Location"
              ></iframe>
            </div>
            
            {/* Additional Contact Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Visit Our Campus</h3>
              <p className="text-gray-600 mb-4">
                We welcome visitors to our campus. Schedule a tour to see our facilities and meet our staff.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg text-primary">
                    <FaClock className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">Visiting Hours</h4>
                    <p className="text-gray-600 text-sm">Monday - Friday: 9:00 AM - 3:00 PM</p>
                    <p className="text-gray-600 text-sm">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-500 text-xs mt-1">* By appointment only</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg text-primary">
                    <FaMapMarkerAlt className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">Getting Here</h4>
                    <p className="text-gray-600 text-sm">We are located in the heart of Mumbai, easily accessible by public transportation.</p>
                    <p className="text-gray-600 text-sm mt-1">Parking is available on-site for visitors.</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <a
                    href="/admissions#schedule-visit"
                    className="inline-block w-full text-center bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
                  >
                    Schedule a Campus Tour
                  </a>
                </div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-6 flex justify-center space-x-4">
              {[
                { name: 'Facebook', icon: 'facebook', url: '#' },
                { name: 'Twitter', icon: 'twitter', url: '#' },
                { name: 'Instagram', icon: 'instagram', url: '#' },
                { name: 'YouTube', icon: 'youtube', url: '#' },
                { name: 'LinkedIn', icon: 'linkedin', url: '#' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

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
                onClick={() => setActiveTab(activeTab === `faq${index}` ? null : `faq${index}`)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <svg 
                    className={`w-5 h-5 text-primary transform transition-transform ${activeTab === `faq${index}` ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div 
                className={`px-6 pb-4 ${activeTab === `faq${index}` ? 'block' : 'hidden'}`}
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
              <p>For emergencies during school hours, please call our main office at <a href="tel:+15551234567" className="font-medium underline">+1 (555) 123-4567</a>.</p>
              <p className="mt-1">For after-hours emergencies, please contact the school administrator at <a href="tel:+15559876543" className="font-medium underline">+1 (555) 987-6543</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
