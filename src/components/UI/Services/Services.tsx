import Link from "next/link";
import Image from "next/image";
import "swiper/swiper-bundle.css";
import classNames from "classnames";
import styles from "./index.module.css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Services = () => {
  const backgroundStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `linear-gradient(0deg, rgba(28, 28, 28, 0.5) 0%, rgba(28, 28, 28, 0) 50%), url(/images/png/services/services-image-4.png)`,
  };

  return (
    <section className={classNames(styles["services"])}>
      <div className="container">
        <div className={classNames(styles["services__content"])}>
          <span className={classNames(styles["services__content-small"])}>
            Lorem ipsum dolor sit amet.
          </span>
          <h2 className={classNames(styles["services__content-title"])}>
            Lorem ipsum dolor sit amet consectetur.
          </h2>
        </div>

        <Swiper
          loop
          grabCursor
          slidesPerView={3}
          spaceBetween={20}
          modules={[Autoplay]}
          className={classNames(styles["services-cards"])}
          autoplay={{
            delay: 2500,
          }}
          breakpoints={{
            950: {
              slidesPerView: 3,
            },
            650: {
              slidesPerView: 2,
            },
            280: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <div
              style={backgroundStyle}
              className={classNames(styles["services-card"])}
            >
              <div className={classNames(styles["services-card__content"])}>
                <h2
                  className={classNames(styles["services-card__content-title"])}
                >
                  Innovative technologies
                </h2>
                <p
                  className={classNames(styles["services-card__content-text"])}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s,
                </p>
              </div>

              <div className={classNames(styles["services-card__footer"])}>
                <div className={classNames(styles["services-card__box"])}>
                  <Link href="/">
                    <Image
                      height={44}
                      width={130}
                      alt="RT Holdings"
                      src="/images/svg/site-card-logo.svg"
                      className={classNames(
                        styles["services-card__footer-image"]
                      )}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={backgroundStyle}
              className={classNames(styles["services-card"])}
            >
              <div className={classNames(styles["services-card__content"])}>
                <h2
                  className={classNames(styles["services-card__content-title"])}
                >
                  Innovative technologies
                </h2>
                <p
                  className={classNames(styles["services-card__content-text"])}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>

              <div className={classNames(styles["services-card__footer"])}>
                <div className={classNames(styles["services-card__box"])}>
                  <Link href="/">
                    <Image
                      height={44}
                      width={130}
                      alt="RT Holdings"
                      src="/images/svg/site-card-logo.svg"
                      className={classNames(
                        styles["services-card__footer-image"]
                      )}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={backgroundStyle}
              className={classNames(styles["services-card"])}
            >
              <div className={classNames(styles["services-card__content"])}>
                <h2
                  className={classNames(styles["services-card__content-title"])}
                >
                  Innovative technologies
                </h2>
                <p
                  className={classNames(styles["services-card__content-text"])}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>

              <div className={classNames(styles["services-card__footer"])}>
                <div className={classNames(styles["services-card__box"])}>
                  <Link href="/">
                    <Image
                      height={44}
                      width={130}
                      alt="RT Holdings"
                      src="/images/svg/site-card-logo.svg"
                      className={classNames(
                        styles["services-card__footer-image"]
                      )}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={backgroundStyle}
              className={classNames(styles["services-card"])}
            >
              <div className={classNames(styles["services-card__content"])}>
                <h2
                  className={classNames(styles["services-card__content-title"])}
                >
                  Innovative technologies
                </h2>
                <p
                  className={classNames(styles["services-card__content-text"])}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>

              <div className={classNames(styles["services-card__footer"])}>
                <div className={classNames(styles["services-card__box"])}>
                  <Link href="/">
                    <Image
                      height={44}
                      width={130}
                      alt="RT Holdings"
                      src="/images/svg/site-card-logo.svg"
                      className={classNames(
                        styles["services-card__footer-image"]
                      )}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={backgroundStyle}
              className={classNames(styles["services-card"])}
            >
              <div className={classNames(styles["services-card__content"])}>
                <h2
                  className={classNames(styles["services-card__content-title"])}
                >
                  Innovative technologies
                </h2>
                <p
                  className={classNames(styles["services-card__content-text"])}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>

              <div className={classNames(styles["services-card__footer"])}>
                <div className={classNames(styles["services-card__box"])}>
                  <Link href="/">
                    <Image
                      height={44}
                      width={130}
                      alt="RT Holdings"
                      src="/images/svg/site-card-logo.svg"
                      className={classNames(
                        styles["services-card__footer-image"]
                      )}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={backgroundStyle}
              className={classNames(styles["services-card"])}
            >
              <div className={classNames(styles["services-card__content"])}>
                <h2
                  className={classNames(styles["services-card__content-title"])}
                >
                  Innovative technologies
                </h2>
                <p
                  className={classNames(styles["services-card__content-text"])}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>

              <div className={classNames(styles["services-card__footer"])}>
                <div className={classNames(styles["services-card__box"])}>
                  <Link href="/">
                    <Image
                      height={44}
                      width={130}
                      alt="RT Holdings"
                      src="/images/svg/site-card-logo.svg"
                      className={classNames(
                        styles["services-card__footer-image"]
                      )}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
