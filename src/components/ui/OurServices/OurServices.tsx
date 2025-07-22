import "./style.css";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { initialValuesTypes } from "@/context/reducer";

const OurServices = () => {
  const { appLang } = useSelector((state: initialValuesTypes) => state);

  type ServiceDataType = {
    [key: string]: {
      title: string;
      description: string;
      image: string;
      link: string;
      data: {
        title: string;
        description: string;
        image: string;
        link: string;
        more: string;
      }[];
    };
  };

  const serviceData: ServiceDataType = {
    uz: {
      title: "Bizning xizmatlarimiz",
      description:
        "RT Holdings kompaniyasi turli sohalarda yuqori sifatli xizmatlarni taklif etadi.",
      image: "/images/jpg/our-services-1.jpg",
      link: "/services",
      data: [
        {
          title: "RT MOTORS",
          description:
            "RT Motors - Janubiy Koreyadan hashamatlik avtomobillarni zakaz orqali butun dunyoqga yetkazib beradi",
          image: "/images/jpg/our-services-1.jpg",
          link: "/services/rt-motors",
          more: "Ba’tafsil ma’lumot",
        },
        {
          title: "RT MEDLINE",
          description:
            "Ko'p tarmoqli oilaviy shifoxonasi. bu shifoxonada 20 dan ortiq malakali shifokorlar 10 ga yaqin sohalarda o’z faoliyatini olib kelmoqda.",
          image: "/images/jpg/our-services-2.jpg",
          link: "/services/rt-medline",
          more: "Ba’tafsil ma’lumot",
        },
        {
          title: "RT HS GROUP LOGISTICS",
          description: `2023-yil 8-iyunda Koreyaning HS Express logistics hamda O'zbekistonning RT Holdings kampaniyasi 
          tomonidan kompleks lagistik tizim yaratash uchun yaratilgan kampaniyadir. Hozirda dunyoni ishtalgan chekkasiga
          yuklarni yetkazib berish imkoniyatiga ega. RT HS Groupning afzalliklari: Bizning xizmatlarimiz nisbatan arzon,
          yuk kelishi tez va eshikdan eshikkacha yetkaziladi. Mahsulotlar sifatiga kafolat beriladi. Deklarantlik xizmati
          ham mavjud.`,
          image: "/images/jpg/our-services-3.jpg",
          link: "/services/rt-hs-group-logistics",
          more: "Ba’tafsil ma’lumot",
        },
        {
          title: "DREAM EXPRESS",
          description:
            "Dream express ilk bor o’zbek vatandoshlarimizni yuklarini Koreyadagi manzilidan O’zbekistondagi manziligacha yetkazish xizmatini yo’lga qo’ygan.",
          image: "/images/jpg/our-services-4.jpg",
          link: "/services/dream-express",
          more: "Ba’tafsil ma’lumot",
        },
        {
          title: "KORTEX OIL",
          description: `RT HOLDINGS tarmog’idagi muvaffaqiyatli loyihalardan bir hisoblanadi. Bu loyihamiz 2025-yil 
          6-mart oyida Janubiy Koreyaning moy ishlab chiqarish bo’yicha yetakchilaridan biri bo’lgan World Oil Korea
          Co., LTD kompaniyasi bilan shartnoma imzolandi. Shundan buyon avtomobillar va maxsus texnikalar uchun turli
          xil yuqori sifatdagi motor moylari ishlab chiqarib kelmoqda.`,
          image: "/images/jpg/our-services-5.jpg",
          link: "/services/kortex-oil",
          more: "Ba’tafsil ma’lumot",
        },
        {
          title: "AKA TAXI",
          description:
            "Viloyatlararo qatnovlarni amalga oshiruvchi yo‘lovchi tashish xizmati uchun mo‘ljallangan qulay va zamonaviy platforma",
          image: "/images/jpg/our-services-6.jpg",
          link: "/services/aka-taxi",
          more: "Ba’tafsil ma’lumot",
        },
      ],
    },
    ru: {
      title: "Наши услуги",
      description:
        "Компания RT Holdings предлагает высококачественные услуги в различных сферах.",
      image: "/images/jpg/our-services-1.jpg",
      link: "/services",
      data: [
        {
          title: "RT MOTORS",
          description:
            "RT Motors — поставка роскошных автомобилей из Южной Кореи по всему миру по индивидуальному заказу",
          image: "/images/jpg/our-services-1.jpg",
          link: "/services/rt-motors",
          more: "Подробнее",
        },
        {
          title: "RT MEDLINE",
          description:
            "Многопрофильная семейная больница. В ней работают более 20 квалифицированных врачей примерно в 10 областях.",
          image: "/images/jpg/our-services-2.jpg",
          link: "/services/rt-medline",
          more: "Подробнее",
        },
        {
          title: "RT HS GROUP LOGISTICS",
          description: `8 июня 2023 года корейская компания HS Express Logistics и узбекская компания RT Holdings создали 
          комплексную логистическую систему. В настоящее время компания имеет возможность доставлять грузы в любую точку
          мира. Преимущества RT HS Group: относительно невысокая стоимость услуг, быстрая доставка грузов «от двери до
          двери». Гарантия качества продукции. Также доступен сервис декларирования.`,
          image: "/images/jpg/our-services-3.jpg",
          link: "/services/rt-hs-group-logistics",
          more: "Подробнее",
        },
        {
          title: "DREAM EXPRESS",
          description:
            "Dream Express первым наладил услугу доставки посылок со всех уголков Южной Кореи до адресатов в Узбекистане для наших соотечественников.",
          image: "/images/jpg/our-services-4.jpg",
          link: "/services/dream-express",
          more: "Подробнее",
        },
        {
          title: "KORTEX OIL",
          description: `Это один из успешных проектов в сети RT HOLDINGS. 6 марта 2025 года мы подписали контракт с 
          компанией World Oil Korea Co., LTD — одним из ведущих производителей моторных масел в Южной Корее. С тех пор
          мы производим различные виды высококачественных моторных масел для автомобилей и специальной техники.`,
          image: "/images/jpg/our-services-5.jpg",
          link: "/services/kortex-oil",
          more: "Подробнее",
        },
        {
          title: "AKA TAXI",
          description:
            "Удобная и современная платформа для междугородних пассажирских перевозок.",
          image: "/images/jpg/our-services-6.jpg",
          link: "/services/aka-taxi",
          more: "Подробнее",
        },
      ],
    },
    en: {
      title: "Our Services",
      description:
        "RT Holdings offers high-quality services in various fields.",
      image: "/images/jpg/our-services-1.jpg",
      link: "/services",
      data: [
        {
          title: "RT MOTORS",
          description:
            "RT Motors - Delivery of luxury cars from South Korea worldwide by order",
          image: "/images/jpg/our-services-1.jpg",
          link: "/services/rt-motors",
          more: "Learn more",
        },
        {
          title: "RT MEDLINE",
          description:
            "A multidisciplinary family hospital. This hospital has more than 20 qualified doctors working in about 10 areas.",
          image: "/images/jpg/our-services-2.jpg",
          link: "/services/rt-medline",
          more: "Learn more",
        },
        {
          title: "RT HS GROUP LOGISTICS",
          description: `On June 8, 2023, the Korean company HS Express Logistics and the Uzbek company RT Holdings 
          established a comprehensive logistics system. Today, the company has the capability to deliver cargo to any
          destination in the world. Advantages of RT HS Group: relatively low service costs, fast door-to-door delivery,
          and guaranteed product quality. A customs declaration service is also available.`,
          image: "/images/jpg/our-services-3.jpg",
          link: "/services/rt-hs-group-logistics",
          more: "Learn more",
        },
        {
          title: "DREAM EXPRESS",
          description:
            "Dream Express was the first to establish a service for delivering packages from all over South Korea to addresses in Uzbekistan for our compatriots.",
          image: "/images/jpg/our-services-4.jpg",
          link: "/services/dream-express",
          more: "Learn more",
        },
        {
          title: "KORTEX OIL",
          description: `This is one of the successful projects within the RT HOLDINGS network. On March 6, 2025, we 
          signed a contract with World Oil Korea Co., LTD — one of the leading motor oil producers in South Korea. Since
          then, we have been producing various types of high-quality motor oils for automobiles and special machinery.`,
          image: "/images/jpg/our-services-5.jpg",
          link: "/services/kortex-oil",
          more: "Learn more",
        },
        {
          title: "AKA TAXI",
          description:
            "A convenient and modern platform for intercity passenger transportation.",
          image: "/images/jpg/our-services-6.jpg",
          link: "/services/aka-taxi",
          more: "Learn more",
        },
      ],
    },
    ko: {
      title: "우리의 서비스",
      description: "RT Holdings는 다양한 분야에서 고품질 서비스를 제공합니다.",
      image: "/images/jpg/our-services-1.jpg",
      link: "/services",
      data: [
        {
          title: "RT MOTORS",
          description:
            "RT Motors - 주문에 따라 전 세계에 고급 자동차를 배송합니다.",
          image: "/images/jpg/our-services-1.jpg",
          link: "/services/rt-motors",
          more: "자세히 알아보기",
        },
        {
          title: "RT MEDLINE",
          description:
            "다학제 가정병원입니다. 이 병원에는 약 10개 분야에서 20명 이상의 자격을 갖춘 의사가 근무하고 있습니다.",
          image: "/images/jpg/our-services-2.jpg",
          link: "/services/rt-medline",
          more: "자세히 알아보기",
        },
        {
          title: "RT HS GROUP LOGISTICS",
          description: `2023년 6월 8일, 한국의 HS 익스프레스 로지스틱스와 우즈베키스탄의 RT 홀딩스는 종합 물류 시스템을 구축하였습니다. 현재 이 
          회사는 전 세계 어디든지 화물을 배송할 수 있는 역량을 갖추고 있습니다. RT HS 그룹의 장점: 비교적 저렴한 서비스 비용, 빠른 문앞까지의 배송(도어 투
          도어), 그리고 보장된 제품 품질. 통관 신고 서비스도 제공됩니다.`,
          image: "/images/jpg/our-services-3.jpg",
          link: "/services/rt-hs-group-logistics",
          more: "자세히 알아보기",
        },
        {
          title: "DREAM EXPRESS",
          description:
            "Dream Express는 우리 동포들을 위해 한국 전역에서 우즈베키스탄 주소로 소포를 배달하는 서비스를 처음으로 시작했습니다.",
          image: "/images/jpg/our-services-4.jpg",
          link: "/services/dream-express",
          more: "자세히 알아보기",
        },
        {
          title: "KORTEX OIL",
          description: `이 프로젝트는 RT HOLDINGS 네트워크 내에서 성공적인 프로젝트 중 하나입니다. 2025년 3월 6일, 우리는 대한민국의 주요 윤활유 
          제조업체 중 하나인 World Oil Korea Co., LTD와 계약을 체결하였습니다. 그 이후로 자동차 및 특수 장비용 다양한 고품질 엔진 오일을 생산하고
          있습니다.`,
          image: "/images/jpg/our-services-5.jpg",
          link: "/services/kortex-oil",
          more: "자세히 알아보기",
        },
        {
          title: "AKA TAXI",
          description: "시외 여객 운송을 위한 편리하고 현대적인 플랫폼입니다.",
          image: "/images/jpg/our-services-6.jpg",
          link: "/services/aka-taxi",
          more: "자세히 알아보기",
        },
      ],
    },
  };

  return (
    <section className='our-services'>
      <div className='container'>
        <div className='our-services__content'>
          <h2 className='our-services__content-title'>
            {serviceData[`${appLang}`]?.title}
          </h2>
          <p className='our-services__content-text'>
            {serviceData[`${appLang}`]?.description}
          </p>
        </div>

        <ul className='our-services__list'>
          {serviceData[`${appLang}`]?.data?.map((item, index) => (
            <li
              className='our-services__item'
              key={index}
            >
              <Image
                width={385}
                height={270}
                alt={item?.title}
                className='our-services__item-img'
                src={item?.image}
              />

              <div className='our-services__item-box'>
                <div className='our-services__small-content'>
                  <h3 className='our-services__item-box-title'>
                    {item?.title}
                  </h3>
                  <p className='our-services__item-box-text'>
                    {item?.description}
                  </p>
                </div>
                <Link
                  role='button'
                  href={item?.link}
                  className='our-services__item-box-btn'
                >
                  {item?.more}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurServices;
