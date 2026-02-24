import { FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const socialLinks = [
  {
    id: 1,
    icon: <FiGithub className="w-4 h-4" />,
    url: "https://github.com/ReyDavid1500",
    label: "GitHub",
  },
  {
    id: 2,
    icon: <FiLinkedin className="w-4 h-4" />,
    url: "https://www.linkedin.com/in/rdguzmanp/",
    label: "LinkedIn",
  },
  {
    id: 3,
    icon: <FiMail className="w-4 h-4" />,
    url: "mailto:davidguzman1500@gmail.com",
    label: "Email",
  },
];

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Certificates" },
  { to: "/contact", label: "Contact" },
];

const AppFooter = () => {
  return (
    <footer className="border-t border-gray-100 dark:border-ternary-dark mt-16">
      <div className="container mx-auto py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-base">
                D
              </div>
              <span className="font-general-semibold text-base text-primary-dark dark:text-primary-light">
                David Guzmán<span className="text-indigo-500">.</span>
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 font-general-regular">
              <FiMapPin className="w-3 h-3" />
              Santiago, Chile → Switzerland (Mar 2026)
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `text-sm font-general-regular transition-colors duration-200 ${
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-500 dark:text-gray-400 hover:text-primary-dark dark:hover:text-primary-light"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target={link.url.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={link.label}
                className="p-2.5 rounded-xl text-gray-400 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 border border-gray-100 dark:border-ternary-dark transition-all duration-200"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-ternary-dark flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400 dark:text-gray-600 font-general-regular">
          <span>
            © {new Date().getFullYear()} David Guzmán. Built with React, TypeScript & Tailwind CSS.
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available from March 2026
          </span>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
