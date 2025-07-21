"use client";

import "./style.css";
import Link from "next/link";
import { Button } from "@/components";
import { closeNavbar } from "@/utility";
import { SET_LANG } from "@/context/action";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { IoLogoTiktok } from "react-icons/io5";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import { initialValuesTypes } from "@/context/reducer";
import { useDispatch, useSelector } from "react-redux";
import { IoLogoInstagram, FaTelegramPlane } from "@/assets/react-icons";
import {
  FaBars,
  FiPhone,
  FaTimes,
  FaAngleDown,
  MdOutlineMailOutline,
} from "@/assets/react-icons";

const Header = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const { appLang } = useSelector((state: initialValuesTypes) => state);

  type imageType = {
    [key: string]: {
      name: string;
      src: string | StaticImageData;
    };
  };

  const images: imageType = {
    uz: {
      name: "uz",
      src: "/images/png/flags/flag-image-1.png",
    },
    ru: {
      name: "ru",
      src: "/images/png/flags/flag-image-3.png",
    },
    en: {
      name: "en",
      src: "/images/png/flags/flag-image-2.png",
    },
    ko: {
      name: "ko",
      src: "/images/png/flags/flag-image-4.png",
    },
  };

  type callDataType = {
    [key: string]: {
      email: string;
      callUs: string;
    };
  };

  const callData: callDataType = {
    uz: {
      email: "Elektron pochta",
      callUs: "Biz bilan aloqa",
    },
    ru: {
      email: "Электронная почта",
      callUs: "Связаться с нами",
    },
    ko: {
      email: "이메일",
      callUs: "문의하기",
    },
    en: {
      email: "Email",
      callUs: "Call Us",
    },
  };

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const openToggleVisible = () => setIsVisible(prevState => !prevState);

  interface flagDataType {
    lang: string;
    flag: string | StaticImageData;
  }

  const navigationRef = useRef<HTMLDivElement>(null);

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
    title: {
      [key: string]: string;
    };
  }

  const links: linksType[] = [
    {
      id: 1,
      path: "/",
      title: {
        uz: "Bosh sahifa",
        ru: "Главная",
        en: "Home",
        ko: "홈",
      },
    },
    {
      id: 2,
      title: {
        uz: "Biz haqimizda",
        ru: "О нас",
        en: "About Us",
        ko: "회사 소개",
      },
      path: "/about",
    },
    {
      id: 3,
      path: "/services",
      title: {
        uz: "Xizmatlar",
        ru: "Услуги",
        en: "Services",
        ko: "서비스",
      },
    },
    {
      id: 4,
      title: {
        uz: "Yangiliklar",
        ru: "Новости",
        en: "News",
        ko: "뉴스",
      },
      path: "/news",
    },
    {
      id: 5,
      title: {
        uz: "Portfolio",
        ru: "Портфолио",
        en: "Portfolio",
        ko: "포트폴리오",
      },
      path: "/sale",
    },
  ];

  const setLangData = (data: flagDataType) => {
    setIsOpen(false);

    dispatch(SET_LANG(data.lang));
  };

  type Language = {
    code: string;
    name: string;
  };

  const languages: Language[] = [
    { code: "uz", name: "O'zbek" },
    { code: "ru", name: "Русский" },
    { code: "en", name: "English" },
    { code: "ko", name: "한국어" },
  ];

  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    languages[0],
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLanguage(lang);
    setIsLangOpen(false);
  };

  const toggleDropdown = () => {
    setIsLangOpen(!isLangOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  type contactTitleType = {
    [key: string]: string;
  };

  const contactTitle: contactTitleType = {
    uz: "Biz bilan aloqa",
    ru: "Связаться с нами",
    en: "Contact Us",
    ko: "문의하기",
  };

  return (
    <>
      <div className={`header-close ${isVisible ? "header-close--open" : ""}`}>
        <div className='header-close__background'>
          <div className='header-close__top'>
            <div className='header-close__container container'>
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
                        {el.title[`${appLang}`] || el.title.uz}
                        <FaAngleDown className='header-close__item-arrow' />
                      </Link>
                    </li>
                  );
                })}
            </ul>

            <div
              className='language-switcher-wrapper'
              ref={dropdownRef}
            >
              <button
                type='button'
                className={`language-switcher-button ${
                  isLangOpen ? "active" : ""
                }`}
                onClick={toggleDropdown}
                aria-haspopup='true'
                aria-expanded={isLangOpen}
              >
                <span>{currentLanguage.name}</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className={`chevron-icon ${isLangOpen ? "rotate-180" : ""}`}
                >
                  <path d='m6 9 6 6 6-6' />
                </svg>
              </button>

              {isLangOpen && (
                <ul className='language-switcher-content'>
                  {languages.map(lang => (
                    <li
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang)}
                      className={`language-switcher-item ${
                        currentLanguage.code === lang.code ? "selected" : ""
                      }`}
                      role='menuitem'
                    >
                      {lang.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
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
                  <p className='header__media-text'>
                    {callData[`${appLang}`]?.email}:
                  </p>
                  <p className='header__media-text'>
                    ismoilbek20050421@gmail.com
                  </p>
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
                  <p className='header__media-text'>
                    {callData[`${appLang}`]?.callUs}
                  </p>
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
                  <p className='header__media-text'>
                    {callData[`${appLang}`]?.callUs}
                  </p>
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
                        {(el && el.title[`${appLang}`]) || el.title.uz}
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
                  loading='lazy'
                  alt='flag-image'
                  className='site__language-image'
                  src={
                    images[`${appLang}`]?.src ||
                    "/images/png/flags/flag-image-1.png"
                  }
                />
                <p className='site__language-text'>
                  {images[`${appLang}`]?.name || "uz"}
                </p>

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
                  target='_blank'
                  href='https://www.instagram.com/rt_holdings?igsh=MXY2NXJsYWRheTU0dw=='
                >
                  <IoLogoInstagram className='site__media-icon' />
                </a>
              </li>
              <li className='site__media'>
                <a
                  target='_blank'
                  href='https://www.instagram.com/rt_holdings?igsh=MXY2NXJsYWRheTU0dw=='
                >
                  <IoLogoTiktok className='site__media-icon' />
                </a>
              </li>
              <li className='site__media'>
                <a
                  target='_blank'
                  href='https://www.instagram.com/rt_holdings?igsh=MXY2NXJsYWRheTU0dw=='
                >
                  <FaWhatsapp className='site__media-icon' />
                </a>
              </li>
              <li className='site__media'>
                <a
                  target='_blank'
                  href='https://t.me/RT_Holdings'
                >
                  <FaTelegramPlane className='site__media-icon' />
                </a>
              </li>
            </ul>
            <Link
              href='/contact'
              className='site__contact-link'
            >
              {contactTitle[`${appLang}`] || contactTitle.uz}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
