import "./style.css";
import Link from "next/link";
import { get } from "lodash";
import Image from "next/image";
import { newsData } from "./data";
import { useSelector } from "react-redux";
import { initialValuesTypes } from "@/context/reducer";

interface Items {
  id: string;
  attributes: {
    image: string;
    title: "uz" | "ru" | "en" | "ko";
    description: "uz" | "ru" | "en" | "ko";
    images: [
      {
        id: string;
        image: string;
      }
    ];
  };
}

const News = (props: { data: Items[] }) => {
  const { appLang } = useSelector((state: initialValuesTypes) => state);

  console.log(props.data);
  

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
            props.data.map((el: Items) => {
              return (
                <li key={el.id} className="news__item">
                  {get(el, `news_images[0].image`, null) && (
                    <Image
                      width={600}
                      height={400}
                      className="news__item-image"
                      src={get(el, `news_images[0].image`, "")}
                      alt={get(el, `title_${appLang}`, "")}
                    />
                  )}

                  <h3 className="news__item-title">
                    {get(el, `title_${appLang}`, "")}
                  </h3>
                  <p className="news__item-text">
                    {get(el, `description_${appLang}`, "")}
                  </p>
                  <Link
                    role="button"
                    className="news__item-link"
                    href={`/news/${get(el, "id", "")}`}
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
