import { aboutMeData } from "../../data/aboutMeData";

const AboutMeBio = () => {
	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20 sm:items-center">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<img src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/profile.jpeg" className="rounded-lg w-96" alt="" />
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				{aboutMeData.map((bio) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}
			</div>
		</div>
	);
};

export default AboutMeBio;
