import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaCode, FaDatabase, FaPython, FaGraduationCap, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const textSecondary = isDark ? "text-blue-400" : "text-blue-600";
  const roleDescColor = isDark ? "text-gray-400" : "text-gray-600";

  const roles = [
    { icon: FaCode, title: "Full Stack Developer", desc: "Building dynamic web applications" },
    { icon: FaDatabase, title: "Database Enthusiast", desc: "Designing efficient and scalable databases" },
    { icon: FaPython, title: "Python Developer", desc: "Writing clean and efficient Python code" },
    { icon: FaGraduationCap, title: "Computer Science Graduate", desc: "Graduated with a diploma in CS" },
    { icon: FaShieldAlt, title: "Cybersecurity Enthusiast", desc: "Passionate about securing apps and networks" },
  ];

  return (
    <div className={`${containerBg} min-h-screen transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left Section */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-6">

            {/* Introduction */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              <span className="bg-linear-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                Hi, I'm Tsepo Bonginkosi Khoza
              </span>
            </h1>

            <div className={`p-4 border-l-4 border-blue-500 ${textPrimary} space-y-3`}>
           
              <p className="text-sm sm:text-base leading-relaxed">
                Motivated and detail-oriented Software Developer with a strong foundation in computer science and hands-on experience in software development, IT support, and cloud computing. Proficient in multiple programming languages and development tools, with practical exposure to system development, database management, troubleshooting, and user support. Adept at working in team environments, learning new technologies quickly, and delivering reliable technical solutions.
              </p>
            </div>


          
          </div>

          {/* Right Section (Roles) */}
          <div className="grid grid-cols-1 gap-6">
            {roles.map((role, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 border rounded-lg hover:shadow-lg transition"
              >
                {role.icon && <role.icon className="text-3xl text-blue-500" />}
                <div>
                  <h3 className="font-bold text-lg">{role.title}</h3>
                  <p className={`text-sm ${roleDescColor}`}>{role.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;