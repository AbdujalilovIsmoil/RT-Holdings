"use client";

import "./style.css";
import Image from "next/image";
// import { useGet } from "@/hooks";
import { useEffect } from "react";
import { language } from "./data";
import { Hero } from "@/components";
// import { Items } from "@/typescript";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { initialValuesTypes } from "@/context/reducer";
import { useGet } from "@/hooks";
import { get } from "lodash";
// import {
//   FaYoutube,
//   FaFacebook,
//   FaTelegramPlane,
//   AiFillInstagram,
// } from "@/assets/react-icons";

const ServicesView = () => {
  const pathName = usePathname();
  const data = useGet({ path: "/services/" });

  const { appLang } = useSelector((state: initialValuesTypes) => state);

  const id = pathName.split("/").at(-1);

  useEffect(() => {
    document.title = language[`${appLang}`];
  }, [appLang]);

  interface ScoreTypes {
    image: string;
    title_uz: string;
    title_ru: string;
    title_en: string;
    title_ko: string;
    id: string | number;
    youtube_link?: string;
    telegram_link?: string;
    description_uz: string;
    description_ru: string;
    description_en: string;
    description_ko: string;
    instagram_link?: string;
  }

  console.log(data);

  type Lang = "uz" | "ru" | "en" | "ko";

  const descriptionKey = `description_${appLang}` as `description_${Lang}`;

  return (
    <section className="services-view">
      <Hero page="/services" />
      {Array.isArray(get(data, "data", [])) &&
        get(data, "data", [])
          .filter((el) => get(el, "id") === id)
          .map((el) => {
            return (
              <div key={get(el, "id")}>
                <div className="services__logo">
                  <div className="container services__logo-container">
                    {get(el, "attributes.image", "") && (
                      <Image
                        width={400}
                        height={200}
                        src={get(el, "attributes.image", "")}
                        className="services__logo-img"
                        alt={get(el, `attributes.title_${appLang}`)}
                      />
                    )}
                  </div>
                </div>

                <div className="container">
                  <ul className="services-view__list">
                    <li key={get(el, "id", "")} className="services-view__item">
                      <h2 className="services-view__item-title">
                        {get(el, `attributes.title_${appLang}`)}
                      </h2>
                      <p className="services-view__item-text">
                        {el[descriptionKey]}
                        {get(el, `attributes.description_${appLang}`)}
                      </p>
                    </li>
                  </ul>

                  {/* <div className="services-view-media__container">
                    <h3 className="service-view-media__container-title">
                      Ijtimoiy tarmoqlar
                    </h3>
                    <ul className="services-view__medias">
                      {el.telegram_link ? (
                        <li className="services-view__media">
                          <a href="#" target="_blank">
                            <FaTelegramPlane className="services-view__media-icon" />
                          </a>
                        </li>
                      ) : (
                        ""
                      )}
                      {el.instagram_link ? (
                        <li className="services-view__media">
                          <a href="#" target="_blank">
                            <AiFillInstagram className="services-view__media-icon" />
                          </a>
                        </li>
                      ) : (
                        ""
                      )}
                      {el.youtube_link ? (
                        <li className="services-view__media">
                          <a href="#" target="_blank">
                            <FaYoutube className="services-view__media-icon" />
                          </a>
                        </li>
                      ) : (
                        ""
                      )}
                      <li className="services-view__media">
                        <a href="#" target="_blank">
                          <FaFacebook className="services-view__media-icon" />
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
            );
          })}
    </section>
  );
};

export default ServicesView;
