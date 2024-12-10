"use client";

import Link from "next/link";
import classNames from "classnames";
import styles from "./index.module.css";
import Texts from "@/components/UI/Texts";
import Button from "@/components/UI/Button";
import { useEffect, useState } from "react";

const Portfolio = () => {
  interface categoryDataTypes {
    id: number;
    title_uz: string;
    title_ru: string;
    title_en: string;
    title_ko: string;
  }

  interface dataTypes {
    id: number;
    link: string;
    image: string;
    name_uz: string;
    name_ru: string;
    name_en: string;
    name_ko: string;
    service: number;
    service_name: string;
  }

  const [data, setData] = useState<dataTypes[]>([
    {
      id: 0,
      link: "",
      image: "",
      service: 0,
      name_en: "",
      name_ko: "",
      name_ru: "",
      name_uz: "",
      service_name: "",
    },
  ]);

  const [categoryData, setCategoryData] = useState<categoryDataTypes[]>([]);

  const getBackgroundImage = (image: string) => {
    return {
      backgroundSize: "cover",
      backgroundImage: `url(${image})`,
      backgroundPosition: "center center",
    };
  };

  useEffect(() => {
    fetch("https://api.rtholdings.uz/api/v1/common/project/list/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });

    fetch("https://api.rtholdings.uz/api/v1/common/project-category/list")
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
  }, []);

  return (
    <section className={classNames(styles["portfolio"])}>
      <div className="container">
        <Texts
          title="Portfolio"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s....."
        />

        <ul className={classNames(styles["portfolio__filter-list"])}>
          {categoryData.length > 0 &&
            categoryData.map((el: categoryDataTypes, index) => {
              return (
                <li
                  key={index}
                  className={classNames(styles["portfolio__filter-item"])}
                >
                  <Button
                    type="button"
                    className={classNames(
                      styles["portfolio__filter-item-btn"],
                      styles["portfolio__filter-item-btn--active"]
                    )}
                  >
                    {el && el?.title_uz}
                  </Button>
                </li>
              );
            })}
        </ul>

        <ul className={classNames(styles["portfolio__cards"])}>
          {data.length > 0 &&
            data.map((el: dataTypes, index) => {
              return (
                <li
                  key={index}
                  className={classNames(styles["portfolio__card-item"])}
                >
                  <Link href={`/projects/${el && el?.id}`}>
                    <div
                      className={classNames(styles["portfolio__card"])}
                      style={getBackgroundImage(
                        `https://api.rtholdings.uz${el.image}`
                      )}
                    >
                      <div
                        className={classNames(
                          styles["portfolio__card-content"]
                        )}
                      >
                        <span
                          className={classNames(
                            styles["portfolio__card-content-heading"]
                          )}
                        >
                          <em>{el && el.service_name}</em>
                        </span>
                        <h3
                          className={classNames(
                            styles["portfolio__card-content-name"]
                          )}
                        >
                          {el && el.name_uz}
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
