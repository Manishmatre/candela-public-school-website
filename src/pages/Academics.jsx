import { FaBookOpen, FaGraduationCap, FaLaptopCode, FaFlask, FaChalkboardTeacher, FaUsers, FaMicroscope, FaBookReader } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Academics = () => {
  const programs = [
    {
      title: 'Primary Education',
      description: 'A strong foundation in core subjects with a focus on literacy, numeracy, and social skills development.',
      icon: <FaBookOpen className="text-4xl text-primary" />,
      grades: 'Grades 1-5',
      features: [
        'Interactive learning environment',
        'Focus on basic literacy and numeracy',
        'Introduction to science and social studies',
        'Creative arts and physical education'
      ]
    },
    {
      title: 'Middle School',
      description: 'A comprehensive curriculum that builds on foundational skills while introducing more specialized subjects.',
      icon: <FaGraduationCap className="text-4xl text-primary" />,
      grades: 'Grades 6-8',
      features: [
        'Subject-specialized teachers',
        'Introduction to second language',
        'Basic computer literacy',
        'Project-based learning'
      ]
    },
    {
      title: 'High School',
      description: 'Advanced academic preparation with a focus on critical thinking, research skills, and college readiness.',
      icon: <FaLaptopCode className="text-4xl text-primary" />,
      grades: 'Grades 9-12',
      features: [
        'Comprehensive college prep curriculum',
        'Advanced Placement (AP) courses',
        'Career counseling',
        'Extracurricular leadership opportunities'
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

  return (
    <div className="pt-32 pb-20 px-4">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center mb-20">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Academic <span className="text-primary">Programs</span>
        </motion.h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our comprehensive academic programs are designed to challenge students, foster intellectual curiosity, and prepare them for success in higher education and beyond.
        </p>
      </section>

      {/* Academic Programs */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6 mx-auto">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-3">{program.title}</h3>
                <p className="text-gray-600 text-center mb-4">{program.description}</p>
                <div className="text-center text-sm font-medium text-primary mb-4">{program.grades}</div>
                <ul className="space-y-2 mt-4">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
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
