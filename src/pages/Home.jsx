import AppBanner from "../components/shared/AppBanner";
import ProjectsGrid from "../components/projects/ProjectsGrid";

const Home = () => {
  return (
    <div>
      <AppBanner />
      <div className="container mx-auto">
        <ProjectsGrid />
      </div>
    </div>
  );
};

export default Home;
