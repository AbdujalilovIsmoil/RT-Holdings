import { StringInnerTypes, StringMap } from "@/typescript";

export const contactTitle: StringMap = {
  ko: "문의하기",
  en: "Contact Us",
  uz: "Biz bilan aloqa",
  ru: "Связаться с нами",
};

interface linksType {
  id: number;
  path: string;
  title: {
    [key: string]: string;
  };
}

export const links: linksType[] = [
  {
    id: 1,
    path: "/",
    title: {
      uz: "Bosh sahifa",
      ru: "Главная",
      en: "Home",
      ko: "홈",
    },
  },
  {
    id: 2,
    title: {
      uz: "Biz haqimizda",
      ru: "О нас",
      en: "About Us",
      ko: "회사 소개",
    },
    path: "/about",
  },
  {
    id: 3,
    path: "/services",
    title: {
      uz: "Xizmatlar",
      ru: "Услуги",
      en: "Services",
      ko: "서비스",
    },
  },
  {
    id: 4,
    title: {
      uz: "Yangiliklar",
      ru: "Новости",
      en: "News",
      ko: "뉴스",
    },
    path: "/news",
  },
  {
    id: 5,
    title: {
      uz: "Ishlar",
      ru: "Портфолио",
      en: "Portfolio",
      ko: "포트폴리오",
    },
    path: "/sale",
  },
];

export const images: StringInnerTypes = {
  uz: {
    name: "uz",
    src: "/images/png/flags/flag-image-1.png",
  },
  ru: {
    name: "ru",
    src: "/images/png/flags/flag-image-3.png",
  },
  en: {
    name: "en",
    src: "/images/png/flags/flag-image-2.png",
  },
  ko: {
    name: "ko",
    src: "/images/png/flags/flag-image-4.png",
  },
};

export const callData: StringInnerTypes = {
  uz: {
    email: "Elektron pochta",
    callUs: "Biz bilan aloqa",
  },
  ru: {
    email: "Электронная почта",
    callUs: "Связаться с нами",
  },
  ko: {
    email: "이메일",
    callUs: "문의하기",
  },
  en: {
    email: "Email",
    callUs: "Call Us",
  },
};

export const languages: StringMap[] = [
  { code: "uz", name: "O'zbek" },
  { code: "ru", name: "Русский" },
  { code: "en", name: "English" },
  { code: "ko", name: "한국어" },
];
