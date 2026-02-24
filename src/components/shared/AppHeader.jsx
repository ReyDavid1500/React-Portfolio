import { useState, useEffect } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Certificates" },
  { to: "/contact", label: "Contact" },
];

const AppHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeTheme, setTheme] = useThemeSwitcher();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-secondary-light/90 dark:bg-primary-dark/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-ternary-dark"
          : "bg-secondary-light dark:bg-primary-dark"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
      
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:bg-indigo-500 transition-colors duration-200">
              D
            </div>
            <span className="font-general-semibold text-lg text-primary-dark dark:text-primary-light hidden sm:block">
              David<span className="text-indigo-500">.</span>
            </span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-general-medium transition-all duration-200 ${
                    isActive
                      ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-primary-dark dark:hover:text-white hover:bg-gray-50 dark:hover:bg-ternary-dark"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">

            <a
              href="https://www.linkedin.com/in/rdguzmanp/"
              target="_blank"
              rel="noreferrer"
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700 rounded-full text-xs font-medium text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors duration-200"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available Mar 2026
            </a>

            <button
              onClick={() => setTheme(activeTheme)}
              aria-label="Toggle theme"
              className="p-2.5 rounded-lg bg-gray-100 dark:bg-ternary-dark text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-secondary-dark transition-colors duration-200"
            >
              {activeTheme === "dark" ? (
                <FiSun className="text-lg" />
              ) : (
                <FiMoon className="text-lg" />
              )}
            </button>

            <button
              onClick={() => setShowMenu(!showMenu)}
              aria-label="Toggle menu"
              className="md:hidden p-2.5 rounded-lg bg-gray-100 dark:bg-ternary-dark text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-secondary-dark transition-colors duration-200"
            >
              {showMenu ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-t border-gray-100 dark:border-ternary-dark bg-secondary-light dark:bg-primary-dark overflow-hidden"
          >
            <nav className="container mx-auto py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setShowMenu(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg text-sm font-general-medium transition-all duration-200 ${
                      isActive
                        ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-ternary-dark"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-2 px-4">
                <a
                  href="https://www.linkedin.com/in/rdguzmanp/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available from March 2026 · Relocating to Switzerland
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default AppHeader;
