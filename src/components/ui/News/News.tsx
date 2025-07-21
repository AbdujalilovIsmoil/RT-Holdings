import "./style.css";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { initialValuesTypes } from "@/context/reducer";

const News = () => {
  const { appLang } = useSelector((state: initialValuesTypes) => state);

  type NewsItemType = {
    [key: string]: {
      title: string;
      text: string;
      data: {
        title: string;
        text: string;
        image: string;
        link: string;
        more: string;
      }[];
    };
  };

  const newsData: NewsItemType = {
    uz: {
      title: "Yangiliklar",
      text: "So‘nggi yangiliklar va muhim e’lonlar bilan doimo xabardor bo‘ling — biz bilan birga yangiliklardan orqada qolmang.",
      data: [
        {
          title: "KORTEX OIL",
          text: "RT Holdingsni tarmoqlaridan biri bo’lgan Kortex Oil kompaniyasining dastlabki motor moyi yuklangan...",
          image: "/images/png/news-image.png",
          link: "/news/1",
          more: "Batafsil",
        },
        {
          title: "KORTEX OIL",
          text: "RT Holdingsni tarmoqlaridan biri bo’lgan Kortex Oil kompaniyasining dastlabki motor moyi yuklangan...",
          image: "/images/png/news-image.png",
          link: "/news/2",
          more: "Batafsil",
        },
        {
          title: "KORTEX OIL",
          text: "RT Holdingsni tarmoqlaridan biri bo’lgan Kortex Oil kompaniyasining dastlabki motor moyi yuklangan...",
          image: "/images/png/news-image.png",
          link: "/news/3",
          more: "Batafsil",
        },
        {
          title: "KORTEX OIL",
          text: "RT Holdingsni tarmoqlaridan biri bo’lgan Kortex Oil kompaniyasining dastlabki motor moyi yuklangan...",
          image: "/images/png/news-image.png",
          link: "/news/4",
          more: "Batafsil",
        },
      ],
    },
    ru: {
      title: "Новости",
      text: "Будьте в курсе последних новостей и важных объявлений — не отставайте от новостей вместе с нами.",
      data: [
        {
          title: "KORTEX OIL",
          text: "Первый груз моторного масла компании Kortex Oil, одного из подразделений RT Holdings...",
          image: "/images/png/news-image.png",
          link: "/news/1",
          more: "Подробнее",
        },
        {
          title: "KORTEX OIL",
          text: "Первый груз моторного масла компании Kortex Oil, одного из подразделений RT Holdings...",
          image: "/images/png/news-image.png",
          link: "/news/2",
          more: "Подробнее",
        },
        {
          title: "KORTEX OIL",
          text: "Первый груз моторного масла компании Kortex Oil, одного из подразделений RT Holdings...",
          image: "/images/png/news-image.png",
          link: "/news/3",
          more: "Подробнее",
        },
        {
          title: "KORTEX OIL",
          text: "Первый груз моторного масла компании Kortex Oil, одного из подразделений RT Holdings...",
          image: "/images/png/news-image.png",
          link: "/news/4",
          more: "Подробнее",
        },
      ],
    },
    en: {
      title: "News",
      text: "Stay updated with the latest news and important announcements — don't fall behind with us.",
      data: [
        {
          title: "KORTEX OIL",
          text: "The first shipment of motor oil from Kortex Oil, one of RT Holdings' divisions...",
          image: "/images/png/news-image.png",
          link: "/news/1",
          more: "Read more",
        },
        {
          title: "KORTEX OIL",
          text: "The first shipment of motor oil from Kortex Oil, one of RT Holdings' divisions...",
          image: "/images/png/news-image.png",
          link: "/news/2",
          more: "Read more",
        },
        {
          title: "KORTEX OIL",
          text: "The first shipment of motor oil from Kortex Oil, one of RT Holdings' divisions...",
          image: "/images/png/news-image.png",
          link: "/news/3",
          more: "Read more",
        },
        {
          title: "KORTEX OIL",
          text: "The first shipment of motor oil from Kortex Oil, one of RT Holdings' divisions...",
          image: "/images/png/news-image.png",
          link: "/news/4",
          more: "Read more",
        },
      ],
    },
    ko: {
      title: "뉴스",
      text: "최신 뉴스와 중요한 공지사항을 확인하세요 — 저희와 함께 뉴스에서 뒤처지지 마세요.",
      data: [
        {
          title: "KORTEX OIL",
          text: "RT Holdings의 한 부서인 Kortex Oil의 첫 번째 모터 오일 화물...",
          image: "/images/png/news-image.png",
          link: "/news/1",
          more: "자세히 보기",
        },
        {
          title: "KORTEX OIL",
          text: "RT Holdings의 한 부서인 Kortex Oil의 첫 번째 모터 오일 화물...",
          image: "/images/png/news-image.png",
          link: "/news/2",
          more: "자세히 보기",
        },
        {
          title: "KORTEX OIL",
          text: "RT Holdings의 한 부서인 Kortex Oil의 첫 번째 모터 오일 화물...",
          image: "/images/png/news-image.png",
          link: "/news/3",
          more: "자세히 보기",
        },
        {
          title: "KORTEX OIL",
          text: "RT Holdings의 한 부서인 Kortex Oil의 첫 번째 모터 오일 화물...",
          image: "/images/png/news-image.png",
          link: "/news/4",
          more: "자세히 보기",
        },
      ],
    },
  };

  return (
    <section className='news'>
      <div className='container'>
        <div className='news__content'>
          <h2 className='news__content-title'>
            {newsData[`${appLang}`]?.title}
          </h2>
          <p className='news__content-text'>{newsData[`${appLang}`]?.text}</p>
        </div>

        <ul className='news__list'>
          {newsData[`${appLang}`]?.data.map((item, index) => (
            <li
              className='news__item'
              key={index}
            >
              <Image
                width={300}
                height={190}
                alt='KORTEX OIL'
                className='news__item-image'
                src={item?.image}
              />
              <h3 className='news__item-title'>{item?.title}</h3>
              <p className='news__item-text'>{item?.text}</p>
              <Link
                role='button'
                href={item?.link}
                className='news__item-link'
              >
                {item?.more}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default News;
