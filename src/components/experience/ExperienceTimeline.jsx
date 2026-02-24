import { motion } from "framer-motion";
import { FiExternalLink, FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";
import { experienceData } from "../../data/experienceData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ExperienceTimeline = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <p className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-widest mb-2">
            Career
          </p>
          <h2 className="font-general-semibold text-3xl sm:text-4xl text-primary-dark dark:text-primary-light">
            Work Experience
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          <div className="absolute left-0 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-200 via-indigo-100 to-transparent dark:from-indigo-800 dark:via-indigo-900/50 dark:to-transparent hidden sm:block" />

          <div className="space-y-8 sm:space-y-10">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={cardVariants}
                className="relative sm:pl-16"
              >
                <div className="hidden sm:flex absolute left-0 top-6 w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 border-2 border-indigo-200 dark:border-indigo-700 items-center justify-center shadow-sm z-10">
                  <FiBriefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>

                <div className="bg-secondary-light dark:bg-ternary-dark border border-gray-100 dark:border-secondary-dark rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-general-semibold text-lg text-primary-dark dark:text-primary-light">
                          {exp.role}
                        </h3>
                        <span className="px-2 py-0.5 text-xs font-medium bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-100 dark:border-indigo-800">
                          {exp.type}
                        </span>
                        {index === 0 && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full border border-emerald-100 dark:border-emerald-800 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <p className="font-general-medium text-base text-gray-600 dark:text-gray-300">
                          {exp.company}
                        </p>
                        {exp.team && (
                          <span className="text-gray-400 dark:text-gray-500 text-sm">
                            · {exp.team}
                          </span>
                        )}
                        {exp.link && (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noreferrer"
                            className="ml-1 text-indigo-500 hover:text-indigo-600 dark:text-indigo-400"
                          >
                            <FiExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 text-sm text-gray-500 dark:text-gray-400 shrink-0">
                      <span className="flex items-center gap-1.5 font-general-regular">
                        <FiCalendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 font-general-regular">
                        <FiMapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 font-general-regular leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5 mb-5">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 font-general-regular"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 dark:bg-indigo-500 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-secondary-dark border border-gray-200 dark:border-ternary-dark rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
