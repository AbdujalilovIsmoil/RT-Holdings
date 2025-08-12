import { StringInnerTypes, StringMap } from "@/typescript";

export const cardContents: StringInnerTypes = {
  uz: {
    year: "Yili",
    model: "Model",
    price: "Narxi",
    colour: "Rangi",
    location: "Manzil",
    fuel: "Yoqilg'i turi",
    more: "Batafsil ma'lumot",
    distance: "Yurgan masofasi",
  },
  ru: {
    year: "Год",
    price: "Цена",
    colour: "Цвет",
    model: "Модель",
    more: "Подробнее",
    location: "Адрес",
    fuel: "Тип топлива",
    distance: "Пешком можно дойти",
  },
  en: {
    year: "Year",
    fuel: "Fuel",
    price: "Price",
    model: "Model",
    colour: "Colour",
    more: "Learn more",
    distance: "Distance",
    location: "Location",
  },
  ko: {
    year: "년도",
    fuel: "연료",
    price: "가격",
    model: "모델",
    colour: "색상",
    distance: "거리",
    location: "위치",
    more: "더 알아보기",
  },
};

export const language: StringMap = {
  ko: "작업",
  en: "Works",
  ru: "Работы",
  uz: "Ishlar",
};

export const contentData: StringInnerTypes = {
  uz: {
    title: "Hamyonbop narxda texnika",
    description:
      "So‘nggi yangiliklar va muhim e’lonlar bilan doimo xabardor bo‘ling — biz bilan birga yangiliklardan orqada qolmang.",
  },
  ru: {
    title: "Техника по доступным ценам",
    description:
      "Будьте в курсе последних новостей и важных объявлений — не отставайте от новостей вместе с нами.",
  },
  en: {
    title: "Affordable Equipment",
    description:
      "Stay updated with the latest news and important announcements — don't fall behind with us.",
  },
  ko: {
    title: "합리적인 가격의 장비",
    description:
      "최신 뉴스와 중요한 공지 사항을 항상 확인하세요 — 저희와 함께 뉴스에서 뒤처지지 마세요.",
  },
};

export const formData: StringInnerTypes = {
  uz: {
    search: "Qidirish",
    title: "Texnika nomini kiriting",
  },
  ru: {
    search: "Поиск",
    title: "Введите название техники",
  },
  en: {
    search: "Search",
    title: "Enter equipment name",
  },
  ko: {
    search: "검색",
    title: "장비 이름 입력",
  },
};
