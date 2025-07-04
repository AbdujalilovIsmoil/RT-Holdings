"use client";

import "./style.css";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import {
  IoStar,
  FaArrowLeftLong,
  FaArrowRightLong,
} from "@/assets/react-icons";

const Carousel = () => {
  const leftButton = useRef<null | HTMLButtonElement>(null);
  const rightButton = useRef<null | HTMLButtonElement>(null);

  return (
    <section className='carousel'>
      <div className='container'>
        <div className='carousel__header'>
          <div className='carousel__box'>
            <span className='carousel__box-small-text'>Foydalanuvchilar</span>
            <h2 className='carousel__box-title'>
              Biz haqimizda mijozlarimiz qanday fikrda?
            </h2>
          </div>
          {/* <div className='carousel__box'>
            <Button
              type='button'
              ref={leftButton}
              className='carousel__button'
            >
              <FaArrowLeftLong className='carousel__button-icon' />
            </Button>
            <Button
              type='button'
              ref={rightButton}
              className='carousel__button'
            >
              <FaArrowRightLong className='carousel__button-icon' />
            </Button>
          </div> */}
        </div>

        <Swiper
          grabCursor
          spaceBetween={20}
          slidesPerView={3}
          className='carousel__list'
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
          {[1, 2, 3, 4, 5, 6, 7, 8].map(el => {
            return (
              <SwiperSlide>
                <li className='carousel__item'>
                  <div className='carousel__user'>
                    <div className='carousel__border'>
                      <Image
                        width={50}
                        height={50}
                        alt='image'
                        className='carousel__border-icon'
                        src='https://picsum.photos/460/370'
                      />
                    </div>
                    <div className='carousel__info'>
                      <h3 className='carousel__info-fullname'>
                        Abdujalilov Ismoil
                      </h3>
                      <p className='carousel__info-job'>User</p>
                    </div>
                  </div>
                  <p className='carousel-text'>
                    <q>
                      <em>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquid facere voluptate sequi maiores, eaque, rerum a
                        atque autem tenetur, temporibus inventore eveniet esse
                        ex earum!
                      </em>
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
