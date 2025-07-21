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
          link: "/services/dream-express",
          more: "Ba’tafsil ma’lumot",
        },
        {
          title: "RT MEDLINE",
          description:
            "RT Motors - Janubiy Koreyadan hashamatlik avtomobillarni zakaz orqali butun dunyoqga yetkazib beradi",
          image: "/images/jpg/our-services-2.jpg",
          link: "/services/dream-express",
          more: "Ba’tafsil ma’lumot",
        },
        {
          title: "RT HS GROUP LOGISTICS",
          description:
            "RT Motors - Janubiy Koreyadan hashamatlik avtomobillarni zakaz orqali butun dunyoqga yetkazib beradi",
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
          description:
            "2025- yildan buyon avtomobillar va maxsus tex nikalar uchun turli xil yuqori sifatdagi motor moylari ishlab chiqarib kelmoqda.",
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
          link: "/services/dream-express",
          more: "Подробнее",
        },
        {
          title: "RT MEDLINE",
          description:
            "RT Motors — поставка роскошных автомобилей из Южной Кореи по всему миру по индивидуальному заказу",
          image: "/images/jpg/our-services-2.jpg",
          link: "/services/dream-express",
          more: "Подробнее",
        },
        {
          title: "RT HS GROUP LOGISTICS",
          description:
            "RT Motors — поставка роскошных автомобилей из Южной Кореи по всему миру по индивидуальному заказу",
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
          description:
            "С 2025 года производит высококачественные моторные масла для автомобилей и специальной техники.",
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
          link: "/services/dream-express",
          more: "Learn more",
        },
        {
          title: "RT MEDLINE",
          description:
            "RT Motors - Delivery of luxury cars from South Korea worldwide by order",
          image: "/images/jpg/our-services-2.jpg",
          link: "/services/dream-express",
          more: "Learn more",
        },
        {
          title: "RT HS GROUP LOGISTICS",
          description:
            "RT Motors - Delivery of luxury cars from South Korea worldwide by order",
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
          description:
            "Since 2025, producing high-quality motor oils for cars and special equipment.",
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
          link: "/services/dream-express",
          more: "자세히 알아보기",
        },
        {
          title: "RT MEDLINE",
          description:
            "RT Motors - 주문에 따라 전 세계에 고급 자동차를 배송합니다.",
          image: "/images/jpg/our-services-2.jpg",
          link: "/services/dream-express",
          more: "자세히 알아보기",
        },
        {
          title: "RT HS GROUP LOGISTICS",
          description:
            "RT Motors - 주문에 따라 전 세계에 고급 자동차를 배송합니다.",
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
          description:
            "2025년부터 자동차 및 특수 장비용 고품질 엔진 오일을 생산하고 있습니다.",
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
                <h3 className='our-services__item-box-title'>{item?.title}</h3>
                <p className='our-services__item-box-text'>
                  {item?.description}
                </p>
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
