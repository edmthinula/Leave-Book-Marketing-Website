import React from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

// Features Section Component
export function FeaturesSection({ features }) {
    return (
      <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-50 to-transparent opacity-70"></div>
        <div className="absolute -left-16 top-1/4 w-32 h-32 rounded-full bg-blue-100 opacity-30"></div>
        <div className="absolute right-0 bottom-1/4 w-48 h-48 rounded-full bg-purple-100 opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-brand-blue font-medium text-sm uppercase tracking-wider">Why Choose LeaveBook</span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4 mt-2">Powerful Features</h2>
            <div className="h-1 w-20 bg-brand-blue mx-auto mb-6"></div>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Everything you need to manage your organization's leave process efficiently and securely with our enterprise-grade solution.
            </p>
          </motion.div>
          
          {/* Feature categorization tabs */}
          {/* <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-full p-1">
              <button className="px-6 py-2 rounded-full bg-brand-blue text-white font-medium">All Features</button>
            </div>
          </div> */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
                index={index}
              />
            ))}
          </div>
          
          {/* Feature Highlight */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 lg:p-12 shadow-xl text-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">Advanced Azure AD Integration</h3>
                <p className="text-blue-100 mb-6 lg:text-lg">
                  Seamlessly connect LeaveBook with your Microsoft environment for single sign-on, 
                  user synchronization, and enhanced security through Azure Active Directory.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#demo" className="inline-flex items-center px-6 py-3 bg-white text-brand-blue font-medium rounded-lg hover:bg-blue-50 transition-colors">
                    Request Demo
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <a href="#learn-more" className="inline-flex items-center px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                  <ul className="space-y-3">
                    <li className="flex items-center text-blue-50">
                      <svg className="w-5 h-5 mr-3 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Single Sign-On (SSO)
                    </li>
                    <li className="flex items-center text-blue-50">
                      <svg className="w-5 h-5 mr-3 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Automated User Provisioning
                    </li>
                    <li className="flex items-center text-blue-50">
                      <svg className="w-5 h-5 mr-3 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Multi-factor Authentication
                    </li>
                    <li className="flex items-center text-blue-50">
                      <svg className="w-5 h-5 mr-3 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Conditional Access Policies
                    </li>
                    <li className="flex items-center text-blue-50">
                      <svg className="w-5 h-5 mr-3 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Role-Based Access Control
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div> */}
          
          {/* Features CTA */}
          <div className="text-center mt-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-brand-gray mb-6">Want to see all features in action?</p>
              <a 
                href="https://youtu.be/IoTlHZCntGE" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 rounded-full bg-brand-blue text-white font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
                </svg>
                Watch Feature Demo
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }