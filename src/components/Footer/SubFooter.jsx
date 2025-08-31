import React from 'react';
import { Link } from 'react-router-dom';

const SubFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gray-900 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-white mb-4 md:mb-0">
            <img 
              src="/logo.png" 
              alt="Candela Public School" 
              className="h-6 w-auto"
            />
            <span className="text-sm">© {currentYear} Candela Public School. All rights reserved.</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/privacy-policy" 
              className="text-white hover:text-yellow-300 transition-colors text-sm hover:underline"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-500">|</span>
            <Link 
              to="/terms" 
              className="text-white hover:text-yellow-300 transition-colors text-sm hover:underline"
            >
              Terms of Service
            </Link>
            <span className="text-gray-500">|</span>
            <Link 
              to="/sitemap" 
              className="text-white hover:text-yellow-300 transition-colors text-sm hover:underline"
            >
              Sitemap
            </Link>
            <span className="text-gray-500">|</span>
            <Link 
              to="/careers" 
              className="text-white hover:text-yellow-300 transition-colors text-sm hover:underline"
            >
              Careers
            </Link>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-white text-sm">
              Designed with ❤️ by{' '}
              <a 
                href="https://arionextech.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-300 hover:underline"
              >
                Arionex Technologies
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
