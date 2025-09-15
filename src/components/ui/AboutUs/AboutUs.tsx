import "./style.css";
import Image from "next/image";
import { Texts } from "@/components";
import { useSelector } from "react-redux";
import AboutUSImage from "../../../../public/images/png/about-image.png";
import { aboutData, textData } from "./data";
import { initialValuesTypes } from "@/context/reducer";

const About = () => {
  const { appLang } = useSelector((state: initialValuesTypes) => state);

  return (
    <section className="about">
      <div className="container">
        <div className="container">
          <Texts
            title={textData[`${appLang}`]?.title}
            text={textData[`${appLang}`]?.text}
          />
        </div>

        <div className="about__container">
          <div className="about__box">
            <Image
              width={590}
              height={400}
              className="about__box-image"
              src={AboutUSImage}
              alt="RT Holdings kompaniya haqida"
            />
          </div>

          <div className="about__box">
            <span className="about__box-small-text">
              {aboutData[`${appLang}`]?.smallText}
            </span>
            <h3 className="about__box-title">
              {aboutData[`${appLang}`]?.title}
            </h3>

            <ul className="about__list">
              {aboutData[`${appLang}`]?.listItems.map((item, index) => (
                <li key={index} className="about__item">
                  <p className="about__item-text">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
