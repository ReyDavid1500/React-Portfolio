import AppBanner from "../components/shared/AppBanner";
import ExperienceTimeline from "../components/experience/ExperienceTimeline";
import ProjectsGrid from "../components/projects/ProjectsGrid";

const Home = () => {
  return (
    <div>
      <AppBanner />
      <div className="container mx-auto">
        <ExperienceTimeline />
        <ProjectsGrid />
      </div>
    </div>
  );
};

export default Home;
