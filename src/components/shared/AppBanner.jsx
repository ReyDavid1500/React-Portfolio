import { useState, useEffect } from "react";
import { FiDownload, FiArrowRight, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ReactIcon } from "../icons/ReactIcon";
import { TailwindIcon } from "../icons/TailwindIcon";
import { NodeIcon } from "../icons/NodeIcon";
import { ExpressIcon } from "../icons/ExpressIcon";
import { NestIcon } from "../icons/NestIcon";
import { TypeScriptIcon } from "../icons/TypeScriptIcon";
import { MongoIcon } from "../icons/MongoIcon";
import { SqlServerIcon } from "../icons/SqlServerIcon";
import { cvURL } from "../../data/aboutMeData";

const roles = [
  "Software Engineer",
  "React & TypeScript",
  "Full-Stack Developer",
  "NestJS Microservices",
];

const techStack = [
  { icon: <TypeScriptIcon className="w-12 h-12" />, label: "TypeScript" },
  { icon: <ReactIcon className="w-12 h-12" />, label: "React" },
  { icon: <TailwindIcon className="w-20 h-16" />, label: "Tailwind" },
  { icon: <NestIcon className="w-20 h-20" />, label: "NestJS" },
  { icon: <NodeIcon className="w-16 h-16" />, label: "Node.js" },
  {
    icon: <ExpressIcon className="w-16 h-16 dark:text-white" />,
    label: "Express",
  },
  { icon: <MongoIcon className="w-16 h-12" />, label: "MongoDB" },
  {
    icon: (
      <SqlServerIcon className="w-16 h-12 text-[#231f1f] dark:text-white" />
    ),
    label: "SQL Server",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const AppBanner = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex <= current.length) {
      setDisplayed(current.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 65);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIndex >= 0) {
      setDisplayed(current.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 35);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setRoleIndex((r) => (r + 1) % roles.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-[calc(100vh-72px)] flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-purple-100 dark:bg-purple-900/10 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-20"
        >
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 rounded-full text-sm font-medium text-indigo-700 dark:text-indigo-300">
                <FiMapPin className="w-3.5 h-3.5" />
                Hinterwiesliweg 6, 8400 Winterthur ZH
              </span>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 font-general-medium mb-1">
                Hi, I'm
              </p>
              <h1 className="font-general-semibold text-4xl sm:text-5xl lg:text-6xl text-primary-dark dark:text-primary-light leading-tight">
                David Guzmán
              </h1>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="h-10 flex items-center"
            >
              <span className="text-xl sm:text-2xl lg:text-3xl font-general-medium text-indigo-600 dark:text-indigo-400">
                {displayed}
              </span>
              <span className="ml-0.5 w-0.5 h-7 bg-indigo-500 dark:bg-indigo-400 inline-block animate-blink" />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg font-general-regular"
            >
              Software Engineer specializing in React, TypeScript, and NestJS
              microservices.
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                {" "}
                MSc-equivalent Engineering background
              </span>{" "}
              — precise, scalable, test-driven.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-2"
            >
              <a
                href={cvURL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-general-medium rounded-xl shadow-md hover:shadow-indigo-200 dark:hover:shadow-indigo-900/40 transition-all duration-200 text-sm"
              >
                <FiDownload className="w-4 h-4" />
                Download CV
              </a>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-5 py-3 border border-gray-200 dark:border-ternary-dark text-gray-700 dark:text-gray-200 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 font-general-medium rounded-xl transition-all duration-200 text-sm bg-white dark:bg-ternary-dark hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
              >
                View Projects
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-6 sm:gap-8 pt-2 border-t border-gray-100 dark:border-ternary-dark"
            >
              {[
                { value: "3+", label: "Years Experience" },
                { value: "3", label: "Production Apps" },
                { value: "90%+", label: "Test Coverage" },
              ].map((stat) => (
                <div key={stat.label} className="text-left">
                  <p className="text-xl sm:text-2xl font-bold text-primary-dark dark:text-primary-light">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-general-regular">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-6"
          >
            <p className="text-sm font-general-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest">
              Tech Stack
            </p>
            <div className="grid grid-cols-4 gap-4 w-full max-w-xl">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.4 + i * 0.07,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-gray-50 dark:bg-ternary-dark border border-gray-100 dark:border-secondary-dark hover:border-indigo-200 dark:hover:border-indigo-700 hover:bg-white dark:hover:bg-secondary-dark transition-all duration-200 cursor-default group shadow-sm"
                >
                  <div className="flex items-center justify-center h-20">
                    {tech.icon}
                  </div>
                  <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200 text-center leading-tight">
                    {tech.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-2 max-w-sm">
              {[
                "TanStack Query",
                "Zustand",
                "Prisma ORM",
                "Mircoservices",
                "Event Driven Arquitecture",
                "Jest",
                "CI/CD",
                "AWS",
                "Azure",
                "Agile/SCRUM",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-ternary-dark border border-gray-200 dark:border-secondary-dark rounded-full shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppBanner;
