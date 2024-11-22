import { useLocation } from "react-router-dom";
import { Portfolio, Hero } from "../../components";

const Projects = () => {
  const location = useLocation();

  return (
    <>
      <Hero page={location.pathname} />
      <Portfolio />
    </>
  );
};

export default Projects;
