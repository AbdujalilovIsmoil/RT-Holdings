"use client";

import "./style.css";
import Head from "next/head";
import Image from "next/image";
import { Hero } from "@/components";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button, Input, Pagination } from "@/components";
import { IoSearch, IoCloseSharp } from "@/assets/react-icons";

const News = () => {
  const pathName = usePathname();
  const [isActive, setIsActive] = useState<boolean>(false);

  const openModal = () => setIsActive(prevState => !prevState);

  const getOneData = (value: number) => {
    console.log(value);
    openModal();
  };

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
        <section className={`modal ${isActive ? "modal--active" : ""}`}>
          <div className='modal__container container'>
            <div className='modal__background'>
              <div className='modal__header'>
                <h2 className='modal__header-title'>Title 1</h2>
                <Button
                  type='button'
                  onClick={openModal}
                  className='modal__button'
                >
                  <IoCloseSharp className='modal__button-icon' />
                </Button>
              </div>

              <Image
                width={100}
                height={300}
                alt='background-image'
                className='modal__header-image'
                src='https://picsum.photos/460/370'
              />

              <div className='modal__content'>
                <p className='modal__content-text'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consequuntur tempore consequatur, earum libero voluptas natus
                  numquam. Aperiam esse temporibus impedit possimus, ducimus
                  nostrum assumenda doloremque sequi consectetur, beatae qui
                  eum.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className='container'>
          <div className='services__content services__contents'>
            <h2 className='services__content-title'>Dolzarb ma’lumotlar</h2>
            <p className='services__content-text'>
              RT Holdings faoliyatiga oid yangi loyihalar, hamkorliklar va
              mahsulotlar haqidagi eng dolzarb ma’lumotlarni shu yerda topasiz.
              Sizni qiziqtiradigan barcha yangiliklar jamlangan!
            </p>
          </div>

          <form className='service__search'>
            <IoSearch className='search__search-icon' />
            <Input
              required
              type='search'
              placeholder='Lorem ipsum'
              className='service__search-input'
            />
            <Button
              type='submit'
              className='service__search-submit'
            >
              Search
            </Button>
          </form>

          <ul className='services__cards'>
            <li className='services__card'>
              <Image
                width={400}
                height={265}
                alt='services image 1'
                className='services__card-image'
                src='https://picsum.photos/460/370'
              />
              <div className='services__content'>
                <h3 className='services__card-title'>Yangilik 1</h3>
                <p className='services__card-text'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe delectus et dolores. Minima, laudantium ab quaerat
                  incidunt et illum atque?
                </p>
                <Button
                  type='button'
                  onClick={() => getOneData(1)}
                  className='services__card-btn'
                >
                  Lorem ipsum dolor.
                </Button>
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
