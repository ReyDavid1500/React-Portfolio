import { coursesHeading, coursesData } from '../../data/coursesData';
import AboutClientSingle from './AboutClientSingle';

const AboutClients = () => {

	return (
		<div className="mt-10 sm:mt-20">
			<p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
				{coursesHeading}
			</p>
			<div className="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-6">
				{coursesData.map((client) => (
					<AboutClientSingle
						title={client.title}
						image={client.img}
						key={client.id}
						id={client.id}
						desc={client.summary}
						href={client.pdf}
						icon={client.iconClass}
					/>
				))}
			</div>
		</div>
	);
};

export default AboutClients;
