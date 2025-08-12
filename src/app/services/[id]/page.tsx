"use client";

import "./style.css";
import Image from "next/image";
import { useGet } from "@/hooks";
import { useEffect } from "react";
import { language } from "./data";
import { Hero } from "@/components";
import { Items } from "@/typescript";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { initialValuesTypes } from "@/context/reducer";
import {
  FaYoutube,
  FaFacebook,
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

  return (
    <section className="services-view">
      <Hero page="/services" />
      {Array.isArray(data) &&
        data
          .filter((el: Items) => el.id === id)
          .map((el: Items) => {
            return (
              <div key={el.id}>
                <div className="services__logo">
                  <div className="container services__logo-container">
                    <Image
                      width={400}
                      height={200}
                      src={el.image}
                      className="services__logo-img"
                      alt={el[`title_${appLang}` as keyof Items]}
                    />
                  </div>
                </div>

                <div className="container">
                  <ul className="services-view__list">
                    <li key={el.id} className="services-view__item">
                      <h2 className="services-view__item-title">
                        {el[`title_${appLang}` as keyof Items]}
                      </h2>
                      <p className="services-view__item-text">
                        {el[`description_${appLang}` as keyof Items]}
                      </p>
                    </li>
                  </ul>

                  <div className="services-view-media__container">
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
                  </div>
                </div>
              </div>
            );
          })}

      <></>
    </section>
  );
};

export default ServicesView;
