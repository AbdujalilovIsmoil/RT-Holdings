import { useLocation } from "react-router-dom";
import { About, Carousel, LatestNews } from "./components";
import { Contact, Hero, Portfolio, Services } from "../../components";

const Home = () => {
  const location = useLocation();

  fetch("https://api.rtholdings.uz/api/v1/common/about-us")
    .then((res) => res.json())
    .then((data) => console.log(data));

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
