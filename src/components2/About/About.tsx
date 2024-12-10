import Link from "next/link";
import Image from "next/image";
import { useGet } from "@/hooks";
import classNames from "classnames";
import styles from "./index.module.css";
import Texts from "@/components/UI/Texts";

const About = () => {
  const { data } = useGet({ path: "/about-us" });

  interface DataTypes {
    banner: string;
    image1: string;
    image2: string;
    image3: string;
    text_uz: string;
    title_uz: string;
  }

  const typeData = data as DataTypes;

  const backgroundStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `url(https://api.rtholdings.uz${typeData?.banner})`,
  };

  return (
    <section className={classNames(styles["about"])}>
      <div className="container">
        <Texts
          title="About us"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s....."
        />
      </div>

      <div
        style={backgroundStyle}
        className={classNames(styles["about__background"])}
      >
        <div className={classNames(styles["about__container"], "container")}>
          <div className={classNames(styles["about__images-container"])}>
            <Image
              width={460}
              height={370}
              alt="image name"
              src={data ? `https://api.rtholdings.uz${typeData?.image1}` : ""}
              className={classNames(styles["about__images-container-image"])}
            />
            <Image
              width={320}
              height={255}
              alt="image name"
              src={data ? `https://api.rtholdings.uz${typeData?.image2}` : ""}
              className={classNames(styles["about__images-container-image"])}
            />
            <Image
              width={260}
              height={210}
              alt="image name"
              src={
                typeData ? `https://api.rtholdings.uz${typeData?.image3}` : ""
              }
              className={classNames(styles["about__images-container-image"])}
            />
          </div>

          <div className={classNames(styles["about__box"])}>
            <div className={classNames(styles["about__questions"])}>
              <div className={classNames(styles["about__question"])}>
                <h3 className={classNames(styles["about__question-title"])}>
                  {typeData ? typeData?.title_uz : ""}
                </h3>
                <p className={classNames(styles["about__question-text"])}>
                  {typeData ? typeData?.text_uz : ""}
                </p>

                {/* <ul className={classNames(styles["about__answers-list"])}>
                  <li className={classNames(styles["about__anwers-item"])}>
                    <Image
                      alt="icon"
                      width={18}
                      height={12}
                      src={"/images/svg/about-icon.svg"}
                      className={classNames(styles["about__answers-item-icon"])}
                    />
                    <p
                      className={classNames(styles["about__answers-item-text"])}
                    >
                      Lorem ipsum dolor
                    </p>
                  </li>
                  <li className={classNames(styles["about__anwers-item"])}>
                    <Image
                      alt="icon"
                      width={18}
                      height={12}
                      src={"/images/svg/about-icon.svg"}
                      className={classNames(styles["about__answers-item-icon"])}
                    />
                    <p
                      className={classNames(styles["about__answers-item-text"])}
                    >
                      Lorem ipsum
                    </p>
                  </li>
                  <li className={classNames(styles["about__anwers-item"])}>
                    <Image
                      alt="icon"
                      width={18}
                      height={12}
                      src={"/images/svg/about-icon.svg"}
                      className={classNames(styles["about__answers-item-icon"])}
                    />
                    <p
                      className={classNames(styles["about__answers-item-text"])}
                    >
                      Lorem ipsum dolor sit amet
                    </p>
                  </li>
                  <li className={classNames(styles["about__anwers-item"])}>
                    <Image
                      alt="icon"
                      width={18}
                      height={12}
                      src={"/images/svg/about-icon.svg"}
                      className={classNames(styles["about__answers-item-icon"])}
                    />
                    <p
                      className={classNames(styles["about__answers-item-text"])}
                    >
                      Lorem ipsum dolor sit
                    </p>
                  </li>
                </ul> */}
              </div>
              {/* <div className={classNames(styles["about__question"])}>
                <h3 className={classNames(styles["about__question-title"])}>
                  Lorem Ipsum Dolor
                </h3>

                <ul className={classNames(styles["about__answers-list"])}>
                  <li className={classNames(styles["about__anwers-item"])}>
                    <Image
                      alt="icon"
                      width={18}
                      height={12}
                      src={"/images/svg/about-icon.svg"}
                      className={classNames(styles["about__answers-item-icon"])}
                    />
                    <p
                      className={classNames(styles["about__answers-item-text"])}
                    >
                      Lorem ipsum dolor
                    </p>
                  </li>
                  <li className={classNames(styles["about__anwers-item"])}>
                    <Image
                      alt="icon"
                      width={18}
                      height={12}
                      src={"/images/svg/about-icon.svg"}
                      className={classNames(styles["about__answers-item-icon"])}
                    />
                    <p
                      className={classNames(styles["about__answers-item-text"])}
                    >
                      Lorem ipsum
                    </p>
                  </li>
                  <li className={classNames(styles["about__anwers-item"])}>
                    <Image
                      alt="icon"
                      width={18}
                      height={12}
                      src={"/images/svg/about-icon.svg"}
                      className={classNames(styles["about__answers-item-icon"])}
                    />
                    <p
                      className={classNames(styles["about__answers-item-text"])}
                    >
                      Lorem ipsum dolor sit amet
                    </p>
                  </li>
                  <li className={classNames(styles["about__anwers-item"])}>
                    <Image
                      alt="icon"
                      width={18}
                      height={12}
                      src={"/images/svg/about-icon.svg"}
                      className={classNames(styles["about__answers-item-icon"])}
                    />
                    <p
                      className={classNames(styles["about__answers-item-text"])}
                    >
                      Lorem ipsum dolor sit
                    </p>
                  </li>
                </ul>
              </div> */}
            </div>

            <Link
              href="/pages/about"
              className={classNames(styles["about__box-btn"])}
            >
              Lorem ipsum dolor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
