import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Portfolio, Hero } from "../../components";

const Projects = () => {
  const location = useLocation();

  useEffect(() => {
    scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <Hero page={location.pathname} />
      <Portfolio />
    </>
  );
};

export default Projects;
