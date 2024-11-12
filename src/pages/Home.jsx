import AppBanner from "../components/shared/AppBanner";
import ProjectsGrid from "../components/projects/ProjectsGrid";

const Home = () => {
  return (
    <div className="container mx-auto">
        <AppBanner />
        <ProjectsGrid />
    </div>
  );
};

export default Home;
