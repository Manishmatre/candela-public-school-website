import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaFileAlt, FaClipboardCheck, FaUserGraduate, FaSchool, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChalkboardTeacher, FaArrowRight } from 'react-icons/fa';

const Admissions = () => {
  const [activeTab, setActiveTab] = useState('process');
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    grade: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    previousSchool: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form after successful submission
      setFormData({
        studentName: '',
        dob: '',
        grade: '',
        parentName: '',
        email: '',
        phone: '',
        address: '',
        previousSchool: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const admissionProcess = [
    {
      id: 1,
      title: 'Inquiry',
      description: 'Submit an inquiry form or visit our school for a tour.',
      icon: <FaFileAlt className="text-2xl text-primary" />
    },
    {
      id: 2,
      title: 'Application',
      description: 'Complete and submit the application form with required documents.',
      icon: <FaClipboardCheck className="text-2xl text-primary" />
    },
    {
      id: 3,
      title: 'Assessment',
      description: 'Student assessment and family interview (if required).',
      icon: <FaUserGraduate className="text-2xl text-primary" />
    },
    {
      id: 4,
      title: 'Admission Decision',
      description: 'Receive admission decision and enrollment package.',
      icon: <FaSchool className="text-2xl text-primary" />
    }
  ];

  const requirements = [
    'Birth Certificate (original + copy)',
    'Previous school records (if applicable)',
    'Transfer Certificate (for grades 2-12)',
    'Passport-sized photographs (4 copies)',
    'Aadhaar Card copy (student and parents)',
    'Address proof',
    'Medical records (immunization card)'
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
            Admissions <span className="text-yellow-300">at Candela</span>
          </motion.h1>
          <div className="w-24 h-1.5 bg-yellow-300 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 font-open-sans">
            Start your child's journey with a nurturing, inspiring learning environment.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <a 
              href="#admissions-tabs" 
              className="flex items-center bg-white text-primary px-6 py-3 rounded-full font-baloo font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={(e) => { e.preventDefault(); setActiveTab('apply'); document.getElementById('admissions-tabs')?.scrollIntoView({behavior:'smooth'}); }}
            >
              Apply Online <FaArrowRight className="ml-2" />
            </a>
            <a 
              href="/contact" 
              className="flex items-center border-2 border-white text-white px-6 py-3 rounded-full font-baloo font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Contact Admissions
            </a>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div id="admissions-tabs" className="max-w-6xl mx-auto mb-12">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            { id: 'process', label: 'Admission Process' },
            { id: 'requirements', label: 'Requirements' },
            { id: 'apply', label: 'Apply Now' },
            { id: 'contact', label: 'Contact Admissions' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="min-h-[400px]">
          {/* Admission Process Tab */}
          {activeTab === 'process' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">Our Admission Process</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {admissionProcess.map((step, index) => (
                  <motion.div
                    key={step.id}
                    className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 p-6 text-center shadow-md hover:shadow-xl transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center mx-auto mb-4 transition-colors">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    <div className="text-4xl font-extrabold text-gray-100/80 mt-2 select-none">0{step.id}</div>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="inline-block text-sm font-medium text-primary">Learn more</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center text-blue-900">
                  <FaCalendarAlt className="text-primary mr-2" />
                  Important Dates
                </h3>
                <ul className="divide-y divide-blue-100">
                  <li className="flex items-center justify-between py-3">
                    <span className="text-gray-700">Application Deadline</span>
                    <span className="font-semibold text-gray-900">April 30, 2024</span>
                  </li>
                  <li className="flex items-center justify-between py-3">
                    <span className="text-gray-700">Assessment Dates</span>
                    <span className="font-semibold text-gray-900">May 10-15, 2024</span>
                  </li>
                  <li className="flex items-center justify-between py-3">
                    <span className="text-gray-700">New Academic Year Begins</span>
                    <span className="font-semibold text-gray-900">June 10, 2024</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}

          {/* Requirements Tab */}
          {activeTab === 'requirements' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-8">Admission Requirements</h2>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-semibold mb-6 text-primary">Documents Required for Admission</h3>
                  <ul className="space-y-3 mb-8">
                    {requirements.map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                          Please ensure all documents are submitted before the application deadline. Incomplete applications will not be processed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Apply Now Tab */}
          {activeTab === 'apply' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-2xl font-bold mb-8">Application Form</h2>
              
              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Application Submitted Successfully!</h3>
                  <p className="text-green-600">Thank you for your interest in Candela Public School. Our admissions team will contact you within 3-5 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-100">Student Information</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-1">Student's Full Name *</label>
                        <input
                          type="text"
                          id="studentName"
                          name="studentName"
                          value={formData.studentName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
                        <input
                          type="date"
                          id="dob"
                          name="dob"
                          value={formData.dob}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">Grade Applying For *</label>
                        <select
                          id="grade"
                          name="grade"
                          value={formData.grade}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        >
                          <option value="">Select Grade</option>
                          <option value="Nursery">Nursery</option>
                          <option value="LKG">LKG</option>
                          <option value="UKG">UKG</option>
                          {[...Array(12)].map((_, i) => (
                            <option key={i} value={`Grade ${i + 1}`}>Grade {i + 1}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="previousSchool" className="block text-sm font-medium text-gray-700 mb-1">Previous School (if any)</label>
                        <input
                          type="text"
                          id="previousSchool"
                          name="previousSchool"
                          value={formData.previousSchool}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-100">Parent/Guardian Information</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1">Parent/Guardian Name *</label>
                        <input
                          type="text"
                          id="parentName"
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
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
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Any additional information or special requirements..."
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                      I certify that the information provided is accurate to the best of my knowledge. *
                    </label>
                  </div>
                  
                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors disabled:opacity-50 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : 'Submit Application'}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          )}

          {/* Contact Tab */}
          {activeTab === 'contact' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Admissions</h2>
                <p className="text-gray-600 mb-8">
                  Have questions about our admissions process? Our dedicated admissions team is here to help you through every step of the way.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full text-primary">
                      <FaPhoneAlt className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500">Monday-Friday, 9:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full text-primary">
                      <FaEnvelope className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <p className="text-gray-600">admissions@candelapublicschool.edu</p>
                      <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full text-primary">
                      <FaMapMarkerAlt className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">Visit Us</h3>
                      <p className="text-gray-600">123 Education Street</p>
                      <p className="text-gray-600">Mumbai, Maharashtra 400001</p>
                      <p className="text-sm text-gray-500 mt-1">Schedule a campus tour to see our facilities</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold mb-6">Schedule a Visit</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="visitName" className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      id="visitName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="visitEmail" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      id="visitEmail"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="visitDate" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date *</label>
                    <input
                      type="date"
                      id="visitDate"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="visitTime" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time *</label>
                    <select
                      id="visitTime"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="">Select Time</option>
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="03:00 PM">03:00 PM</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="visitNotes" className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                    <textarea
                      id="visitNotes"
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Any specific areas you'd like to see or questions you have..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
                  >
                    Schedule Visit
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="max-w-6xl mx-auto mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Candela Public School?</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Experienced Faculty',
              description: 'Our dedicated teachers are experts in their fields with years of experience in education.'
            },
            {
              title: 'Holistic Development',
              description: 'We focus on academic excellence along with sports, arts, and character development.'
            },
            {
              title: 'Modern Facilities',
              description: 'State-of-the-art classrooms, labs, and sports facilities to enhance learning experiences.'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl text-primary">
                  {index === 0 ? <FaChalkboardTeacher /> : index === 1 ? <FaUserGraduate /> : <FaSchool />}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Admissions;
