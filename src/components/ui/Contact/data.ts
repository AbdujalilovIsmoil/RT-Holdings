import { StringInnerTypes } from "@/typescript";

type ContactDataType = {
  [key: string]: {
    title: string;
    data: { text: string }[];
  };
};

export const contactData: ContactDataType = {
  uz: {
    title: "Biz haqimizda",
    data: [
      {
        text: "Malakali mutaxassislar",
      },
      {
        text: "100% mijozlar mamnunligi",
      },
      {
        text: "Shaffof narxlash",
      },
      {
        text: "Sifatli ish",
      },
    ],
  },
  ru: {
    title: "О нас",
    data: [
      {
        text: "Квалифицированные специалисты",
      },
      {
        text: "100% удовлетворенность клиентов",
      },
      {
        text: "Прозрачное ценообразование",
      },
      {
        text: "Качественная работа",
      },
    ],
  },
  en: {
    title: "About us",
    data: [
      {
        text: "Qualified specialists",
      },
      {
        text: "100% customer satisfaction",
      },
      {
        text: "Transparent pricing",
      },
      {
        text: "Quality work",
      },
    ],
  },
  ko: {
    title: "우리에 대해",
    data: [
      {
        text: "전문가",
      },
      {
        text: "100% 고객 만족",
      },
      {
        text: "투명한 가격 책정",
      },
      {
        text: "품질 작업",
      },
    ],
  },
};

export const offerData: StringInnerTypes = {
  uz: {
    title: "Taklif so‘rash",
    text: "Mahsulotlar ustidan to‘liq nazorat bizga mijozlarimizga eng yuqori sifat, qulay narxlar va ishonchli xizmatlar taklif etish imkonini beradi. Jhontraktor kompaniyasi sifatida biz qilayotgan har bir ishimizdan faxrlanamiz.",
  },
  ru: {
    title: "Запрос предложения",
    text: "Полный контроль над продуктами позволяет нам предлагать нашим клиентам высочайшее качество, удобные цены и надежные услуги. Как компания Jhontraktor, мы гордимся каждой нашей работой.",
  },
  en: {
    title: "Request an offer",
    text: "Full control over products allows us to offer our clients the highest quality, convenient prices, and reliable services. As Jhontraktor company, we take pride in every work we do.",
  },
  ko: {
    title: "제안 요청",
    text: "제품에 대한 완전한 제어를 통해 고객에게 최고의 품질, 편리한 가격 및 신뢰할 수 있는 서비스를 제공할 수 있습니다. Jhontraktor 회사로서 우리는 우리가 하는 모든 일에 자부심을 가지고 있습니다.",
  },
};

export const formData: StringInnerTypes = {
  uz: {
    name: "Ism",
    email: "Elektron pochta",
    phone_number: "Telefon raqam",
    service: "Xizmat turini lanlang",
    send: "Murojaatni yuborish",
  },
  ru: {
    name: "Имя",
    email: "Электронная почта",
    phone_number: "Номер телефона",
    service: "Выберите тип услуги",
    send: "Отправить запрос",
  },
  en: {
    name: "Name",
    email: "Email",
    phone_number: "Phone number",
    service: "Select service type",
    send: "Send request",
  },
  ko: {
    name: "이름",
    email: "이메일",
    phone_number: "전화번호",
    service: "서비스 유형 선택",
    send: "요청 보내기",
  },
};
