import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";

const ProjectSingle = ({ title, category, image, id, techs = [], description = "", liveUrl = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group bg-secondary-light dark:bg-ternary-dark border border-gray-100 dark:border-secondary-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <Link to={`/projects/single-project/${id}`} aria-label={title}>
        <div className="relative overflow-hidden h-48">
          <img
            src={image}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            alt={title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <span className="flex items-center gap-1.5 text-xs font-medium text-white bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
              View Details <FiArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </Link>
    
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <Link to={`/projects/single-project/${id}`}>
              <h3 className="font-general-semibold text-base text-primary-dark dark:text-primary-light hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 leading-snug">
                {title}
              </h3>
            </Link>
            <span className="text-xs text-indigo-500 dark:text-indigo-400 font-medium mt-0.5 block">
              {category}
            </span>
          </div>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 p-1.5 rounded-lg text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-200"
              aria-label="Live site"
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        {description && (
          <p className="text-xs text-gray-500 dark:text-gray-400 font-general-regular leading-relaxed mb-4 line-clamp-2">
            {description}
          </p>
        )}

        {techs.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {techs.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[11px] font-medium text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-secondary-dark border border-gray-200 dark:border-ternary-dark rounded-md"
              >
                {tech}
              </span>
            ))}
            {techs.length > 4 && (
              <span className="px-2 py-0.5 text-[11px] font-medium text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-secondary-dark border border-gray-200 dark:border-ternary-dark rounded-md">
                +{techs.length - 4}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectSingle;
