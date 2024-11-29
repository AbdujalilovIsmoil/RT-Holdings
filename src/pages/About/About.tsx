import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Info,
  Hero,
  Post,
  Contact,
  Services,
  Portfolio,
} from "../../components";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <Hero page={location.pathname} />
      <Info />
      <Post />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
};

export default About;
