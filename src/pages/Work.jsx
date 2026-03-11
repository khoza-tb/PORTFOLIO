import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-black text-white" : "bg-white text-black";

  const projects = [
    {
      title: "ERISN Clock-In System",
      description:
        "A web-based system developed for employee clock-in and report submission. Built using React and Tailwind CSS with team collaboration through GitHub.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/khoza-tb",
      live: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "My personal developer portfolio showcasing projects, technical skills, and experience. Built with React, Tailwind CSS and modern UI practices.",
      tech: ["React", "Tailwind", "Vite"],
      github: "https://github.com/khoza-tb",
      live: "#",
    },
    {
      title: "Academic Support System",
      description:
        "A MERN stack project designed to help students manage academic resources, submit assignments, and communicate with lecturers.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/khoza-tb",
      live: "#",
    },
  ];

  return (
    <div className={`${containerBg} min-h-screen transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
            <span className="bg-linear-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>

          <p className="max-w-3xl mx-auto opacity-80">
            A selection of projects demonstrating my experience in
            full-stack development, modern web technologies,
            and collaborative software development.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl transition transform hover:-translate-y-2 hover:shadow-xl ${
                isDark
                  ? "bg-gray-900 border border-gray-700"
                  : "bg-gray-50 border border-gray-200"
              }`}
            >
              <h3 className="text-xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="opacity-80 text-sm mb-4">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-500/20 text-blue-500 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-blue-500 hover:underline"
                >
                  <FaGithub /> Code
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-blue-500 hover:underline"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;