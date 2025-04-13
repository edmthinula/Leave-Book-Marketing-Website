
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
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

export default function FaqSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto">
      {faqItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <button
            onClick={() => toggleFaq(index)}
            className="w-full flex justify-between items-center p-5 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-200"
            aria-expanded={expandedIndex === index}
          >
            <span className="text-lg font-medium text-brand-dark text-left">{item.question}</span>
            {expandedIndex === index ? (
              <ChevronUp className="h-5 w-5 text-brand-blue" />
            ) : (
              <ChevronDown className="h-5 w-5 text-brand-blue" />
            )}
          </button>
          <AnimatePresence>
            {expandedIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-5 bg-white rounded-b-lg shadow-sm border-t">
                  <p className="text-brand-gray">{item.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
