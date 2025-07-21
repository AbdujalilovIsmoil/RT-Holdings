"use client";

import "./style.css";
import Image from "next/image";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { IoStar } from "@/assets/react-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { initialValuesTypes } from "@/context/reducer";

const Carousel = () => {
  const leftButton = useRef<null | HTMLButtonElement>(null);
  const rightButton = useRef<null | HTMLButtonElement>(null);

  const { appLang } = useSelector((state: initialValuesTypes) => state);

  type TestimonialsDataType = {
    [key: string]: {
      title: string;
      text: string;
    };
  };

  const testimonialsData: TestimonialsDataType = {
    uz: {
      title: "Foydalanuvchilar",
      text: "Biz haqimizda mijozlarimiz qanday fikrda?",
    },
    ru: {
      title: "Пользователи",
      text: "Что говорят наши клиенты о нас?",
    },
    en: {
      title: "Users",
      text: "What do our clients think about us?",
    },
    ko: {
      title: "사용자",
      text: "고객은 우리에 대해 어떻게 생각합니까?",
    },
  };

  type UsersDataType = {
    [key: string]: {
      name: string;
      job: string;
      image: string;
      description: string;
      rate: number;
    }[];
  };

  const usersData: UsersDataType = {
    uz: [
      {
        name: "Абдужалилов Исмоил",
        job: "Пользователь",
        image: "https://picsum.photos/460/370",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facere voluptate sequi maiores, eaque, rerum a atque autem tenetur, temporibus inventore eveniet esse ex earum!",
        rate: 5,
      },
      {
        name: "Абдурахманов Фарход",
        job: "Клиент",
        image: "https://picsum.photos/460/370",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facere voluptate sequi maiores, eaque, rerum a atque autem tenetur, temporibus inventore eveniet esse ex earum!",
        rate: 5,
      },
      {
        name: "Саидов Алишер",
        job: "Пользователь",
        image: "https://picsum.photos/460/370",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facere voluptate sequi maiores, eaque, rerum a atque autem tenetur, temporibus inventore eveniet esse ex earum!",
        rate: 5,
      },
      {
        name: "Турсунов Шухрат",
        job: "Клиент",
        image: "https://picsum.photos/460/370",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facere voluptate sequi maiores, eaque, rerum a atque autem tenetur, temporibus inventore eveniet esse ex earum!",
        rate: 5,
      },
    ],
    ru: [
      {
        name: "Абдужалилов Исмоил",
        job: "Пользователь",
        image: "https://picsum.photos/460/370",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facere voluptate sequi maiores, eaque, rerum a atque autem tenetur, temporibus inventore eveniet esse ex earum!",
        rate: 5,
      },
      {
        name: "Абдурахманов Фарход",
        job: "Клиент",
        image: "https://picsum.photos/460/370",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facere voluptate sequi maiores, eaque, rerum a atque autem tenetur, temporibus inventore eveniet esse ex earum!",
        rate: 5,
      },
      {
        name: "Саидов Алишер",
        job: "Пользователь",
        image: "https://picsum.photos/460/370",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facere voluptate sequi maiores, eaque, rerum a atque autem tenetur, temporibus inventore eveniet esse ex earum!",
        rate: 5,
      },
      {
        name: "Турсунов Шухрат",
        job: "Клиент",
        image: "https://picsum.photos/460/370",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facere voluptate sequi maiores, eaque, rerum a atque autem tenetur, temporibus inventore eveniet esse ex earum!",
        rate: 5,
      },
    ],
    en: [
      {
        name: "Abdujalilov Ismoil",
        job: "User",
        image: "https://picsum.photos/460/370",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facere voluptate sequi maiores, eaque, rerum a atque autem tenetur, temporibus inventore eveniet esse ex earum!",
        rate: 5,
      },
      {
        name: "Abdurahmanov Farhod",
        job: "Client",
        image: "https://picsum.photos/460/370",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facere voluptate sequi maiores, eaque, rerum a atque autem tenetur, temporibus inventore eveniet esse ex earum!",
        rate: 5,
      },
      {
        name: "Saidov Alisher",
        job: "User",
        image: "https://picsum.photos/460/370",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facere voluptate sequi maiores, eaque, rerum a atque autem tenetur, temporibus inventore eveniet esse ex earum!",
        rate: 5,
      },
      {
        name: "Tursunov Shukhrat",
        job: "Client",
        image: "https://picsum.photos/460/370",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facere voluptate sequi maiores, eaque, rerum a atque autem tenetur, temporibus inventore eveniet esse ex earum!",
        rate: 5,
      },
    ],
    ko: [
      {
        name: "압두잘릴로프 이스모일",
        job: "사용자",
        image: "https://picsum.photos/460/370",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facere voluptate sequi maiores, eaque, rerum a atque autem tenetur, temporibus inventore eveniet esse ex earum!",
        rate: 5,
      },
      {
        name: "압두라흐마노프 파르호드",
        job: "클라이언트",
        image: "https://picsum.photos/460/370",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facere voluptate sequi maiores, eaque, rerum a atque autem tenetur, temporibus inventore eveniet esse ex earum!",
        rate: 5,
      },
      {
        name: "사이도프 알리셰르",
        job: "사용자",
        image: "https://picsum.photos/460/370",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facere voluptate sequi maiores, eaque, rerum a atque autem tenetur, temporibus inventore eveniet esse ex earum!",
        rate: 5,
      },
      {
        name: "투르수노프 슈크라트",
        job: "클라이언트",
        image: "https://picsum.photos/460/370",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facere voluptate sequi maiores, eaque, rerum a atque autem tenetur, temporibus inventore eveniet esse ex earum!",
        rate: 5,
      },
    ],
  };

  return (
    <section className='carousel'>
      <div className='container'>
        <div className='carousel__header'>
          <div className='carousel__box'>
            <span className='carousel__box-small-text'>
              {testimonialsData[`${appLang}`]?.title}
            </span>
            <h2 className='carousel__box-title'>
              {testimonialsData[`${appLang}`]?.text}
            </h2>
          </div>
        </div>

        <Swiper
          grabCursor
          spaceBetween={20}
          slidesPerView={3}
          navigation={{
            nextEl: rightButton.current,
            prevEl: leftButton.current,
          }}
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
          {usersData[`${appLang}`]?.map((user, index) => {
            return (
              <SwiperSlide key={index}>
                <li className='carousel__item'>
                  <div className='carousel__user'>
                    <div className='carousel__border'>
                      <Image
                        width={50}
                        height={50}
                        alt='image'
                        className='carousel__border-icon'
                        src={user?.image}
                      />
                    </div>
                    <div className='carousel__info'>
                      <h3 className='carousel__info-fullname'>{user?.name}</h3>
                      <p className='carousel__info-job'>{user?.job}</p>
                    </div>
                  </div>
                  <p className='carousel-text'>
                    <q>
                      <em>{user?.description}</em>
                    </q>
                  </p>

                  <ul className='carousel-stars__list'>
                    {Array(5)
                      .fill(5)
                      .map((_, index) => {
                        return (
                          <li
                            key={index}
                            className='carousel-stars__item'
                          >
                            <IoStar className='carousel-stars__item-icon' />
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
