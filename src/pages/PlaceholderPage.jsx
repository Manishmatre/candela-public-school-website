import { Link } from 'react-router-dom';
import { FaHome, FaArrowRight } from 'react-icons/fa';

const PlaceholderPage = ({ title, description }) => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">{title}</h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          {description}
        </p>
        
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto mb-12">
          <div className="text-6xl mb-6">🚧</div>
          <h2 className="text-2xl font-semibold mb-4">Page Under Construction</h2>
          <p className="text-gray-600 mb-6">
            We're working hard to bring you this content soon. Please check back later!
          </p>
          
          <Link 
            to="/" 
            className="inline-flex items-center text-primary hover:text-blue-700 font-medium"
          >
            <FaHome className="mr-2" /> Back to Home
            <FaArrowRight className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
