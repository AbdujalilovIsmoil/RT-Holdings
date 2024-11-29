import { useEffect } from "react";
import { Post } from "./components";
import { useLocation } from "react-router-dom";
import { Hero, Portfolio } from "../../components";

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <Hero page={location.pathname} />
      <Post />
      <Portfolio />
    </>
  );
};

export default Services;
