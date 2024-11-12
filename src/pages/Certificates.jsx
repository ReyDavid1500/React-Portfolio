import AboutClients from '../components/about/AboutClients';
import { motion } from 'framer-motion';

const Certificates = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto"
    >
      <AboutClients />
    </motion.div>
  );
};

export default Certificates;
