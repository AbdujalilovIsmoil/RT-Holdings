import "./style.css";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { initialValuesTypes } from "@/context/reducer";

type Lang = "uz" | "ru" | "en" | "ko";

type TitleField = `title_${Lang}`;
type DescriptionField = `description_${Lang}`;

type Items = {
  id: string;
  more: string;
  news_images: {
    id: string;
    image: string;
  }[];
} & Record<TitleField, string> &
  Record<DescriptionField, string>;

type NewsItemType = {
  [key: string]: {
    text: string;
    more: string;
    title: string;
  };
};

const News = (props: { data: Items[] }) => {
  const { appLang } = useSelector((state: initialValuesTypes) => state);

  const newsData: NewsItemType = {
    uz: {
      more: "Batafsil",
      title: "Yangiliklar",
      text: "So‘nggi yangiliklar va muhim e’lonlar bilan doimo xabardor bo‘ling — biz bilan birga yangiliklardan orqada qolmang.",
    },
    ru: {
      title: "Новости",
      more: "Подробнее",
      text: "Будьте в курсе последних новостей и важных объявлений — не отставайте от новостей вместе с нами.",
    },
    en: {
      title: "News",
      more: "Read more",
      text: "Stay updated with the latest news and important announcements — don't fall behind with us.",
    },
    ko: {
      title: "뉴스",
      more: "자세히 보기",
      text: "최신 뉴스와 중요한 공지사항을 확인하세요 — 저희와 함께 뉴스에서 뒤처지지 마세요.",
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
          {Array.isArray(props.data) &&
            props.data.map(el => {
              console.log(el);
              return (
                <li
                  key={el.id}
                  className='news__item'
                >
                  <Image
                    width={300}
                    height={190}
                    alt={el.title_uz}
                    className='news__item-image'
                    src={el?.news_images[0]?.image}
                  />
                  <h3 className='news__item-title'>
                    {el[`title_${appLang}` as TitleField]}
                  </h3>
                  <p className='news__item-text'>
                    {el[`description_${appLang}` as DescriptionField]}
                  </p>
                  <Link
                    role='button'
                    href={`/news/${el.id}`}
                    className='news__item-link'
                  >
                    {newsData[`${appLang}`].more}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};

export default News;
