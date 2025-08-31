import { FaSchool, FaChalkboardTeacher, FaUserGraduate, FaAward } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { icon: <FaSchool className="text-4xl text-primary" />, number: '18+', label: 'Years of Excellence' },
    { icon: <FaChalkboardTeacher className="text-4xl text-primary" />, number: '75+', label: 'Qualified Teachers' },
    { icon: <FaUserGraduate className="text-4xl text-primary" />, number: '1200+', label: 'Students Enrolled' },
    { icon: <FaAward className="text-4xl text-primary" />, number: '50+', label: 'Awards Won' },
  ];

  const features = [
    {
      title: 'Our Mission',
      description: 'To provide a nurturing environment that fosters academic excellence, creativity, and character development, preparing students to become responsible global citizens.',
      icon: '🎯',
    },
    {
      title: 'Our Vision',
      description: 'To be a leading educational institution that inspires a passion for learning, encourages innovation, and develops future leaders who will make a positive impact on society.',
      icon: '👁️',
    },
    {
      title: 'Our Values',
      description: 'We uphold the values of integrity, respect, excellence, and compassion, creating a supportive community where every student can thrive and reach their full potential.',
      icon: '💎',
    },
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
          About <span className="text-primary">Candela Public School</span>
        </motion.h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Established in 2005, Candela Public School has been a beacon of quality education, nurturing young minds and shaping futures with a perfect blend of academic excellence and holistic development.
        </p>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16 mb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our History</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Founded in 2005 by a group of visionary educators, Candela Public School began with a simple mission: to provide quality education that combines academic rigor with character development.
              </p>
              <p>
                What started as a small institution with just 50 students has grown into one of the most respected educational institutions in the region, known for its innovative teaching methods and outstanding results.
              </p>
              <p>
                Over the years, we've consistently adapted to the changing educational landscape, integrating technology and modern pedagogical approaches while maintaining our commitment to traditional values.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-xl overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="School Building" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Guiding Principles</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Principal's Message */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="md:flex items-center">
            <motion.div 
              className="md:w-1/3 flex justify-center mb-8 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" 
                  alt="Principal"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div 
              className="md:w-2/3 md:pl-12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Principal's Message</h2>
              <p className="text-lg mb-6 text-blue-100">
                "At Candela Public School, we believe in nurturing not just the intellect but also the character of our students. Our holistic approach to education ensures that every child develops the skills, knowledge, and values needed to succeed in an ever-changing world."
              </p>
              <div className="font-semibold">
                <p>Dr. Sarah Johnson</p>
                <p>Principal, Candela Public School</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
