"use client";

import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { initialValuesTypes } from "@/context/reducer";
import { ContactUI, Hero, OurServices, Post } from "@/components";

const About = () => {
  const pathName = usePathname();
  const { appLang } = useSelector((state: initialValuesTypes) => state);

  type descritionsTypes = {
    [key: string]: string;
  };

  const descriptions: descritionsTypes = {
    uz: "RT HOLDINGS kompaniyasi O'zbekiston va Markaziy Osiyoda sifatli xizmatlar va mahsulotlar orqali mijozlarning ishonchini qozonishda davom etadi. Biz qurilish va sanoatni yangi bosqichga olib chiqishga intilamiz.",
    ru: "Компания RT HOLDINGS продолжает завоевывать доверие клиентов в Узбекистане и Центральной Азии, предоставляя качественные услуги и продукты. Мы стремимся вывести строительство и промышленность на новый уровень.",
    en: "RT HOLDINGS continues to earn the trust of customers in Uzbekistan and Central Asia by providing quality services and products. We strive to take construction and industry to a new level.",
    ko: "RT HOLDINGS는 우즈베키스탄과 중앙 아시아에서 양질의 서비스와 제품을 통해 고객의 신뢰를 얻고 있습니다. 우리는 건설 및 산업을 새로운 차원으로 끌어올리기 위해 노력하고 있습니다.",
  };

  return (
    <>
      <Hero page={pathName} />
      <Post
        title='RT Holdings'
        image={{
          width: 510,
          height: 500,
          alt: "image",
          url: "/images/jpg/hero-background-image-1.jpg",
        }}
        description={descriptions[`${appLang}`]}
      />
      <OurServices />
      <ContactUI />
    </>
  );
};

export default About;
