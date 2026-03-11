import React from "react";
import { useTheme } from "../context/ThemeContext";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaCode,
  FaShieldAlt,
  FaJava,
  FaLinux,
  FaWindows,
} from "react-icons/fa";

const Skills = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-black text-white" : "bg-white text-black";

  const skillSections = [
    {
      title: "Frontend Development",
      skills: [
        { icon: FaReact, name: "React.js", level: 85 },
        { icon: FaCode, name: "JavaScript", level: 80 },
        { icon: FaCode, name: "HTML5 & CSS3", level: 90 },
        { icon: FaCode, name: "Tailwind CSS", level: 85 },
        { icon: FaCode, name: "shadcn/ui", level: 75 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { icon: FaNodeJs, name: "Node.js", level: 75 },
        { icon: FaJava, name: "Java", level: 80 },
        { icon: FaCode, name: "C++", level: 70 },
        { icon: FaCode, name: "PHP", level: 70 },
        { icon: FaShieldAlt, name: "REST APIs", level: 65 },
      ],
    },
    {
      title: "Database & Systems",
      skills: [
        { icon: FaDatabase, name: "MySQL", level: 80 },
        { icon: FaDatabase, name: "SQL", level: 80 },
        { icon: FaLinux, name: "Linux", level: 70 },
        { icon: FaWindows, name: "Windows", level: 90 },
        { icon: FaCode, name: "macOS", level: 65 },
      ],
    },
    {
      title: "Tools & Workflow",
      skills: [
        { icon: FaGitAlt, name: "Git", level: 85 },
        { icon: FaGithub, name: "GitHub", level: 85 },
        { icon: FaCode, name: "Vite", level: 75 },
        { icon: FaCode, name: "Responsive Design", level: 85 },
        { icon: FaCode, name: "SDLC Understanding", level: 80 },
      ],
    },
  ];

  return (
    <div className={`${containerBg} min-h-screen transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
            <span className="bg-linear-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              My Skills
            </span>
          </h1>

          <p className="max-w-3xl mx-auto opacity-80">
            A comprehensive overview of my technical skills and
            experience in modern web development, collaboration,
            and production-level projects.
          </p>
        </div>

        {/* Skill Sections */}
        <div className="space-y-16">
          {skillSections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold mb-8">
                {section.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {section.skills.map((skill, i) => (
                  <div
                    key={i}
                    className={`p-6 rounded-xl transition transform hover:-translate-y-2 hover:shadow-xl ${
                      isDark
                        ? "bg-gray-900 border border-gray-700"
                        : "bg-gray-50 border border-gray-200"
                    }`}
                  >
                    <skill.icon className="text-3xl text-blue-500 mb-3" />

                    <h3 className="font-semibold mb-2">
                      {skill.name}
                    </h3>

                    {/* Skill Bar */}
                    <div className="w-full bg-gray-300 rounded-full h-2 dark:bg-gray-700">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>

                    <p className="text-sm opacity-70 mt-1">
                      {skill.level}%
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Collaboration Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-6">
            Professional Collaboration
          </h2>

          <p className="opacity-80 leading-relaxed">
            Contributed as a frontend developer to the ERISN Clock-In &
            Reports Submission System. Worked within a team environment
            using Git workflows, implemented UI components, and contributed
            to feature development using React, Tailwind CSS, and modern
            JavaScript frameworks.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Skills;