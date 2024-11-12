import ProjectSingle from "./ProjectSingle";
import { projectsData } from "../../data/projects";
import { motion } from 'framer-motion';


const ProjectsGrid = () => {
  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.9,
          delay: 0.2,
        }}
        className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center leading-normal text-gray-500 dark:text-gray-200"
      >
        My Projects
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
        {projectsData.map((project) => (
          <ProjectSingle
            title={project.title}
            category={project.category}
            image={project.img}
            key={project.id}
            id={project.id}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
