"use client";

import "./style.css";
import { get } from "lodash";
import Image from "next/image";
import { useGet } from "@/hooks";
import { useEffect } from "react";
import { language } from "./data";
import { Hero } from "@/components";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { initialValuesTypes } from "@/context/reducer";
import {
  FaYoutube,
  FaTelegramPlane,
  AiFillInstagram,
} from "@/assets/react-icons";

const ServicesView = () => {
  const pathName = usePathname();
  const data = useGet({ path: "/service_type/list" });

  const { appLang } = useSelector((state: initialValuesTypes) => state);

  const id = pathName.split("/").at(-1);

  useEffect(() => {
    document.title = language[`${appLang}`];
  }, [appLang]);

  type Lang = "uz" | "ru" | "en" | "ko";

  interface servicesTypes {
    id: string;
    title: Lang;
    image: string;
    description: Lang;
    tiktok_link: string;
    youtube_link: string;
    whatsup_link: string;
    telegram_link: string;
    instagram_link: string;
  }

  const mediasTitle = {
    ko: "소셜 네트워크",
    en: "Social networks",
    ru: "Социальные сети",
    uz: "Ijtimoiy tarmoqlar",
  };

  return (
    <section className="services-view">
      <Hero page="/services" />
      {Array.isArray(data) &&
        data
          .filter((el: servicesTypes) => get(el, "id") === id)
          .map((el: servicesTypes) => {
            return (
              <div key={get(el, "id")}>
                <div className="services__logo">
                  <div className="container services__logo-container">
                    {get(el, "image", "") && (
                      <Image
                        width={400}
                        height={200}
                        src={get(el, "image", "")}
                        className="services__logo-img"
                        alt={`${get(el, `title_${appLang}`)}`}
                      />
                    )}
                  </div>
                </div>

                <div className="container">
                  <ul className="services-view__list">
                    <li key={get(el, "id", "")} className="services-view__item">
                      <h2 className="services-view__item-title">
                        {get(el, `title_${appLang}`)}
                      </h2>
                      <p className="services-view__item-text">
                        {get(el, `description_${appLang}`)}
                      </p>
                    </li>
                  </ul>

                  <div className="services-view-media__container">
                    <h3 className="service-view-media__container-title">
                      {mediasTitle[`${appLang}` as Lang]}
                    </h3>
                    <ul className="services-view__medias">
                      {el.telegram_link ? (
                        <li className="services-view__media">
                          <a href={el.telegram_link} target="_blank">
                            <FaTelegramPlane className="services-view__media-icon" />
                          </a>
                        </li>
                      ) : (
                        ""
                      )}
                      {el.instagram_link ? (
                        <li className="services-view__media">
                          <a href={el.instagram_link} target="_blank">
                            <AiFillInstagram className="services-view__media-icon" />
                          </a>
                        </li>
                      ) : (
                        ""
                      )}
                      {el.youtube_link ? (
                        <li className="services-view__media">
                          <a href={el.youtube_link} target="_blank">
                            <FaYoutube className="services-view__media-icon" />
                          </a>
                        </li>
                      ) : (
                        ""
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
    </section>
  );
};

export default ServicesView;
