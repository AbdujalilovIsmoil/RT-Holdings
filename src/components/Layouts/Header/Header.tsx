"use client";

import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import Button from "@/components/UI/Button";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FlagImage1,
  FlagImage2,
  FlagImage3,
  FlagImage4,
} from "../../../../public/images/png";
import {
  FaBars,
  FiPhone,
  FaTimes,
  FaAngleDown,
  MdOutlineMailOutline,
} from "../../../../public/react-icons";
import {
  FaFacebook,
  IoLogoInstagram,
  FaTelegramPlane,
} from "../../../../public/react-icons";

const Header = () => {
  const router = useRouter();

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const openToggleVisible = () => setIsVisible((prevState) => !prevState);

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
      title: "Home",
    },
    {
      id: 2,
      title: "About Us",
      path: "/about",
    },
    {
      id: 3,
      title: "Projects",
      path: "/projects",
    },
    {
      id: 4,
      title: "News",
      path: "/news",
    },
    {
      id: 5,
      title: "Sale",
      path: "/sale",
    },
    {
      id: 6,
      title: "Services",
      path: "/services",
    },
    {
      id: 7,
      title: "Contact Us",
      path: "/contact",
    },
  ];

  interface phoneNumbersTypes {
    phone_number: string;
  }

  interface servicesTypes {
    id: number;
    email: string;
    youtube_link: string;
    telegram_link: string;
    facebook_link: string;
    instagram_link: string;
    phone_numbers: phoneNumbersTypes[];
  }

  const [data, setData] = useState<servicesTypes>({
    id: 1,
    email: "",
    youtube_link: "",
    telegram_link: "",
    facebook_link: "",
    instagram_link: "",
    phone_numbers: [{ phone_number: "" }],
  });

  useEffect(() => {
    fetch("https://api.rtholdings.uz/api/v1/common/settings")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const setLangData = (data: flagDataType) => {
    setIsOpen(false);
    setFlagData(data);
  };

  return (
    <>
      <div
        className={classNames(styles["header-close"], {
          [styles["header-close--open"]]: isVisible,
        })}
      >
        <div className={classNames(styles["header-close__background"])}>
          <div className={classNames(styles["header-close__top"])}>
            <div
              className={classNames(
                styles["header-close__container"],
                "container"
              )}
            >
              {/* <Link to="/" onClick={openToggleVisible}>
                <img
                  width={78}
                  height={26}
                  src={siteLogo}
                  className="header-close__top-logo"
                />
              </Link> */}
              <Button
                type="button"
                onClick={openToggleVisible}
                className={classNames(styles["header-close__btn"])}
              >
                <FaTimes
                  className={classNames(styles["header-close__btn-times"])}
                />
              </Button>
            </div>
          </div>
          <div className="container">
            <ul className={classNames(styles["header-close__medias"])}>
              <li className={classNames(styles["header-close__media"])}>
                <a
                  href={`mailto:${data && data.email}`}
                  target="_blank"
                  className={classNames(styles["header-close__link"])}
                >
                  <div className={classNames(styles["header-close__bg"])}>
                    <MdOutlineMailOutline
                      className={classNames(styles["header-close__link-icon"])}
                    />
                  </div>
                  <p className={classNames(styles["header-close__link-text"])}>
                    {data && data.email}
                  </p>
                </a>
              </li>
              {data &&
                data.phone_numbers.length > 0 &&
                data &&
                data.phone_numbers.map((el: phoneNumbersTypes, index) => {
                  return (
                    <li
                      key={index}
                      className={classNames(styles["header-close__media"])}
                    >
                      <a
                        href={`tel:${el && el.phone_number}`}
                        className={classNames(styles["header-close__link"])}
                      >
                        <div className={classNames(styles["header-close__bg"])}>
                          <FiPhone
                            className={classNames(
                              styles["header-close__link-icon"]
                            )}
                          />
                        </div>

                        <p
                          className={classNames(
                            styles["header-close__link-text"]
                          )}
                        >
                          {el && el.phone_number}
                        </p>
                      </a>
                    </li>
                  );
                })}
            </ul>

            <ul className={classNames(styles["header-close__list"])}>
              {links.length > 0 &&
                links.map((el: linksType, index) => {
                  return (
                    <li
                      key={index}
                      className={classNames(styles["header-close__item"])}
                    >
                      <Link
                        href={el && el.path}
                        onClick={openToggleVisible}
                        className={classNames(
                          styles["header-close__item-link"],
                          {
                            [styles["header-close__item-link--active"]]:
                              router.pathname === el.path,
                          }
                        )}
                      >
                        {el && el.title}
                        <FaAngleDown
                          className={classNames(
                            styles["header-close__item-arrow"]
                          )}
                        />
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>

      <div className={classNames(styles["header__top"])} ref={navigationRef}>
        <div
          className={classNames(styles["header__top-container"], "container")}
        >
          <Link href="/">
            <Image
              width={210}
              height={70}
              alt="RT Holdings"
              src={"/images/svg/site-header/site-logo.svg"}
              className={classNames(styles["header__top-logo"])}
            />
          </Link>

          <ul className={classNames(styles["header__medias"])}>
            <li className={classNames(styles["header__media"])}>
              <a
                className={classNames(styles["header__link"])}
                href={`mailto:${data.email}`}
              >
                <span className={classNames(styles["header__background"])}>
                  <MdOutlineMailOutline
                    className={classNames(styles["header__background-icon"])}
                  />
                </span>
                <div className={classNames(styles["header__content"])}>
                  <p className={classNames(styles["header__media-text"])}>
                    Email
                  </p>
                  <p className={classNames(styles["header__media-text"])}>
                    contact
                  </p>
                </div>
              </a>
            </li>
            {data &&
              data.phone_numbers.length > 0 &&
              data &&
              data.phone_numbers.map((el: phoneNumbersTypes, index) => {
                return (
                  <li
                    key={index}
                    className={classNames(styles["header__media"])}
                  >
                    <a
                      className={classNames(styles["header__link"])}
                      href={`tel:${el.phone_number}`}
                    >
                      <span
                        className={classNames(styles["header__background"])}
                      >
                        <FiPhone
                          className={classNames(
                            styles["header__background-icon"]
                          )}
                        />
                      </span>
                      <div className={classNames(styles["header__content"])}>
                        <p className={classNames(styles["header__media-text"])}>
                          Call Us
                        </p>
                        <p className={classNames(styles["header__media-text"])}>
                          {el && el.phone_number}
                        </p>
                      </div>
                    </a>
                  </li>
                );
              })}
          </ul>

          <Button
            type="button"
            onClick={openToggleVisible}
            className={classNames(styles["header__bars"])}
          >
            <FaBars className={classNames(styles["header__bars-icon"])} />
          </Button>
        </div>
      </div>

      <div
        className={classNames(styles["site-navigation"], {
          [styles["site-navigation--scroll"]]: isScrolled,
        })}
      >
        <div className={classNames(styles["site__container"], "container")}>
          <nav className={classNames(styles["nav"])}>
            <ul className={classNames(styles["nav__list"])}>
              {links.length > 0 &&
                links.map((el: linksType, index) => {
                  return (
                    <li className={classNames(styles["nav__item"])} key={index}>
                      <Link
                        href={el.path}
                        className={classNames(styles["nav__item-link"], {
                          [styles["nav__item-link--active"]]:
                            router.pathname === el.path,
                        })}
                      >
                        {el && el.title}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </nav>

          <div className={classNames(styles["site__contact"])}>
            <div className={classNames(styles["site__languages"])}>
              <div
                role="button"
                onClick={() => setIsOpen((prevState) => !prevState)}
                className={classNames(styles["site__language"], {
                  [styles["site__language--open"]]: isOpen,
                })}
              >
                <Image
                  width={35}
                  height={35}
                  alt="flag-image"
                  src={flagData.flag}
                  className={classNames(styles["site__language-image"])}
                />
                <p className={classNames(styles["site__language-text"])}>
                  {flagData.lang}
                </p>

                <FaAngleDown
                  className={classNames(styles["site__language-icon"])}
                />
              </div>

              <ul
                className={classNames(styles["site__languages-list"], {
                  [styles["site__languages-list--open"]]: isOpen,
                })}
              >
                <li
                  className={classNames(styles["site__languages-item"])}
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
                    alt="flag-image"
                    src="/images/png/flags/flag-image-1.png"
                    className={classNames(styles["site__languages-item-image"])}
                  />
                  <p
                    className={classNames(styles["site__languages-item-text"])}
                  >
                    uz
                  </p>
                </li>
                <li
                  className={classNames(styles["site__languages-item"])}
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
                    alt="flag-image"
                    src="/images/png/flags/flag-image-3.png"
                    className={classNames(styles["site__languages-item-image"])}
                  />
                  <p
                    className={classNames(styles["site__languages-item-text"])}
                  >
                    ru
                  </p>
                </li>
                <li
                  className={classNames(styles["site__languages-item"])}
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
                    alt="flag-image"
                    src="/images/png/flags/flag-image-2.png"
                    className={classNames(styles["site__languages-item-image"])}
                  />
                  <p
                    className={classNames(styles["site__languages-item-text"])}
                  >
                    en
                  </p>
                </li>
                <li
                  className={classNames(styles["site__languages-item"])}
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
                    alt="flag-image"
                    src="/images/png/flags/flag-image-4.png"
                    className={classNames(styles["site__languages-item-image"])}
                  />
                  <p
                    className={classNames(styles["site__languages-item-text"])}
                  >
                    ko
                  </p>
                </li>
              </ul>
            </div>
            <ul className={classNames(styles["site__medias"])}>
              <li className={classNames(styles["site__media"])}>
                <a href={data.instagram_link} target="_blank">
                  <IoLogoInstagram
                    className={classNames(styles["site__media-icon"])}
                  />
                </a>
              </li>
              <li className={classNames(styles["site__media"])}>
                <a href={data.facebook_link} target="_blank">
                  <FaFacebook
                    className={classNames(styles["site__media-icon"])}
                  />
                </a>
              </li>
              <li className={classNames(styles["site__media"])}>
                <a href={data.telegram_link} target="_blank">
                  <FaTelegramPlane
                    className={classNames(styles["site__media-icon"])}
                  />
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className={classNames(styles["site__contact-link"])}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
