"use server";

import "./style.css";
import Link from "next/link";
import Image from "next/image";
import {
  FaPhone,
  FaYoutube,
  FaFacebook,
  FaTelegramPlane,
  AiFillInstagram,
} from "@/assets/react-icons";

const Footer = () => {
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
              RT Holdings kompaniyasi O‘zbekiston va Markaziy Osiyoda sifatli
              xizmatlar va mahsulotlar orqali mijozlarning ishonchini qozonishda
              davom etadi. Biz qurilish va sanoatni yangi bosqichga olib
              chiqishga intilamiz.
            </p>
            <ul className='footer__medias'>
              <li className='footer__media'>
                <a
                  target='_blank'
                  href=''
                >
                  <FaTelegramPlane className='footer__media-icon' />
                </a>
              </li>
              <li className='footer__media'>
                <a
                  target='_blank'
                  href=''
                >
                  <AiFillInstagram className='footer__media-icon' />
                </a>
              </li>
              <li className='footer__media'>
                <a
                  target='_blank'
                  href=''
                >
                  <FaYoutube className='footer__media-icon' />
                </a>
              </li>
              <li className='footer__media'>
                <a
                  href=''
                  target='_blank'
                >
                  <FaFacebook className='footer__media-icon' />
                </a>
              </li>
            </ul>
          </div>
          <div className='footer__box'>
            <h2 className='footer__box-title'>Sahifalar</h2>
            <ul className='footer__links-group'>
              <li className='footer__link-group'>
                <Link
                  href='/pages/about'
                  className='footer__link-group-link'
                >
                  Biz haqimizda
                </Link>
              </li>
              <li className='footer__link-group'>
                <Link
                  href='/pages/projects'
                  className='footer__link-group-link'
                >
                  Ishlar
                </Link>
              </li>
              <li className='footer__link-group'>
                <Link
                  href='/pages/news'
                  className='footer__link-group-link'
                >
                  Yangiliklar
                </Link>
              </li>
              <li className='footer__link-group'>
                <Link
                  href='/pages/careers'
                  className='footer__link-group-link'
                >
                  Sotuv
                </Link>
              </li>
              <li className='footer__link-group'>
                <Link
                  href='/pages/careers'
                  className='footer__link-group-link'
                >
                  Xizmatlar
                </Link>
              </li>
              <li className='footer__link-group'>
                <Link
                  href='/pages/careers'
                  className='footer__link-group-link'
                >
                  Biz bilan aloqa
                </Link>
              </li>
            </ul>
          </div>
          <div className='footer__box'>
            <h2 className='footer__box-title'>Aloqa</h2>
            <ul className='footer__phones'>
              <li className='footer__phone'>
                <a
                  href='tel:+99894-563-9595'
                  className='footer__phone-container'
                >
                  <FaPhone className='footer__box-phone-icon' />
                  <p className='footer__box-phone-number'>+99894-563-9595</p>
                </a>
              </li>
              <li className='footer__phone'>
                <a
                  href='tel:+8210-2989-8641'
                  className='footer__phone-container'
                >
                  <FaPhone className='footer__box-phone-icon' />
                  <p className='footer__box-phone-number'>+8210-2989-8641</p>
                </a>
              </li>
              <li className='footer__phone'>
                <a
                  href='tel:+8210-8383-2796'
                  className='footer__phone-container'
                >
                  <FaPhone className='footer__box-phone-icon' />
                  <p className='footer__box-phone-number'>+8210-8383-2796</p>
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
