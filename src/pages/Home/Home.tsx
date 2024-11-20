import {
  Hero,
  About,
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
    </>
  );
};

export default Home;
