"use client";

import "./style.css";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { initialValuesTypes } from "@/context/reducer";
import {
  FaPhone,
  FaYoutube,
  FaTelegramPlane,
  AiFillInstagram,
} from "@/assets/react-icons";

const Footer = () => {
  const { appLang } = useSelector((state: initialValuesTypes) => state);

  type textsTypes = {
    [key: string]: {
      description: string;
    };
  };

  const texts: textsTypes = {
    uz: {
      description:
        "RT Holdings kompaniyasi O‘zbekiston va Markaziy Osiyoda sifatli xizmatlar va mahsulotlar orqali mijozlarning ishonchini qozonishda davom etadi. Biz qurilish va sanoatni yangi bosqichga olib chiqishga intilamiz.",
    },
    ru: {
      description:
        "Компания RT Holdings продолжает завоевывать доверие клиентов в Узбекистане и Центральной Азии, предоставляя качественные услуги и продукты. Мы стремимся вывести строительство и промышленность на новый уровень.",
    },
    en: {
      description:
        "RT Holdings continues to earn the trust of customers in Uzbekistan and Central Asia by providing quality services and products. We strive to take construction and industry to a new level.",
    },
    ko: {
      description:
        "RT Holdings는 우즈베키스탄과 중앙 아시아에서 양질의 서비스와 제품을 통해 고객의 신뢰를 얻고 있습니다. 우리는 건설 및 산업을 새로운 차원으로 끌어올리기 위해 노력하고 있습니다.",
    },
  };

  type sectionsTypes = {
    [key: string]: {
      pages: string;
      contactUs: string;
      list: {
        id: number;
        title: string;
        path: string;
      }[];
    };
  };

  const sections: sectionsTypes = {
    uz: {
      pages: "Sahifalar",
      contactUs: "Aloqa",
      list: [
        {
          id: 1,
          title: "Bosh sahifa",
          path: "/",
        },
        {
          id: 2,
          title: "Biz haqimizda",
          path: "/about",
        },
        {
          id: 3,
          title: "Xizmatlar",
          path: "/services",
        },
        {
          id: 4,
          title: "Yangiliklar",
          path: "/news",
        },
        { id: 5, title: "Aloqa", path: "/contact" },
      ],
    },
    ru: {
      pages: "Страницы",
      contactUs: "Контакт",
      list: [
        {
          id: 1,
          title: "Главная",
          path: "/",
        },
        {
          id: 2,
          title: "О нас",
          path: "/about",
        },
        {
          id: 3,
          title: "Услуги",
          path: "/services",
        },
        {
          id: 4,
          title: "Новости",
          path: "/news",
        },
        { id: 5, title: "Контакты", path: "/contact" },
      ],
    },
    en: {
      pages: "Pages",
      contactUs: "Contact Us",
      list: [
        {
          id: 1,
          title: "Home",
          path: "/",
        },
        {
          id: 2,
          title: "About Us",
          path: "/about",
        },
        {
          id: 3,
          title: "Services",
          path: "/services",
        },
        {
          id: 4,
          title: "News",
          path: "/news",
        },
        { id: 5, title: "Contact", path: "/contact" },
      ],
    },
    ko: {
      pages: "페이지",
      contactUs: "문의하기",
      list: [
        {
          id: 1,
          title: "홈",
          path: "/",
        },
        {
          id: 2,
          title: "회사 소개",
          path: "/about",
        },
        {
          id: 3,
          title: "서비스",
          path: "/services",
        },
        {
          id: 4,
          title: "뉴스",
          path: "/news",
        },
        { id: 5, title: "연락처", path: "/contact" },
      ],
    },
  };

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__container'>
          <div className='footer__box'>
            <Link href='/'>
              <Image
                width={210}
                height={70}
                loading='lazy'
                alt='RT Holdings'
                className='footer__box-image'
                src='/images/svg/site-header/site-logo.svg'
              />
            </Link>
            <p className='footer__box-text'>
              {texts[`${appLang}`]?.description}
            </p>
            <ul className='footer__medias'>
              <li className='footer__media'>
                <a
                  target='_blank'
                  href='https://t.me/RT_Holdings'
                >
                  <FaTelegramPlane className='footer__media-icon' />
                </a>
              </li>
              <li className='footer__media'>
                <a
                  target='_blank'
                  href='https://www.instagram.com/rt_holdings?igsh=MXY2NXJsYWRheTU0dw=='
                >
                  <AiFillInstagram className='footer__media-icon' />
                </a>
              </li>
              <li className='footer__media'>
                <a
                  target='_blank'
                  href='https://youtube.com/@rt_holdings?si=P_sTdzEvwiT-ejP6'
                >
                  <FaYoutube className='footer__media-icon' />
                </a>
              </li>
              <li className='site__media'>
                <a
                  target='_blank'
                  href='https://www.instagram.com/rt_holdings?igsh=MXY2NXJsYWRheTU0dw=='
                >
                  <IoLogoTiktok className='site__media-icon' />
                </a>
              </li>
              <li className='site__media'>
                <a
                  target='_blank'
                  href='https://www.instagram.com/rt_holdings?igsh=MXY2NXJsYWRheTU0dw=='
                >
                  <FaWhatsapp className='site__media-icon' />
                </a>
              </li>
            </ul>
          </div>
          <div className='footer__box'>
            <h2 className='footer__box-title'>
              {sections[`${appLang}`]?.pages}
            </h2>
            <ul className='footer__links-group'>
              {sections[`${appLang}`]?.list.map(el => {
                return (
                  <li
                    key={el?.id}
                    className='footer__link-group'
                  >
                    <Link
                      href={el?.path}
                      className='footer__link-group-link'
                    >
                      {el?.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='footer__box'>
            <h2 className='footer__box-title'>
              {sections[`${appLang}`]?.contactUs}
            </h2>
            <ul className='footer__phones'>
              <li className='footer__phone'>
                <a
                  href='tel:+99891-088-9595'
                  className='footer__phone-container'
                >
                  <FaPhone className='footer__box-phone-icon' />
                  <p className='footer__box-phone-number'>+99891-088-9595</p>
                </a>
              </li>
              <li className='footer__phone'>
                <a
                  href='tel:+8210-9687-9796'
                  className='footer__phone-container'
                >
                  <FaPhone className='footer__box-phone-icon' />
                  <p className='footer__box-phone-number'>+8210-9687-9796</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer__bottom'>
        <p className='footer__bottom-text'>2013 “RT Holdings”</p>
      </div>
    </footer>
  );
};

export default Footer;
