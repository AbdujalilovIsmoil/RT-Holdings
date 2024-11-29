import "./index.css";
import { Button } from "../../UI";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { siteLogo } from "../../../assets/images/svg";
import {
  FlagImage1,
  FlagImage2,
  FlagImage3,
  FlagImage4,
} from "../../../assets/images/png";
import {
  FaBars,
  FiPhone,
  FaTimes,
  FaAngleDown,
  MdOutlineMailOutline,
} from "../../../assets/react-icons";
import {
  FaFacebook,
  IoLogoInstagram,
  FaTelegramPlane,
} from "../../../assets/react-icons";

const Header = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const openToggleVisible = () => setIsVisible((prevState) => !prevState);

  interface flagDataType {
    flag: string;
    lang: string;
  }

  const navigationRef = useRef<HTMLDivElement>(null);
  const [flagData, setFlagData] = useState<flagDataType>({
    lang: "uz",
    flag: FlagImage1,
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (navigationRef.current) {
        setIsScrolled(navigationRef?.current?.clientHeight < window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const setLangData = (data: flagDataType) => {
    setIsOpen(false);
    setFlagData(data);
  };

  return (
    <>
      <div className={`header-close ${isVisible ? "header-close--open" : ""}`}>
        <div className="header-close__background">
          <div className="header-close__top">
            <div className="header-close__container container">
              <Link to="/" onClick={openToggleVisible}>
                <img
                  width={78}
                  height={26}
                  src={siteLogo}
                  className="header-close__top-logo"
                />
              </Link>
              <Button
                type="button"
                onClick={openToggleVisible}
                className="header-close__btn"
              >
                <FaTimes className="header-close__btn-times" />
              </Button>
            </div>
          </div>
          <div className="container">
            <ul className="header-close__medias">
              <li className="header-close__media">
                <a className="header-close__link" target="_blank" href="#">
                  <div className="header-close__bg">
                    <MdOutlineMailOutline className="header-close__link-icon" />
                  </div>
                  <p className="header-close__link-text">Lorem@gmail.com</p>
                </a>
              </li>
              <li className="header-close__media">
                <a className="header-close__link" href="tel:+998905555555">
                  <div className="header-close__bg">
                    <FiPhone className="header-close__link-icon" />
                  </div>

                  <p className="header-close__link-text">+998 90 555 55 55</p>
                </a>
              </li>
              <li className="header-close__media">
                <a className="header-close__link" href="tel:+998905555555">
                  <div className="header-close__bg">
                    <FiPhone className="header-close__link-icon" />
                  </div>

                  <p className="header-close__link-text">+998 90 555 55 55</p>
                </a>
              </li>
            </ul>

            <ul className="header-close__list">
              {links.length > 0 &&
                links.map((el: linksType) => {
                  return (
                    <li className="header-close__item">
                      <NavLink
                        key={el.id}
                        to={el.path}
                        onClick={openToggleVisible}
                        className={({ isActive }) =>
                          isActive
                            ? "header-close__item-link header-close__item-link--active"
                            : "header-close__item-link"
                        }
                      >
                        {el.title}
                        <FaAngleDown className="header-close__item-arrow" />
                      </NavLink>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>

      <div className="header__top" ref={navigationRef}>
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

          <Button
            type="button"
            className="header__bars"
            onClick={openToggleVisible}
          >
            <FaBars className="header__bars-icon" />
          </Button>
        </div>
      </div>

      <div
        className={`site-navigation ${isScrolled && "site-navigation--scroll"}`}
      >
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
            <div className="site__languages">
              <div
                role="button"
                onClick={() => setIsOpen((prevState) => !prevState)}
                className={`site__language ${isOpen && "site__language--open"}`}
              >
                <img
                  width={35}
                  height={35}
                  alt="flag-image"
                  src={flagData.flag}
                  className="site__language-image"
                />
                <p className="site__language-text">{flagData.lang}</p>

                <FaAngleDown className="site__language-icon" />
              </div>

              <ul
                className={`site__languages-list ${
                  isOpen && "site__languages-list--open"
                }`}
              >
                <li
                  className="site__languages-item"
                  onClick={() => setLangData({ lang: "uz", flag: FlagImage1 })}
                >
                  <img
                    width={35}
                    height={35}
                    alt="flag-image"
                    src={FlagImage1}
                    className="site__languages-item-image"
                  />
                  <p className="site__languages-item-text">uz</p>
                </li>
                <li
                  className="site__languages-item"
                  onClick={() => setLangData({ lang: "ru", flag: FlagImage3 })}
                >
                  <img
                    width={35}
                    height={35}
                    alt="flag-image"
                    src={FlagImage3}
                    className="site__languages-item-image"
                  />
                  <p className="site__languages-item-text">ru</p>
                </li>
                <li
                  className="site__languages-item"
                  onClick={() => setLangData({ lang: "en", flag: FlagImage2 })}
                >
                  <img
                    width={35}
                    height={35}
                    alt="flag-image"
                    src={FlagImage2}
                    className="site__languages-item-image"
                  />
                  <p className="site__languages-item-text">en</p>
                </li>
                <li
                  className="site__languages-item"
                  onClick={() => setLangData({ lang: "ko", flag: FlagImage4 })}
                >
                  <img
                    width={35}
                    height={35}
                    alt="flag-image"
                    src={FlagImage4}
                    className="site__languages-item-image"
                  />
                  <p className="site__languages-item-text">ko</p>
                </li>
              </ul>
            </div>
            <ul className="site__medias">
              <li className="site__media">
                <a href="#" target="_blank">
                  <IoLogoInstagram className="site__media-icon" />
                </a>
              </li>
              <li className="site__media">
                <a href="#" target="_blank">
                  <FaFacebook className="site__media-icon" />
                </a>
              </li>
              <li className="site__media">
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
