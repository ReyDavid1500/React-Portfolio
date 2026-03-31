import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiExternalLink, FiDownload } from "react-icons/fi";
import { cvURL } from "../data/aboutMeData";

const contactLinks = [
  {
    icon: <FiMail className="w-5 h-5" />,
    label: "Email",
    value: "davidguzman1500@gmail.com",
    href: "mailto:davidguzman1500@gmail.com",
    color: "indigo",
  },
  {
    icon: <FiLinkedin className="w-5 h-5" />,
    label: "LinkedIn",
    value: "linkedin.com/in/rdguzmanp",
    href: "https://www.linkedin.com/in/rdguzmanp/",
    color: "blue",
  },
  {
    icon: <FiGithub className="w-5 h-5" />,
    label: "GitHub",
    value: "github.com/ReyDavid1500",
    href: "https://github.com/ReyDavid1500",
    color: "gray",
  },
  {
    icon: <FiMapPin className="w-5 h-5" />,
    label: "Location",
    value: "Sefiweidstrasse 10, 8360 Eschlikon TG",
    href: null,
    color: "emerald",
  },
];

const colorMap = {
  indigo: "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-800",
  blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-800",
  gray: "bg-gray-50 dark:bg-secondary-dark text-gray-600 dark:text-gray-300 border-gray-200 dark:border-ternary-dark",
  emerald: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Contact = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto py-16 sm:py-20"
    >
      <motion.div variants={itemVariants} className="mb-12 sm:mb-16 max-w-xl">
        <p className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-widest mb-2">
          Get in Touch
        </p>
        <h1 className="font-general-semibold text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-3">
          Let's Connect
        </h1>
        <p className="text-gray-600 dark:text-gray-400 font-general-regular text-base leading-relaxed">
          I'm actively looking for opportunities in Switzerland, available from April 2026.
          Whether you have a role, a project, or just want to chat — I'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {contactLinks.map((link) => (
          <motion.div
            key={link.label}
            variants={itemVariants}
            className="flex items-center gap-4 p-4 bg-secondary-light dark:bg-ternary-dark border border-gray-100 dark:border-secondary-dark rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <span className={`p-2.5 rounded-xl border shrink-0 ${colorMap[link.color]}`}>
              {link.icon}
            </span>
            <div className="min-w-0">
              <p className="text-xs text-gray-400 dark:text-gray-500 font-general-regular mb-0.5">
                {link.label}
              </p>
              {link.href ? (
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="text-sm font-general-medium text-primary-dark dark:text-primary-light hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 flex items-center gap-1 truncate"
                >
                  <span className="truncate">{link.value}</span>
                  <FiExternalLink className="w-3 h-3 shrink-0" />
                </a>
              ) : (
                <p className="text-sm font-general-medium text-primary-dark dark:text-primary-light leading-snug">
                  {link.value}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 rounded-2xl"
      >
        <div className="flex items-start gap-3">
          <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <div>
            <p className="text-sm font-general-medium text-indigo-700 dark:text-indigo-300 mb-0.5">
              Open to Opportunities · Available from April 2026
            </p>
            <p className="text-xs text-indigo-600 dark:text-indigo-400 font-general-regular">
              Open to full-time roles, contracts, and project-based work.
            </p>
          </div>
        </div>
        <a
          href={cvURL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-general-medium rounded-xl transition-colors duration-200 shrink-0"
        >
          <FiDownload className="w-4 h-4" />
          Download CV
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
