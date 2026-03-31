import ProjectSingle from "./ProjectSingle";
import { projectsData } from "../../data/projects";
import { motion } from 'framer-motion';

const ProjectsGrid = () => {
  return (
    <section className="py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="mb-12"
      >
        <p className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-widest mb-2">
          Portfolio
        </p>
        <h2 className="font-general-semibold text-3xl sm:text-4xl text-primary-dark dark:text-primary-light">
          Featured Projects
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <ProjectSingle
            title={project.title}
            category={project.category}
            image={project.img}
            key={project.id}
            id={project.id}
            techs={project.techs || []}
            description={project.description || ""}
            liveUrl={project.liveUrl || ""}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
