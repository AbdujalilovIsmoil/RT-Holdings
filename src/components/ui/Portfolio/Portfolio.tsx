"use client";

import "./style.css";
import Link from "next/link";
import { Button, Texts } from "@/components";

const Portfolio = () => {
  const getBackgroundImage = (image: string) => {
    return {
      backgroundSize: "cover",
      backgroundImage: `url(${image})`,
      backgroundPosition: "center center",
    };
  };

  return (
    <section className='portfolio'>
      <div className='container'>
        <Texts
          title='Bizning ishlar'
          text='RT Holdings tomonidan amalga oshirilgan loyihalar — bu sifat, ishonch va 
          natijaga yo‘naltirilgan yondashuvning amaliy ifodasidir.'
        />

        <ul className='portfolio__filter-list'>
          <li className='portfolio__filter-item'>
            <Button
              type='button'
              className='portfolio__filter-item-btn portfolio__filter-item-btn--active'
            >
              All
            </Button>
          </li>
          <li className='portfolio__filter-item'>
            <Button
              type='button'
              className='portfolio__filter-item-btn'
            >
              Eccommerce
            </Button>
          </li>
          <li className='portfolio__filter-item'>
            <Button
              type='button'
              className='portfolio__filter-item-btn'
            >
              Landing
            </Button>
          </li>
        </ul>

        <ul className='portfolio__cards'>
          <li className='portfolio__card-item'>
            <Link href={`/portfolio/1`}>
              <div
                className='portfolio__card'
                style={getBackgroundImage("https://picsum.photos/460/370")}
              >
                <div className='portfolio__card-content'>
                  <span className='portfolio__card-content-heading'>
                    <em>Product name</em>
                  </span>
                  <h3 className='portfolio__card-content-name'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ipsam, modi?
                  </h3>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
