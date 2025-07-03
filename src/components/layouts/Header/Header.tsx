"use client";

import "./style.css";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { Button } from "@/components";
import styles from "./style.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  FaBars,
  FiPhone,
  FaTimes,
  FaAngleDown,
  MdOutlineMailOutline,
} from "@/assets/react-icons";

const Header = () => {
  const pathName = usePathname();

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const openToggleVisible = () => setIsVisible(prevState => !prevState);

  const navigationRef = useRef<HTMLDivElement>(null);

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
      title: "Ishlar",
      path: "/projects",
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
    {
      id: 6,
      title: "Xizmatlar",
      path: "/services",
    },
    {
      id: 7,
      path: "/contact",
      title: "Biz bilan aloqa",
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

  const [data] = useState<servicesTypes>({
    id: 1,
    email: "",
    youtube_link: "",
    telegram_link: "",
    facebook_link: "",
    instagram_link: "",
    phone_numbers: [{ phone_number: "" }],
  });

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
                "container",
              )}
            >
              <Button
                type='button'
                onClick={openToggleVisible}
                className={classNames(styles["header-close__btn"])}
              >
                <FaTimes
                  className={classNames(styles["header-close__btn-times"])}
                />
              </Button>
            </div>
          </div>
          <div className='container'>
            <ul className={classNames(styles["header-close__medias"])}>
              <li className={classNames(styles["header-close__media"])}>
                <a
                  href={`mailto:${data && data.email}`}
                  target='_blank'
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
                              styles["header-close__link-icon"],
                            )}
                          />
                        </div>

                        <p
                          className={classNames(
                            styles["header-close__link-text"],
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
                              pathName === el.path,
                          },
                        )}
                      >
                        {el && el.title}
                        <FaAngleDown
                          className={classNames(
                            styles["header-close__item-arrow"],
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

      <div
        className={classNames(styles["header__top"])}
        ref={navigationRef}
      >
        <div
          className={classNames(styles["header__top-container"], "container")}
        >
          <Link href='/'>
            <Image
              width={210}
              height={70}
              alt='RT Holdings'
              src={"/images/svg/site-header/site-logo.svg"}
              className={classNames(styles["header__top-logo"])}
            />
          </Link>

          <Button
            type='button'
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
                    <li
                      className={classNames(styles["nav__item"])}
                      key={index}
                    >
                      <Link
                        href={el.path}
                        className={classNames(styles["nav__item-link"], {
                          [styles["nav__item-link--active"]]:
                            pathName === el.path,
                        })}
                      >
                        {el && el.title}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
