import "./style.css";
import { useEffect } from "react";
import { Post } from "../../components";
import { HeroBackgroundImage2 } from "../../assets/images/jpg";

const Hero = () => {
  const heroStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `linear-gradient(90deg, rgba(30, 36, 44, 0.8) 0%, rgba(30, 36, 44, 0.6) 43.96%, rgba(30, 36, 44, 0.6) 66.39%), url(${HeroBackgroundImage2})`,
  };

  useEffect(() => {
    scrollTo({
      top: 0,
    });
  }, []);

  return (
    <section className="project-view">
      <div className="site-hero" style={heroStyle}>
        <h1 className="visually-hidden">RT Holdings</h1>
        <div className="container">
          <div className="content">
            <h2 className="content-title">Aka Taxi Project</h2>
            <p className="content-text">
              Lorem ipsum dolor sit amet consectetur. Velit sagittis nec
              vulputate aliquet at suspendisse dui semper feugiat.
            </p>
          </div>
        </div>
      </div>

      <Post />
    </section>
  );
};

export default Hero;
