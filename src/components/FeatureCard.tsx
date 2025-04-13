
import React from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-blue/10 mb-4">
        <Icon className="h-6 w-6 text-brand-blue" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-brand-dark">{title}</h3>
      <p className="text-brand-gray">{description}</p>
    </motion.div>
  );
}
