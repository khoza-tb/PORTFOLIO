import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";
import { Menu, X } from "lucide-react";
import { BsSun, BsMoon } from "react-icons/bs";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Work", path: "/work" },
  { name: "Connect", path: "/connect" }
   
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  const navbarBg =
    theme === "dark"
      ? "bg-black border-b border-blue-900/40"
      : "bg-white border-b border-blue-100";

  const linkVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.3 }
    })
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl transition-all duration-500 ${navbarBg}`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-5 py-3 overflow-x-hidden">
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer flex items-center"
        >
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold transition-all duration-300"></div>
            <span className="text-base sm:text-lg font-bold bg-clip-text bg-linear-to-r from-blue-500 to-blue-700 text-transparent hidden sm:inline transition-opacity">
              PORTFOLIO
            </span>
          </NavLink>
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex flex-wrap gap-2 lg:gap-3">
          {navLinks.map(({ name, path }, i) => (
            <motion.li
              key={i}
              custom={i}
              variants={linkVariant}
              initial="hidden"
              animate="visible"
            >
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `px-3 sm:px-4 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 relative ${
                    isActive
                      ? theme === "dark"
                        ? "text-blue-400 bg-blue-950"
                        : "text-blue-600 bg-blue-100"
                      : theme === "dark"
                      ? "text-gray-300 hover:text-blue-400 hover:bg-blue-950/40"
                      : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                  }`
                }
              >
                {name}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </NavLink>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3 mt-2 md:mt-0">
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.85, rotate: 20 }}
            whileHover={{ scale: 1.1 }}
            className={`p-2.5 rounded-lg transition-all duration-300 flex items-center justify-center cursor-pointer ${
              theme === "dark"
                ? "bg-gray-900 text-white hover:shadow-blue-600/30"
                : "bg-gray-100 text-blue-600 hover:shadow-blue-200"
            }`}
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.div
                  key="sun"
                  initial={{ rotation: -100, opacity: 0, scale: 0 }}
                  animate={{ rotation: 0, opacity: 1, scale: 1 }}
                  exit={{ rotation: 180, opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <BsSun size={18} />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotation: 100, opacity: 0, scale: 0 }}
                  animate={{ rotation: 0, opacity: 1, scale: 1 }}
                  exit={{ rotation: -180, opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <BsMoon size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.85 }}
            className={`md:hidden p-2.5 rounded-lg transition-all duration-300 ${
              theme === "dark"
                ? "bg-blue-950 text-blue-300 hover:bg-blue-900"
                : "bg-blue-50 text-blue-700 hover:bg-blue-100"
            }`}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotation: -90, opacity: 0 }}
                  animate={{ rotation: 0, opacity: 1 }}
                  exit={{ rotation: 90, opacity: 0 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotation: 90, opacity: 0 }}
                  animate={{ rotation: 0, opacity: 1 }}
                  exit={{ rotation: -90, opacity: 0 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden overflow-hidden border-t transition-colors duration-300 ${
              theme === "dark"
                ? "bg-black/90"
                : "bg-white/90"
            }`}
          >
            <ul className="flex flex-col gap-2 px-6 py-4 w-full">
              {navLinks.map(({ name, path }, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <NavLink
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 sm:px-4 rounded-lg font-medium transition-all duration-300 text-center ${
                        isActive
                          ? theme === "dark"
                            ? "text-blue-400 bg-blue-950"
                            : "text-blue-600 bg-blue-100"
                          : theme === "dark"
                          ? "text-gray-300 hover:text-blue-400 hover:bg-blue-950/40"
                          : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                      }`
                    }
                  >
                    {name}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}