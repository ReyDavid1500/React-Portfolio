import { motion } from "framer-motion";
import { FiMapPin, FiCalendar, FiBookOpen, FiGlobe } from "react-icons/fi";

const highlights = [
  {
    icon: <FiMapPin className="w-4 h-4" />,
    label: "Winterthur ZH · B Permit",
    sub: "No sponsorship needed · DACH travel ready",
  },
  {
    icon: <FiBookOpen className="w-4 h-4" />,
    label: "Materials Engineer (MSc-level)",
    sub: "Simón Bolívar University, Venezuela",
  },
  {
    icon: <FiCalendar className="w-4 h-4" />,
    label: "5+ Years Industrial B2B",
    sub: "Oil & gas · Manufacturing · Distribution",
  },
  {
    icon: <FiGlobe className="w-4 h-4" />,
    label: "Languages",
    sub: "Spanish (Native) · English C1 · German A2→B1",
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
          Forward Deployed AI Engineer · TypeScript · Python · Industrial B2B
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
            {/* <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white rounded-2xl px-4 py-3 shadow-lg">
              <p className="text-xs font-medium opacity-80">Currently at</p>
              <p className="text-sm font-bold">Galgo</p>
            </div> */}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="lg:col-span-2 space-y-5">
          <p className="font-general-regular text-gray-700 dark:text-gray-300 leading-relaxed text-base">
            I'm a Forward Deployed Engineer building and deploying AI systems for industrial and B2B customers. I work in{" "}
            <span className="font-semibold text-primary-dark dark:text-primary-light">
              TypeScript and Python
            </span>
            , ship production-grade applications end-to-end, and use the Anthropic API daily — tool calling, RAG pipelines, agentic loops. I use Claude Code and Cursor as my primary development tools.
          </p>
          <p className="font-general-regular text-gray-700 dark:text-gray-300 leading-relaxed text-base">
            My background is the differentiator: I spent{" "}
            <span className="font-semibold text-primary-dark dark:text-primary-light">
              seven years as a Technical Sales Engineer
            </span>{" "}
            in oil & gas, mining, manufacturing, and distribution — running workshops, mapping workflows, and specifying technical solutions for procurement and engineering managers. I know what operational pain looks like from inside the teams that live with it, not from a requirements document.
          </p>
          <p className="font-general-regular text-gray-700 dark:text-gray-300 leading-relaxed text-base">
            At FROMM Chile (Swiss industrial manufacturer, FROMM Group subsidiary), I was the sole developer — scoped with Swiss client stakeholders, built, and shipped to production with no handoff. That's the engagement model I want every day: own the problem, deliver the solution, see the impact.
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
