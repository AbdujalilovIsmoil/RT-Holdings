"use client";

import Image from "next/image";
import classNames from "classnames";
import styles from "./index.module.css";
import Modal from "@/components/UI/Modal";
import { useEffect, useState } from "react";
import Button from "@/components/UI/Button";
import Input from "@/components/Field/Input";
import { IoSearch } from "../../../../public/react-icons";

interface textsTypes {
  text: string;
  title: string;
}

interface serviceType {
  isOpen: boolean;
  isActive: boolean;
  data: textsTypes[];
  openModal: () => void;
}

interface salesTypes {
  id: number;
  image: string;
  title_uz: string;
  title_ru: string;
  title_en: string;
  title_ko: string;
  description_uz: string;
  description_ru: string;
  description_en: string;
  description_ko: string;
}

const Services = ({ openModal, isActive, isOpen, data }: serviceType) => {
  const [oneData, setOneData] = useState<salesTypes>({
    id: 0,
    image: "",
    title_en: "",
    title_ko: "",
    title_ru: "",
    title_uz: "",
    description_en: "",
    description_ko: "",
    description_ru: "",
    description_uz: "",
  });
  const [datas, setData] = useState<salesTypes[]>([
    {
      id: 0,
      image: "",
      title_en: "",
      title_ko: "",
      title_ru: "",
      title_uz: "",
      description_en: "",
      description_ko: "",
      description_ru: "",
      description_uz: "",
    },
  ]);

  useEffect(() => {
    fetch("https://api.rtholdings.uz/api/v1/common/news/list/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const getOneData = (id: number) => {
    fetch(`https://api.rtholdings.uz/api/v1/common/news/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setOneData(data);
        openModal();
      });
  };

  return (
    <>
      <section className={classNames(styles["service"])}>
        <Modal data={oneData} isActive={isActive} openModal={openModal} />

        <div className="container">
          {data.length > 0 &&
            data.map((el: textsTypes, index) => {
              return (
                <div
                  key={index}
                  className={classNames(
                    styles["services__content"],
                    styles["services__contents"]
                  )}
                >
                  <h2 className={classNames(styles["services__content-title"])}>
                    {el && el.title}
                  </h2>
                  <p className={classNames(styles["services__content-text"])}>
                    {el && el.text}
                  </p>
                </div>
              );
            })}

          {isOpen && (
            <form className={classNames(styles["service__search"])}>
              <IoSearch className={classNames(styles["search__search-icon"])} />
              <Input
                required
                type="search"
                placeholder="Lorem ipsum"
                className={classNames(styles["service__search-input"])}
              />
              <Button
                type="submit"
                className={classNames(styles["service__search-submit"])}
              >
                Search
              </Button>
            </form>
          )}

          <ul className={classNames(styles["services__cards"])}>
            {datas.length > 0 &&
              datas.map((el: salesTypes) => {
                return (
                  <li
                    key={el?.id}
                    className={classNames(styles["services__card"])}
                  >
                    <Image
                      width={400}
                      height={265}
                      alt="services image 1"
                      src={`https://api.rtholdings.uz${el && el?.image}`}
                      className={classNames(styles["services__card-image"])}
                    />
                    <h3 className={classNames(styles["services__card-title"])}>
                      {el && el.title_uz}
                    </h3>
                    <p className={classNames(styles["services__card-text"])}>
                      {el && el.description_uz}
                    </p>
                    <Button
                      type="button"
                      onClick={() => {
                        getOneData(el?.id);
                      }}
                      className={classNames(styles["services__card-btn"])}
                    >
                      Lorem ipsum dolor.
                    </Button>
                  </li>
                );
              })}
          </ul>

          {/* <Pagination itemsPerPage={1} /> */}
        </div>
      </section>
    </>
  );
};

export default Services;
