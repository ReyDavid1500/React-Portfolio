import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { ReactIcon } from "../icons/ReactIcon";
import { TailwindIcon } from "../icons/TailwindIcon";
import { NodeIcon } from "../icons/NodeIcon";
import { ExpressIcon } from "../icons/ExpressIcon";
import { NestIcon } from "../icons/NestIcon";
import { TypeScriptIcon } from "../icons/TypeScriptIcon";
import { MongoIcon } from "../icons/MongoIcon";
import { SqlServerIcon } from "../icons/SqlServerIcon";

const AppBanner = () => {
  const [activeTheme] = useThemeSwitcher();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2 sm:px-28"
    >
      <div className="w-full md:w-1/3 text-left">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.1,
          }}
          className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
        >
          Hi, I'm David
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2,
          }}
          className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
        >
          A FrontEnd Web Developer
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.3,
          }}
          className="flex justify-center sm:block"
        >
          <a
            href="public/files/frontEndCVen.pdf"
            target="_blank"
            className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
          >
            <FiExternalLink className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6"></FiExternalLink>
            <span className="text-sm sm:text-lg font-general-medium">
              See my CV
            </span>
          </a>
        </motion.div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200">
          My TechStack
        </p>
        <motion.div
          initial={{ opacity: 0, y: -180 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
          className="flex flex-col sm:gap-3 items-center"
        >
          <div className="flex sm:gap-10 justify-center items-center">
            <TypeScriptIcon className="w-20" />
            <ReactIcon className="w-20"/>
            <TailwindIcon className="w-40 dark:text-white" />
          </div>
          <div className="flex sm:gap-10 justify-center items-center">
            <NodeIcon className="w-28"/>
            <ExpressIcon className="w-16 dark:text-white"/>
            <NestIcon className="w-28"/>
          </div>
          <div className="flex sm:gap-10 justify-center items-center">
            <MongoIcon className="w-28"/>
            <SqlServerIcon className="w-28 text-[#231f1f] dark:text-white"/>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AppBanner;
