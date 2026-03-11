import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaCopy, FaCheck } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const Connect = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [copied, setCopied] = useState("");

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000); // reset after 2 sec
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-10 transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`max-w-xl w-full p-8 rounded-xl shadow-lg transition-colors duration-300 ${
          isDark ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h1 className="text-3xl font-bold text-center mb-6">Find My Details</h1>

        <div className="space-y-6">

          {/* Phone */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <FaPhone className="text-blue-500 text-xl" />
              <div>
                <p className="font-semibold">Cell Number</p>
                <p className="text-sm opacity-80">076 979 6577</p>
              </div>
            </div>
            <button
              onClick={() => handleCopy("0769796577", "phone")}
              className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-600 transition"
            >
              {copied === "phone" ? <FaCheck /> : <FaCopy />}
              {copied === "phone" ? "Copied!" : "Copy"}
            </button>
          </div>

          {/* Email */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-500 text-xl" />
              <div>
                <p className="font-semibold">Email Address</p>
                <p className="text-sm opacity-80">tsepokhoza266@gmail.com</p>
              </div>
            </div>
            <button
              onClick={() => handleCopy("tsepokhoza266@gmail.com", "email")}
              className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-600 transition"
            >
              {copied === "email" ? <FaCheck /> : <FaCopy />}
              {copied === "email" ? "Copied!" : "Copy"}
            </button>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-blue-500 text-xl" />
              <div>
                <p className="font-semibold">LinkedIn</p>
                <p className="text-sm opacity-80">linkedin.com/in/khoza-tb</p>
              </div>
            </div>
            <button
              onClick={() =>
                handleCopy("https://www.linkedin.com/in/khoza-tb", "linkedin")
              }
              className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-600 transition"
            >
              {copied === "linkedin" ? <FaCheck /> : <FaCopy />}
              {copied === "linkedin" ? "Copied!" : "Copy"}
            </button>
          </div>

          {/* GitHub */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <FaGithub className="text-blue-500 text-xl" />
              <div>
                <p className="font-semibold">GitHub</p>
                <p className="text-sm opacity-80">github.com/khoza-tb</p>
              </div>
            </div>
            <button
              onClick={() =>
                handleCopy("https://github.com/khoza-tb", "github")
              }
              className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-600 transition"
            >
              {copied === "github" ? <FaCheck /> : <FaCopy />}
              {copied === "github" ? "Copied!" : "Copy"}
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default Connect;