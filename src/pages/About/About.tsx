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
