"use client";

import "./style.css";
import { useGet } from "@/hooks";
import { scoreData } from "./data";
import { useSelector } from "react-redux";
import { initialValuesTypes } from "@/context/reducer";

const Score = () => {
  const { appLang } = useSelector((state: initialValuesTypes) => state);

  // const data = useGet({ path: "/activities" });

  interface ScoreTypes {
    id: string | number;
    number: string | number;
    title_uz: string;
    title_ru: string;
    title_en: string;
    title_ko: string;
  }

  const data: ScoreTypes[] = [
    {
      id: 1,
      number: 10,
      title_en: "Total number of projects",
      title_ru: "Общее количество проектов",
      title_uz: "Umumiy loyihalar soni",
      title_ko: "총 프로젝트 수",
    },
    {
      id: 2,
      number: 2000,
      title_en: "Total number of customers",
      title_ru: "Общее количество клиентов",
      title_uz: "Umumiy mijozlar soni",
      title_ko: "총 고객 수",
    },
    {
      id: 3,
      number: 100,
      title_en: "Number of employees",
      title_ru: "Количество сотрудников",
      title_uz: "Hodimlar soni",
      title_ko: "직원 수",
    },
  ];

  return (
    <section className="score">
      <div className="container">
        <h2 className="score-title">{scoreData[`${appLang}`]?.title}</h2>
        <ul className="score__list">
          {Array.isArray(data) &&
            data.map((item: ScoreTypes) => (
              <li key={item?.id} className="score__item">
                <h3 className="score__item-title">{item.number}+</h3>
                <p className="score__item-text">
                  {item?.[`title_${appLang}` as keyof ScoreTypes]}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Score;
