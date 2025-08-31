import { FaBookOpen, FaGraduationCap, FaLaptopCode, FaFlask, FaChalkboardTeacher, FaUsers, FaMicroscope, FaBookReader, FaQuoteLeft, FaChevronDown, FaChevronUp, FaUserTie, FaLightbulb, FaChartLine, FaHandsHelping } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Academics = () => {
  const programs = [
    {
      title: 'Play School',
      description: 'Early years foundational learning through play, stories, rhythm and routines in a nurturing environment.',
      icon: <FaBookOpen className="text-4xl text-primary" />,
      grades: 'Ages 3–5 (Pre-K | KG)',
      features: [
        'Phonics and pre-literacy activities',
        'Pre-numeracy and number sense',
        'Storytelling, rhyme and rhythm',
        'Fine-motor and gross-motor development',
        'Social-emotional learning'
      ]
    },
    {
      title: 'Class 1',
      description: 'Building strong basics in reading, writing and arithmetic with activity-based learning.',
      icon: <FaBookReader className="text-4xl text-primary" />,
      grades: 'Grade 1',
      features: [
        'English reading and handwriting',
        'Numbers up to 100, addition/subtraction',
        'EVS: self, family and surroundings',
        'Art, music and free play',
        'Values and good habits'
      ]
    },
    {
      title: 'Class 2',
      description: 'Strengthening literacy and numeracy; encouraging curiosity and expression.',
      icon: <FaLightbulb className="text-4xl text-primary" />,
      grades: 'Grade 2',
      features: [
        'Reading comprehension and vocabulary',
        '2-digit arithmetic, measurement and time',
        'EVS: neighbourhood and community',
        'Crafts, storytelling and recitation',
        'Foundations of computer awareness'
      ]
    },
    {
      title: 'Class 3',
      description: 'Moving to structured chapters with projects and discovery-based learning.',
      icon: <FaChartLine className="text-4xl text-primary" />,
      grades: 'Grade 3',
      features: [
        'Grammar, writing and cursive practice',
        'Multiplication tables, fractions basics',
        'Science and Social Studies introduction',
        'Computer fundamentals and typing',
        'Drawing, dance and singing'
      ]
    },
    {
      title: 'Class 4',
      description: 'Conceptual depth with projects, presentations and regular assessments.',
      icon: <FaLaptopCode className="text-4xl text-primary" />,
      grades: 'Grade 4',
      features: [
        'Reading to learn: chapters and summaries',
        'Long division, factors and geometry basics',
        'Science experiments and EVS projects',
        'ICT: text editing and presentation skills',
        'Sports and house activities'
      ]
    },
    {
      title: 'Class 5',
      description: 'Preparation for upper-primary with integrated projects and skill-building.',
      icon: <FaHandsHelping className="text-4xl text-primary" />,
      grades: 'Grade 5',
      features: [
        'Advanced grammar and composition',
        'Fractions/decimals, data and geometry',
        'General Science and Social Sciences',
        'ICT: internet safety and research basics',
        'Art, music and leadership roles'
      ]
    }
  ];

  const subjects = [
    { name: 'Mathematics', icon: <FaFlask className="text-3xl" />, color: 'bg-blue-100 text-blue-600' },
    { name: 'Science', icon: <FaMicroscope className="text-3xl" />, color: 'bg-green-100 text-green-600' },
    { name: 'Languages', icon: <FaBookReader className="text-3xl" />, color: 'bg-yellow-100 text-yellow-600' },
    { name: 'Social Studies', icon: <FaUsers className="text-3xl" />, color: 'bg-purple-100 text-purple-600' },
    { name: 'Computer Science', icon: <FaLaptopCode className="text-3xl" />, color: 'bg-indigo-100 text-indigo-600' },
    { name: 'Arts & Music', icon: <FaChalkboardTeacher className="text-3xl" />, color: 'bg-pink-100 text-pink-600' },
  ];

  // FAQ Data
  const faqs = [
    {
      question: 'What is the student-to-teacher ratio in your school?',
      answer: 'We maintain an optimal student-to-teacher ratio of 12:1 to ensure personalized attention for each student.'
    },
    {
      question: 'Do you offer any scholarship programs?',
      answer: 'Yes, we offer merit-based scholarships and financial aid programs for eligible students.'
    },
    {
      question: 'What extracurricular activities are available?',
      answer: 'We offer a wide range of activities including sports, music, arts, coding club, debate, and more.'
    },
    {
      question: 'How do you support students with different learning needs?',
      answer: 'Our learning support team provides individualized education plans and resources for students with diverse learning needs.'
    }
  ];

  // Testimonial Data
  const testimonials = [
    {
      quote: "The academic program at Candela has helped my child develop a love for learning. The teachers are exceptional!",
      author: "Sarah Johnson",
      role: "Parent of Grade 5 Student"
    },
    {
      quote: "The hands-on learning approach has made complex concepts so much easier to understand. I love going to school every day!",
      author: "Michael Chen",
      role: "Grade 10 Student"
    },
    {
      quote: "The curriculum is challenging yet engaging, and the teachers go above and beyond to support each student's growth.",
      author: "Priya Patel",
      role: "Parent of Grade 8 Student"
    }
  ];

  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-24 mb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-yellow-300"></div>
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-white"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Shaping <span className="text-yellow-400">Minds</span>, Building <span className="text-yellow-400">Futures</span>
            </h1>
            <div className="w-32 h-1.5 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive academic programs are designed to challenge students, foster intellectual curiosity, and prepare them for success in higher education and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="max-w-7xl mx-auto px-4 mb-28">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our <span className="text-primary">Academic Programs</span>
          </motion.h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tailored educational pathways designed to inspire excellence and personal growth at every stage of learning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div 
              key={index}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8">
                  <div className="w-20 h-20 rounded-2xl bg-blue-50 group-hover:bg-white/10 flex items-center justify-center mb-6 mx-auto transition-colors duration-300">
                    {program.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-3 group-hover:text-white transition-colors duration-300">{program.title}</h3>
                  <div className="text-center text-sm font-medium text-primary group-hover:text-yellow-300 mb-4 transition-colors duration-300">
                    {program.grades}
                  </div>
                  <p className="text-gray-600 text-center mb-6 group-hover:text-white/90 transition-colors duration-300">
                    {program.description}
                  </p>
                  <ul className="space-y-3 mt-6">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-start group-hover:text-white/90 transition-colors duration-300">
                        <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover:text-yellow-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 group-hover:text-white/90 transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 text-center">
                    <button className="px-6 py-2.5 rounded-lg bg-white text-primary font-medium shadow-md hover:bg-gray-50 transition-colors group-hover:bg-white/90 group-hover:text-primary-dark">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Subject Areas */}
      <section className="bg-gray-50 py-16 mb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Subject Areas</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {subjects.map((subject, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 rounded-full ${subject.color} flex items-center justify-center mx-auto mb-4`}>
                  {subject.icon}
                </div>
                <h3 className="font-semibold text-gray-800">{subject.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="md:flex items-center gap-12">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
              alt="Teaching Methodology" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Teaching Methodology</h2>
            <p className="text-gray-700 mb-6">
              At Candela Public School, we believe in a student-centered approach to learning that combines traditional teaching methods with innovative educational practices.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">1</div>
                <div>
                  <h4 className="font-semibold">Interactive Learning</h4>
                  <p className="text-gray-600 text-sm">Engaging students through discussions, group work, and hands-on activities.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">2</div>
                <div>
                  <h4 className="font-semibold">Technology Integration</h4>
                  <p className="text-gray-600 text-sm">Utilizing modern technology to enhance learning experiences.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">3</div>
                <div>
                  <h4 className="font-semibold">Personalized Attention</h4>
                  <p className="text-gray-600 text-sm">Small class sizes ensure each student receives individual attention.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Academic Community?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Discover how our academic programs can help your child achieve their full potential.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/admissions" 
              className="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Apply Now
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
