import {
  Hero,
  About,
  Contact,
  Carousel,
  Services,
  Portfolio,
  LatestNews,
} from "./components";

const Home = () => {
  return (
    <>
      <Hero />
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
