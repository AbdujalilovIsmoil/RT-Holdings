"use client";

import "./style.css";
import Link from "next/link";
import Image from "next/image";
import { useGet } from "@/hooks";
import { useSelector } from "react-redux";
import { Button, Hero } from "@/components";
import { initialValuesTypes } from "@/context/reducer";
import { FaArrowLeftLong } from "@/assets/react-icons";
import { usePathname, useRouter } from "next/navigation";

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

const NewsView = () => {
  const { appLang } = useSelector((state: initialValuesTypes) => state);

  const router = useRouter();

  const pathName = usePathname();

  const id = pathName.split("/").at(-1);

  const data = useGet({ path: "/news/list" });

  return (
    <section className='news-view'>
      <Hero page='/news' />

      <div className='news__container'>
        <div className='container'>
          <Button
            type='button'
            className='news-view-btn'
            onClick={() => router.push("/news")}
          >
            <FaArrowLeftLong className='news-view-btn-icon' />
            Ortga
          </Button>

          {Array.isArray(data) &&
            data
              .filter((el: Items) => el.id === id)
              .map((el: Items) => {
                return (
                  <div
                    key={el.id}
                    className='news-view__container'
                  >
                    <div className='news-view__box'>
                      <ul className='news-view__image-lists'>
                        {el.news_images.map(item => {
                          return (
                            <li
                              key={item.id}
                              className='news-view__image-item'
                            >
                              <Image
                                width={190}
                                height={120}
                                src={item.image}
                                className='news-view__image-item-img'
                                alt={el[`title_${appLang}` as TitleField]}
                              />
                            </li>
                          );
                        })}
                      </ul>

                      <div className='news-view__content'>
                        <h3 className='news-view__content-title'>
                          {el[`title_${appLang}` as TitleField]}
                        </h3>
                        <p className='news-view__content-text'>
                          {el[`description_${appLang}` as DescriptionField]}
                        </p>
                      </div>
                    </div>
                    <div className='news-view__box'>
                      <ul className='news-view__items'>
                        {Array.isArray(data) &&
                          data.map((el: Items) => {
                            return (
                              <li
                                key={el.id}
                                className='news-view__item'
                              >
                                <Link href={`/news/${el.id}`}>
                                  <div className='new-view__item-container'>
                                    <Image
                                      width={125}
                                      height={85}
                                      src={el.news_images[0].image}
                                      className='news-view__item-img'
                                      alt={el[`title_${appLang}` as TitleField]}
                                    />

                                    <div className='news-view__item-box'>
                                      <h3 className='news-view__item-box-title'>
                                        {el[`title_${appLang}` as TitleField]}
                                      </h3>
                                      <p className='news-view__item-box-text'>
                                        {
                                          el[
                                            `description_${appLang}` as DescriptionField
                                          ]
                                        }
                                      </p>
                                    </div>
                                  </div>

                                  <hr className='news-view__item-box-rule' />
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
