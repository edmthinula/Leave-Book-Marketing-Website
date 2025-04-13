import { Facebook, Github, Linkedin, Twitter, Youtube, Mail, Phone, MapPin, Calendar, ExternalLink, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-gradient-to-br from-brand-dark to-gray-900 text-white relative">
      {/* Wave Shape Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-white h-12 w-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-16 sm:px-6 lg:pt-28 lg:pb-20 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 rounded-lg bg-brand-blue mr-3 flex items-center justify-center">
                <span className="text-white font-bold text-xl">LB</span>
              </div>
              <h3 className="text-2xl font-bold">Leave Book</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Enterprise-grade leave management system with Azure integration, built for modern organizations to streamline workflows and enhance productivity.
            </p>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="bg-gray-800 hover:bg-brand-blue p-2 rounded-full transition-all duration-300" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-brand-blue p-2 rounded-full transition-all duration-300" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-brand-blue p-2 rounded-full transition-all duration-300" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://youtu.be/IoTlHZCntGE" className="bg-gray-800 hover:bg-red-600 p-2 rounded-full transition-all duration-300" aria-label="YouTube Demo">
                <Youtube size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-600 p-2 rounded-full transition-all duration-300" aria-label="GitHub">
                <Github size={18} />
              </a>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-medium mb-3 flex items-center">
                <Calendar size={16} className="mr-2 text-brand-blue" />
                Schedule a Demo
              </h4>
              <a 
                href="https://calendly.com/teamwis-info/30min" 
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-brand-blue hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center justify-center transition-colors"
              >
                Book a 30-min Meeting
                <ExternalLink size={14} className="ml-2" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <div className="h-1 w-4 bg-brand-blue mr-2"></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="h-1 w-2 bg-gray-700 mr-2"></span>Home
                </Link>
              </li>
              <li>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="h-1 w-2 bg-gray-700 mr-2"></span>Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="h-1 w-2 bg-gray-700 mr-2"></span>Pricing
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="h-1 w-2 bg-gray-700 mr-2"></span>How it Works
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="h-1 w-2 bg-gray-700 mr-2"></span>Team
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="h-1 w-2 bg-gray-700 mr-2"></span>FAQ
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <div className="h-1 w-4 bg-brand-blue mr-2"></div>
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="https://youtu.be/IoTlHZCntGE" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="h-1 w-2 bg-gray-700 mr-2"></span>Watch Demo
                </a>
              </li>
              <li>
                <a href="https://calendly.com/teamwis-info/30min" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="h-1 w-2 bg-gray-700 mr-2"></span>Book a Meeting
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <div className="h-1 w-4 bg-brand-blue mr-2"></div>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-brand-blue mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-400">Email:</p>
                  <a href="mailto:teamwis.info@gmail.com" className="text-white hover:text-brand-blue transition-colors">
                    teamwis.info@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-brand-blue mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-400">Phone:</p>
                  <a href="tel:+94767085548" className="text-white hover:text-brand-blue transition-colors">
                    +94 76 708 5548
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-brand-blue mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-400">Address:</p>
                  <p className="text-white leading-relaxed">
                    L6, Rosewood Park, Gonahena<br />
                    Ranmuthugala, Kadawatha
                  </p>
                </div>
              </li>
            </ul>
            
            {/* <div className="mt-6 pt-6 border-t border-gray-700">
              <h4 className="font-medium mb-3">Subscribe to our newsletter</h4>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="py-2 px-4 rounded-l bg-gray-800 border border-gray-700 text-white flex-grow focus:outline-none focus:ring-2 focus:ring-brand-blue"
                />
                <button 
                  type="submit"
                  className="bg-brand-blue hover:bg-blue-700 text-white py-2 px-4 rounded-r transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div> */}
          </div>
        </div>
        
        {/* Bottom Copyright and Legal */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Leave Book. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookies Policy</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-20 right-6 bg-brand-blue hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}