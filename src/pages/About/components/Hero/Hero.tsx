import "./index.css";
import { NavLink } from "react-router-dom";
import { HeroBackgroundImage1 } from "../../../../assets/images/jpg";
import {
  FaFacebook,
  IoLogoInstagram,
  FaTelegramPlane,
} from "../../../../assets/react-icons";

const Hero = () => {
  const heroStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `linear-gradient(90deg, rgba(30, 36, 44, 0.8) 0%, rgba(30, 36, 44, 0.8) 43.96%, rgba(30, 36, 44, 0.8) 66.39%), url(${HeroBackgroundImage1})`,
  };

  return (
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
                <NavLink className="nav__item-link" to="/">
                  Projects
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink className="nav__item-link" to="/">
                  News
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink className="nav__item-link" to="/">
                  Sale
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink className="nav__item-link" to="/">
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
        <div className="content">
          <h2 className="content-title">About us</h2>
          <p className="content-text">
            Lorem ipsum dolor sit amet consectetur. Velit sagittis nec vulputate
            aliquet at suspendisse dui semper feugiat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
