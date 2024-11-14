import "./index.css";
import { Link } from "react-router-dom";
import { siteLogo } from "../../../assets/images/svg";
import {
  FooterPicture1,
  FooterPicture2,
  FooterPicture3,
  FooterPicture4,
  FooterPicture5,
  FooterPicture6,
  FooterPicture7,
} from "../../../assets/images/jpg";
import {
  FaPhone,
  FaYoutube,
  FaFacebook,
  FaTelegramPlane,
  AiFillInstagram,
} from "../../../assets/react-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer__pictures">
          <li className="footer__picture">
            <img
              width={170}
              height={120}
              loading="lazy"
              src={FooterPicture1}
              alt="footer image 1"
              className="footer__picture-img"
            />
          </li>
          <li className="footer__picture">
            <img
              width={170}
              height={120}
              loading="lazy"
              src={FooterPicture2}
              alt="footer image 2"
              className="footer__picture-img"
            />
          </li>
          <li className="footer__picture">
            <img
              width={170}
              height={120}
              loading="lazy"
              src={FooterPicture3}
              alt="footer image 3"
              className="footer__picture-img"
            />
          </li>
          <li className="footer__picture">
            <img
              width={170}
              height={120}
              loading="lazy"
              src={FooterPicture4}
              alt="footer image 4"
              className="footer__picture-img"
            />
          </li>
          <li className="footer__picture">
            <img
              width={170}
              height={120}
              loading="lazy"
              src={FooterPicture5}
              alt="footer image 5"
              className="footer__picture-img"
            />
          </li>
          <li className="footer__picture">
            <img
              width={170}
              height={120}
              loading="lazy"
              src={FooterPicture6}
              alt="footer image 6"
              className="footer__picture-img"
            />
          </li>
          <li className="footer__picture">
            <img
              width={170}
              height={120}
              loading="lazy"
              src={FooterPicture7}
              alt="footer image 7"
              className="footer__picture-img"
            />
          </li>
        </ul>

        <div className="footer__container">
          <div className="footer__box">
            <Link to="/">
              <img
                width={210}
                height={70}
                loading="lazy"
                src={siteLogo}
                alt="RT Holdings"
                className="footer__box-image"
              />
            </Link>
            <p className="footer__box-text">
              Improve efficiency, provide a better Customer experience with
              modern Technolo services available
            </p>
            <ul className="footer__medias">
              <li className="footer__media">
                <a target="_blank" href="#">
                  <FaTelegramPlane className="footer__media-icon" />
                </a>
              </li>
              <li className="footer__media">
                <a target="_blank" href="#">
                  <AiFillInstagram className="footer__media-icon" />
                </a>
              </li>
              <li className="footer__media">
                <a target="_blank" href="#">
                  <FaYoutube className="footer__media-icon" />
                </a>
              </li>
              <li className="footer__media">
                <a target="_blank" href="#">
                  <FaFacebook className="footer__media-icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__box">
            <h2 className="footer__box-title">Pages</h2>
            <ul className="footer__links-group">
              <li className="footer__link-group">
                <Link className="footer__link-group-link" to="/pages/about">
                  About
                </Link>
              </li>
              <li className="footer__link-group">
                <Link className="footer__link-group-link" to="/pages/projects">
                  Projects
                </Link>
              </li>
              <li className="footer__link-group">
                <Link className="footer__link-group-link" to="/pages/news">
                  News
                </Link>
              </li>
              <li className="footer__link-group">
                <Link className="footer__link-group-link" to="/pages/careers">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__box">
            <h2 className="footer__box-title">Contact</h2>
            <ul className="footer__phones">
              <li className="footer__phone">
                <a
                  className="footer__phone-container"
                  href="tel:(404) 850 - 7080"
                >
                  <FaPhone className="footer__box-phone-icon" />
                  <p className="footer__box-phone-number">(404) 850 - 7080</p>
                </a>
              </li>

              <li className="footer__phone">
                <a
                  className="footer__phone-container"
                  href="tel:(404) 850 - 7080"
                >
                  <FaPhone className="footer__box-phone-icon" />
                  <p className="footer__box-phone-number">(404) 850 - 7080</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__bottom-text">
          {new Date().getFullYear()} “RT Holdings”
        </p>
      </div>
    </footer>
  );
};

export default Footer;
