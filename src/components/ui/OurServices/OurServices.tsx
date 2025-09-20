"use client";

import "./style.css";
import Link from "next/link";
import { get } from "lodash";
import Image from "next/image";
import { useGet } from "@/hooks";
import { useSelector } from "react-redux";
import { moreObj, serviceData } from "./data";
import { initialValuesTypes } from "@/context/reducer";

const OurServices = () => {
  const { appLang } = useSelector((state: initialValuesTypes) => state);

  const data = useGet({ path: "/service_type/list" });

  interface servicesTypes {
    id: string;
    image: string;
    title: "uz" | "ru" | "en" | "ko";
    description: "uz" | "ru" | "en" | "ko";
  }

  return (
    <section className="our-services">
      <div className="container">
        <div className="our-services__content">
          <h2 className="our-services__content-title">
            {serviceData[`${appLang}`]?.title}
          </h2>
          <p className="our-services__content-text">
            {serviceData[`${appLang}`]?.description}
          </p>
        </div>

        <ul className="our-services__list">
          {Array.isArray(data) &&
            data.map((el: servicesTypes) => {
              return (
                <li className="our-services__item" key={get(el, "id", "")}>
                  <Image
                    width={385}
                    height={270}
                    className="our-services__item-img"
                    src={get(el, "image", "")}
                    alt={get(el, `title_${appLang}`, "")}
                  />

                  <div className="our-services__item-box">
                    <div className="our-services__small-content">
                      <h3 className="our-services__item-box-title">
                        {get(el, `title_${appLang}`, "")}
                      </h3>
                      <p className="our-services__item-box-text">
                        {get(el, `description_${appLang}`, "")}
                      </p>
                    </div>
                    <Link
                      role="button"
                      className="our-services__item-box-btn"
                      href={`/services/${get(el, "id", "")}`}
                    >
                      {moreObj[`${appLang}`]}
                    </Link>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};

export default OurServices;
