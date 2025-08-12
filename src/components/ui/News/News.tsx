import "./style.css";
import Link from "next/link";
import Image from "next/image";
import { newsData } from "./data";
import { useSelector } from "react-redux";
import { initialValuesTypes } from "@/context/reducer";
import { Items, TitleField, DescriptionField } from "@/typescript";

const News = (props: { data: Items[] }) => {
  const { appLang } = useSelector((state: initialValuesTypes) => state);

  return (
    <section className="news">
      <div className="container">
        <div className="news__content">
          <h2 className="news__content-title">
            {newsData[`${appLang}`]?.title}
          </h2>
          <p className="news__content-text">{newsData[`${appLang}`]?.text}</p>
        </div>

        <ul className="news__list">
          {Array.isArray(props.data) &&
            props.data.map((el) => {
              return (
                <li key={el.id} className="news__item">
                  <Image
                    width={300}
                    height={190}
                    alt={el.title_uz}
                    className="news__item-image"
                    src={el?.news_images[0]?.image}
                  />
                  <h3 className="news__item-title">
                    {el[`title_${appLang}` as TitleField]}
                  </h3>
                  <p className="news__item-text">
                    {el[`description_${appLang}` as DescriptionField]}
                  </p>
                  <Link
                    role="button"
                    href={`/news/${el.id}`}
                    className="news__item-link"
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
