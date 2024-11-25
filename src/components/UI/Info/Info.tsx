import "./index.css";
// import { AboutIcon } from "../../../assets/images/svg";
// import { AboutBackgroundImage } from "../../../assets/images/jpg";
// import {
//   AboutImage1,
//   AboutImage2,
//   AboutImage3,
// } from "../../../assets/images/png";
// import Texts from "../Texts"; 
import { About } from "../../../pages/Home/components";

const Info = () => {
  // const backgroundStyle = {
  //   backgroundSize: "cover",
  //   backgroundPosition: "center center",
  //   backgroundImage: `url(${AboutBackgroundImage})`,
  // };

  return (
    <section className="info">
      <div className="container">
        {/* <Texts
          title="Lorem ipsum dolor"
          text=" Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s....."
        /> */}

        {/* <div className="info__background" style={backgroundStyle}>
          <div className="info__container container">
            <div className="info__images-container">
              <img
                width={460}
                height={370}
                alt="image name"
                src={AboutImage1}
                className="info__images-container-image"
              />
              <img
                width={320}
                height={255}
                alt="image name"
                src={AboutImage2}
                className="info__images-container-image"
              />
              <img
                width={260}
                height={210}
                alt="image name"
                src={AboutImage3}
                className="info__images-container-image"
              />
            </div>

            <div className="info__box">
              <div className="info__questions">
                <div className="info__question">
                  <h3 className="info__question-title">What We Do!</h3>
                  <p className="info__question-text">
                    Lorem ipsum dolor sit amet consectetur. Elit malesuada
                    elementum felis suscipit praesent pharetra at et. Non
                    consectetur turpis et metus. Tellus tristique dictumst
                    congue integer turpis tristique aenean a fringilla. Facilisi
                    scelerisque eget massa risus. Ullamcorper cras nulla sit ut
                    integer suspendisse ut. Ultricies morbi vitae viverra
                    volutpat magnis tellus sem placerat. Dapibus porta amet
                    risus non vel nibh. Eu auctor proin id ipsum. Dignissim leo
                    leo urna nunc. Porttitor orci molestie diam tempus vitae
                    nam. Quis tincidunt morbi sapien ut tristique volutpat donec
                    mi commodo.
                  </p>
                </div>
                <div className="info__question">
                  <h3 className="info__question-title">Lorem Ipsum Dolor</h3>

                  <ul className="info__answers-list">
                    <li className="info__anwers-item">
                      <img
                        className="info__answers-item-icon"
                        src={AboutIcon}
                        width={18}
                        height={12}
                        alt="icon"
                      />
                      <p className="info__answers-item-text">
                        Lorem ipsum dolor
                      </p>
                    </li>
                    <li className="info__anwers-item">
                      <img
                        className="info__answers-item-icon"
                        src={AboutIcon}
                        width={18}
                        height={12}
                        alt="icon"
                      />
                      <p className="info__answers-item-text">Lorem ipsum</p>
                    </li>
                    <li className="info__anwers-item">
                      <img
                        className="info__answers-item-icon"
                        src={AboutIcon}
                        width={18}
                        height={12}
                        alt="icon"
                      />
                      <p className="info__answers-item-text">
                        Lorem ipsum dolor sit amet
                      </p>
                    </li>
                    <li className="info__anwers-item">
                      <img
                        className="info__answers-item-icon"
                        src={AboutIcon}
                        width={18}
                        height={12}
                        alt="icon"
                      />
                      <p className="info__answers-item-text">
                        Lorem ipsum dolor sit
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <About />
      </div>
    </section>
  );
};

export default Info;
