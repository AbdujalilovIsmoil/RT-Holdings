"use client";

import "./style.css";
import Link from "next/link";
import Image from "next/image";
import { sections, texts } from "./data";
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

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="footer__box">
            <Link href="/">
              <Image
                width={210}
                height={70}
                loading="lazy"
                alt="RT Holdings"
                className="footer__box-image"
                src="/images/svg/site-header/site-logo.svg"
              />
            </Link>
            <p className="footer__box-text">
              {texts[`${appLang}`]?.description}
            </p>
            <ul className="footer__medias">
              <li className="footer__media">
                <a target="_blank" href="https://t.me/RT_Holdings">
                  <FaTelegramPlane className="footer__media-icon" />
                </a>
              </li>
              <li className="footer__media">
                <a
                  target="_blank"
                  href="https://www.instagram.com/rt_holdings?igsh=MXY2NXJsYWRheTU0dw=="
                >
                  <AiFillInstagram className="footer__media-icon" />
                </a>
              </li>
              <li className="footer__media">
                <a
                  target="_blank"
                  href="https://youtube.com/@rt_holdings?si=P_sTdzEvwiT-ejP6"
                >
                  <FaYoutube className="footer__media-icon" />
                </a>
              </li>
              <li className="site__media">
                <a
                  target="_blank"
                  href="https://www.instagram.com/rt_holdings?igsh=MXY2NXJsYWRheTU0dw=="
                >
                  <IoLogoTiktok className="site__media-icon" />
                </a>
              </li>
              <li className="site__media">
                <a
                  target="_blank"
                  href="https://www.instagram.com/rt_holdings?igsh=MXY2NXJsYWRheTU0dw=="
                >
                  <FaWhatsapp className="site__media-icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__box">
            <h2 className="footer__box-title">
              {sections[`${appLang}`]?.pages}
            </h2>
            <ul className="footer__links-group">
              {sections[`${appLang}`]?.list?.map((el) => {
                return (
                  <li key={el?.id} className="footer__link-group">
                    <Link href={el?.path} className="footer__link-group-link">
                      {el?.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer__box">
            <h2 className="footer__box-title">
              {sections[`${appLang}`]?.contactUs}
            </h2>
            <ul className="footer__phones">
              <li className="footer__phone">
                <a
                  href="tel:+99891-088-9595"
                  className="footer__phone-container"
                >
                  <FaPhone className="footer__box-phone-icon" />
                  <p className="footer__box-phone-number">+99891-088-9595</p>
                </a>
              </li>
              <li className="footer__phone">
                <a
                  href="tel:+8210-9687-9796"
                  className="footer__phone-container"
                >
                  <FaPhone className="footer__box-phone-icon" />
                  <p className="footer__box-phone-number">+8210-9687-9796</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__bottom-text">2013 “RT Holdings”</p>
      </div>
    </footer>
  );
};

export default Footer;
