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
// import {
//   FaYoutube,
//   FaFacebook,
//   FaTelegramPlane,
//   AiFillInstagram,
// } from "@/assets/react-icons";

const ServicesView = () => {
  const pathName = usePathname();
  // const data = useGet({ path: "/service_type/list" });

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

  const data: ScoreTypes[] = [
    {
      id: 1,
      title_en: "RT MOTORS",
      title_ru: "RT MOTORS",
      title_uz: "RT MOTORS",
      title_ko: "RT MOTORS",
      image: "/images/jpg/rt-motors.jpg",
      description_en:
        "RT Motors - Delivers luxury cars from South Korea to the world on demand",
      description_ru:
        "RT Motors — поставляет автомобили класса люкс из Южной Кореи по всему миру по запросу.",
      description_uz:
        "RT Motors - Janubiy Koreyadan hashamatlik avtomobillarni zakaz orqali butun dunyoqga yetkazib beradi",
      description_ko:
        "RT Motors - 수요에 따라 한국의 고급 자동차를 전 세계로 배송합니다.",
      telegram_link: "",
    },
    {
      id: 2,
      title_en: "RT MEDLINE",
      title_ru: "RT MEDLINE",
      title_uz: "RT MEDLINE",
      title_ko: "RT MEDLINE",
      image: "/images/jpg/rt-medline.jpg",
      description_en:
        "RT Medline is a multidisciplinary family hospital. This hospital has more than 20 qualified doctors working in about 10 areas.",
      description_ru:
        "RT Medline — многопрофильная семейная больница. В ней работают более 20 квалифицированных врачей примерно в 10 областях.",
      description_uz:
        "RT Medline - ko'p tarmoqli oilaviy shifoxonasi. bu shifoxonada 20 dan ortiq malakali shifokorlar 10 ga yaqin sohalarda o’z faoliyatini olib kelmoqda.",
      description_ko:
        "RT Medline은 다학제 가정병원입니다. 이 병원에는 약 10개 분야에서 20명 이상의 자격을 갖춘 의사가 근무하고 있습니다.",
    },
    {
      id: 3,
      title_en: "RT HS GROUP LOGISTICS",
      title_ru: "RT HS GROUP LOGISTICS",
      title_uz: "RT HS GROUP LOGISTICS",
      title_ko: "RT HS GROUP LOGISTICS",
      image: "/images/jpg/our-services-4.jpg",
      description_en:
        "It is a campaign created on June 8, 2023 by Korea's HS Express Logistics and Uzbekistan's RT Holdings to create a comprehensive logistics system. It is currently capable of delivering cargo to every corner of the world.",
      description_ru:
        "Это кампания, созданная 8 июня 2023 года корейской компанией HS Express Logistics и узбекской компанией RT Holdings для создания комплексной логистической системы. В настоящее время она способна доставлять грузы в любую точку мира.",
      description_uz:
        "2023-yil 8-iyunda Koreyaning HS Express logistics hamda O'zbekistonning RT Holdings kampaniyasi tomonidan kompleks lagistik tizim yaratash uchun yaratilgan kampaniyadir. Hozirda dunyoni ishtalgan chekkasiga yuklarni yetkazib berish imkoniyatiga ega.",
      description_ko:
        "2023년 8월 8일에 캄파니야에 도착하여 HS Express Logistics 및 2023년 8월 8일에 콤파니에이 RT Holdings가 создания에 합류했습니다. комплексной 논리 시스템. В настоячее время она способна доставлять грузы в лубук точку mirа.",
    },
    {
      id: 4,
      title_en: "DREAM EXPRESS",
      title_ru: "DREAM EXPRESS",
      title_uz: "DREAM EXPRESS",
      title_ko: "DREAM EXPRESS",
      image: "/images/jpg/dream-express.jpg",
      description_en:
        "Dream Express has launched a service for our Uzbek compatriots to deliver their goods from their destination in Korea to their destination in Uzbekistan for the first time.",
      description_ru:
        "Компания Dream Express впервые запустила услугу по доставке товаров для наших узбекских соотечественников из Кореи в пункт назначения в Узбекистане.",
      description_uz:
        "Dream express ilk bor o’zbek vatandoshlarimizni yuklarini Koreyadagi manzilidan O’zbekistondagi manziligacha yetkazish xizmatini yo’lga qo’ygan.",
      description_ko:
        "드림익스프레스는 우즈베키스탄 동포들이 한국의 목적지에서 우즈베키스탄의 목적지까지 상품을 배송하는 서비스를 처음으로 시작했습니다.",
    },
    {
      id: 5,
      image: "/images/jpg/our-services-4.jpg",
      title_en: "KORTEX OIL",
      title_ru: "KORTEX OIL",
      title_uz: "KORTEX OIL",
      title_ko: "KORTEX OIL",
      description_en:
        "Since 2025, it has been producing a variety of high-quality motor oils for cars and special equipment.",
      description_ru:
        "С 2025 года производит широкий ассортимент высококачественных моторных масел для автомобилей и спецтехники.",
      description_uz:
        "2025- yildan buyon avtomobillar va maxsus texnikalar uchun turli xil yuqori sifatdagi motor moylari ishlab chiqarib kelmoqda.",
      description_ko:
        "2025년부터 자동차 및 특수장비용 다양한 고품질 모터오일을 생산하고 있습니다.",
    },
    {
      id: 6,
      title_en: "AKA TAXI",
      title_ru: "AKA TAXI",
      title_uz: "AKA TAXI",
      title_ko: "AKA TAXI",
      image: "/images/jpg/Aka-taxi.jpg",
      description_en: "Convenient platform for inter-regional taxi service",
      description_ru: "Удобная платформа для межрегионального такси",
      description_uz: "Viloyatlar aro taksi xizmati uchun qulay platforma",
      description_ko: "지역 간 택시 서비스를 위한 편리한 플랫폼",
    },
  ];

  type Lang = "uz" | "ru" | "en" | "ko";

  const titleKey = `title_${appLang}` as `title_${Lang}`;
  const descriptionKey = `description_${appLang}` as `description_${Lang}`;

  return (
    <section className="services-view">
      <Hero page="/services" />
      {Array.isArray(data) &&
        data
          .filter((el) => el.id === Number(id))
          .map((el) => {
            return (
              <div key={el.id}>
                <div className="services__logo">
                  <div className="container services__logo-container">
                    <Image
                      width={400}
                      height={200}
                      src={el.image}
                      className="services__logo-img"
                      alt={el[titleKey]}
                    />
                  </div>
                </div>

                <div className="container">
                  <ul className="services-view__list">
                    <li key={el.id} className="services-view__item">
                      <h2 className="services-view__item-title">
                        {el[titleKey]}
                      </h2>
                      <p className="services-view__item-text">
                        {el[descriptionKey]}
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

      <></>
    </section>
  );
};

export default ServicesView;
