"use client";

import "./style.css";
import Image from "next/image";
import { IoSearch } from "@/assets/react-icons";
import { Button, Input, Modal, Pagination } from "@/components";

interface serviceType {
  isOpen: boolean;
  isActive: boolean;
  openModal: () => void;
}

const Services = ({ openModal, isActive, isOpen }: serviceType) => {
  const getOneData = (value: number) => {
    console.log(value);
    openModal();
  };

  return (
    <>
      <section className='service'>
        <Modal
          isActive={isActive}
          openModal={openModal}
        />

        <div className='container'>
          <div className='services__content services__contents'>
            <h2 className='services__content-title'>Title 1</h2>
            <p className='services__content-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, non suscipit vitae cumque cupiditate iusto provident
              aspernatur molestiae aperiam magni?
            </p>
          </div>

          {isOpen && (
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
          )}

          <ul className='services__cards'>
            <li className='services__card'>
              <Image
                width={400}
                height={265}
                alt='services image 1'
                className='services__card-image'
                src='https://picsum.photos/460/370'
              />
              <h3 className='services__card-title'>Title 1</h3>
              <p className='services__card-text'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
                delectus et dolores. Minima, laudantium ab quaerat incidunt et
                illum atque?
              </p>
              <Button
                type='button'
                onClick={() => getOneData(1)}
                className='services__card-btn'
              >
                Lorem ipsum dolor.
              </Button>
            </li>
          </ul>

          <Pagination itemsPerPage={1} />
        </div>
      </section>
    </>
  );
};

export default Services;
