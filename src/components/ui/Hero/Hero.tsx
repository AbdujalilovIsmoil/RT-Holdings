"use client";

import "./style.css";
import { useSelector } from "react-redux";
import { pageData, pageDataProperties } from "./data";
import { initialValuesTypes } from "@/context/reducer";

const Hero = ({ page }: { page: string }) => {
  const { appLang } = useSelector((state: initialValuesTypes) => state);

  const getImage = (page: string) => {
    if (page === "/about") {
      return "hero-background-image-1.jpg";
    } else if (page === "/contact") {
      return "hero-background-image-9.jpg";
    } else if (page === "/news") {
      return "hero-background-image-8.jpg";
    } else if (page === "/sale") {
      return "hero-background-image-5.jpg";
    } else if (page === "/services") {
      return "hero-background-image-7.jpg";
    }
  };

  const heroStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `linear-gradient(90deg, rgba(30, 36, 44, 0.8) 0%, rgba(30, 36, 44, 0.6) 43.96%, rgba(30, 36, 44, 0.6) 66.39%), url(/images/jpg/${getImage(
      page
    )})`,
  };

  if (page !== "/") {
    return (
      <section style={heroStyle} className="site-hero">
        <h1 className="visually-hidden">RT Holdings</h1>
        <div className="container">
          {pageData[`${appLang}`]?.length > 0 &&
            [
              pageData[`${appLang}`].find(
                (el: pageDataProperties) => el?.path === page
              ),
            ].map((el) => {
              return (
                <div key={el?.id} className="content">
                  <h2 className="content-title">{el && el?.title}</h2>
                  <p className="content-text">{el && el?.text}</p>
                </div>
              );
            })}
        </div>
      </section>
    );
  }
};

export default Hero;
