import "./index.css";
import { Link } from "react-router-dom";
import { siteLogo } from "../../../assets/images/svg";
import { FiPhone, MdOutlineMailOutline } from "../../../assets/react-icons";

const Header = () => {
  return (
    <>
      <div className="header__top">
        <div className="header__top-container container">
          <Link to="/">
            <img
              width={210}
              height={70}
              src={siteLogo}
              alt="RT Holdings"
              className="header__top-logo"
            />
          </Link>

          <ul className="header__medias">
            <li className="header__media">
              <a className="header__link" href="#">
                <span className="header__background">
                  <MdOutlineMailOutline className="header__background-icon" />
                </span>
                <div className="header__content">
                  <p className="header__media-text">Email</p>
                  <p className="header__media-text">contact</p>
                </div>
              </a>
            </li>
            <li className="header__media">
              <a className="header__link" href="#">
                <span className="header__background">
                  <FiPhone className="header__background-icon" />
                </span>
                <div className="header__content">
                  <p className="header__media-text">Call Us</p>
                  <p className="header__media-text">(00) 112 365 489</p>
                </div>
              </a>
            </li>
            <li className="header__media">
              <a className="header__link" href="#">
                <span className="header__background">
                  <FiPhone className="header__background-icon" />
                </span>
                <div className="header__content">
                  <p className="header__media-text">Call Us</p>
                  <p className="header__media-text">(00) 112 365 489</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
