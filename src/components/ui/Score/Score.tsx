import "./style.css";
import { useSelector } from "react-redux";
import { initialValuesTypes } from "@/context/reducer";

const Score = () => {
  const { appLang } = useSelector((state: initialValuesTypes) => state);

  type ScoreDataType = {
    [key: string]: {
      title: string;
      items: {
        title: string;
        text: string;
      }[];
    };
  };

  const scoreData: ScoreDataType = {
    uz: {
      title: "Bizning faoliyatlarmiz raqamlarda",
      items: [
        {
          title: "Umumiy loyihalar soni",
          text: "4000+",
        },
        {
          title: "Umumiy mijozlar soni",
          text: "4000+",
        },
        {
          title: "Mutaxassislarmiz tajribasi",
          text: "4000+",
        },
      ],
    },
    ru: {
      title: "Наши достижения в цифрах",
      items: [
        {
          title: "Общее количество проектов",
          text: "4000+",
        },
        {
          title: "Общее количество клиентов",
          text: "4000+",
        },
        {
          title: "Опыт наших специалистов",
          text: "4000+",
        },
      ],
    },
    en: {
      title: "Our achievements in numbers",
      items: [
        {
          title: "Total projects",
          text: "4000+",
        },
        {
          title: "Total clients",
          text: "4000+",
        },
        {
          title: "Experience of our specialists",
          text: "4000+",
        },
      ],
    },
    ko: {
      title: "우리의 성과 수치로",
      items: [
        {
          title: "총 프로젝트 수",
          text: "4000+",
        },
        {
          title: "총 고객 수",
          text: "4000+",
        },
        {
          title: "전문가 경험",
          text: "4000+",
        },
      ],
    },
  };

  return (
    <section className='score'>
      <div className='container'>
        <h2 className='score-title'>{scoreData[`${appLang}`]?.title}</h2>
        <ul className='score__list'>
          {scoreData[`${appLang}`]?.items?.map((item, index) => (
            <li
              key={index}
              className='score__item'
            >
              <h3 className='score__item-title'>{item?.text}</h3>
              <p className='score__item-text'>{item?.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Score;
