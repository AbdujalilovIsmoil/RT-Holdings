"use client";

import "./style.css";
import Link from "next/link";
import { Texts } from "@/components";

const Portfolio = () => {
  const portfolioContent = [
    {
      id: 1,
      path: "aka-taxi",
      title: "aka taxi",
      image: "/images/jpg/Aka-taxi.jpg",
    },
    {
      id: 2,
      path: "dream-express",
      title: "Dream Express",
      image: "/images/jpg/dream-express.jpg",
    },
    {
      id: 3,
      path: "rt-medline",
      title: "RT Medline",
      image: "/images/jpg/rt-medline.jpg",
    },
    {
      id: 4,
      path: "rt-motors",
      title: "RT MOTORS",
      image: "/images/jpg/rt-motors.jpg",
    },
  ];

  return (
    <section className='portfolio'>
      <div className='container'>
        <Texts
          title='Bizning ishlar'
          text='RT Holdings tomonidan amalga oshirilgan loyihalar — bu sifat, ishonch va 
          natijaga yo‘naltirilgan yondashuvning amaliy ifodasidir.'
        />

        <ul className='portfolio__cards'>
          {portfolioContent.map(el => {
            return (
              <li
                key={el.id}
                className='portfolio__card-item'
              >
                <Link href={`/portfolio/${el.path}`}>
                  <div
                    className='portfolio__card'
                    style={{
                      backgroundSize: "cover",
                      backgroundImage: `url(${el.image})`,
                      backgroundPosition: "center center",
                    }}
                  >
                    <div className='portfolio__card-content'>
                      <span className='portfolio__card-content-heading'>
                        <em>Product name</em>
                      </span>
                      <h3 className='portfolio__card-content-name'>
                        {el.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
