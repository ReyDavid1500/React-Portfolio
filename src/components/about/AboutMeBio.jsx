import { motion } from "framer-motion";
import { FiMapPin, FiCalendar, FiBookOpen, FiGlobe } from "react-icons/fi";

const highlights = [
  {
    icon: <FiMapPin className="w-4 h-4" />,
    label: "Sefiweidstrasse 10, 8360 Eschlikon TG",
    sub: "B permit via family reunification",
  },
  {
    icon: <FiBookOpen className="w-4 h-4" />,
    label: "MSc-level Engineering Degree",
    sub: "Simón Bolívar University, Venezuela",
  },
  {
    icon: <FiCalendar className="w-4 h-4" />,
    label: "3+ Years in Software Engineering",
    sub: "Frontend & Full-Stack",
  },
  {
    icon: <FiGlobe className="w-4 h-4" />,
    label: "Languages",
    sub: "Spanish (Native) · English C1 · German A2",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const AboutMeBio = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-12 sm:py-16"
    >
      <motion.div variants={itemVariants} className="mb-10 sm:mb-14">
        <p className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-widest mb-2">
          About Me
        </p>
        <h1 className="font-general-semibold text-3xl sm:text-4xl text-primary-dark dark:text-primary-light">
          David Guzmán
        </h1>
        <p className="text-lg text-indigo-600 dark:text-indigo-400 font-general-medium mt-1">
          Software Engineer · React & TypeScript Specialist
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-10 lg:gap-14 items-start mb-14">
        <motion.div variants={itemVariants} className="lg:col-span-1">
          <div className="relative">
            <img
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/profile.jpeg"
              className="rounded-2xl w-full object-cover shadow-lg"
              alt="David Guzmán"
            />
            <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white rounded-2xl px-4 py-3 shadow-lg">
              <p className="text-xs font-medium opacity-80">Currently at</p>
              <p className="text-sm font-bold">Galgo</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="lg:col-span-2 space-y-5">
          <p className="font-general-regular text-gray-700 dark:text-gray-300 leading-relaxed text-base">
            I'm a Software Engineer with strong Frontend and Full-Stack experience, specializing in{" "}
            <span className="font-semibold text-primary-dark dark:text-primary-light">
              React and TypeScript
            </span>{" "}
            and building scalable, production-grade web applications. Currently at{" "}
            <span className="font-semibold text-primary-dark dark:text-primary-light">Galgo</span>,
            I design and maintain NestJS microservices for fraud detection and risk underwriting —
            working in an event-driven architecture with message queues and targeting 90%+ test
            coverage with Jest.
          </p>
          <p className="font-general-regular text-gray-700 dark:text-gray-300 leading-relaxed text-base">
            My background is genuinely multidisciplinary: I hold an{" "}
            <span className="font-semibold text-primary-dark dark:text-primary-light">
              MSc-equivalent Materials Engineering degree
            </span>{" "}
            from Simón Bolívar University, spent seven years as a Sales Engineer in the industrial
            sector, and founded a restaurant business before transitioning into software. That journey
            shaped me into a developer who thinks beyond the code — understanding business context,
            communicating clearly with stakeholders, and delivering solutions that actually solve
            problems.
          </p>
          <p className="font-general-regular text-gray-700 dark:text-gray-300 leading-relaxed text-base">
            Looking for opportunities where I can contribute to a high-quality engineering team. I thrive in collaborative,
            Agile environments and I'm passionate about writing clean, maintainable, well-tested code.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 pt-2">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-start gap-3 p-3.5 bg-gray-50 dark:bg-ternary-dark border border-gray-100 dark:border-secondary-dark rounded-xl"
              >
                <span className="mt-0.5 text-indigo-500 dark:text-indigo-400 shrink-0">
                  {h.icon}
                </span>
                <div>
                  <p className="text-sm font-general-medium text-primary-dark dark:text-primary-light leading-snug">
                    {h.label}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-general-regular mt-0.5">
                    {h.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div variants={itemVariants}>
        <h2 className="font-general-semibold text-xl text-primary-dark dark:text-primary-light mb-6">
          Beyond the Code
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="flex gap-5 items-start">
            <img
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/C381363D-F60D-495A-853C-A90DB1EC1020_1_105_c.jpeg"
              className="w-24 h-24 rounded-xl object-cover shadow-sm shrink-0"
              alt="Cooking and BBQ"
            />
            <div>
              <h3 className="font-general-medium text-base text-primary-dark dark:text-primary-light mb-1.5">
                Cooking & BBQ
              </h3>
              <p className="text-sm font-general-regular text-gray-600 dark:text-gray-400 leading-relaxed">
                Texas-style smoked BBQ and grilling is my other craft. The same discipline that goes into a
                well-designed system — patience, precision, iteration — goes into a perfect grilled steak.
                I even ran a smoked-meat restaurant business for two years.
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-start">
            <img
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/6CFE4255-FD76-4FFF-A35A-95646CAA89EC_1_105_c.jpeg"
              className="w-24 h-24 rounded-xl object-cover shadow-sm shrink-0"
              alt="Outdoors and fitness"
            />
            <div>
              <h3 className="font-general-medium text-base text-primary-dark dark:text-primary-light mb-1.5">
                Outdoors & Fitness
              </h3>
              <p className="text-sm font-general-regular text-gray-600 dark:text-gray-400 leading-relaxed">
                Hiking, traveling, and regular weight training keep me sharp. Living in Switzerland means
                access to some of the world's best trails — something I'm genuinely excited about.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutMeBio;
