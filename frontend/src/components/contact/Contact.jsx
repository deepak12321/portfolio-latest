import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import socialLinks from "../../data/socialLinks";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Connect With Me
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            I'd love to hear from you! Drop me a message and let's create
            something amazing together.
          </p>
        </div>

        {/* Contact Form */}
        <div className="mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 border border-white/20 hover:border-white/30 transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="group">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-200 mb-2 group-focus-within:text-blue-400 transition-colors"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/10"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div className="group">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-200 mb-2 group-focus-within:text-blue-400 transition-colors"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/10"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Textarea */}
              <div className="group">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-200 mb-2 group-focus-within:text-blue-400 transition-colors"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/10 resize-none"
                  placeholder="Tell me about your project or just say hi!"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Follow Me On Social Media
          </h2>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-gray-300 transition-all duration-300 ${social.bgColor} ${social.color} hover:scale-110 hover:border-transparent active:scale-95`}
                aria-label={social.name}
              >
                <social.icon className="text-2xl sm:text-3xl transition-transform duration-300 group-hover:rotate-12" />

                {/* Tooltip */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
