import { StringInnerTypes } from "@/typescript";

export const moreObj: { [key: string]: string } = {
  en: "Read more",
  ko: "더 읽어보세요",
  ru: "Читать далее",
  uz: "Ko'proq o'qish",
};

export const serviceData: StringInnerTypes = {
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
    description: "RT Holdings offers high-quality services in various fields.",
    link: "/services",
  },
  ko: {
    title: "우리의 서비스",
    description: "RT Holdings는 다양한 분야에서 고품질 서비스를 제공합니다.",
    link: "/services",
  },
};
