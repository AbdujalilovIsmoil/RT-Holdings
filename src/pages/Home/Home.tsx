import { useLocation } from "react-router-dom";
import { About, Carousel, LatestNews } from "./components";
import { Contact, Hero, Portfolio, Services } from "../../components";

const Home = () => {
  const location = useLocation();

  return (
    <>
      <Hero page={location.pathname} />
      <About />
      <Services />
      <Portfolio />
      <LatestNews />
      <Carousel />
      <Contact />
    </>
  );
};

export default Home;
