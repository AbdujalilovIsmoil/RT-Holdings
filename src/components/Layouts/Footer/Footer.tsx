"use client";

import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import {
  FaPhone,
  FaYoutube,
  FaFacebook,
  FaTelegramPlane,
  AiFillInstagram,
} from "../../../../public/react-icons";

const Footer = () => {
  interface phoneNumbersTypes {
    phone_number: string;
  }

  interface servicesTypes {
    id: number;
    email: string;
    youtube_link: string;
    telegram_link: string;
    facebook_link: string;
    instagram_link: string;
    phone_numbers: phoneNumbersTypes[];
  }

  const [data, setData] = useState<servicesTypes>({
    id: 1,
    email: "",
    youtube_link: "",
    telegram_link: "",
    facebook_link: "",
    instagram_link: "",
    phone_numbers: [{ phone_number: "" }],
  });

  useEffect(() => {
    fetch("https://api.rtholdings.uz/api/v1/common/settings")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <footer className={classNames(styles["footer"])}>
      <div className="container">
        <ul className={classNames(styles["footer__pictures"])}>
          <li className={classNames(styles["footer__picture"])}>
            <Image
              width={170}
              height={120}
              loading="lazy"
              alt="footer image 1"
              src="/images/jpg/footer-pictures/footer-picture-1.jpg"
              className={classNames(styles["footer__picture-img"])}
            />
          </li>
          <li className={classNames(styles["footer__picture"])}>
            <Image
              width={170}
              height={120}
              loading="lazy"
              alt="footer image 2"
              src="/images/jpg/footer-pictures/footer-picture-2.jpg"
              className={classNames(styles["footer__picture-img"])}
            />
          </li>
          <li className={classNames(styles["footer__picture"])}>
            <Image
              width={170}
              height={120}
              loading="lazy"
              alt="footer image 3"
              src="/images/jpg/footer-pictures/footer-picture-3.jpg"
              className={classNames(styles["footer__picture-img"])}
            />
          </li>
          <li className={classNames(styles["footer__picture"])}>
            <Image
              width={170}
              height={120}
              loading="lazy"
              alt="footer image 4"
              src="/images/jpg/footer-pictures/footer-picture-4.jpg"
              className={classNames(styles["footer__picture-img"])}
            />
          </li>
          <li className={classNames(styles["footer__picture"])}>
            <Image
              width={170}
              height={120}
              loading="lazy"
              alt="footer image 5"
              src="/images/jpg/footer-pictures/footer-picture-5.jpg"
              className={classNames(styles["footer__picture-img"])}
            />
          </li>
          <li className={classNames(styles["footer__picture"])}>
            <Image
              width={170}
              height={120}
              loading="lazy"
              alt="footer image 6"
              src="/images/jpg/footer-pictures/footer-picture-6.jpg"
              className={classNames(styles["footer__picture-img"])}
            />
          </li>
          <li className={classNames(styles["footer__picture"])}>
            <Image
              width={170}
              height={120}
              loading="lazy"
              alt="footer image 7"
              src="/images/jpg/footer-pictures/footer-picture-7.jpg"
              className={classNames(styles["footer__picture-img"])}
            />
          </li>
        </ul>

        <div className={classNames(styles["footer__container"])}>
          <div className={classNames(styles["footer__box"])}>
            <Link href="/">
              <Image
                width={210}
                height={70}
                loading="lazy"
                alt="RT Holdings"
                src="/images/svg/site-header/site-logo.svg"
                className={classNames(styles["footer__box-image"])}
              />
            </Link>
            <p className={classNames(styles["footer__box-text"])}>
              Improve efficiency, provide a better Customer experience with
              modern Technolo services available
            </p>
            <ul className={classNames(styles["footer__medias"])}>
              <li className={classNames(styles["footer__media"])}>
                <a target="_blank" href={data.telegram_link}>
                  <FaTelegramPlane
                    className={classNames(styles["footer__media-icon"])}
                  />
                </a>
              </li>
              <li className={classNames(styles["footer__media"])}>
                <a target="_blank" href={data.instagram_link}>
                  <AiFillInstagram
                    className={classNames(styles["footer__media-icon"])}
                  />
                </a>
              </li>
              <li className={classNames(styles["footer__media"])}>
                <a target="_blank" href={data.youtube_link}>
                  <FaYoutube
                    className={classNames(styles["footer__media-icon"])}
                  />
                </a>
              </li>
              <li className={classNames(styles["footer__media"])}>
                <a target="_blank" href={data.facebook_link}>
                  <FaFacebook
                    className={classNames(styles["footer__media-icon"])}
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className={classNames(styles["footer__box"])}>
            <h2 className={classNames(styles["footer__box-title"])}>Pages</h2>
            <ul className={classNames(styles["footer__links-group"])}>
              <li className={classNames(styles["footer__link-group"])}>
                <Link
                  href="/pages/about"
                  className={classNames(styles["footer__link-group-link"])}
                >
                  About
                </Link>
              </li>
              <li className={classNames(styles["footer__link-group"])}>
                <Link
                  href="/pages/projects"
                  className={classNames(styles["footer__link-group-link"])}
                >
                  Projects
                </Link>
              </li>
              <li className={classNames(styles["footer__link-group"])}>
                <Link
                  href="/pages/news"
                  className={classNames(styles["footer__link-group-link"])}
                >
                  News
                </Link>
              </li>
              <li className={classNames(styles["footer__link-group"])}>
                <Link
                  href="/pages/careers"
                  className={classNames(styles["footer__link-group-link"])}
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className={classNames(styles["footer__box"])}>
            <h2 className={classNames(styles["footer__box-title"])}>Contact</h2>
            <ul className={classNames(styles["footer__phones"])}>
              {data &&
                data.phone_numbers.length > 0 &&
                data &&
                data.phone_numbers.map((el: phoneNumbersTypes, index) => {
                  return (
                    <li
                      className={classNames(styles["footer__phone"])}
                      key={index}
                    >
                      <a
                        href={`tel:${el.phone_number}`}
                        className={classNames(
                          styles["footer__phone-container"]
                        )}
                      >
                        <FaPhone
                          className={classNames(
                            styles["footer__box-phone-icon"]
                          )}
                        />
                        <p
                          className={classNames(
                            styles["footer__box-phone-number"]
                          )}
                        >
                          {el.phone_number}
                        </p>
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
      <div className={classNames(styles["footer__bottom"])}>
        <p className={classNames(styles["footer__bottom-text"])}>
          {new Date().getFullYear()} “RT Holdings”
        </p>
      </div>
    </footer>
  );
};

export default Footer;
