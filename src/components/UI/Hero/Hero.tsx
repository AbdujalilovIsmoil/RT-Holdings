import "./style.css";
import { Button } from "../Button";
import { useLocation } from "react-router-dom";
import {
  HeroBackgroundImage,
  HeroBackgroundImage1,
  HeroBackgroundImage2,
  HeroBackgroundImage3,
  HeroBackgroundImage4,
} from "../../../assets/images/jpg";

const Hero = ({ page }: { page: string }) => {
  interface pageDataTypes {
    id: number;
    path: string;
    text: string;
    title: string;
  }

  const pageData: pageDataTypes[] = [
    {
      id: 1,
      title: "About us",
      path: "/pages/about",
      text: "Lorem ipsum dolor sit amet consectetur. Velit sagittis nec vulputate aliquet at suspendisse dui semper feugiat.",
    },
    {
      id: 2,
      title: "Projects",
      path: "/pages/projects",
      text: "Lorem ipsum dolor sit amet consectetur. Velit sagittis nec vulputate aliquet at suspendisse dui semper feugiat.",
    },
    {
      id: 3,
      title: "News",
      path: "/pages/news",
      text: "Lorem ipsum dolor sit amet consectetur. Velit sagittis nec vulputate aliquet at suspendisse dui semper feugiat.",
    },
    {
      id: 4,
      title: "News",
      path: "/pages/news",
      text: "Lorem ipsum dolor sit amet consectetur. Velit sagittis nec vulputate aliquet at suspendisse dui semper feugiat.",
    },
    {
      id: 5,
      title: "Sale",
      path: "/pages/sale",
      text: "Lorem ipsum dolor sit amet consectetur. Velit sagittis nec vulputate aliquet at suspendisse dui semper feugiat.",
    },
    {
      id: 6,
      title: "Our Services",
      path: "/pages/services",
      text: "Lorem ipsum dolor sit amet consectetur. Velit sagittis nec vulputate aliquet at suspendisse dui semper feugiat.",
    },
    {
      id: 7,
      title: "Contact us",
      path: "/pages/contact",
      text: "Lorem ipsum dolor sit amet consectetur. Velit sagittis nec vulputate aliquet at suspendisse dui semper feugiat.",
    },
  ];

  const location = useLocation();

  const getImage = (page: string) => {
    if (page === location.pathname && location.pathname === "/") {
      return HeroBackgroundImage;
    } else if (page === "/pages/about") {
      return HeroBackgroundImage1;
    } else if (page === "/pages/contact") {
      return HeroBackgroundImage4;
    } else if (page === "/pages/projects") {
      return HeroBackgroundImage3;
    } else if (page === "/pages/news") {
      return HeroBackgroundImage2;
    } else if (page === "/pages/sale") {
      return HeroBackgroundImage1;
    } else if (page === "/pages/services") {
      return HeroBackgroundImage1;
    }
  };

  const heroStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `linear-gradient(90deg, rgba(30, 36, 44, 0.8) 0%, rgba(30, 36, 44, 0.6) 43.96%, rgba(30, 36, 44, 0.6) 66.39%), url(${getImage(
      page
    )})`,
  };

  if (page === "/") {
    return (
      <section className="site-hero" style={heroStyle}>
        <h1 className="visually-hidden">RT Holdings</h1>

        <div className="container">
          <div className="site-hero__content">
            <span className="site-hero__content-small">
              Lorem ipsum dolor sit amet.
            </span>
            <h2 className="site-hero__content-title">
              <span className="site-hero__conetent-among">Lorem</span> ipsum
              dolor sit amet consectetur. Mauris eleifend dui
            </h2>

            <p className="site-hero__content-text">
              Lorem ipsum dolor sit amet consectetur. Velit sagittis nec
              vulputate aliquet at suspendisse dui semper feugiat.
            </p>

            <div className="site-hero__buttons">
              <Button
                type="button"
                className="site-hero__buttons-button site-hero__buttons-button--active"
              >
                Explore Our Services
              </Button>
              <Button className="site-hero__buttons-button" type="button">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="site-hero" style={heroStyle}>
        <h1 className="visually-hidden">RT Holdings</h1>
        <div className="container">
          {pageData.length > 0 &&
            [pageData.find((el: pageDataTypes) => el.path === page)].map(
              (el: any) => {
                return (
                  <div className="content" key={el.id}>
                    <h2 className="content-title">{el.title}</h2>
                    <p className="content-text">{el.text}</p>
                  </div>
                );
              }
            )}
        </div>
      </section>
    );
  }
};

export default Hero;
