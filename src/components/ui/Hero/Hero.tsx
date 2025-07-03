"use client";

import "./style.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Hero = ({ page }: { page: string }) => {
  interface pageDataTypes {
    id: number;
    path: string;
    text: string;
    title: string;
  }

  const pageData: pageDataTypes[] = [
    {
      id: 1,
      title: "About us",
      path: "/about",
      text: "Lorem ipsum dolor sit amet consectetur. Velit sagittis nec vulputate aliquet at suspendisse dui semper feugiat.",
    },
    {
      id: 2,
      title: "Projects",
      path: "/portfolio",
      text: "Lorem ipsum dolor sit amet consectetur. Velit sagittis nec vulputate aliquet at suspendisse dui semper feugiat.",
    },
    {
      id: 3,
      title: "News",
      path: "/news",
      text: "Lorem ipsum dolor sit amet consectetur. Velit sagittis nec vulputate aliquet at suspendisse dui semper feugiat.",
    },
    {
      id: 4,
      title: "News",
      path: "/news",
      text: "Lorem ipsum dolor sit amet consectetur. Velit sagittis nec vulputate aliquet at suspendisse dui semper feugiat.",
    },
    {
      id: 5,
      title: "Sale",
      path: "/sale",
      text: "Lorem ipsum dolor sit amet consectetur. Velit sagittis nec vulputate aliquet at suspendisse dui semper feugiat.",
    },
    {
      id: 6,
      title: "Our Services",
      path: "/services",
      text: "Lorem ipsum dolor sit amet consectetur. Velit sagittis nec vulputate aliquet at suspendisse dui semper feugiat.",
    },
    {
      id: 7,
      title: "Contact us",
      path: "/contact",
      text: "Lorem ipsum dolor sit amet consectetur. Velit sagittis nec vulputate aliquet at suspendisse dui semper feugiat.",
    },
    {
      id: 7,
      title: "Contact us",
      path: "/contact",
      text: "Lorem ipsum dolor sit amet consectetur. Velit sagittis nec vulputate aliquet at suspendisse dui semper feugiat.",
    },
  ];

  const pathName = usePathname();

  const getImage = (page: string) => {
    if (page === pathName && pathName === "/") {
      return "hero-background-image.jpg";
    } else if (page === "/about") {
      return "hero-background-image-1.jpg";
    } else if (page === "/contact") {
      return "hero-background-image-4.jpg";
    } else if (page === "/portfolio") {
      return "hero-background-image-3.jpg";
    } else if (page === "/news") {
      return "hero-background-image-2.jpg";
    } else if (page === "/sale") {
      return "hero-background-image-1.jpg";
    } else if (page === "/services") {
      return "hero-background-image-1.jpg";
    }
  };

  const heroStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `linear-gradient(90deg, rgba(30, 36, 44, 0.8) 0%, rgba(30, 36, 44, 0.6) 43.96%, rgba(30, 36, 44, 0.6) 66.39%), url(/images/jpg/${getImage(
      page,
    )})`,
  };

  if (page === "/") {
    return (
      <section
        style={heroStyle}
        className='site-hero'
      >
        <h1 className='visually-hidden'>RT Holdings</h1>

        <div className='container'>
          <div className='site-hero__content'>
            <span className='site-hero__content-small'>
              Lorem ipsum dolor sit amet.
            </span>
            <h2 className='site-hero__content-title'>
              <span className='site-hero__conetent-among'>RT Holdings</span>
              kompaniyasi O‘zbekiston va Markaziy Osiyo davlatlari qurilish,
              sanoat, logistika va xizmat ko’rsatish sohalarida ishonchli
              hamkordir. Bizning maqsadimiz mijozlarimizga sifatli, ishonchli va
              tezkor xizmat ko’rsatishdir
            </h2>

            <p className='site-hero__content-text'>
              Lorem ipsum dolor sit amet consectetur. Velit sagittis nec
              vulputate aliquet at suspendisse dui semper feugiat.
            </p>

            <div className='site-hero__buttons'>
              <Link
                href='/services'
                className='site-hero__buttons-button site-hero__buttons-button--active'
              >
                Xizmatlarimiz bilan tanishing
              </Link>
              <Link
                href='/about'
                className='site-hero__buttons-button'
              >
                Biz haqimizda ko'proq ma'lumot oling
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section
        style={heroStyle}
        className='site-hero'
      >
        <h1 className='visually-hidden'>RT Holdings</h1>
        <div className='container'>
          {pageData.length > 0 &&
            [pageData.find((el: pageDataTypes) => el.path === page)].map(el => {
              return (
                <div
                  key={el?.id}
                  className='content'
                >
                  <h2 className='content-title'>{el && el.title}</h2>
                  <p className='content-text'>{el && el.text}</p>
                </div>
              );
            })}
        </div>
      </section>
    );
  }
};

export default Hero;
