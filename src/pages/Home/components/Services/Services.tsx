import "./index.css";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ServicesImage4 } from "../../../../assets/images/png";
import { SiteCardLogo } from "../../../../assets/images/svg";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";

const Services = () => {
  const backgroundStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `linear-gradient(0deg, rgba(28, 28, 28, 0.5) 0%, rgba(28, 28, 28, 0) 50%), url(${ServicesImage4})`,
  };

  return (
    <section className="services">
      <div className="container">
        <div className="services__content">
          <span className="services__content-small">
            Lorem ipsum dolor sit amet.
          </span>
          <h2 className="services__content-title">
            Lorem ipsum dolor sit amet consectetur.
          </h2>
        </div>

        <Swiper
          loop
          slidesPerView={3}
          spaceBetween={20}
          modules={[Autoplay]}
          className="services-cards"
          autoplay={{
            delay: 2500,
          }}
        >
          <SwiperSlide>
            <div className="services-card" style={backgroundStyle}>
              <div className="services-card__content">
                <h2 className="services-card__content-title">
                  Innovative technologies
                </h2>
                <p className="services-card__content-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>

              <div className="services-card__footer">
                <div className="services-card__box">
                  <Link to="/">
                    <img
                      height={44}
                      width={130}
                      alt="RT Holdings"
                      src={SiteCardLogo}
                      className="services-card__footer-image"
                    />
                  </Link>
                </div>
                <Link to="/" className="services-card__footer-btn">
                  Lorem ipsum
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services-card" style={backgroundStyle}>
              <div className="services-card__content">
                <h2 className="services-card__content-title">
                  Innovative technologies
                </h2>
                <p className="services-card__content-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>

              <div className="services-card__footer">
                <div className="services-card__box">
                  <Link to="/">
                    <img
                      height={44}
                      width={130}
                      alt="RT Holdings"
                      src={SiteCardLogo}
                      className="services-card__footer-image"
                    />
                  </Link>
                </div>
                <Link to="/" className="services-card__footer-btn">
                  Lorem ipsum
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services-card" style={backgroundStyle}>
              <div className="services-card__content">
                <h2 className="services-card__content-title">
                  Innovative technologies
                </h2>
                <p className="services-card__content-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>

              <div className="services-card__footer">
                <div className="services-card__box">
                  <Link to="/">
                    <img
                      height={44}
                      width={130}
                      alt="RT Holdings"
                      src={SiteCardLogo}
                      className="services-card__footer-image"
                    />
                  </Link>
                </div>
                <Link to="/" className="services-card__footer-btn">
                  Lorem ipsum
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services-card" style={backgroundStyle}>
              <div className="services-card__content">
                <h2 className="services-card__content-title">
                  Innovative technologies
                </h2>
                <p className="services-card__content-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>

              <div className="services-card__footer">
                <div className="services-card__box">
                  <Link to="/">
                    <img
                      height={44}
                      width={130}
                      alt="RT Holdings"
                      src={SiteCardLogo}
                      className="services-card__footer-image"
                    />
                  </Link>
                </div>
                <Link to="/" className="services-card__footer-btn">
                  Lorem ipsum
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services-card" style={backgroundStyle}>
              <div className="services-card__content">
                <h2 className="services-card__content-title">
                  Innovative technologies
                </h2>
                <p className="services-card__content-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>

              <div className="services-card__footer">
                <div className="services-card__box">
                  <Link to="/">
                    <img
                      height={44}
                      width={130}
                      alt="RT Holdings"
                      src={SiteCardLogo}
                      className="services-card__footer-image"
                    />
                  </Link>
                </div>
                <Link to="/" className="services-card__footer-btn">
                  Lorem ipsum
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services-card" style={backgroundStyle}>
              <div className="services-card__content">
                <h2 className="services-card__content-title">
                  Innovative technologies
                </h2>
                <p className="services-card__content-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>

              <div className="services-card__footer">
                <div className="services-card__box">
                  <Link to="/">
                    <img
                      height={44}
                      width={130}
                      alt="RT Holdings"
                      src={SiteCardLogo}
                      className="services-card__footer-image"
                    />
                  </Link>
                </div>
                <Link to="/" className="services-card__footer-btn">
                  Lorem ipsum
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
