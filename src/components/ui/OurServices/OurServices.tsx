"use client";

import "./style.css";
import Link from "next/link";
import Image from "next/image";
import { useGet } from "@/hooks";
import { useSelector } from "react-redux";
import { initialValuesTypes } from "@/context/reducer";

const OurServices = () => {
  const { appLang } = useSelector((state: initialValuesTypes) => state);

  type ServiceDataType = {
    [key: string]: {
      link: string;
      title: string;
      description: string;
    };
  };

  const moreObj: { [key: string]: string } = {
    en: "Read more",
    ko: "더 읽어보세요",
    ru: "Читать далее",
    uz: "Ko'proq o'qish",
  };

  const serviceData: ServiceDataType = {
    uz: {
      title: "Bizning xizmatlarimiz",
      description:
        "RT Holdings kompaniyasi turli sohalarda yuqori sifatli xizmatlarni taklif etadi.",
      link: "/services",
    },
    ru: {
      title: "Наши услуги",
      description:
        "Компания RT Holdings предлагает высококачественные услуги в различных сферах.",
      link: "/services",
    },
    en: {
      title: "Our Services",
      description:
        "RT Holdings offers high-quality services in various fields.",
      link: "/services",
    },
    ko: {
      title: "우리의 서비스",
      description: "RT Holdings는 다양한 분야에서 고품질 서비스를 제공합니다.",
      link: "/services",
    },
  };

  const data = useGet({ path: "/service_type/list" });

  type Lang = "uz" | "ru" | "en" | "ko";

  type TitleField = `title_${Lang}`;
  type DescriptionField = `description_${Lang}`;

  type Items = {
    id: string;
    more: string;
    image: string;
  } & {
    [K in TitleField]: string;
  } & { [K in DescriptionField]: string };

  return (
    <section className='our-services'>
      <div className='container'>
        <div className='our-services__content'>
          <h2 className='our-services__content-title'>
            {serviceData[`${appLang}`]?.title}
          </h2>
          <p className='our-services__content-text'>
            {serviceData[`${appLang}`]?.description}
          </p>
        </div>

        <ul className='our-services__list'>
          {Array.isArray(data) &&
            data.map((el: Items) => {
              return (
                <li
                  className='our-services__item'
                  key={el.id}
                >
                  <Image
                    width={385}
                    height={270}
                    src={el?.image}
                    alt={el.title_uz}
                    className='our-services__item-img'
                  />

                  <div className='our-services__item-box'>
                    <div className='our-services__small-content'>
                      <h3 className='our-services__item-box-title'>
                        {el[`title_${appLang}` as keyof Items]}
                      </h3>
                      <p className='our-services__item-box-text'>
                        {el[`description_${appLang}` as keyof Items]}
                      </p>
                    </div>
                    <Link
                      role='button'
                      href={`/services/${el.id}`}
                      className='our-services__item-box-btn'
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
