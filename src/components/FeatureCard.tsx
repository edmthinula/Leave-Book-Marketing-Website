import React from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  index?: number;
}

export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0, 
  index = 0 
}: FeatureCardProps) {
  // Define different colors for feature cards
  const colors = [
    { bg: "bg-blue-50", iconBg: "bg-blue-100", iconColor: "text-blue-600" },
    { bg: "bg-purple-50", iconBg: "bg-purple-100", iconColor: "text-purple-600" },
    { bg: "bg-green-50", iconBg: "bg-green-100", iconColor: "text-green-600" },
    { bg: "bg-amber-50", iconBg: "bg-amber-100", iconColor: "text-amber-600" },
    { bg: "bg-teal-50", iconBg: "bg-teal-100", iconColor: "text-teal-600" },
    { bg: "bg-indigo-50", iconBg: "bg-indigo-100", iconColor: "text-indigo-600" },
  ];
  
  const colorSet = colors[index % colors.length];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`${colorSet.bg} rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-bl-full -mr-12 -mt-12"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/30 rounded-tr-full -ml-8 -mb-8"></div>
      
      <div className={`w-16 h-16 flex items-center justify-center rounded-2xl ${colorSet.iconBg} mb-6`}>
        <Icon className={`h-8 w-8 ${colorSet.iconColor}`} />
      </div>
      <h3 className="text-2xl font-bold mb-3 text-brand-dark">{title}</h3>
      <p className="text-brand-gray leading-relaxed">{description}</p>
      
      {/* <div className="mt-6 pt-4 border-t border-gray-100">
        <a href="#" className={`inline-flex items-center font-medium ${colorSet.iconColor} hover:underline`}>
          Learn more
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div> */}
    </motion.div>
  );
}