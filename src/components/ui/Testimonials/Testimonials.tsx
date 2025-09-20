"use client";

import "./style.css";
import Image from "next/image";
import { useGet } from "@/hooks";
import { useSelector } from "react-redux";
import { IoStar } from "@/assets/react-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { initialValuesTypes } from "@/context/reducer";
import { testimonialsData } from "./data";
import UserProfile from "../../../../public/images/png/user-profile.png";
import { get } from "lodash";

interface commentInterface {
  position_uz: string;
  position_ru: string;
  position_en: string;
  position_ko: string;
  comment_uz: string;
  comment_ru: string;
  comment_en: string;
  comment_ko: string;
  full_name: string;
  id: string | number;
}

const Carousel = () => {
  const { appLang } = useSelector((state: initialValuesTypes) => state);

  const data = useGet({
    path: "/feedback/list/",
  });

  console.log(data);

  return (
    <section className="carousel">
      <div className="container">
        <div className="carousel__header">
          <div className="carousel__box">
            <span className="carousel__box-small-text">
              {testimonialsData[`${appLang}`]?.title}
            </span>
            <h2 className="carousel__box-title">
              {testimonialsData[`${appLang}`]?.text}
            </h2>
          </div>
        </div>

        <Swiper
          grabCursor
          spaceBetween={20}
          slidesPerView={3}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 2500,
          }}
          breakpoints={{
            950: {
              slidesPerView: 3,
            },
            650: {
              slidesPerView: 2,
            },
            280: {
              slidesPerView: 1,
            },
          }}
        >
          {Array.isArray(data) &&
            data.map((el: commentInterface) => {
              return (
                <SwiperSlide key={el.id}>
                  <li className="carousel__item">
                    <div className="carousel__user">
                      <div className="carousel__border">
                        <Image
                          width={50}
                          height={50}
                          src={UserProfile}
                          alt={el.full_name}
                          className="carousel__border-icon"
                        />
                      </div>
                      <div className="carousel__info">
                        <h3 className="carousel__info-fullname">
                          {el.full_name}
                        </h3>
                        <p className="carousel__info-job">
                          {get(el, `position_${appLang}`, "")}
                        </p>
                      </div>
                    </div>
                    <p className="carousel-text">
                      <q>{get(el, `comment_${appLang}`, "")}</q>
                    </p>

                    <ul className="carousel-stars__list">
                      {Array(5)
                        .fill(5)
                        .map((_, index) => {
                          return (
                            <li key={index} className="carousel-stars__item">
                              <IoStar className="carousel-stars__item-icon" />
                            </li>
                          );
                        })}
                    </ul>
                  </li>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;
