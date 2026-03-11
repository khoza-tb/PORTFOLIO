import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Work = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const cardBg = isDark ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800";
  const buttonBg = isDark ? "bg-blue-600 hover:bg-blue-500" : "bg-blue-500 hover:bg-blue-600";

  const projects = [
    {
      title: "Quiz Application",
      desc: "A full-featured web quiz app built with React, allowing users to test knowledge in various topics.",
      demo: "https://quizapplication-rho.vercel.app",
      github: "https://github.com/khoza-tb/Application-Quiz"
    },
    {
      title: "Portfolio Website",
      desc: "My personal developer portfolio showcasing projects, skills, and experience.",
      demo: "https://portfolio-three-hazel-70.vercel.app",
      github: "https://github.com/khoza-tb/PORTFOLIO"
    },
    {
      title: "Clock-In System",
      desc: "A web-based clock-in/out system built with React and Node.js, tracking employee attendance and work hours.",
      demo: "https://clock-in-system.vercel.app", // replace with actual live demo if deployed
      github: "https://github.com/khoza-tb/Erisn-Clock-In-Frontend" // replace with your repo
    },
    // Add more projects here if needed
  ];

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black" : "bg-gray-100"} transition-colors duration-300`}>
      <h1 className="text-4xl font-extrabold text-center mb-12">My Work</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className={`p-6 rounded-lg shadow-lg ${cardBg} transition hover:shadow-2xl`}>
            <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
            <p className="mb-4">{project.desc}</p>
            <div className="flex gap-4">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-md text-white font-semibold flex items-center gap-2 ${buttonBg} transition`}
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-md border flex items-center gap-2 ${isDark ? "border-gray-400" : "border-gray-700"} font-semibold hover:bg-gray-300 hover:text-black transition`}
              >
                <FaGithub />
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;