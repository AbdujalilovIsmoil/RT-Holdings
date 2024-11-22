import "./index.css";
import { Link, NavLink } from "react-router-dom";
import { siteLogo } from "../../../assets/images/svg";
import { FiPhone, MdOutlineMailOutline } from "../../../assets/react-icons";
import {
  FaFacebook,
  IoLogoInstagram,
  FaTelegramPlane,
} from "../../../assets/react-icons";

const Header = () => {
  interface linksType {
    id: number;
    path: string;
    title: string;
  }

  const links: linksType[] = [
    {
      id: 1,
      path: "/",
      title: "Home",
    },
    {
      id: 2,
      title: "About Us",
      path: "/pages/about",
    },
    {
      id: 3,
      title: "Projects",
      path: "/pages/projects",
    },
    {
      id: 4,
      title: "News",
      path: "/pages/news",
    },
    {
      id: 5,
      title: "Sale",
      path: "/pages/sale",
    },
    {
      id: 6,
      title: "Services",
      path: "/pages/services",
    },
    {
      id: 7,
      title: "Contact Us",
      path: "/pages/contact",
    },
  ];

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

      <div className="site__navigation">
        <div className="site__container container">
          <nav className="nav">
            <ul className="nav__list">
              {links.length > 0 &&
                links.map((el) => {
                  return (
                    <li className="nav__item" key={el.id}>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "nav__item-link nav__item-link--active"
                            : "nav__item-link"
                        }
                        to={el.path}
                      >
                        {el.title}
                      </NavLink>
                    </li>
                  );
                })}
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
    </>
  );
};

export default Header;
