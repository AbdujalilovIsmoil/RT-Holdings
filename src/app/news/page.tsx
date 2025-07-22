"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { Hero } from "@/components";
import { Pagination } from "@/components";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { initialValuesTypes } from "@/context/reducer";

const News = () => {
  const pathName = usePathname();

  useEffect(() => {
    scrollTo({
      top: 0,
    });
  }, []);

  const { appLang } = useSelector((state: initialValuesTypes) => state);

  interface newsContentTypes {
    [key: string]: {
      title: string;
      description: string;
    };
  }

  const newsContent: newsContentTypes = {
    uz: {
      title: "Yangiliklar",
      description:
        "So‘nggi yangiliklar va muhim e’lonlar bilan doimo xabardor bo‘ling — biz bilan birga yangiliklardan orqada qolmang.",
    },
    ru: {
      title: "Новости",
      description:
        "Будьте в курсе последних новостей и важных объявлений — не отставайте от новостей вместе с нами.",
    },
    en: {
      title: "News",
      description:
        "Stay updated with the latest news and important announcements — don't fall behind with us.",
    },
    ko: {
      title: "뉴스",
      description:
        "최신 뉴스와 중요한 공지 사항을 항상 확인하세요 — 저희와 함께 뉴스에서 뒤처지지 마세요.",
    },
  };

  return (
    <>
      <Head>
        <title>News</title>
      </Head>

      <Hero page={pathName} />
      <section className='service'>
        <div className='container'>
          <div className='services__content services__contents'>
            <h2 className='services__content-title'>
              {newsContent[`${appLang}`]?.title}
            </h2>
            <p className='services__content-text'>
              {newsContent[`${appLang}`]?.description}
            </p>
          </div>

          <ul className='services__cards'>
            <li className='services__card'>
              <Image
                width={400}
                height={265}
                alt='services image 1'
                className='services__card-image'
                src='https://picsum.photos/460/370'
              />
              <div className='services__inner-content'>
                <h3 className='services__card-title'>Yangilik 1</h3>
                <p className='services__card-text'>
                  RT Holdingsni tarmoqlaridan biri bo’lgan Kortex Oil
                  kompaniyasining dastlabki motor moyi yuklangan...
                </p>
                <Link
                  role='button'
                  href='/news/1'
                  className='services__card-btn'
                >
                  Ba’tafsil ma’lumot
                </Link>
              </div>
            </li>
            <li className='services__card'>
              <Image
                width={400}
                height={265}
                alt='services image 1'
                className='services__card-image'
                src='https://picsum.photos/460/370'
              />
              <div className='services__inner-content'>
                <h3 className='services__card-title'>Yangilik 1</h3>
                <p className='services__card-text'>
                  RT Holdingsni tarmoqlaridan biri bo’lgan Kortex Oil
                </p>
                <Link
                  role='button'
                  href='/news/1'
                  className='services__card-btn'
                >
                  Ba’tafsil ma’lumot
                </Link>
              </div>
            </li>
          </ul>

          <Pagination itemsPerPage={1} />
        </div>
      </section>
    </>
  );
};

export default News;
