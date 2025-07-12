"use client";

import "./not-found.css";
import Link from "next/link";
import { AboutUsUI, ContactUI, Portfolio, Testimonials } from "@/components";

const Home = () => {
  return (
    <>
      <section
        className='site-hero'
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundImage: `linear-gradient(90deg, rgba(30, 36, 44, 0.8) 0%, rgba(30, 36, 44, 0.6) 43.96%, rgba(30, 36, 44, 0.6) 66.39%), url("/images/jpg/hero-background-image.jpg")`,
        }}
      >
        <h1 className='visually-hidden'>RT Holdings</h1>

        <div className='container'>
          <div className='site-hero__content'>
            <span className='site-hero__content-small'>
              Sizning tanlovingiz biz uchun muhim!
            </span>
            <h2 className='site-hero__content-title'>
              <span className='site-hero__conetent-among'>Maqsadlarimiz</span>{" "}
              mijozlarimizga sifatli, ishonchli va tezkor xizmat ko’rsatishdir
            </h2>

            <p className='site-hero__content-text'>
              Har bir mijoz uchun individual yondashuv, har bir loyiha uchun
              yuqori mas’uliyat — bu bizning ish prinsipimizdir. RT Holdings
              doimo ishonchli texnika, professional xizmat va o‘z vaqtida
              yetkazib berishni kafolatlaydi.
            </p>

            <div className='site-hero__buttons'>
              <Link
                href='/services'
                className='site-hero__buttons-button site-hero__buttons-button--active'
              >
                Xizmatlarimiz bilan tanishing
              </Link>
              <Link
                href='/about'
                className='site-hero__buttons-button'
              >
                Biz haqimizda ko'proq ma'lumot oling
              </Link>
            </div>
          </div>
        </div>
      </section>
      <AboutUsUI />
      <Portfolio />
      <Testimonials />
      <ContactUI />
    </>
  );
};

export default Home;
