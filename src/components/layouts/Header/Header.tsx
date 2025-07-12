"use client";

import "./style.css";
import Link from "next/link";
import { Button } from "@/components";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FaBars,
  FiPhone,
  FaTimes,
  FaAngleDown,
  MdOutlineMailOutline,
} from "@/assets/react-icons";
import {
  FaFacebook,
  IoLogoInstagram,
  FaTelegramPlane,
} from "@/assets/react-icons";
import { siteLogo } from "../../../../public/images/svg";
import { closeNavbar } from "@/utility";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const openToggleVisible = () => setIsVisible(prevState => !prevState);

  interface flagDataType {
    lang: string;
    flag: string | StaticImageData;
  }

  const navigationRef = useRef<HTMLDivElement>(null);
  const [flagData, setFlagData] = useState<flagDataType>({
    lang: "uz",
    flag: "/images/png/flags/flag-image-1.png",
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
      title: "Bosh sahifa",
    },
    {
      id: 2,
      title: "Biz haqimizda",
      path: "/about",
    },
    {
      id: 3,
      path: "/services",
      title: "Xizmatlar",
    },
    {
      id: 4,
      title: "Yangiliklar",
      path: "/news",
    },
    {
      id: 5,
      title: "Sotuv",
      path: "/sale",
    },
  ];

  const setLangData = (data: flagDataType) => {
    setIsOpen(false);
    setFlagData(data);
  };

  return (
    <>
      <div className={`header-close ${isVisible ? "header-close--open" : ""}`}>
        <div className='header-close__background'>
          <div className='header-close__top'>
            <div className='header-close__container container'>
              <Link
                href='/'
                onClick={openToggleVisible}
              >
                <Image
                  width={78}
                  height={26}
                  src={siteLogo}
                  alt='RT Holding'
                  className='header-close__top-logo'
                />
              </Link>
              <Button
                type='button'
                onClick={openToggleVisible}
                className='header-close__btn'
              >
                <FaTimes className='header-close__btn-times' />
              </Button>
            </div>
          </div>
          <div className='container'>
            <ul className='header-close__medias'>
              {/* <li className='header-close__media'>
                <a
                  target='_blank'
                  className='header-close__link'
                  href={`mailto:${data && data.email}`}
                >
                  <div className='header-close__bg'>
                    <MdOutlineMailOutline className='header-close__link-icon' />
                  </div>
                  <p className='header-close__link-text'>
                    {data && data.email}
                  </p>
                </a>
              </li> */}
              <li className='header-close__media'>
                <a
                  href='tel:+99891-088-9595'
                  className='header-close__link'
                >
                  <div className='header-close__bg'>
                    <FiPhone className='header-close__link-icon' />
                  </div>

                  <p className='header-close__link-text'>+99891-088-9595</p>
                </a>
              </li>
              <li className='header-close__media'>
                <a
                  href='tel:+8210-9687-9796'
                  className='header-close__link'
                >
                  <div className='header-close__bg'>
                    <FiPhone className='header-close__link-icon' />
                  </div>

                  <p className='header-close__link-text'>+8210-9687-9796</p>
                </a>
              </li>
            </ul>

            <ul className='header-close__list'>
              {links.length > 0 &&
                links.map((el: linksType, index) => {
                  return (
                    <li
                      key={index}
                      className='header-close__item'
                    >
                      <Link
                        href={el.path}
                        onClick={openToggleVisible}
                        className={closeNavbar({
                          staticPath: el.path,
                          publicPath: pathname,
                          mainClass: "header-close__item-link",
                          activeClass: "header-close__item-link--active",
                        })}
                      >
                        {el.title}
                        <FaAngleDown className='header-close__item-arrow' />
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>

      <div
        ref={navigationRef}
        className='header__top'
      >
        <div className='header__top-container container'>
          <Link href='/'>
            <Image
              width={210}
              height={70}
              alt='RT Holdings'
              className='header__top-logo'
              src={"/images/svg/site-header/site-logo.svg"}
            />
          </Link>

          <ul className='header__medias'>
            <li className='header__media'>
              <a
                className='header__link'
                href={`mailto:`}
              >
                <span className='header__background'>
                  <MdOutlineMailOutline className='header__background-icon' />
                </span>
                <div className='header__content'>
                  <p className='header__media-text'>Email</p>
                  <p className='header__media-text'>contact</p>
                </div>
              </a>
            </li>
            <li className='header__media'>
              <a
                className='header__link'
                href='tel:+99891-088-9595'
              >
                <span className='header__background'>
                  <FiPhone className='header__background-icon' />
                </span>
                <div className='header__content'>
                  <p className='header__media-text'>Call Us</p>
                  <p className='header__media-text'>+99891-088-9595</p>
                </div>
              </a>
            </li>
            <li className='header__media'>
              <a
                className='header__link'
                href='tel:+8210-9687-9796'
              >
                <span className='header__background'>
                  <FiPhone className='header__background-icon' />
                </span>
                <div className='header__content'>
                  <p className='header__media-text'>Call Us</p>
                  <p className='header__media-text'>+8210-9687-9796</p>
                </div>
              </a>
            </li>
          </ul>

          <Button
            type='button'
            className='header__bars'
            onClick={openToggleVisible}
          >
            <FaBars className='header__bars-icon' />
          </Button>
        </div>
      </div>

      <div
        className={`site-navigation ${
          isScrolled ? "site-navigation--scroll" : ""
        }`}
      >
        <div className='site__container container'>
          <nav className='nav'>
            <ul className='nav__list'>
              {links.length > 0 &&
                links.map((el: linksType, index) => {
                  return (
                    <li
                      key={index}
                      className='nav__item'
                    >
                      <Link
                        href={el.path}
                        className={closeNavbar({
                          staticPath: el.path,
                          publicPath: pathname,
                          mainClass: "nav__item-link",
                          activeClass: "nav__item-link--active",
                        })}
                      >
                        {el && el.title}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </nav>

          <div className='site__contact'>
            <div className='site__languages'>
              <div
                role='button'
                onClick={() => setIsOpen(prevState => !prevState)}
                className={`site__language ${
                  isOpen ? "site__language--open" : ""
                }`}
              >
                <Image
                  width={35}
                  height={35}
                  alt='flag-image'
                  src={flagData.flag}
                  className='site__language-image'
                />
                <p className='site__language-text'>{flagData.lang}</p>

                <FaAngleDown className='site__language-icon' />
              </div>

              <ul
                className={`site__languages-list ${
                  isOpen ? "site__languages-list--open" : ""
                }`}
              >
                <li
                  className='site__languages-item'
                  onClick={() =>
                    setLangData({
                      lang: "uz",
                      flag: "/images/png/flags/flag-image-1.png",
                    })
                  }
                >
                  <Image
                    width={35}
                    height={35}
                    alt='flag-image'
                    className='site__languages-item-image'
                    src='/images/png/flags/flag-image-1.png'
                  />
                  <p className='site__languages-item-text'>uz</p>
                </li>
                <li
                  className='site__languages-item'
                  onClick={() =>
                    setLangData({
                      lang: "ru",
                      flag: "/images/png/flags/flag-image-3.png",
                    })
                  }
                >
                  <Image
                    width={35}
                    height={35}
                    alt='flag-image'
                    className='site__languages-item-image'
                    src='/images/png/flags/flag-image-3.png'
                  />
                  <p className='site__languages-item-text'>ru</p>
                </li>
                <li
                  className='site__languages-item'
                  onClick={() =>
                    setLangData({
                      lang: "en",
                      flag: "/images/png/flags/flag-image-2.png",
                    })
                  }
                >
                  <Image
                    width={35}
                    height={35}
                    alt='flag-image'
                    className='site__languages-item-image'
                    src='/images/png/flags/flag-image-2.png'
                  />
                  <p className='site__languages-item-text'>en</p>
                </li>
                <li
                  className='site__languages-item'
                  onClick={() =>
                    setLangData({
                      lang: "ko",
                      flag: "/images/png/flags/flag-image-4.png",
                    })
                  }
                >
                  <Image
                    width={35}
                    height={35}
                    alt='flag-image'
                    className='site__languages-item-image'
                    src='/images/png/flags/flag-image-4.png'
                  />
                  <p className='site__languages-item-text'>ko</p>
                </li>
              </ul>
            </div>
            <ul className='site__medias'>
              <li className='site__media'>
                <a
                  href=''
                  target='_blank'
                >
                  <IoLogoInstagram className='site__media-icon' />
                </a>
              </li>
              <li className='site__media'>
                <a
                  href=''
                  target='_blank'
                >
                  <FaFacebook className='site__media-icon' />
                </a>
              </li>
              <li className='site__media'>
                <a
                  href=''
                  target='_blank'
                >
                  <FaTelegramPlane className='site__media-icon' />
                </a>
              </li>
            </ul>
            <Link
              href='/contact'
              className='site__contact-link'
            >
              Biz bilan aloqa
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
