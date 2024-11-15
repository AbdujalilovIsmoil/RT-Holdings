import "./index.css";
import { Link } from "react-router-dom";
import { AboutIcon } from "../../../../assets/images/svg";
import { AboutBackgroundImage } from "../../../../assets/images/jpg";
import {
  AboutImage1,
  AboutImage2,
  AboutImage3,
} from "../../../../assets/images/png";

const About = () => {
  const backgroundStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `url(${AboutBackgroundImage})`,
  };

  return (
    <section className="about">
      <div className="container">
        <div className="about__content">
          <h2 className="about__content-title">About us</h2>
          <p className="about__content-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.....
          </p>
        </div>
      </div>

      <div className="about__background" style={backgroundStyle}>
        <div className="about__container container">
          <div className="about__images-container">
            <img
              width={460}
              height={370}
              alt="image name"
              src={AboutImage1}
              className="about__images-container-image"
            />
            <img
              width={320}
              height={255}
              alt="image name"
              src={AboutImage2}
              className="about__images-container-image"
            />
            <img
              width={260}
              height={210}
              alt="image name"
              src={AboutImage3}
              className="about__images-container-image"
            />
          </div>

          <div className="about__box">
            <div className="about__questions">
              <div className="about__question">
                <h3 className="about__question-title">What We Do!</h3>
                <p className="about__question-text">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout
                </p>

                <ul className="about__answers-list">
                  <li className="about__anwers-item">
                    <img
                      className="about__answers-item-icon"
                      src={AboutIcon}
                      width={18}
                      height={12}
                      alt="icon"
                    />
                    <p className="about__answers-item-text">
                      Lorem ipsum dolor
                    </p>
                  </li>
                  <li className="about__anwers-item">
                    <img
                      className="about__answers-item-icon"
                      src={AboutIcon}
                      width={18}
                      height={12}
                      alt="icon"
                    />
                    <p className="about__answers-item-text">Lorem ipsum</p>
                  </li>
                  <li className="about__anwers-item">
                    <img
                      className="about__answers-item-icon"
                      src={AboutIcon}
                      width={18}
                      height={12}
                      alt="icon"
                    />
                    <p className="about__answers-item-text">
                      Lorem ipsum dolor sit amet
                    </p>
                  </li>
                  <li className="about__anwers-item">
                    <img
                      className="about__answers-item-icon"
                      src={AboutIcon}
                      width={18}
                      height={12}
                      alt="icon"
                    />
                    <p className="about__answers-item-text">
                      Lorem ipsum dolor sit
                    </p>
                  </li>
                </ul>
              </div>
              <div className="about__question">
                <h3 className="about__question-title">Lorem Ipsum Dolor</h3>

                <ul className="about__answers-list">
                  <li className="about__anwers-item">
                    <img
                      className="about__answers-item-icon"
                      src={AboutIcon}
                      width={18}
                      height={12}
                      alt="icon"
                    />
                    <p className="about__answers-item-text">
                      Lorem ipsum dolor
                    </p>
                  </li>
                  <li className="about__anwers-item">
                    <img
                      className="about__answers-item-icon"
                      src={AboutIcon}
                      width={18}
                      height={12}
                      alt="icon"
                    />
                    <p className="about__answers-item-text">Lorem ipsum</p>
                  </li>
                  <li className="about__anwers-item">
                    <img
                      className="about__answers-item-icon"
                      src={AboutIcon}
                      width={18}
                      height={12}
                      alt="icon"
                    />
                    <p className="about__answers-item-text">
                      Lorem ipsum dolor sit amet
                    </p>
                  </li>
                  <li className="about__anwers-item">
                    <img
                      className="about__answers-item-icon"
                      src={AboutIcon}
                      width={18}
                      height={12}
                      alt="icon"
                    />
                    <p className="about__answers-item-text">
                      Lorem ipsum dolor sit
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <Link className="about__box-btn" to="/pages/about" type="button">
              Lorem ipsum dolor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
