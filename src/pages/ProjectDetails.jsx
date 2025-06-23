import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import { motion } from 'framer-motion';
import {singleProjectData} from "../data/singleProjectData"
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {

	const {id: projectId} = useParams();

	const selectedProject = singleProjectData.find(project => project.id === Number(projectId))

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
				<ProjectHeader data={selectedProject}/>
				<ProjectGallery data={selectedProject}/>
				<ProjectInfo data={selectedProject}/>
		</motion.div>
	);
};

export default ProjectDetails;
