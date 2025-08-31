import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaLaptop, FaChalkboardTeacher, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const [counters, setCounters] = useState([
    { id: 1, target: 18, text: 'Years of Excellence', current: 0 },
    { id: 2, target: 1200, text: 'Students Enrolled', current: 0 },
    { id: 3, target: 75, text: 'Qualified Teachers', current: 0 },
  ]);

  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const interval = 30; // Update interval in ms
    const steps = duration / interval;
    
    counters.forEach((counter, index) => {
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
      
      return () => clearInterval(timer);
    });
  }, []);

  const features = [
    {
      icon: <FaGraduationCap className="text-4xl text-primary mb-4" />,
      title: 'Quality Education',
      description: 'We provide a well-structured curriculum that focuses on holistic development and academic excellence.'
    },
    {
      icon: <FaLaptop className="text-4xl text-primary mb-4" />,
      title: 'Modern Facilities',
      description: 'State-of-the-art infrastructure with smart classrooms, well-equipped labs, and a rich library.'
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-primary mb-4" />,
      title: 'Dedicated Teachers',
      description: 'Our experienced and passionate educators are committed to nurturing young minds.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-blue-600 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Shaping Bright Futures at <br className="hidden md:block" />
              <span className="text-yellow-300">Candela Public School</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Quality Education, Experienced Teachers, and Holistic Development
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/admissions" 
                className="btn btn-secondary flex items-center justify-center"
              >
                Admissions Open <FaArrowRight className="ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="btn bg-white text-primary hover:bg-gray-100 flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/10 backdrop-blur-sm"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {counters.map((counter) => (
              <div key={counter.id} className="py-6">
                <div className="text-5xl font-bold mb-2">
                  {counter.current}+
                </div>
                <div className="text-xl">{counter.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Give your child the gift of quality education and a bright future at Candela Public School.
          </p>
          <Link 
            to="/admissions" 
            className="btn btn-primary inline-flex items-center"
          >
            Apply Now <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
