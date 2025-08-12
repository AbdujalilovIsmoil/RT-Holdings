import { sectionsTypes, StringInnerTypes } from "@/typescript";

export const sections: sectionsTypes = {
  uz: {
    pages: "Sahifalar",
    contactUs: "Aloqa",
    list: [
      {
        id: 1,
        title: "Bosh sahifa",
        path: "/",
      },
      {
        id: 2,
        title: "Biz haqimizda",
        path: "/about",
      },
      {
        id: 3,
        title: "Xizmatlar",
        path: "/services",
      },
      {
        id: 4,
        title: "Yangiliklar",
        path: "/news",
      },
      { id: 5, title: "Aloqa", path: "/contact" },
    ],
  },
  ru: {
    pages: "Страницы",
    contactUs: "Контакт",
    list: [
      {
        id: 1,
        title: "Главная",
        path: "/",
      },
      {
        id: 2,
        title: "О нас",
        path: "/about",
      },
      {
        id: 3,
        title: "Услуги",
        path: "/services",
      },
      {
        id: 4,
        title: "Новости",
        path: "/news",
      },
      { id: 5, title: "Контакты", path: "/contact" },
    ],
  },
  en: {
    pages: "Pages",
    contactUs: "Contact Us",
    list: [
      {
        id: 1,
        title: "Home",
        path: "/",
      },
      {
        id: 2,
        title: "About Us",
        path: "/about",
      },
      {
        id: 3,
        title: "Services",
        path: "/services",
      },
      {
        id: 4,
        title: "News",
        path: "/news",
      },
      { id: 5, title: "Contact", path: "/contact" },
    ],
  },
  ko: {
    pages: "페이지",
    contactUs: "문의하기",
    list: [
      {
        id: 1,
        title: "홈",
        path: "/",
      },
      {
        id: 2,
        title: "회사 소개",
        path: "/about",
      },
      {
        id: 3,
        title: "서비스",
        path: "/services",
      },
      {
        id: 4,
        title: "뉴스",
        path: "/news",
      },
      { id: 5, title: "연락처", path: "/contact" },
    ],
  },
};

export const texts: StringInnerTypes = {
  uz: {
    description:
      "RT Holdings kompaniyasi O‘zbekiston va Markaziy Osiyoda sifatli xizmatlar va mahsulotlar orqali mijozlarning ishonchini qozonishda davom etadi. Biz qurilish va sanoatni yangi bosqichga olib chiqishga intilamiz.",
  },
  ru: {
    description:
      "Компания RT Holdings продолжает завоевывать доверие клиентов в Узбекистане и Центральной Азии, предоставляя качественные услуги и продукты. Мы стремимся вывести строительство и промышленность на новый уровень.",
  },
  en: {
    description:
      "RT Holdings continues to earn the trust of customers in Uzbekistan and Central Asia by providing quality services and products. We strive to take construction and industry to a new level.",
  },
  ko: {
    description:
      "RT Holdings는 우즈베키스탄과 중앙 아시아에서 양질의 서비스와 제품을 통해 고객의 신뢰를 얻고 있습니다. 우리는 건설 및 산업을 새로운 차원으로 끌어올리기 위해 노력하고 있습니다.",
  },
};
