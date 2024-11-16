import "./index.css";
import { NavLink } from "react-router-dom";
import { Button } from "../../../../components";
import { HeroBackgroundImage } from "../../../../assets/images/jpg";
import {
  FaFacebook,
  IoLogoInstagram,
  FaTelegramPlane,
} from "../../../../assets/react-icons";

const Hero = () => {
  const heroStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `linear-gradient(90deg, rgba(30, 36, 44, 0.4) 0%, rgba(30, 36, 44, 0.3) 43.96%, rgba(30, 36, 44, 0) 66.39%), url(${HeroBackgroundImage})`,
  };

  return (
    <header className="header">
      <section className="site-hero" style={heroStyle}>
        <h1 className="visually-hidden">RT Holdings</h1>
        <div className="site__navigation">
          <div className="site__container container">
            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <NavLink
                    className="nav__item-link nav__item-link--active"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink className="nav__item-link" to="/pages/about">
                    About Us
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink className="nav__item-link" to="/pages/projects">
                    Projects
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink className="nav__item-link" to="/pages/news">
                    News
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink className="nav__item-link" to="/pages/sale">
                    Sale
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink className="nav__item-link" to="/pages/contact">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div className="site__contact">
              <ul className="site__medias">
                <li className="site__meda">
                  <a href="#" target="_blank">
                    <IoLogoInstagram className="site__media-icon" />
                  </a>
                </li>
                <li className="site__meda">
                  <a href="#" target="_blank">
                    <FaFacebook className="site__media-icon" />
                  </a>
                </li>
                <li className="site__meda">
                  <a href="#" target="_blank">
                    <FaTelegramPlane className="site__media-icon" />
                  </a>
                </li>
              </ul>
              <a className="site__contact-link" href="#">
                Contact Us
              </a>
            </div>
          </div>
        </div>

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
    </header>
  );
};

export default Hero;
