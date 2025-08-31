import { FaSchool, FaChalkboardTeacher, FaUserGraduate, FaAward, FaQuoteLeft, FaQuoteRight, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiAward, FiBookOpen, FiUsers, FiClock } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [counters, setCounters] = useState([
    { id: 1, target: 1, text: 'Year of Operation', current: 0 },
    { id: 2, target: 120, text: 'Seats Available', current: 0 },
    { id: 3, target: 10, text: 'Qualified Teachers', current: 0 },
    { id: 4, target: 1, text: 'Modern Campus', current: 0 },
  ]);

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const interval = 30;
      const steps = duration / interval;
      
      counters.forEach((counter) => {
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
      });
    }
  }, [inView]);

  const features = [
    {
      title: 'Our Mission',
      description: 'To provide a nurturing environment that fosters academic excellence, creativity, and character development, preparing students to become responsible global citizens.',
      icon: <FiBookOpen className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Our Vision',
      description: 'To be a leading educational institution that inspires a passion for learning, encourages innovation, and develops future leaders who will make a positive impact on society.',
      icon: <FiAward className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Our Values',
      description: 'We uphold the values of integrity, respect, excellence, and compassion, creating a supportive community where every student can thrive and reach their full potential.',
      icon: <FiUsers className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
    },
  ];

  const testimonials = [
    {
      quote: "Candela Public School has provided an exceptional learning environment for my child. The teachers are dedicated and caring.",
      author: "Priya Sharma",
      role: "Parent"
    },
    {
      quote: "The school's focus on holistic development has helped my child grow not just academically but also as a confident individual.",
      author: "Rahul Verma",
      role: "Parent"
    },
    {
      quote: "As an alumnus, I can confidently say that the foundation I received at Candela has been instrumental in my career success.",
      author: "Ananya Patel",
      role: "Alumni"
    }
  ];

  const timeline = [
    { year: '2025', title: 'Founded', description: 'Candela Public School begins its journey' },
    { year: '2025', title: 'Admissions Open', description: 'Admissions opened for Play School (Pre-K/KG) to Class 5' },
    { year: '2025', title: 'Campus Setup', description: 'Smart classrooms, child-friendly spaces, and a safe, welcoming environment' },
    { year: '2025', title: 'Community Launch', description: 'Parent orientation and first student activities kick off' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-32">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Shaping <span className="text-yellow-300">Futures</span> Together
          </motion.h1>
          <motion.div 
            className="w-32 h-1.5 bg-yellow-300 mx-auto mb-8 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          ></motion.div>
          <motion.p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            At Candela Public School, we believe in nurturing young minds through innovative education, character building, and a commitment to excellence that lasts a lifetime.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {counters.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                  {index === 0 && <FiClock className="h-8 w-8" />}
                  {index === 1 && <FaUserGraduate className="h-8 w-8" />}
                  {index === 2 && <FaChalkboardTeacher className="h-8 w-8" />}
                  {index === 3 && <FaAward className="h-8 w-8" />}
                </div>
                <h3 className="text-4xl font-extrabold text-gray-900 mb-2">
                  {stat.current}+
                </h3>
                <p className="text-lg text-gray-600">{stat.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Core Principles</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding our students towards excellence through a balanced approach to education
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`p-6 bg-gradient-to-r ${feature.color} text-white`}>
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History & Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-primary to-secondary"></div>
              <div className="pl-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey Begins</h2>
                <p className="text-gray-600 mb-6">
                  Candela Public School has just started its journey in Belda. We are focused on building a warm, safe, and inspiring
                  learning environment for Play School through Class 5, with strong foundations in literacy, numeracy, and values.
                </p>
                <p className="text-gray-600 mb-6">
                  This is the beginning of a story we will write together—with our students, parents, and community. Join us as we
                  grow year by year.
                </p>
                <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors">
                  Explore Our Vision
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold">
                        {item.year}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What People Say About Us</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <FaQuoteLeft className="text-gray-300 text-3xl mb-4" />
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Discover how Candela Public School can help your child achieve their full potential in a nurturing and inspiring environment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors">
              Schedule a Visit
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
              Contact Admissions
            </button>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-yellow-300 mix-blend-overlay"></div>
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-white mix-blend-overlay"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="md:flex">
              <motion.div 
                className="md:w-2/5 p-8 md:p-12 flex items-center justify-center bg-gradient-to-br from-blue-700/30 to-purple-700/30"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 opacity-70 blur"></div>
                  <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/20">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" 
                      alt="Dr. Sarah Johnson, Principal"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="md:w-3/5 p-8 md:p-12"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="h-1 w-12 bg-yellow-400 mr-4"></div>
                  <span className="text-sm font-semibold tracking-wider text-yellow-300">A MESSAGE FROM</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Principal's Message
                </h2>
                
                <div className="relative mb-8">
                  <FaQuoteLeft className="text-yellow-400/30 text-6xl absolute -top-4 -left-2 -z-10" />
                  <p className="text-lg md:text-xl leading-relaxed text-blue-50 relative z-10">
                    At Candela Public School, we are committed to fostering an environment where academic excellence meets character development. Our holistic approach ensures that every student not only excels in their studies but also grows into a compassionate, responsible global citizen, ready to make meaningful contributions to society.
                  </p>
                  <FaQuoteRight className="text-yellow-400/30 text-6xl absolute -bottom-8 right-4 -z-10" />
                </div>
                
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-xl font-bold text-white">Dr. Sarah Johnson</h4>
                  <p className="text-blue-100">Principal</p>
                  <p className="text-sm text-blue-200 mt-1">Candela Public School</p>
                  
                  <div className="mt-6 flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                      <FaLinkedinIn className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                      <FaTwitter className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                      <FaEnvelope className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
