"use client";

import Image from "next/image";
import classNames from "classnames";
import styles from "./index.module.css";
import Button from "@/components/UI/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import {
  IoStar,
  FaArrowLeftLong,
  FaArrowRightLong,
} from "../../../public/react-icons";

const Carousel = () => {
  const [data, setData] = useState([]);
  const leftButton = useRef<null | HTMLButtonElement>(null);
  const rightButton = useRef<null | HTMLButtonElement>(null);

  interface customerDataTypes {
    id: number;
    rate: number;
    user_image: string;
    user_role_en: string;
    user_role_ko: string;
    user_role_ru: string;
    user_role_uz: string;
    user_feedback_en: string;
    user_feedback_ko: string;
    user_feedback_ru: string;
    user_feedback_uz: string;
    user_full_name_en: string;
    user_full_name_ko: string;
    user_full_name_ru: string;
    user_full_name_uz: string;
  }

  useEffect(() => {
    fetch("https://api.rtholdings.uz/api/v1/common/customer-feedback/list/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <section className={classNames(styles["carousel"])}>
      <div className="container">
        <div className={classNames(styles["carousel__header"])}>
          <div className={classNames(styles["carousel__box"])}>
            <span className={classNames(styles["carousel__box-small-text"])}>
              Users
            </span>
            <h2 className={classNames(styles["carousel__box-title"])}>
              What Our Customer Say
            </h2>
          </div>
          <div className={classNames(styles["carousel__box"])}>
            <Button
              type="button"
              ref={leftButton}
              className={classNames(styles["carousel__button"])}
            >
              <FaArrowLeftLong
                className={classNames(styles["carousel__button-icon"])}
              />
            </Button>
            <Button
              type="button"
              ref={rightButton}
              className={classNames(styles["carousel__button"])}
            >
              <FaArrowRightLong className="carousel__button-icon" />
            </Button>
          </div>
        </div>

        <Swiper
          grabCursor
          spaceBetween={20}
          navigation={{
            nextEl: rightButton.current,
            prevEl: leftButton.current,
          }}
          slidesPerView={3}
          modules={[Autoplay, Navigation]}
          className={classNames(styles["carousel__list"])}
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
          {data?.map((el: customerDataTypes) => {
            return (
              <SwiperSlide
                className={classNames(styles["carousel__item"])}
                key={el?.id}
              >
                <div className={classNames(styles["carousel__user"])}>
                  <div className={classNames(styles["carousel__border"])}>
                    <Image
                      width={50}
                      height={50}
                      alt={el?.user_full_name_uz}
                      src={`https://api.rtholdings.uz${el?.user_image}`}
                      className={classNames(styles["carousel__border-icon"])}
                    />
                  </div>
                  <div className={classNames(styles["carousel__info"])}>
                    <h3
                      className={classNames(styles["carousel__info-fullname"])}
                    >
                      {el?.user_full_name_uz}
                    </h3>
                    <p className={classNames(styles["carousel__info-job"])}>
                      {el?.user_role_uz}
                    </p>
                  </div>
                </div>
                <p className={classNames(styles["carousel-text"])}>
                  <q>
                    <em>{el?.user_feedback_uz}</em>
                  </q>
                </p>

                <ul className={classNames(styles["carousel-stars__list"])}>
                  {Array(el.rate)
                    .fill(el.rate)
                    .map((_, index) => {
                      return (
                        <li
                          key={index}
                          className={classNames(styles["carousel-stars__item"])}
                        >
                          <IoStar
                            className={classNames(
                              styles["carousel-stars__item-icon"]
                            )}
                          />
                        </li>
                      );
                    })}
                </ul>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;
