export interface pageDataProperties {
  id: number;
  path: string;
  text: string;
  title: string;
}

interface pageDataTypes {
  [key: string]: pageDataProperties[];
}

export const pageData: pageDataTypes = {
  uz: [
    {
      id: 1,
      path: "/about",
      title: "Biz haqimizda",
      text: "RT Holdings — qurilish, sanoat va logistika sohalarida faoliyat yurituvchi, ishonchli va yetakchi xalqaro kompaniya.",
    },
    {
      id: 2,
      title: "Ishlar",
      path: "/portfolio",
      text: "Amalga oshirilgan loyihalarimiz sifatli xizmat, tajriba va professionallikni yaqqol aks ettiradi.",
    },
    {
      id: 3,
      path: "/news",
      title: "Yangiliklar",
      text: "RT Holdings yangiliklari, hamkorliklar va sanoatdagi so‘nggi o‘zgarishlardan xabardor bo‘ling.",
    },

    {
      id: 4,
      path: "/sale",
      title: "Sotuv",
      text: "Har bir mijoz uchun individual yondashuv, har bir loyiha uchun yuqori mas’uliyat — bu bizning ish prinsipimizdir.",
    },
    {
      id: 5,
      path: "/services",
      title: "Xizmat turlari",
      text: "Har bir mijoz uchun individual yondashuv, har bir loyiha uchun yuqori mas’uliyat — bu bizning ish prinsipimizdir.",
    },
    {
      id: 6,
      path: "/contact",
      title: "Biz bilan bog'lanish",
      text: "Savol va buyurtmalar bo‘yicha biz bilan bog‘laning — mutaxassislarimiz yordam berishga tayyor.",
    },
  ],
  ru: [
    {
      id: 1,
      path: "/about",
      title: "О нас",
      text: "RT Holdings — это надежная и ведущая международная компания, работающая в области строительства, промышленности и логистики.",
    },
    {
      id: 2,
      title: "Проекты",
      path: "/portfolio",
      text: "Наши реализованные проекты ярко демонстрируют качественное обслуживание, опыт и профессионализм.",
    },
    {
      id: 3,
      path: "/news",
      title: "Новости",
      text: "Будьте в курсе новостей RT Holdings, партнерств и последних изменений в отрасли.",
    },
    {
      id: 4,
      path: "/sale",
      title: "Продажа",
      text: "Индивидуальный подход к каждому клиенту, высокая ответственность за каждый проект — вот наш принцип работы.",
    },
    {
      id: 5,
      path: "/services",
      title: "Типы услуг",
      text: "Индивидуальный подход к каждому клиенту, высокая ответственность за каждый проект — вот наш принцип работы.",
    },
    {
      id: 6,
      path: "/contact",
      title: "Связаться с нами",
      text: "Свяжитесь с нами по вопросам и заказам — наши специалисты готовы помочь.",
    },
  ],
  en: [
    {
      id: 1,
      path: "/about",
      title: "About Us",
      text: "RT Holdings is a reliable and leading international company operating in the construction, industry, and logistics sectors.",
    },
    {
      id: 2,
      title: "Projects",
      path: "/portfolio",
      text: "Our completed projects vividly demonstrate quality service, experience, and professionalism.",
    },
    {
      id: 3,
      path: "/news",
      title: "News",
      text: "Stay updated on RT Holdings news, partnerships, and the latest industry changes.",
    },
    {
      id: 4,
      path: "/sale",
      title: "Sales",
      text: "An individual approach to each client, high responsibility for each project — this is our working principle.",
    },
    {
      id: 5,
      path: "/services",
      title: "Types of Services",
      text: "An individual approach to each client, high responsibility for each project — this is our working principle.",
    },
    {
      id: 6,
      path: "/contact",
      title: "Contact Us",
      text: "Contact us for inquiries and orders — our specialists are ready to help.",
    },
  ],
  ko: [
    {
      id: 1,
      path: "/about",
      title: "회사 소개",
      text: "RT Holdings는 신뢰할 수 있는 선도적인 국제 회사로, 건설, 산업 및 물류 분야에서 활동하고 있습니다.",
    },
    {
      id: 2,
      title: "프로젝트",
      path: "/portfolio",
      text: "완료된 프로젝트는 품질 서비스, 경험 및 전문성을 생생하게 보여줍니다.",
    },
    {
      id: 3,
      path: "/news",
      title: "뉴스",
      text: "RT Holdings의 뉴스, 파트너십 및 최신 산업 변화를 확인하세요.",
    },
    {
      id: 4,
      path: "/sale",
      title: "판매",
      text: "각 고객에 대한 개별 접근 방식, 각 프로젝트에 대한 높은 책임 - 이것이 우리의 작업 원칙입니다.",
    },
    {
      id: 5,
      path: "/services",
      title: "서비스 유형",
      text: "각 고객에 대한 개별 접근 방식, 각 프로젝트에 대한 높은 책임 - 이것이 우리의 작업 원칙입니다.",
    },
    {
      id: 6,
      path: "/contact",
      title: "문의하기",
      text: "문의 및 주문에 대해 저희에게 연락하십시오. 저희 전문가가 도와드릴 준비가 되어 있습니다.",
    },
  ],
};
