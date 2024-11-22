import { useLocation } from "react-router-dom";
import {
  Contact,
  Hero,
  Portfolio,
  Services,
  Info,
  Post,
} from "../../components";

const About = () => {
  const location = useLocation();

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
