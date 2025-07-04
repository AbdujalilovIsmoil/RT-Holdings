"use client";

import "./style.css";
import Image from "next/image";
import { useEffect } from "react";
import { Hero } from "@/components";
import { usePathname } from "next/navigation";
import { Button, Input, Pagination } from "@/components";
import {
  IoSearch,
  MdDateRange,
  MdRealEstateAgent,
  MdOutlinePriceChange,
} from "@/assets/react-icons";

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
              Eng so‘nggi takliflar va chegirmalar
            </h2>
            <p className='services__content-text'>
              RT Holdings mahsulotlari va chegirmalari haqida eng so‘nggi
              ma’lumotlar shu yerda. Mos texnikani qulay narxlarda tanlang va
              imkoniyatlarni boy bermang.
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
                <h3 className='services__card-title'>
                  Tarktor Magnun Germany 2020
                </h3>
                <h2 className='services__card-price'>257 063 000 UZS</h2>
                <ul className='services__states'>
                  <li className='services__state'>
                    <div className='services__state-box'>
                      <MdDateRange className='services__state-box-icon' />
                      <span className='services__state-box-name'>
                        Chiqgan sanasi
                      </span>
                    </div>

                    <span className='services__state-value'>2024</span>
                  </li>
                  <li className='services__state'>
                    <div className='services__state-box'>
                      <MdRealEstateAgent className='services__state-box-icon' />
                      <span className='services__state-box-name'>Holati</span>
                    </div>

                    <span className='services__state-value'>Yaxshi</span>
                  </li>
                  <li className='services__state'>
                    <div className='services__state-box'>
                      <MdOutlinePriceChange className='services__state-box-icon' />
                      <span className='services__state-box-name'>Narxi</span>
                    </div>

                    <span className='services__state-value'>76 000$</span>
                  </li>
                </ul>
                <p className='services__card-description'>
                  Jolashtirildi: 2024/10/02
                </p>
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
              <div className='services__content'>
                <h3 className='services__card-title'>
                  Tarktor Magnun Germany 2020
                </h3>
                <h2 className='services__card-price'>257 063 000 UZS</h2>
                <ul className='services__states'>
                  <li className='services__state'>
                    <div className='services__state-box'>
                      <MdDateRange className='services__state-box-icon' />
                      <span className='services__state-box-name'>
                        Chiqgan sanasi
                      </span>
                    </div>

                    <span className='services__state-value'>2024</span>
                  </li>
                  <li className='services__state'>
                    <div className='services__state-box'>
                      <MdRealEstateAgent className='services__state-box-icon' />
                      <span className='services__state-box-name'>Holati</span>
                    </div>

                    <span className='services__state-value'>Yaxshi</span>
                  </li>
                  <li className='services__state'>
                    <div className='services__state-box'>
                      <MdOutlinePriceChange className='services__state-box-icon' />
                      <span className='services__state-box-name'>Narxi</span>
                    </div>

                    <span className='services__state-value'>76 000$</span>
                  </li>
                </ul>
                <p className='services__card-description'>
                  Jolashtirildi: 2024/10/02
                </p>
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
              <div className='services__content'>
                <h3 className='services__card-title'>
                  Tarktor Magnun Germany 2020
                </h3>
                <h2 className='services__card-price'>257 063 000 UZS</h2>
                <ul className='services__states'>
                  <li className='services__state'>
                    <div className='services__state-box'>
                      <MdDateRange className='services__state-box-icon' />
                      <span className='services__state-box-name'>
                        Chiqgan sanasi
                      </span>
                    </div>

                    <span className='services__state-value'>2024</span>
                  </li>
                  <li className='services__state'>
                    <div className='services__state-box'>
                      <MdRealEstateAgent className='services__state-box-icon' />
                      <span className='services__state-box-name'>Holati</span>
                    </div>

                    <span className='services__state-value'>Yaxshi</span>
                  </li>
                  <li className='services__state'>
                    <div className='services__state-box'>
                      <MdOutlinePriceChange className='services__state-box-icon' />
                      <span className='services__state-box-name'>Narxi</span>
                    </div>

                    <span className='services__state-value'>76 000$</span>
                  </li>
                </ul>
                <p className='services__card-description'>
                  Jolashtirildi: 2024/10/02
                </p>
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
              <div className='services__content'>
                <h3 className='services__card-title'>
                  Tarktor Magnun Germany 2020
                </h3>
                <h2 className='services__card-price'>257 063 000 UZS</h2>
                <ul className='services__states'>
                  <li className='services__state'>
                    <div className='services__state-box'>
                      <MdDateRange className='services__state-box-icon' />
                      <span className='services__state-box-name'>
                        Chiqgan sanasi
                      </span>
                    </div>

                    <span className='services__state-value'>2024</span>
                  </li>
                  <li className='services__state'>
                    <div className='services__state-box'>
                      <MdRealEstateAgent className='services__state-box-icon' />
                      <span className='services__state-box-name'>Holati</span>
                    </div>

                    <span className='services__state-value'>Yaxshi</span>
                  </li>
                  <li className='services__state'>
                    <div className='services__state-box'>
                      <MdOutlinePriceChange className='services__state-box-icon' />
                      <span className='services__state-box-name'>Narxi</span>
                    </div>

                    <span className='services__state-value'>76 000$</span>
                  </li>
                </ul>
                <p className='services__card-description'>
                  Jolashtirildi: 2024/10/02
                </p>
              </div>
            </li>
          </ul>

          <Pagination itemsPerPage={1} />
        </div>
      </section>
    </>
  );
};

export default Sale;
