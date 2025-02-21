import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Calendar, Lock, Users, Mail, ChartBar, FileText } from "lucide-react";

const Index = () => {
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      icon: <FileText className="w-6 h-6 text-brand-blue" />,
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
  ];

  const team = [
    {
      name: "Akansha Fernando",
      role: "Lead Developer",
      image: "https://source.unsplash.com/300x300/?portrait&1",
    },
    {
      name: "Sanuja Nethsuka",
      role: "Backend Developer",
      image: "https://source.unsplash.com/300x300/?portrait&2",
    },
    {
      name: "Thinula Jayavihan",
      role: "Frontend Developer",
      image: "https://source.unsplash.com/300x300/?portrait&3",
    },
    {
      name: "Janindu Weerakkody",
      role: "Full Stack Developer",
      image: "https://source.unsplash.com/300x300/?portrait&4",
    },
    {
      name: "Yasindu Mallawarachchi",
      role: "DevOps Engineer",
      image: "https://source.unsplash.com/300x300/?portrait&5",
    },
    {
      name: "Sanidu Wickramasinghe",
      role: "UI/UX Developer",
      image: "https://source.unsplash.com/300x300/?portrait&6",
    },
  ];

  const faqs = [
    {
      question: "What roles can be created within Leave Book?",
      answer: "Leave Book allows creating three main roles: HR, Managers, and Team Members. Each role has specific permissions for managing leave requests.",
    },
    {
      question: "How do employees submit leave requests?",
      answer: "Employees simply log in with their company Outlook account, fill out the leave request form, and submit it for approval.",
    },
    {
      question: "How are leave requests approved?",
      answer: "Managers receive leave requests and can approve or decline them. Employees are notified by email once the request is processed.",
    },
    {
      question: "Can I track leave history?",
      answer: "Yes, both employees and managers can view past leave records along with detailed statistical and graphical representations.",
    },
    {
      question: "Is Leave Book secure?",
      answer: "Yes, Leave Book uses Microsoft Azure for authentication and secure handling of personal and medical documents.",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-light">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-brand-dark">LeaveBook</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {[
                  { name: "Features", id: "features" },
                  { name: "Pricing", id: "pricing" },
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

      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title mb-6"
          >
            Revolutionize Your Leave Management
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-brand-gray mb-8"
          >
            Enterprise-grade leave management system with Azure integration, built for modern organizations.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="button-primary"
          >
            Start Free Trial
          </motion.button>
        </div>
      </section>

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

      <section id="pricing" className="py-20 px-4 bg-white">
        <h2 className="section-title">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="pricing-card"
          >
            <h3 className="text-2xl font-bold mb-4">StartUp</h3>
            <p className="text-4xl font-bold mb-6">$19<span className="text-lg font-normal">/month</span></p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Calendar className="w-5 h-5 text-brand-blue mr-2" />
                Full feature access
              </li>
              <li className="flex items-center">
                <Users className="w-5 h-5 text-brand-blue mr-2" />
                All roles included
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-brand-blue mr-2" />
                Email notifications
              </li>
            </ul>
            <button className="button-primary w-full">Choose StartUp Plan</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="pricing-card"
          >
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <p className="text-4xl font-bold mb-6">$999<span className="text-lg font-normal">/lifetime</span></p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Calendar className="w-5 h-5 text-brand-blue mr-2" />
                Customization included
              </li>
              <li className="flex items-center">
                <Users className="w-5 h-5 text-brand-blue mr-2" />
                Dedicated support
              </li>
              <li className="flex items-center">
                <Lock className="w-5 h-5 text-brand-blue mr-2" />
                Enterprise security
              </li>
            </ul>
            <button className="button-secondary w-full">Choose Enterprise Plan</button>
          </motion.div>
        </div>
      </section>

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
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-brand-gray">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

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
              {selectedFaq === index && (
                <div className="p-4 text-brand-gray">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <h2 className="section-title">Contact Us</h2>
        <div className="max-w-xl mx-auto text-center">
          <p className="mb-8 text-brand-gray">
            Get in touch with us for any questions about Leave Book.
          </p>
          <div className="space-y-4">
            <p>
              <strong>Email:</strong> support@leavebook.com
            </p>
            <p>
              <strong>Phone:</strong> +1-800-123-4567
            </p>
            <p>
              <strong>Address:</strong> 123 Business Ave, City, Country
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
