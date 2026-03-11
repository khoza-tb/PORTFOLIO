import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaGithub, FaLinkedin, FaArrowUp, FaEnvelope, FaCopy } from "react-icons/fa";

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bg = isDark ? "bg-gray-950 text-gray-300" : "bg-gray-100 text-gray-700";

  const email = "tsepokhoza266@gmail.com";
  const github = "https://github.com/khoza-tb";
  const linkedin = "https://www.linkedin.com/in/tsepokhoza/";

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    alert(`${label} copied to clipboard!`);
  };

  return (
    <footer className={`${bg} border-t ${isDark ? "border-gray-800" : "border-gray-200"} mt-20 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Tsepo Khoza
            </h2>
            <p className="mt-4 text-sm opacity-80 leading-relaxed">
              Full Stack Developer passionate about building scalable,
              secure, and user-friendly web applications using modern
              technologies.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Me</h3>

            <div className="flex flex-col md:flex-row gap-3 text-sm md:items-center">
              {/* Email */}
              <button
                onClick={() => copyToClipboard(email, "Email")}
                className="flex items-center gap-2 px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                <FaEnvelope /> {email} <FaCopy className="text-xs" />
              </button>

              {/* GitHub */}
              <button
                onClick={() => copyToClipboard(github, "GitHub link")}
                className="flex items-center gap-2 px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                <FaGithub /> GitHub <FaCopy className="text-xs" />
              </button>

              {/* LinkedIn */}
              <button
                onClick={() => copyToClipboard(linkedin, "LinkedIn link")}
                className="flex items-center gap-2 px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                <FaLinkedin /> LinkedIn <FaCopy className="text-xs" />
              </button>
            </div>

            {/* Back To Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mt-6 flex items-center gap-2 text-sm hover:text-blue-500 transition"
            >
              <FaArrowUp />
              Back to top
            </button>
          </div>

        </div>

        {/* Bottom */}
        <div className={`mt-12 pt-6 border-t text-center text-sm opacity-70 ${isDark ? "border-gray-800" : "border-gray-300"}`}>
          © {new Date().getFullYear()} Tsepo Bonginkosi Khoza. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;