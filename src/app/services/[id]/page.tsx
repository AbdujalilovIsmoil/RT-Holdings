"use client";

import "./style.css";
import React from "react";
import Image from "next/image";
import { Hero } from "@/components";
import { useSelector } from "react-redux";
import { initialValuesTypes } from "@/context/reducer";
import {
  FaYoutube,
  FaFacebook,
  FaTelegramPlane,
  AiFillInstagram,
} from "@/assets/react-icons";
import { usePathname } from "next/navigation";

const ServicesView = () => {
  const pathName = usePathname();
  const { appLang } = useSelector((state: initialValuesTypes) => state);

  console.log(pathName.split("/")[2]);

  type ServiceDataType = {
    [key: string]: {
      title: string;
      description: string;
      image: string;
      link: string;
      data: {
        image: string;
        link: string;
        more: string;
        products?: {
          title: string;
          description: string;
        }[];
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
          image: "/images/jpg/our-services-1.jpg",
          link: "dream-motors",
          more: "Ba’tafsil ma’lumot",
          products: [
            {
              title: "RT Motors",
              description:
                "RT Motors - Janubiy Koreyadan hashamatlik avtomobillarni zakaz orqali butun dunyoqga yetkazib beradi.",
            },
          ],
        },
        {
          image: "/images/jpg/our-services-2.jpg",
          link: "rt-medline",
          more: "Ba’tafsil ma’lumot",
          products: [
            {
              title: "RT Medline",
              description:
                "Ko'p tarmoqli oilaviy shifoxonasi. bu shifoxonada 20 dan ortiq malakali shifokorlar 10 ga yaqin sohalarda o’z faoliyatini olib kelmoqda.",
            },
          ],
        },
        {
          image: "/images/jpg/our-services-3.jpg",
          link: "rt-hs-group-logistics",
          more: "Ba’tafsil ma’lumot",
          products: [
            {
              title: "RT HS GROUP LOGISTICS",
              description: `2023-yil 8-iyunda Koreyaning HS Express logistics hamda O'zbekistonning RT Holdings kampaniyasi 
              tomonidan kompleks lagistik tizim yaratash uchun yaratilgan kampaniyadir. Hozirda dunyoni ishtalgan chekkasiga
              yuklarni yetkazib berish imkoniyatiga ega. RT HS Groupning afzalliklari: Bizning xizmatlarimiz nisbatan arzon,
              yuk kelishi tez va eshikdan eshikkacha yetkaziladi. Mahsulotlar sifatiga kafolat beriladi. Deklarantlik xizmati
              ham mavjud.`,
            },
          ],
        },
        {
          image: "/images/jpg/our-services-4.jpg",
          link: "dream-express",
          more: "Ba’tafsil ma’lumot",
          products: [
            {
              title: "Dream Express",
              description:
                "Dream express ilk bor o’zbek vatandoshlarimizni yuklarini Koreyadagi manzilidan O’zbekistondagi manziligacha yetkazish xizmatini yo’lga qo’ygan.",
            },
          ],
        },
        {
          image: "/images/jpg/our-services-5.jpg",
          link: "kortex-oil",
          more: "Ba’tafsil ma’lumot",
          products: [
            {
              title: "KORTEX OIL",
              description: `RT HOLDINGS tarmog’idagi muvaffaqiyatli loyihalardan bir hisoblanadi. Bu loyihamiz 2025-yil 
          6-mart oyida Janubiy Koreyaning moy ishlab chiqarish bo’yicha yetakchilaridan biri bo’lgan World Oil Korea
          Co., LTD kompaniyasi bilan shartnoma imzolandi. Shundan buyon avtomobillar va maxsus texnikalar uchun turli
          xil yuqori sifatdagi motor moylari ishlab chiqarib kelmoqda.`,
            },
          ],
        },
        {
          image: "/images/jpg/our-services-6.jpg",
          link: "aka-taxi",
          more: "Ba’tafsil ma’lumot",
          products: [
            {
              title: "AKA-TAXI bu nima?",
              description:
                "Bu vilayatlararo qatnaydigan do'stlarimiz; Dam olish kunlari uyiga qatnaydigan talabalar; O'zbekiston bo'ylab sayohat qilishni yoqtiradigan yurtdoshlarimiz uchun qulay taksi xizmati.",
            },
            {
              title: "AKA-DRIVER bu nima?",
              description: `Bu haydovchilar, shaxsiy mashinasi bilan viloyatga qatnaydigan akalarimiz uchun eng foydali ilova. Ilova orqali ro'yxatdan o'tganingizdan keyin yo'lovchilarni oson topib, tez yo'lga chiqasiz. Hech nimani kutish shart emas.`,
            },
          ],
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
          image: "/images/jpg/our-services-1.jpg",
          link: "dream-express",
          more: "Подробнее",
          products: [
            {
              title: "RT Motors",
              description:
                "RT Motors — поставка роскошных автомобилей из Южной Кореи по всему миру по индивидуальному заказу",
            },
          ],
        },
        {
          image: "/images/jpg/our-services-2.jpg",
          link: "rt-medline",
          more: "Подробнее",
          products: [
            {
              title: "RT Medline",
              description:
                "Многопрофильная семейная больница. В ней работают более 20 квалифицированных врачей примерно в 10 областях.",
            },
          ],
        },
        {
          image: "/images/jpg/our-services-3.jpg",
          link: "rt-hs-group-logistics",
          more: "Подробнее",
          products: [
            {
              title: "RT HS GROUP LOGISTICS",
              description: `8 июня 2023 года корейская компания HS Express Logistics и узбекская компания RT Holdings создали 
            комплексную логистическую систему. В настоящее время компания имеет возможность доставлять грузы в любую точку
            мира. Преимущества RT HS Group: относительно невысокая стоимость услуг, быстрая доставка грузов «от двери до
            двери». Гарантия качества продукции. Также доступен сервис декларирования.`,
            },
          ],
        },
        {
          image: "/images/jpg/our-services-4.jpg",
          link: "dream-express",
          more: "Подробнее",
          products: [
            {
              title: "Dream Express",
              description:
                "Dream Express первым наладил услугу доставки посылок со всех уголков Южной Кореи до адресатов в Узбекистане для наших соотечественников.",
            },
          ],
        },
        {
          image: "/images/jpg/our-services-5.jpg",
          link: "kortex-oil",
          more: "Подробнее",
          products: [
            {
              title: "KORTEX OIL",
              description: `Это один из успешных проектов в сети RT HOLDINGS. 6 марта 2025 года мы подписали контракт с 
          компанией World Oil Korea Co., LTD — одним из ведущих производителей моторных масел в Южной Корее. С тех пор
          мы производим различные виды высококачественных моторных масел для автомобилей и специальной техники.`,
            },
          ],
        },
        {
          image: "/images/jpg/our-services-6.jpg",
          link: "aka-taxi",
          more: "Подробнее",
          products: [
            {
              title: "Что такое AKA-TAXI?",
              description:
                "Удобный сервис такси для тех, кто ездит между регионами: студентов, возвращающихся домой на выходные, и граждан, путешествующих по Узбекистану.",
            },
            {
              title: "Что такое AKA-DRIVER?",
              description:
                "Полезное приложение для водителей, которые ездят между регионами на личных автомобилях. После регистрации вы легко найдёте пассажиров и быстро отправитесь в путь — ждать никого не нужно.",
            },
          ],
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
          image: "/images/jpg/our-services-1.jpg",
          link: "rt-motors",
          more: "Learn more",
          products: [
            {
              title: "RT Motors",
              description:
                "RT Motors - Delivery of luxury cars from South Korea worldwide by order",
            },
          ],
        },
        {
          image: "/images/jpg/our-services-2.jpg",
          link: "rt-medline",
          more: "Learn more",
          products: [
            {
              title: "RT Medline",
              description:
                "A multidisciplinary family hospital. This hospital has more than 20 qualified doctors working in about 10 areas.",
            },
          ],
        },
        {
          image: "/images/jpg/our-services-3.jpg",
          link: "rt-hs-group-logistics",
          more: "Learn more",
          products: [
            {
              title: "RT HS GROUP LOGISTICS",
              description: `On June 8, 2023, the Korean company HS Express Logistics and the Uzbek company RT Holdings 
              established a comprehensive logistics system. Today, the company has the capability to deliver cargo to any
              destination in the world. Advantages of RT HS Group: relatively low service costs, fast door-to-door delivery,
              and guaranteed product quality. A customs declaration service is also available.`,
            },
          ],
        },
        {
          image: "/images/jpg/our-services-4.jpg",
          link: "dream-express",
          more: "Learn more",
          products: [
            {
              title: "DREAM EXPRESS",
              description:
                "Dream Express was the first to establish a service for delivering packages from all over South Korea to addresses in Uzbekistan for our compatriots.",
            },
          ],
        },
        {
          image: "/images/jpg/our-services-5.jpg",
          link: "kortex-oil",
          more: "Learn more",
          products: [
            {
              title: "KORTEX OIL",
              description: `This is one of the successful projects within the RT HOLDINGS network. On March 6, 2025, we 
          signed a contract with World Oil Korea Co., LTD — one of the leading motor oil producers in South Korea. Since
          then, we have been producing various types of high-quality motor oils for automobiles and special machinery.`,
            },
          ],
        },
        {
          image: "/images/jpg/our-services-6.jpg",
          link: "aka-taxi",
          more: "Learn more",
          products: [
            {
              title: "What is AKA-TAXI?",
              description:
                "A convenient taxi service for intercity travelers — students heading home for the weekend and locals who enjoy traveling across Uzbekistan.",
            },
            {
              title: "What is AKA-DRIVER?",
              description:
                "A helpful app for drivers who travel between regions using their own vehicles. After registration, you can easily find passengers and hit the road without any delay.",
            },
          ],
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
          image: "/images/jpg/our-services-1.jpg",
          link: "rt-motors",
          more: "자세히 알아보기",
          products: [
            {
              title: "RT MOTORS",
              description:
                "RT Motors - 주문에 따라 전 세계에 고급 자동차를 배송합니다.",
            },
          ],
        },
        {
          image: "/images/jpg/our-services-2.jpg",
          link: "rt-medline",
          more: "자세히 알아보기",
          products: [
            {
              title: "RT MEDLINE",
              description:
                "다학제 가정병원입니다. 이 병원에는 약 10개 분야에서 20명 이상의 자격을 갖춘 의사가 근무하고 있습니다.",
            },
          ],
        },
        {
          image: "/images/jpg/our-services-3.jpg",
          link: "rt-hs-group-logistics",
          more: "자세히 알아보기",
          products: [
            {
              title: "RT HS GROUP LOGISTICS",
              description: `2023년 6월 8일, 한국의 HS 익스프레스 로지스틱스와 우즈베키스탄의 RT 홀딩스는 종합 물류 시스템을 구축하였습니다. 현재 이
            회사는 전 세계 어디든지 화물을 배송할 수 있는 역량을 갖추고 있습니다. RT HS 그룹의 장점: 비교적 저렴한 서비스 비용, 빠른 문앞까지의 배송(도어 투
            도어), 그리고 보장된 제품 품질. 통관 신고 서비스도 제공됩니다.`,
            },
          ],
        },
        {
          image: "/images/jpg/our-services-4.jpg",
          link: "dream-express",
          more: "자세히 알아보기",
          products: [
            {
              title: "DREAM EXPRESS",
              description:
                "Dream Express는 우리 동포들을 위해 한국 전역에서 우즈베키스탄 주소로 소포를 배달하는 서비스를 처음으로 시작했습니다.",
            },
          ],
        },
        {
          image: "/images/jpg/our-services-5.jpg",
          link: "kortex-oil",
          more: "자세히 알아보기",
          products: [
            {
              title: "KORTEX OIL",
              description: `이 프로젝트는 RT HOLDINGS 네트워크 내에서 성공적인 프로젝트 중 하나입니다. 2025년 3월 6일, 우리는 대한민국의 주요 윤활유 
          제조업체 중 하나인 World Oil Korea Co., LTD와 계약을 체결하였습니다. 그 이후로 자동차 및 특수 장비용 다양한 고품질 엔진 오일을 생산하고
          있습니다.`,
            },
          ],
        },
        {
          image: "/images/jpg/our-services-6.jpg",
          link: "aka-taxi",
          more: "자세히 알아보기",
          products: [
            {
              title: "AKA-TAXI란?",
              description:
                "주말에 고향에 가는 대학생, 또는 우즈베키스탄 전역을 여행하는 사람들을 위한 편리한 시외 택시 서비스입니다.",
            },
            {
              title: "AKA-DRIVER란?",
              description:
                "개인 차량으로 지역 간 이동하는 운전자들을 위한 유용한 앱입니다. 등록 후 쉽게 승객을 찾고 지체 없이 출발할 수 있습니다.",
            },
          ],
        },
      ],
    },
  };

  const findData = serviceData[`${appLang}`]?.data.find(
    el => el.link === pathName.split("/")[2],
  );

  return (
    <section className='services-view'>
      <Hero page='/services' />
      <div className='services__logo'>
        <div className='container services__logo-container'>
          <Image
            width={400}
            height={200}
            alt='Aka Taxi'
            src={`${findData?.image}`}
            className='services__logo-img'
          />
        </div>
      </div>

      <div className='container'>
        <ul className='services-view__list'>
          {findData?.products?.map(el => {
            return (
              <li className='services-view__item'>
                <h2 className='services-view__item-title'>{el?.title}</h2>
                <p className='services-view__item-text'>{el?.description}</p>
              </li>
            );
          })}
        </ul>

        {/* <div className='services-view-media__container'>
          <h3 className='service-view-media__container-title'>
            Ijtimoiy tarmoqlar
          </h3>
          <ul className='services-view__medias'>
            <li className='services-view__media'>
              <a
                href='#'
                target='_blank'
              >
                <FaTelegramPlane className='services-view__media-icon' />
              </a>
            </li>
            <li className='services-view__media'>
              <a
                href='#'
                target='_blank'
              >
                <AiFillInstagram className='services-view__media-icon' />
              </a>
            </li>
            <li className='services-view__media'>
              <a
                href='#'
                target='_blank'
              >
                <FaYoutube className='services-view__media-icon' />
              </a>
            </li>
            <li className='services-view__media'>
              <a
                href='#'
                target='_blank'
              >
                <FaFacebook className='services-view__media-icon' />
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesView;
