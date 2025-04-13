
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import {
  Calendar,
  Lock,
  Users,
  Mail,
  BarChart as ChartBar,
  Shield,
  CheckCircle,
  Clock,
  FileText,
  Database,
  Upload,
  DownloadCloud,
  PlayCircle
} from "lucide-react";

// Import components
import Navigation from "../components/Navigation";
import FeatureCard from "../components/FeatureCard";
import { FeatureComparison } from "../components/FeatureComparison";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";

// Import team member images
import Akansha from "../assets/Akansha.jpg";
import Sanuja from "../assets/Sanuja.png";
import Janindu from "../assets/Janindu.png";
import Yasindu from "../assets/Yasindu.png";
import Thinula from "../assets/Thinula.png";
import Sanidu from "../assets/Sanidu.png";

const Index = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position to change nav bar style
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  // Define features
  const features = [
    {
      title: "Smart Leave Management",
      description: "Streamlined leave requests and approvals with Azure integration.",
      icon: Calendar,
    },
    {
      title: "Document Security",
      description: "Secure handling of medical and personal documents.",
      icon: Lock,
    },
    {
      title: "Role-based Access",
      description: "Hierarchical system with HR, Managers, and Team Members.",
      icon: Users,
    },
    {
      title: "Azure Entra ID",
      description: "Enterprise-grade authentication and security.",
      icon: Shield,
    },
    {
      title: "Email Notifications",
      description: "Automated alerts for leave requests and approvals.",
      icon: Mail,
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive leave statistics and insights.",
      icon: ChartBar,
    },
  ];

  const steps = [
    {
      title: "Login",
      description:
        "Employees log in using their company Outlook account for seamless authentication via Azure Entra ID.",
      icon: <CheckCircle className="w-6 h-6 text-brand-blue" />,
    },
    {
      title: "Submit Leave Request",
      description:
        "After logging in, employees can easily navigate to the leave request form and submit their request for approval.",
      icon: <FileText className="w-6 h-6 text-brand-blue" />,
    },
    {
      title: "Manager Approval",
      description: "The request is sent to the relevant Manager, who can approve or decline the leave.",
      icon: <Users className="w-6 h-6 text-brand-blue" />,
    },
    {
      title: "Approval Notification",
      description:
        "Once the Manager approves the leave request, the employee receives an automated email notification.",
      icon: <Mail className="w-6 h-6 text-brand-blue" />,
    },
    {
      title: "Past Leave Records",
      description:
        "Employees and Managers can view past leave taken with graphical representations and detailed statistical insights on leave trends.",
      icon: <Database className="w-6 h-6 text-brand-blue" />,
    },
  ];

  const team = [
    {
      name: "Akansha Fernando",
      role: "Project Organizer",
      image: Akansha,
    },
    {
      name: "Sanuja Nethsuka",
      role: "Backend Developer",
      image: Sanuja,
    },
    {
      name: "Thinula Jayavihan",
      role: "Fullstack Developer",
      image: Thinula,
    },
    {
      name: "Janindu Weerakkody",
      role: "Frontend Developer",
      image: Janindu,
    },
    {
      name: "Yasindu Mallawarachchi",
      role: "Fullstack Developer",
      image: Yasindu,
    },
    {
      name: "Sanidu Wickramasinghe",
      role: "UI/UX Developer",
      image: Sanidu,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-[#f0f6ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0 text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-brand-dark mb-6"
              >
                Revolutionize Your <br /> Leave Management
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-brand-gray mb-8 max-w-xl"
              >
                Enterprise-grade leave management system with Azure integration, built for modern organizations.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="https://youtu.be/IoTlHZCntGE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-brand-blue text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 gap-2"
                >
                  <PlayCircle size={20} />
                  Watch Demo
                </a>
                <a
                  href="https://calendly.com/teamwis-info/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center border-2 border-brand-blue text-brand-blue px-6 py-3 rounded-lg hover:bg-brand-blue hover:text-white transition-all duration-300"
                >
                  Book a Meeting
                </a>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg"
              >
                <iframe 
                  src="https://share.synthesia.io/embeds/videos/13c62f0a-2c7b-43cf-a97e-90772c4d71e5" 
                  loading="lazy" 
                  title="Synthesia video player - Your AI video" 
                  allowFullScreen 
                  allow="encrypted-media; fullscreen;"
                  className="w-full h-full"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Powerful Features</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Everything you need to manage your organization's leave process efficiently and securely.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Pricing Plans</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Choose the plan that fits your organization's needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Basic Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Basic</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">$10</span>
                  <span className="text-lg text-brand-gray ml-1">/month</span>
                </div>
                <p className="text-brand-gray mb-6">For small organizations needing essential leave management.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue mt-0.5 mr-2" />
                    <span>Annual Leave Loop</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue mt-0.5 mr-2" />
                    <span>Leave Request Management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue mt-0.5 mr-2" />
                    <span>Approval Workflow</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue mt-0.5 mr-2" />
                    <span>Role-Based Access Control</span>
                  </li>
                </ul>
              </div>
              <div className="px-8 pb-8">
                <Link to="/payment?plan=basic" className="block w-full py-3 px-4 rounded-lg bg-brand-blue text-white text-center font-medium hover:bg-opacity-90 transition-all duration-300">
                  Choose Basic Plan
                </Link>
              </div>
            </motion.div>

            {/* Standard Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-brand-blue relative transform scale-105 z-10"
            >
              <div className="bg-brand-blue text-white text-center py-2 text-sm font-medium">
                MOST POPULAR
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Standard</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">$20</span>
                  <span className="text-lg text-brand-gray ml-1">/month</span>
                </div>
                <p className="text-brand-gray mb-6">For mid-sized organizations needing enhanced communication.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue mt-0.5 mr-2" />
                    <span>All Basic features</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue mt-0.5 mr-2" />
                    <span>Email Notifications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue mt-0.5 mr-2" />
                    <span>Leave Balance Tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue mt-0.5 mr-2" />
                    <span>Company Calendar</span>
                  </li>
                </ul>
              </div>
              <div className="px-8 pb-8">
                <Link to="/payment?plan=standard" className="block w-full py-3 px-4 rounded-lg bg-brand-blue text-white text-center font-medium hover:bg-opacity-90 transition-all duration-300">
                  Choose Standard Plan
                </Link>
              </div>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Premium</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">$35</span>
                  <span className="text-lg text-brand-gray ml-1">/month</span>
                </div>
                <p className="text-brand-gray mb-6">For large organizations requiring comprehensive oversight.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue mt-0.5 mr-2" />
                    <span>All Standard features</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue mt-0.5 mr-2" />
                    <span>Enhanced Leave Tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue mt-0.5 mr-2" />
                    <span>Medical Document Upload</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue mt-0.5 mr-2" />
                    <span>Report Export Functionality</span>
                  </li>
                </ul>
              </div>
              <div className="px-8 pb-8">
                <Link to="/payment?plan=premium" className="block w-full py-3 px-4 rounded-lg bg-brand-blue text-white text-center font-medium hover:bg-opacity-90 transition-all duration-300">
                  Choose Premium Plan
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Feature Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-brand-dark mb-6 text-center">Feature Comparison</h3>
            <FeatureComparison />
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">How It Works</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              A simple and streamlined process for managing leaves.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex relative mb-12 last:mb-0"
              >
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-200 z-0"></div>
                )}
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md z-10 flex-shrink-0 border border-gray-100">
                  <div className="text-brand-blue font-bold">{index + 1}</div>
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-semibold mb-2 text-brand-dark">{step.title}</h3>
                  <p className="text-brand-gray">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Meet Our Team</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              The talented individuals behind LeaveBook.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 text-center p-6"
              >
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden mb-4 border-2 border-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-brand-dark">{member.name}</h3>
                <p className="text-brand-gray">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Find answers to common questions about LeaveBook.
            </p>
          </motion.div>

          <FaqSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Contact Us</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Get in touch with us for any questions about LeaveBook.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-4 text-brand-dark">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-brand-blue mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-brand-gray">leavebookdesk@outlook.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-brand-blue mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-brand-gray">+94 77 160 3251</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-brand-blue mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-brand-gray">3G, Araliya Place, Thalahena, Malabe</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-4 text-brand-dark">Get Connected</h3>
                <div className="space-y-4">
                  <a
                    href="https://youtu.be/IoTlHZCntGE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <PlayCircle className="w-6 h-6 text-red-500 mr-3" />
                    <div>
                      <p className="font-medium">Watch Demo</p>
                      <p className="text-brand-gray text-sm">See LeaveBook in action</p>
                    </div>
                  </a>

                  <a
                    href="https://calendly.com/teamwis-info/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Clock className="w-6 h-6 text-brand-blue mr-3" />
                    <div>
                      <p className="font-medium">Schedule a Meeting</p>
                      <p className="text-brand-gray text-sm">Book a 30-min discovery call</p>
                    </div>
                  </a>

                  <div className="flex items-center p-3 rounded-lg">
                    <div className="flex space-x-3">
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <svg className="w-5 h-5 text-brand-gray" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <svg className="w-5 h-5 text-brand-gray" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <svg className="w-5 h-5 text-brand-gray" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <svg className="w-5 h-5 text-brand-gray" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h-2v-6h2v6zm1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0V16h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548V16z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
