"use client";

import "./style.css";
import Link from "next/link";
import { get } from "lodash";
import Image from "next/image";
import { useGet } from "@/hooks";
import { useEffect } from "react";
import { language } from "../data";
import { useSelector } from "react-redux";
import { Button, Hero } from "@/components";
import { Lang } from "@/typescript/types/global";
import { initialValuesTypes } from "@/context/reducer";
import { FaArrowLeftLong } from "@/assets/react-icons";
import { usePathname, useRouter } from "next/navigation";

interface Items {
  id: string;
  title: "uz" | "ru" | "en" | "ko";
  description: "uz" | "ru" | "en" | "ko";
  news_images: [
    {
      id: string;
      image: string;
    }
  ];
}

const NewsView = () => {
  const { appLang } = useSelector((state: initialValuesTypes) => state);

  const router = useRouter();

  const pathName = usePathname();

  const id = pathName.split("/").at(-1);

  const data = useGet({ path: "/news/list" });

  useEffect(() => {
    document.title = language[`${appLang}`];
  }, [appLang]);

  const backContent = {
    en: "Back",
    ko: "뒤쪽에",
    uz: "Ortga",
    ru: "Назад",
  };

  return (
    <section className="news-view">
      <Hero page="/news" />

      <div className="news__container">
        <div className="container">
          <Button
            type="button"
            className="news-view-btn"
            onClick={() => router.push("/news")}
          >
            <FaArrowLeftLong className="news-view-btn-icon" />
            {backContent[`${appLang}` as Lang]}
          </Button>

          {Array.isArray(data) &&
            data
              .filter((el: Items) => el.id === id)
              .map((el: Items) => {
                return (
                  <div key={get(el, "id", "")} className="news-view__container">
                    <div className="news-view__box">
                      <ul className="news-view__image-lists">
                        {el.news_images.map((item) => {
                          return (
                            <li key={item.id} className="news-view__image-item">
                              <Image
                                width={190}
                                height={120}
                                src={item.image}
                                className="news-view__image-item-img"
                                alt={
                                  (el as unknown as Record<string, string>)[
                                    `title_${appLang}`
                                  ]
                                }
                              />
                            </li>
                          );
                        })}
                      </ul>

                      <div className="news-view__content">
                        <h3 className="news-view__content-title">
                          {get(el, `title_${appLang}`, "")}
                        </h3>
                        <p className="news-view__content-text">
                          {get(el, `description_${appLang}`, "")}
                        </p>
                      </div>
                    </div>
                    <div className="news-view__box">
                      <ul className="news-view__items">
                        {Array.isArray(data) &&
                          data.map((el: Items) => {
                            return (
                              <li key={el.id} className="news-view__item">
                                <Link href={`/news/${el.id}`}>
                                  <div className="new-view__item-container">
                                    {get(el, `news_images[0].image`, "") && (
                                      <Image
                                        width={125}
                                        height={85}
                                        src={get(
                                          el,
                                          `news_images[0].image`,
                                          ""
                                        )}
                                        className="news-view__item-img"
                                        alt={get(el, `title_${appLang}`, "")}
                                      />
                                    )}

                                    <div className="news-view__item-box">
                                      <h3 className="news-view__item-box-title">
                                        {get(el, `description_${appLang}`, "")}
                                      </h3>
                                      <p className="news-view__item-box-text">
                                        {get(el, `description_${appLang}`, "")}
                                      </p>
                                    </div>
                                  </div>

                                  <hr className="news-view__item-box-rule" />
                                </Link>
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default NewsView;
