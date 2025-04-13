import React, { useState, useRef } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const Email = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    setIsLoading(true);
    setSubmitStatus({});

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        (result) => {
            console.log("Email sent successfully:", result.text);
          setSubmitStatus({
            success: true,
            message: "Your message has been sent successfully!",
          });
          form.current?.reset();
        },
        (error) => {
            console.error("Email sending error:", error);
          setSubmitStatus({
            success: false,
            message:
              "There was an error sending your message. Please try again later.",
          });
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <form className="space-y-6" ref={form} onSubmit={sendEmail}>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="user_name"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Your Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-white outline-none transition-all duration-200"
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <label
            htmlFor="user_email"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-white outline-none transition-all duration-200"
            placeholder="john@example.com"
            required
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-white outline-none transition-all duration-200"
            placeholder="How can we help you?"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-white outline-none transition-all duration-200"
            placeholder="Your message here..."
            required
          ></textarea>
        </div>
      </div>
      {submitStatus.message && (
        <div
          className={`mb-6 p-3 rounded-lg text-center ${
            submitStatus.success
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <button
        disabled={isLoading}
        type="submit"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg"
      >
        {isLoading ? (
          "Sending..."
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
};

export default Email;
