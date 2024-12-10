"use client";

import { get } from "lodash";
import Image from "next/image";
import classNames from "classnames";
import style from "./style.module.css";
import styles from "./style.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Hero = () => {
  interface oneBannerDataTypes {
    id: number;
    banner: string;
    title_uz: string;
    title_ru: string;
    title_en: string;
    title_ko: string;
    description_uz: string;
    description_ru: string;
    description_en: string;
    description_ko: string;
  }

  interface oneDataTypes {
    id: number;
    link: string;
    image: string;
    name_uz: string;
    name_ru: string;
    name_en: string;
    name_ko: string;
    service: number;
    banner: oneBannerDataTypes;
  }

  const router = useRouter();

  const [data, setData] = useState<oneDataTypes>({
    id: 0,
    link: "",
    image: "",
    service: 0,
    name_en: "",
    name_ko: "",
    name_ru: "",
    name_uz: "",
    banner: {
      id: 0,
      banner: "",
      title_en: "",
      title_ko: "",
      title_ru: "",
      title_uz: "",
      description_en: "",
      description_ko: "",
      description_ru: "",
      description_uz: "",
    },
  });

  useEffect(() => {
    scrollTo({
      top: 0,
    });

    const query = get(router, "query");

    fetch(`https://api.rtholdings.uz/api/v1/common/project/${query?.id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [router]);

  const heroStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `linear-gradient(90deg, rgba(30, 36, 44, 0.8) 0%, rgba(30, 36, 44, 0.6) 43.96%, rgba(30, 36, 44, 0.6) 66.39%), url(https://api.rtholdings.uz/${
      data?.banner && data?.banner.banner
    })`,
  };

  return (
    <section className={classNames(style["project-view"])}>
      <div className={classNames(style["site-hero"])} style={heroStyle}>
        <h1 className="visually-hidden">{data?.name_uz && data?.name_uz}</h1>
        <div className="container">
          <div className={classNames(style["content"])}>
            <h2 className={classNames(style["content-title"])}>
              {data?.name_uz && data?.name_uz}
            </h2>
            <p className={classNames(style["content-text"])}>
              {data?.banner && data?.banner.description_uz}
            </p>
          </div>
        </div>
      </div>

      <section className={classNames(styles["post"])}>
        <div className="container">
          <div className={classNames(styles["post__content"])}>
            <Image
              width={100}
              height={510}
              alt={data?.name_uz && data.name_uz}
              className={classNames(styles["post__content-image"])}
              src={`https://api.rtholdings.uz${
                data?.banner && data.banner.banner
              }`}
            />
            <h2 className={classNames(styles["post__content-title"])}>
              {data?.banner && data.banner.title_uz}
            </h2>
            <p className={classNames(styles["post__content-text"])}>
              {data?.banner && data.banner.description_uz}
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
