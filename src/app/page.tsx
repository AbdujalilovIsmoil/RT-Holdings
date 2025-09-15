"use client";

import "./not-found.css";
import Link from "next/link";
// import { get } from "lodash";
// import { useGet } from "@/hooks";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { initialValuesTypes } from "@/context/reducer";
import { StringInnerTypes, StringMap } from "@/typescript";
import {
  // News,
  Score,
  AboutUsUI,
  ContactUI,
  OurServices,
  // Testimonials,
} from "@/components";

const Home = () => {
  const { appLang } = useSelector((state: initialValuesTypes) => state);

  const heroData: StringInnerTypes = {
    uz: {
      site_name: "RT Holdings",
      hero_title: "Sizning tanlovingiz biz uchun muhim!",
      hero_subtitle: `<span className='site-hero__conetent-among'> Maqsadlarimiz</span> mijozlarimizga sifatli, ishonchli va tezkor xizmat ko’rsatishdir`,
      hero_text: `Har bir mijoz uchun individual yondashuv, har bir loyiha uchun yuqori mas’uliyat — bu bizning ish prinsipimizdir. RT Holdings doimo ishonchli texnika, professional xizmat va o‘z vaqtida yetkazib berishni kafolatlaydi.`,
      button_text: "Xizmatlarimiz bilan tanishing",
      button_text2: "Biz haqimizda ko'proq ma'lumot oling",
    },
    ru: {
      site_name: "RT Holdings",
      hero_title: "Ваш выбор важен для нас!",
      hero_subtitle: `<span className='site-hero__conetent-among'> Наши цели</span> — предоставление качественных, надежных и оперативных услуг нашим клиентам`,
      hero_text: `Индивидуальный подход к каждому клиенту, высокая ответственность за каждый проект — это наш принцип работы. RT Holdings всегда гарантирует надежную технику, профессиональное обслуживание и своевременную доставку.`,
      button_text: "Познакомьтесь с нашими услугами",
      button_text2: "Узнайте больше о нас",
    },
    en: {
      site_name: "RT Holdings",
      hero_title: "Your choice is important to us!",
      hero_subtitle: `<span className='site-hero__conetent-among'> Our goals</span> are to provide quality, reliable, and prompt service to our clients`,
      hero_text: `An individual approach to each client, high responsibility for each project — this is our work principle. RT Holdings always guarantees reliable equipment, professional service, and timely delivery.`,
      button_text: "Get to know our services",
      button_text2: "Learn more about us",
    },
    ko: {
      site_name: "RT Holdings",
      hero_title: "당신의 선택은 우리에게 중요합니다!",
      hero_subtitle: `<span className='site-hero__conetent-among'> 우리의 목표</span> 는 고객에게 품질, 신뢰성 및 신속한 서비스를 제공하는 것입니다`,
      hero_text: `각 고객에 대한 개별적인 접근, 각 프로젝트에 대한 높은 책임감 — 이것이 우리의 업무 원칙입니다. RT Holdings는 항상 신뢰할 수 있는 장비, 전문 서비스 및 적시 배송을 보장합니다.`,
      button_text: "우리의 서비스 알아보기",
      button_text2: "우리에 대해 더 알아보세요",
    },
  };

  // const data = useGet({
  //   path: "/posts",
  // });

  const language: StringMap = {
    ko: "홈 페이지",
    en: "Home page",
    uz: "Bosh sahifa",
    ru: "Главная страница",
  };

  const metaKeywords: StringMap = {
    uz: "RT Holdings, qurilish texnikalari, sanoat uskunalari, logistika texnikalari, Janubiy Koreya texnikalari, Yevropa texnikalari, Xitoy texnikalari, texnika importi, texnika eksporti, O‘zbekistonda texnika, MDH texnika bozori",
    ru: "RT Holdings, строительная техника, промышленное оборудование, логистическая техника, техника из Южной Кореи, техника из Европы, техника из Китая, импорт техники, экспорт техники, техника в Узбекистане, рынок техники СНГ",
    en: "RT Holdings, construction equipment, industrial machinery, logistics equipment, Korean equipment, European equipment, Chinese equipment, equipment import, equipment export, Uzbekistan machinery, CIS machinery market",
    ko: "RT Holdings, 건설 장비, 산업 기계, 물류 장비, 한국 장비, 유럽 장비, 중국 장비, 장비 수입, 장비 수출, 우즈베키스탄 기계, CIS 기계 시장",
  };

  const metaDescriptions: StringMap = {
    uz: "RT Holdings – O‘zbekistonda qurilish, sanoat va logistika sohalarida yuqori sifatli texnika importi va eksportida yetakchi kompaniya.",
    ru: "RT Holdings – ведущая компания в Узбекистане по импорту и экспорту строительной, промышленной и логистической техники.",
    en: "RT Holdings – a leading company in Uzbekistan for importing and exporting construction, industrial, and logistics equipment.",
    ko: "RT Holdings – 우즈베키스탄에서 건설, 산업 및 물류 장비의 수입과 수출을 선도하는 기업입니다.",
  };

  useEffect(() => {
    document.title = language[`${appLang}`];
    document.querySelector("html")?.setAttribute("lang", `${appLang}`);

    let author = document.querySelector("meta[name='author']");

    if (!author) {
      author = document.createElement("meta");
      author.setAttribute("name", "author");
      document.head.appendChild(author);
    }

    author.setAttribute("content", "rtholdings.uz");

    let descriptionMeta = document.querySelector("meta[name='description']");
    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta");
      descriptionMeta.setAttribute("name", "description");
      document.head.appendChild(descriptionMeta);
    }

    descriptionMeta.setAttribute("content", metaDescriptions[`${appLang}`]);

    let keywordsMeta = document.querySelector("meta[name='keywords']");
    if (!keywordsMeta) {
      keywordsMeta = document.createElement("meta");
      keywordsMeta.setAttribute("name", "keywords");
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute("content", metaKeywords[`${appLang}`]);
  }, [appLang]);

  return (
    <>
      <section
        className="site-hero"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundImage: `linear-gradient(90deg, rgba(30, 36, 44, 0.8) 0%, rgba(30, 36, 44, 0.6) 43.96%, rgba(30, 36, 44, 0.6) 66.39%), url("/images/jpg/hero-background-image.jpg")`,
        }}
      >
        <h1 className="visually-hidden">{heroData[`${appLang}`]?.site_name}</h1>

        <div className="container">
          <div className="site-hero__content">
            <span className="site-hero__content-small">
              {heroData[`${appLang}`]?.hero_title}
            </span>
            <h2
              className="site-hero__content-title"
              dangerouslySetInnerHTML={{
                __html: heroData[`${appLang}`]?.hero_subtitle,
              }}
            ></h2>

            <p className="site-hero__content-text">
              {heroData[`${appLang}`]?.hero_text}
            </p>

            <div className="site-hero__buttons">
              <Link
                href="/services"
                className="site-hero__buttons-button site-hero__buttons-button--active"
              >
                {heroData[`${appLang}`]?.button_text}
              </Link>
              <Link href="/about" className="site-hero__buttons-button">
                {heroData[`${appLang}`]?.button_text2}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <AboutUsUI />
      <Score />
      <OurServices />
      {/* <News
        data={
          Array.isArray(get(data, "data", []))
            ? get(data, "data", []).slice(0, 4)
            : []
        }
      /> */}
      {/* <Testimonials /> */}
      <ContactUI />
    </>
  );
};

export default Home;
