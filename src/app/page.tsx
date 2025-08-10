"use client";

import "./not-found.css";
import Link from "next/link";
import { useGet } from "@/hooks";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { initialValuesTypes } from "@/context/reducer";
import {
  News,
  Score,
  AboutUsUI,
  ContactUI,
  OurServices,
  // Testimonials,
} from "@/components";

const Home = () => {
  const { appLang } = useSelector((state: initialValuesTypes) => state);

  type HeroDataType = {
    [key: string]: {
      site_name: string;
      hero_title: string;
      hero_subtitle: string;
      hero_text: string;
      button_text: string;
      button_text2: string;
    };
  };

  const heroData: HeroDataType = {
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

  const data = useGet({
    path: "/news/list",
  });

  type descritionsTypes = {
    [key: string]: string;
  };


   const language: descritionsTypes = {
    ko: "홈 페이지",
    en: "Home page",
    uz: "Bosh sahifa",
    ru: "Главная страница",
  };

  useEffect(() => {
    document.title = language[`${appLang}`];
  }, [appLang]);

  return (
    <>
      <section
        className='site-hero'
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundImage: `linear-gradient(90deg, rgba(30, 36, 44, 0.8) 0%, rgba(30, 36, 44, 0.6) 43.96%, rgba(30, 36, 44, 0.6) 66.39%), url("/images/jpg/hero-background-image.jpg")`,
        }}
      >
        <h1 className='visually-hidden'>{heroData[`${appLang}`]?.site_name}</h1>

        <div className='container'>
          <div className='site-hero__content'>
            <span className='site-hero__content-small'>
              {heroData[`${appLang}`]?.hero_title}
            </span>
            <h2
              className='site-hero__content-title'
              dangerouslySetInnerHTML={{
                __html: heroData[`${appLang}`]?.hero_subtitle,
              }}
            ></h2>

            <p className='site-hero__content-text'>
              {heroData[`${appLang}`]?.hero_text}
            </p>

            <div className='site-hero__buttons'>
              <Link
                href='/services'
                className='site-hero__buttons-button site-hero__buttons-button--active'
              >
                {heroData[`${appLang}`]?.button_text}
              </Link>
              <Link
                href='/about'
                className='site-hero__buttons-button'
              >
                {heroData[`${appLang}`]?.button_text2}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <AboutUsUI />
      <Score />
      <OurServices />
      <News data={Array.isArray(data) ? data.slice(0,4) : []}/>
      {/* <Testimonials /> */}
      <ContactUI />
    </>
  );
};

export default Home;
