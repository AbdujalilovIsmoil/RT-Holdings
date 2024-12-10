"use client";

import Link from "next/link";
import classNames from "classnames";
import styles from "./index.module.css";
import { useRouter } from "next/router";

const Hero = ({ page }: { page: string }) => {
  interface pageDataTypes {
    id: number;
    path: string;
    text: string;
    title: string;
  }

  const pageData: pageDataTypes[] = [
    {
      id: 1,
      title: "About us",
      path: "/about",
      text: "Lorem ipsum dolor sit amet consectetur. Velit sagittis nec vulputate aliquet at suspendisse dui semper feugiat.",
    },
    {
      id: 2,
      title: "Projects",
      path: "/projects",
      text: "Lorem ipsum dolor sit amet consectetur. Velit sagittis nec vulputate aliquet at suspendisse dui semper feugiat.",
    },
    {
      id: 3,
      title: "News",
      path: "/news",
      text: "Lorem ipsum dolor sit amet consectetur. Velit sagittis nec vulputate aliquet at suspendisse dui semper feugiat.",
    },
    {
      id: 4,
      title: "News",
      path: "/news",
      text: "Lorem ipsum dolor sit amet consectetur. Velit sagittis nec vulputate aliquet at suspendisse dui semper feugiat.",
    },
    {
      id: 5,
      title: "Sale",
      path: "/sale",
      text: "Lorem ipsum dolor sit amet consectetur. Velit sagittis nec vulputate aliquet at suspendisse dui semper feugiat.",
    },
    {
      id: 6,
      title: "Our Services",
      path: "/services",
      text: "Lorem ipsum dolor sit amet consectetur. Velit sagittis nec vulputate aliquet at suspendisse dui semper feugiat.",
    },
    {
      id: 7,
      title: "Contact us",
      path: "/contact",
      text: "Lorem ipsum dolor sit amet consectetur. Velit sagittis nec vulputate aliquet at suspendisse dui semper feugiat.",
    },
    {
      id: 7,
      title: "Contact us",
      path: "/contact",
      text: "Lorem ipsum dolor sit amet consectetur. Velit sagittis nec vulputate aliquet at suspendisse dui semper feugiat.",
    },
  ];

  const location = useRouter();

  const getImage = (page: string) => {
    if (page === location.pathname && location.pathname === "/") {
      return "hero-background-image.jpg";
    } else if (page === "/about") {
      return "hero-background-image-1.jpg";
    } else if (page === "/contact") {
      return "hero-background-image-4.jpg";
    } else if (page === "/projects") {
      return "hero-background-image-3.jpg";
    } else if (page === "/news") {
      return "hero-background-image-2.jpg";
    } else if (page === "/sale") {
      return "hero-background-image-1.jpg";
    } else if (page === "/services") {
      return "hero-background-image-1.jpg";
    }
  };

  const heroStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `linear-gradient(90deg, rgba(30, 36, 44, 0.8) 0%, rgba(30, 36, 44, 0.6) 43.96%, rgba(30, 36, 44, 0.6) 66.39%), url(/images/jpg/${getImage(
      page
    )})`,
  };

  if (page === "/") {
    return (
      <section className={classNames(styles["site-hero"])} style={heroStyle}>
        <h1 className="visually-hidden">RT Holdings</h1>

        <div className="container">
          <div className={classNames(styles["site-hero__content"])}>
            <span className={classNames(styles["site-hero__content-small"])}>
              Lorem ipsum dolor sit amet.
            </span>
            <h2 className={classNames(styles["site-hero__content-title"])}>
              <span className={classNames(styles["site-hero__conetent-among"])}>
                Lorem
              </span>
              ipsum dolor sit amet consectetur. Mauris eleifend dui
            </h2>

            <p className={classNames(styles["site-hero__content-text"])}>
              Lorem ipsum dolor sit amet consectetur. Velit sagittis nec
              vulputate aliquet at suspendisse dui semper feugiat.
            </p>

            <div className={classNames(styles["site-hero__buttons"])}>
              <Link
                href="/services"
                className={classNames(
                  styles["site-hero__buttons-button"],
                  styles["site-hero__buttons-button--active"]
                )}
              >
                Explore Our Services
              </Link>
              <Link
                href="/about"
                className={classNames(styles["site-hero__buttons-button"])}
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className={classNames(styles["site-hero"])} style={heroStyle}>
        <h1 className="visually-hidden">RT Holdings</h1>
        <div className="container">
          {pageData.length > 0 &&
            [pageData.find((el: pageDataTypes) => el.path === page)].map(
              (el: pageDataTypes) => {
                return (
                  <div className={classNames(styles["content"])} key={el?.id}>
                    <h2 className={classNames(styles["content-title"])}>
                      {el && el.title}
                    </h2>
                    <p className={classNames(styles["content-text"])}>
                      {el && el.text}
                    </p>
                  </div>
                );
              }
            )}
        </div>
      </section>
    );
  }
};

export default Hero;
