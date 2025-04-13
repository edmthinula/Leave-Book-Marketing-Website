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
  Send,
  Phone,
  MapPin,
  FileText,
  Database,
  Upload,
  MessageCircle,
  PlayCircle,
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
import { FeaturesSection } from "@/components/FeatureSection";
import Email from "@/components/Email";

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
      description:
        "Streamlined leave requests and approvals with Azure integration.",
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

  const teamMembers = [
    {
      name: "Akansha Wijesinghe",
      role: "Frontend Engineer",
      image: Akansha,
      social: {
        linkedin: "https://linkedin.com/in/akansha-wijesinghe",
        twitter: "https://twitter.com/akansha_dev",
        email: "akansha@example.com",
      },
    },
    {
      name: "Sanuja Fernando",
      role: "Project Manager",
      image: Sanuja,
      social: {
        linkedin: "https://linkedin.com/in/sanuja-fernando",
        twitter: "https://twitter.com/sanuja_dev",
        email: "sanuja@example.com",
      },
    },
    {
      name: "Janindu Perera",
      role: "Full Stack Developer",
      image: Janindu,
      social: {
        linkedin: "https://linkedin.com/in/janindu-perera",
        twitter: "https://twitter.com/janindu_dev",
        email: "janindu@example.com",
      },
    },
    {
      name: "Yasindu Senanayake",
      role: "Cloud & DevOps Engineer",
      image: Yasindu,
      social: {
        linkedin: "https://linkedin.com/in/yasindu-senanayake",
        email: "yasindu@example.com",
      },
    },
    {
      name: "Thinula Fernando",
      role: "UI/UX Designer",
      image: Thinula,
      social: {
        linkedin: "https://linkedin.com/in/thinula-fernando",
        twitter: "https://twitter.com/thinula_ui",
        email: "thinula@example.com",
      },
    },
    {
      name: "Sanidu Samarasinghe",
      role: "Mobile App Developer",
      image: Sanidu,
      social: {
        linkedin: "https://linkedin.com/in/sanidu-samarasinghe",
        email: "sanidu@example.com",
      },
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
      description:
        "The request is sent to the relevant Manager, who can approve or decline the leave.",
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
                Enterprise-grade leave management system with Azure integration,
                built for modern organizations.
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

      <FeaturesSection features={features} />

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-24 bg-gradient-to-b from-white to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4 inline-block">
              FLEXIBLE OPTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Choose the plan that fits your organization's needs with no hidden
              fees.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-6 mb-16">
            {/* Toggle Annual/Monthly */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center items-center w-full"
            >
              <div className="bg-gray-100 p-1 rounded-lg inline-flex">
                <button className="px-4 py-2 rounded-md bg-white shadow-sm text-brand-blue font-medium text-sm">
                  Monthly
                </button>
                <button className="px-4 py-2 text-gray-500 font-medium text-sm">
                  Annual (Save 20%)
                </button>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Basic Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-blue-100 transition-all duration-300"
            >
              <div className="p-8">
                <div className="rounded-full bg-blue-50 w-12 h-12 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-2">
                  Basic
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">LKR 3K</span>
                  <span className="text-lg text-brand-gray ml-1">/month</span>
                </div>
                <p className="text-brand-gray mb-6 pb-6 border-b border-gray-100">
                  Perfect for small teams getting started with leave management.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Annual Leave Loop</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Leave Request Management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Approval Workflow</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Role-Based Access Control</span>
                  </li>
                </ul>
              </div>
              <div className="px-8 pb-8">
                <Link
                  to="/payment?plan=basic"
                  className="block w-full py-3 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Start with Basic
                </Link>
              </div>
            </motion.div>

            {/* Standard Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-brand-blue relative z-10 transform scale-105"
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-2 text-sm font-medium">
                RECOMMENDED
              </div>
              <div className="p-8">
                <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-2">
                  Standard
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">LKR 6K</span>
                  <span className="text-lg text-brand-gray ml-1">/month</span>
                </div>
                <p className="text-brand-gray mb-6 pb-6 border-b border-gray-100">
                  Ideal for growing teams with communication needs.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="font-medium">
                      All Basic features, plus:
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Email Notifications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Leave Balance Tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Company Calendar</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Priority Support</span>
                  </li>
                </ul>
              </div>
              <div className="px-8 pb-8">
                <Link
                  to="/payment?plan=standard"
                  className="block w-full py-3 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Choose Standard
                </Link>
              </div>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-blue-100 transition-all duration-300"
            >
              <div className="p-8">
                <div className="rounded-full bg-indigo-50 w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-2">
                  Premium
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">LKR 11.5K</span>
                  <span className="text-lg text-brand-gray ml-1">/month</span>
                </div>
                <p className="text-brand-gray mb-6 pb-6 border-b border-gray-100">
                  For enterprises requiring comprehensive management.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="font-medium">
                      All Standard features, plus:
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Enhanced Leave Analytics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Secure Document Management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Advanced Reporting & Exports</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Dedicated Account Manager</span>
                  </li>
                </ul>
              </div>
              <div className="px-8 pb-8">
                <Link
                  to="/payment?plan=premium"
                  className="block w-full py-3 px-4 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 text-white text-center font-medium hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Choose Premium
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Feature Comparison Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 overflow-hidden"
          >
            <h3 className="text-2xl font-bold text-brand-dark mb-8 text-center">
              Compare All Features
            </h3>
            <FeatureComparison />

            {/* Enterprise Option */}
            <div className="mt-12 pt-8 border-t border-gray-100 text-center">
              <h4 className="text-xl font-semibold mb-4">
                Need a Custom Solution?
              </h4>
              <p className="text-brand-gray mb-6 max-w-2xl mx-auto">
                We offer tailored enterprise solutions for large organizations
                with specific requirements.
              </p>
              <Link
                to="/contact?subject=enterprise"
                className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-800 hover:bg-gray-200 rounded-lg font-medium transition-colors duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>

          {/* Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-col md:flex-row items-center justify-center bg-blue-50 rounded-2xl p-8 text-center md:text-left"
          >
            <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0">
              <CheckCircle className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">
                30-Day Money-Back Guarantee
              </h4>
              <p className="text-brand-gray">
                Try LeaveBook risk-free. If you're not completely satisfied
                within 30 days, we'll refund your payment.
              </p>
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              How It Works
            </h2>
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
                  <h3 className="text-xl font-semibold mb-2 text-brand-dark">
                    {step.title}
                  </h3>
                  <p className="text-brand-gray">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Improved */}
      <section
        id="team"
        className="py-24 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-brand-blue font-medium text-sm uppercase tracking-wider">
              Our Experts
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4 mt-2">
              Meet Our Team
            </h2>
            <div className="h-1 w-20 bg-brand-blue mx-auto mb-6"></div>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              The talented individuals behind LeaveBook dedicated to simplifying
              leave management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg group hover:translate-y-[-8px] transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold mb-1 text-brand-dark">
                    {member.name}
                  </h3>
                  <p className="text-brand-blue font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-brand-gray mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    {member.social?.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="text-gray-400 hover:text-brand-blue transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h-2v-6h2v6zm1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0V16h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548V16z" />
                        </svg>
                      </a>
                    )}
                    {member.social?.twitter && (
                      <a
                        href={member.social.twitter}
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                    )}
                    {member.social?.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Improved */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-brand-blue font-medium text-sm uppercase tracking-wider">
              Support
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4 mt-2">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-20 bg-brand-blue mx-auto mb-6"></div>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Everything you need to know about LeaveBook and how it can
              transform your leave management process.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <FaqSection />
          </div>

          <div className="mt-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-brand-gray mb-6">
                Still have questions?
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-brand-blue text-white font-medium hover:bg-brand-blue-dark transition-colors shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Our Support Team
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section - Improved */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-gradient-to-b from-blue-50 to-blue-100 rounded-bl-full opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-blue-50 to-blue-100 rounded-tr-full opacity-60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-brand-blue font-medium text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4 mt-2">
              Contact Us
            </h2>
            <div className="h-1 w-20 bg-brand-blue mx-auto mb-6"></div>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              We'd love to hear from you. Reach out to our team for any
              questions or schedule a demo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-white p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-6 text-brand-dark">
                Send Us a Message
              </h3>
              <Email />
            </motion.div>

            {/* Contact Info and Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Contact Information Card */}
              <div className="bg-gradient-to-br from-brand-blue to-blue-600 p-8 rounded-2xl text-white shadow-xl">
                <h3 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold text-white/90 text-sm">
                        Email
                      </p>
                      <a
                        href="mailto:leavebookoffice@gmail.com"
                        className="text-lg hover:underline"
                      >
                        leavebookoffice@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold text-white/90 text-sm">
                        Phone
                      </p>
                      <a
                        href="tel:+94771603251"
                        className="text-lg hover:underline"
                      >
                        +94 77 160 3251
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold text-white/90 text-sm">
                        Address
                      </p>
                      <p className="text-lg">
                        3G, Araliya Place, Thalahena, Malabe
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connect Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-6 text-brand-dark">
                  Get Connected
                </h3>
                <div className="space-y-5">
                  <a
                    href="https://youtu.be/IoTlHZCntGE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-xl bg-red-50 hover:bg-red-100 transition-colors group"
                  >
                    <div className="bg-red-500 p-3 rounded-full group-hover:scale-110 transition-transform">
                      <PlayCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-brand-dark">
                        Watch Demo
                      </p>
                      <p className="text-brand-gray text-sm">
                        See LeaveBook in action
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://calendly.com/teamwis-info/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors group"
                  >
                    <div className="bg-brand-blue p-3 rounded-full group-hover:scale-110 transition-transform">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-brand-dark">
                        Schedule a Meeting
                      </p>
                      <p className="text-brand-gray text-sm">
                        Book a 30-min discovery call
                      </p>
                    </div>
                  </a>

                  <div>
                    <p className="font-semibold text-brand-dark mb-3">
                      Follow Us
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.linkedin.com/company/teamwis/"
                        target="blank"
                        className="bg-gray-100 hover:bg-blue-50 p-3 rounded-full hover:scale-110 transition-all"
                      >
                        <svg
                          className="w-5 h-5 text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h-2v-6h2v6zm1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0V16h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548V16z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.instagram.com/leavebook/"
                        target="blank"
                        className="bg-gray-100 hover:bg-blue-50 p-3 rounded-full hover:scale-110 transition-all"
                      >
                        <svg
                          className="w-5 h-5 text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
