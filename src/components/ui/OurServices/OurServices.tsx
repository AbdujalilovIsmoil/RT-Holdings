"use client";

import "./style.css";
import Link from "next/link";
import Image from "next/image";
import { useGet } from "@/hooks";
import { Items } from "@/typescript";
import { useSelector } from "react-redux";
import { moreObj, serviceData } from "./data";
import { initialValuesTypes } from "@/context/reducer";

const OurServices = () => {
  const { appLang } = useSelector((state: initialValuesTypes) => state);

  const data = useGet({ path: "/service_type/list" });

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
            data.map((el: Items) => {
              return (
                <li className="our-services__item" key={el.id}>
                  <Image
                    width={385}
                    height={270}
                    src={el?.image}
                    alt={el.title_uz}
                    className="our-services__item-img"
                  />

                  <div className="our-services__item-box">
                    <div className="our-services__small-content">
                      <h3 className="our-services__item-box-title">
                        {el[`title_${appLang}` as keyof Items]}
                      </h3>
                      <p className="our-services__item-box-text">
                        {el[`description_${appLang}` as keyof Items]}
                      </p>
                    </div>
                    <Link
                      role="button"
                      href={`/services/${el.id}`}
                      className="our-services__item-box-btn"
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
