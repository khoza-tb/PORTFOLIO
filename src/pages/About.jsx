import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaLaptopCode, FaServer, FaUserShield, FaBrain } from "react-icons/fa";

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const textSecondary = isDark ? "text-blue-400" : "text-blue-600";

  const skills = [
    {
      icon: FaLaptopCode,
      title: "Frontend Development",
      desc: "Building responsive and interactive user interfaces using React and modern CSS frameworks.",
    },
    {
      icon: FaServer,
      title: "Backend Development",
      desc: "Developing REST APIs and scalable backend systems using Node.js and Express.",
    },
    {
      icon: FaUserShield,
      title: "Cybersecurity",
      desc: "Implementing secure authentication, data protection, and best security practices.",
    },
    {
      icon: FaBrain,
      title: "Problem Solving",
      desc: "Strong analytical skills with a passion for solving complex technical challenges.",
    },
  ];

  return (
    <div className={`${containerBg} min-h-screen transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>

          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${textPrimary}`}>
            I am Tsepo Bonginkosi Khoza, a passionate Full Stack Developer specializing
            in the MERN stack. As a recent Computer Science graduate, I am driven
            by innovation, continuous learning, and building scalable digital
            solutions that make an impact.
          </p>
        </div>

        {/* My Journey */}
        <div className="mb-20">
          <h2 className={`text-2xl font-bold mb-6 ${textSecondary}`}>
            My Journey
          </h2>

          <p className={`leading-relaxed mb-6 ${textPrimary}`}>
            My journey into software development began with a deep curiosity
            about how systems work behind the scenes. Over time, I developed
            strong skills in JavaScript, React, Node.js, MongoDB, and modern
            web technologies.
          </p>

          <p className={`leading-relaxed ${textPrimary}`}>
            I enjoy building full-stack applications, designing clean database
            structures, and implementing secure authentication systems. My goal
            is to grow into a senior developer role and contribute to impactful
            technology-driven projects.
          </p>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className={`text-2xl font-bold mb-10 ${textSecondary}`}>
            What I Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition hover:shadow-lg ${
                  isDark
                    ? "bg-gray-900 border border-gray-700"
                    : "bg-gray-50 border border-gray-200"
                }`}
              >
                <skill.icon className="text-3xl text-blue-500 mb-4" />
                <h3 className="font-bold text-lg mb-2">{skill.title}</h3>
                <p className={`text-sm ${textPrimary}`}>{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;