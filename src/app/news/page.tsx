"use client";

import "./style.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { Hero } from "@/components";
import { Pagination } from "@/components";
import { usePathname } from "next/navigation";

const News = () => {
  const pathName = usePathname();

  useEffect(() => {
    scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <Head>
        <title>News</title>
      </Head>

      <Hero page={pathName} />
      <section className='service'>
        <div className='container'>
          <div className='services__content services__contents'>
            <h2 className='services__content-title'>Yangiliklar</h2>
            <p className='services__content-text'>
              So‘nggi yangiliklar va muhim e’lonlar bilan doimo xabardor bo‘ling
              — biz bilan birga yangiliklardan orqada qolmang.
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
