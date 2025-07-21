"use client";

import { initialValuesTypes } from "@/context/reducer";
import "./not-found.css";
import Image from "next/image";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Error = () => {
  useEffect(() => {
    scrollTo({
      top: 0,
    });
  }, []);

  const { appLang } = useSelector((state: initialValuesTypes) => state);

  interface NotFoundData {
    [key: string]: {
      title: string;
      description: string;
    };
  }

  const notFoundData: NotFoundData = {
    uz: {
      title: "404, Sahifa topilmadi",
      description:
        "Biror narsa noto'g'ri ketdi. Sizning so'rovingiz topilmadi. Havola buzilgan yoki sahifa o'chirilgan ko'rinadi.",
    },
    ru: {
      title: "404, Страница не найдена",
      description:
        "Что-то пошло не так. Похоже, что ваш запрос не найден. Возможно, ссылка повреждена или страница удалена.",
    },
    en: {
      title: "404, Page not found",
      description:
        "Something went wrong. It looks like your request could not be found. It looks like the link is broken or the page is removed.",
    },
    ko: {
      title: "404, 페이지를 찾을 수 없음",
      description:
        "문제가 발생했습니다. 요청하신 내용을 찾을 수 없습니다. 링크가 깨졌거나 페이지가 삭제된 것 같습니다.",
    },
  };

  return (
    <section className='not-found'>
      <div className='container'>
        <div className='not-found__content'>
          <Image
            width={500}
            height={500}
            alt='not-found'
            src='/images/png/not-found.png'
            className='not-found__content-image'
          />
          <h1 className='not-found__content-title'>
            {notFoundData[`${appLang}`].title}
          </h1>

          <p className='not-found__content-text'>
            {notFoundData[`${appLang}`].description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Error;
