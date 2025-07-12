"use client";

import "./style.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { Hero } from "@/components";
import { Autoplay } from "swiper/modules";
import { usePathname } from "next/navigation";
import { IoSearch } from "@/assets/react-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Input, Pagination } from "@/components";

const Sale = () => {
  const pathName = usePathname();

  useEffect(() => {
    scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <Hero page={pathName} />

      <section className='service'>
        <div className='container'>
          <div className='services__content services__contents'>
            <h2 className='services__content-title'>
              Hamyonbop narxda texnika
            </h2>
            <p className='services__content-text'>
              So‘nggi yangiliklar va muhim e’lonlar bilan doimo xabardor bo‘ling
              — biz bilan birga yangiliklardan orqada qolmang.
            </p>
          </div>

          <form className='service__search'>
            <IoSearch className='search__search-icon' />
            <Input
              required
              type='search'
              className='service__search-input'
              placeholder='Texnika nomini kiriitng...'
            />
            <Button
              type='submit'
              className='service__search-submit'
            >
              Qidirish
            </Button>
          </form>

          <Pagination itemsPerPage={1} />
        </div>
      </section>
    </>
  );
};

export default Sale;
