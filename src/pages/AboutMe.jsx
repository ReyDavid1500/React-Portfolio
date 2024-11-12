import AboutMeBio from '../components/about/AboutMeBio';
import { motion } from 'framer-motion';
import ContactDetails from '../components/contact/ContactDetails';

const About = () => {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutMeBio />
			</motion.div>
			<div className='w-full flex justify-center'>
			<ContactDetails />
			</div>
		</>
	);
};

export default About;
