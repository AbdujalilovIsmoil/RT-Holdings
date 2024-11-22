import { Post } from "./components";
import { useLocation } from "react-router-dom";
import { Hero, Portfolio } from "../../components";

const Services = () => {
  const location = useLocation();

  return (
    <>
      <Hero page={location.pathname} />
      <Post />
      <Portfolio />
    </>
  );
};

export default Services;
