
"use client"

import { useState, useEffect } from "react"
import { motion, useScroll } from "framer-motion"
import { Calendar, Lock, Star, Users, Mail, BarChartIcon as ChartBar, Shield } from "lucide-react"
import Akansha from "../assets/Akansha.jpg"
import Sanuja from "../assets/Sanuja.png"
import Janindu from "../assets/Janindu.png"
import Yasindu from "../assets/Yasindu.png"
import Thinula from "../assets/Thinula.png"
import Sanidu from "../assets/Sanidu.png"

const Index = () => {
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  // Track scroll position to change nav bar style
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50)
    })
  }, [scrollY])

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const steps = [
    {
      title: "Login",
      description:
        "Employees log in using their company Outlook account for seamless authentication via Azure Entra ID.",
    },
    {
      title: "Submit Leave Request",
      description:
        "After logging in, employees can easily navigate to the leave request form and submit their request for approval.",
    },
    {
      title: "Manager Approval",
      description: "The request is sent to the relevant Manager, who can approve or decline the leave.",
    },
    {
      title: "Approval Notification",
      description:
        "Once the Manager approves the leave request, the employee receives an automated email notification.",
    },
    {
      title: "Past Leave Records",
      description:
        "Employees and Managers can view past leave taken with graphical representations and detailed statistical insights on leave trends.",
    },
  ]

  const features = [
    {
      title: "Smart Leave Management",
      description: "Streamlined leave requests and approvals with Azure integration.",
      icon: <Calendar className="w-6 h-6 text-brand-blue" />,
    },
    {
      title: "Document Security",
      description: "Secure handling of medical and personal documents.",
      icon: <Lock className="w-6 h-6 text-brand-blue" />,
    },
    {
      title: "Role-based Access",
      description: "Hierarchical system with HR, Managers, and Team Members.",
      icon: <Users className="w-6 h-6 text-brand-blue" />,
    },
    {
      title: "Azure Entra ID",
      description: "Enterprise-grade authentication and security.",
      icon: <Shield className="w-6 h-6 text-brand-blue" />,
    },
    {
      title: "Email Notifications",
      description: "Automated alerts for leave requests and approvals.",
      icon: <Mail className="w-6 h-6 text-brand-blue" />,
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive leave statistics and insights.",
      icon: <ChartBar className="w-6 h-6 text-brand-blue" />,
    },
  ]

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
  ]

  const faqs = [
    {
      question: "What roles can be created within Leave Book?",
      answer:
        "Leave Book allows creating three main roles: HR, Managers, and Team Members. Each role has specific permissions for managing leave requests.",
    },
    {
      question: "How do employees submit leave requests?",
      answer:
        "Employees simply log in with their company Outlook account, fill out the leave request form, and submit it for approval.",
    },
    {
      question: "How are leave requests approved?",
      answer:
        "Managers receive leave requests and can approve or decline them. Employees are notified by email once the request is processed.",
    },
    {
      question: "Can I track leave history?",
      answer:
        "Yes, both employees and managers can view past leave records along with detailed statistical and graphical representations.",
    },
    {
      question: "Is Leave Book secure?",
      answer:
        "Yes, Leave Book uses Microsoft Azure for authentication and secure handling of personal and medical documents.",
    },
  ]

  return (
    <div className="min-h-screen bg-brand-light">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-brand-dark">Leave Book</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {[
                  { name: "Features", id: "features" },
                  { name: "Pricing", id: "pricing" },
                  { name: "How it works", id: "how-it-works" },
                  { name: "Client Testimonials", id: "client-testimonials" },
                  { name: "Team", id: "team" },
                  { name: "FAQ", id: "faq" },
                  { name: "Contact", id: "contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-brand-gray hover:text-brand-dark transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold text-heading mb-6"
          >
            Revolutionize Your
            <br />
            Leave Management
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-body mb-12 max-w-2xl mx-auto"
          >
            Enterprise-grade leave management system with Azure integration, built for modern organizations.
          </motion.p>
          
          {/* Video Embed */}
          <div style={{ position: 'relative', overflow: 'hidden', paddingTop: '56.25%' }} className="mb-12">
            <iframe 
              src="https://share.synthesia.io/embeds/videos/13c62f0a-2c7b-43cf-a97e-90772c4d71e5" 
              loading="lazy" 
              title="Synthesia video player - Your AI video" 
              allowFullScreen 
              allow="encrypted-media; fullscreen;" 
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                border: 'none',
                padding: 0,
                margin: 0,
                overflow: 'hidden'
              }}
            ></iframe>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="/trial"
              className="bg-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Start Free Trial
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <h2 className="section-title">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="feature-card"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-brand-gray">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <h2 className="section-title">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
         
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="pricing-card"
          >
            <h3 className="text-2xl font-bold mb-4">StartUp</h3>
            <p className="text-4xl font-bold mb-6">
              LKR 125k<span className="text-lg font-normal">/year</span>
            </p>
            <ul className="space-y-3 mb-8">
            
              <li className="flex items-center">
                <Users className="w-5 h-5 text-brand-blue mr-2" />
                Up to 25 Emplyees
              </li>

              <li className="flex items-center">
                <Mail className="w-5 h-5 text-brand-blue mr-2" />
                Email notifications
              </li>

              {/* <li className="flex items-center">
                <Shield className="w-5 h-5 text-brand-blue mr-2" />
                StartUp Level Security
              </li> */}

            </ul>
            <a href="/payment?plan=startup" className="button-primary w-full">
              Choose StartUp Plan
            </a>
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pricing-card"
          >
            <h3 className="text-2xl font-bold mb-4">Pro</h3>
            <p className="text-4xl font-bold mb-6">
              $19<span className="text-lg font-normal">/month</span>
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Calendar className="w-5 h-5 text-brand-blue mr-2" />
                Full feature access
              </li>
              <li className="flex items-center">
                <Users className="w-5 h-5 text-brand-blue mr-2" />
                Up to 10 teams
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-brand-blue mr-2" />
                Email notifications
              </li>
              <li className="flex items-center">
                <Shield className="w-5 h-5 text-brand-blue mr-2" />
                Pro Level Security
              </li>
            </ul>
            <a href="/payment?plan=pro" className="button-primary w-full">
              Choose Pro Plan
            </a>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="pricing-card"
          >
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <p className="text-4xl font-bold mb-6">
              $99<span className="text-lg font-normal">/lifetime</span>
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Calendar className="w-5 h-5 text-brand-blue mr-2" />
                Customization included
              </li>
              <li className="flex items-center">
                <Users className="w-5 h-5 text-brand-blue mr-2" />
                Unlimited teams
              </li>
              <li className="flex items-center">
                <Lock className="w-5 h-5 text-brand-blue mr-2" />
                Enterprise security
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-brand-blue mr-2" />
                Email notifications
              </li>
            </ul>
            <a href="/payment?plan=enterprise" className="button-primary w-full">
              Choose Enterprise Plan
            </a>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-heading text-center mb-16">How It Works</h2>
          <div className="max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start mb-8 last:mb-0"
              >
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 mt-1">
                  {index + 1}
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-heading mb-2">{step.title}</h3>
                  <p className="text-body">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="client-testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <Star className="w-8 h-8 text-primary" />
              <Star className="w-8 h-8 text-primary" />
              <Star className="w-8 h-8 text-primary" />
              <Star className="w-8 h-8 text-primary" />
              <Star className="w-8 h-8 text-primary" />
            </div>
            <blockquote className="text-xl text-body mb-6">
              "As the HR Manager at Xyicon, I've been looking for a way to streamline our leave management process.
              Leave Book has been a game-changer for us! With Azure-backed security, easy role management, and automated
              leave approval, it's helped us improve both productivity and employee satisfaction."
            </blockquote>
            <cite className="text-heading font-medium block">— Dilshani Fernando, HR Manager at Xyicon</cite>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="team-card text-center"
            >
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-brand-gray">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-white">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <button
                className="w-full text-left p-4 bg-brand-light rounded-lg focus:outline-none"
                onClick={() => setSelectedFaq(selectedFaq === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{faq.question}</span>
                  <span className="transform transition-transform duration-200">
                    {selectedFaq === index ? "−" : "+"}
                  </span>
                </div>
              </button>
              {selectedFaq === index && <div className="p-4 text-brand-gray">{faq.answer}</div>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <h2 className="section-title">Contact Us</h2>
        <div className="max-w-xl mx-auto text-center">
          <p className="mb-8 text-brand-gray">Get in touch with us for any questions about Leave Book.</p>
          <div className="space-y-4">
            <p>
              <strong>Email:</strong> leavebookdesk@outlook.com
            </p>
            <p>
              <strong>Phone:</strong> +94 77 160 3251
            </p>
            <p>
              <strong>Address:</strong> 3G, Araliya Place, Thalahena, Malabe
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Index

