import "./style.css";
import { Autoplay } from "swiper/modules";
import { Button } from "../../../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  IoStar,
  FaRegUser,
  FaArrowLeftLong,
  FaArrowRightLong,
} from "../../../../assets/react-icons";

const Carousel = () => {
  return (
    <section className="carousel">
      <div className="container">
        <div className="carousel__header">
          <div className="carousel__box">
            <span className="carousel__box-small-text">Users</span>
            <h2 className="carousel__box-title">What Our Customer Say</h2>
          </div>
          <div className="carousel__box">
            <Button type="button" className="carousel__button">
              <FaArrowLeftLong className="carousel__button-icon" />
            </Button>
            <Button
              type="button"
              className="carousel__button carousel__button--active"
            >
              <FaArrowRightLong className="carousel__button-icon" />
            </Button>
          </div>
        </div>

        <Swiper
          loop
          grabCursor
          spaceBetween={20}
          slidesPerView={3}
          modules={[Autoplay]}
          className="carousel__list"
          autoplay={{
            delay: 2500,
          }}
        >
          <SwiperSlide className="carousel__item">
            <div className="carousel__user">
              <div className="carousel__border">
                <FaRegUser className="carousel__border-icon" />
              </div>
              <div className="carousel__info">
                <h3 className="carousel__info-fullname">Mr. Smith</h3>
                <p className="carousel__info-job">User</p>
              </div>
            </div>
            <p className="carousel-text">
              <q>
                <em>
                  Lorem ipsum dolor sit amet consectetur. Vitae eu vel metus
                  tortor interdum nam in nibh fusce. Diam nibh dui enim aliquet
                  scelerisque gravida turpis semper arcu. At quis quis cras
                  egestas pharetra semper.
                </em>
              </q>
            </p>

            <ul className="carousel-stars__list">
              <li className="carousel-stars__item">
                <IoStar className="carousel-stars__item-icon" />
              </li>
              <li className="carousel-stars__item">
                <IoStar className="carousel-stars__item-icon" />
              </li>
              <li className="carousel-stars__item">
                <IoStar className="carousel-stars__item-icon" />
              </li>
              <li className="carousel-stars__item">
                <IoStar className="carousel-stars__item-icon carousel-stars__item-icon--active" />
              </li>
              <li className="carousel-stars__item">
                <IoStar className="carousel-stars__item-icon carousel-stars__item-icon--active" />
              </li>
            </ul>
          </SwiperSlide>
          <SwiperSlide className="carousel__item">
            <div className="carousel__user">
              <div className="carousel__border">
                <FaRegUser className="carousel__border-icon" />
              </div>
              <div className="carousel__info">
                <h3 className="carousel__info-fullname">Mr. Smith</h3>
                <p className="carousel__info-job">User</p>
              </div>
            </div>
            <p className="carousel-text">
              <q>
                <em>
                  Lorem ipsum dolor sit amet consectetur. Vitae eu vel metus
                  tortor interdum nam in nibh fusce. Diam nibh dui enim aliquet
                  scelerisque gravida turpis semper arcu. At quis quis cras
                  egestas pharetra semper.
                </em>
              </q>
            </p>

            <ul className="carousel-stars__list">
              <li className="carousel-stars__item">
                <IoStar className="carousel-stars__item-icon" />
              </li>
              <li className="carousel-stars__item">
                <IoStar className="carousel-stars__item-icon" />
              </li>
              <li className="carousel-stars__item">
                <IoStar className="carousel-stars__item-icon" />
              </li>
              <li className="carousel-stars__item">
                <IoStar className="carousel-stars__item-icon carousel-stars__item-icon--active" />
              </li>
              <li className="carousel-stars__item">
                <IoStar className="carousel-stars__item-icon carousel-stars__item-icon--active" />
              </li>
            </ul>
          </SwiperSlide>
          <SwiperSlide className="carousel__item">
            <div className="carousel__user">
              <div className="carousel__border">
                <FaRegUser className="carousel__border-icon" />
              </div>
              <div className="carousel__info">
                <h3 className="carousel__info-fullname">Mr. Smith</h3>
                <p className="carousel__info-job">User</p>
              </div>
            </div>
            <p className="carousel-text">
              <q>
                <em>
                  Lorem ipsum dolor sit amet consectetur. Vitae eu vel metus
                  tortor interdum nam in nibh fusce. Diam nibh dui enim aliquet
                  scelerisque gravida turpis semper arcu. At quis quis cras
                  egestas pharetra semper.
                </em>
              </q>
            </p>

            <ul className="carousel-stars__list">
              <li className="carousel-stars__item">
                <IoStar className="carousel-stars__item-icon" />
              </li>
              <li className="carousel-stars__item">
                <IoStar className="carousel-stars__item-icon" />
              </li>
              <li className="carousel-stars__item">
                <IoStar className="carousel-stars__item-icon" />
              </li>
              <li className="carousel-stars__item">
                <IoStar className="carousel-stars__item-icon carousel-stars__item-icon--active" />
              </li>
              <li className="carousel-stars__item">
                <IoStar className="carousel-stars__item-icon carousel-stars__item-icon--active" />
              </li>
            </ul>
          </SwiperSlide>
          <SwiperSlide className="carousel__item">
            <div className="carousel__user">
              <div className="carousel__border">
                <FaRegUser className="carousel__border-icon" />
              </div>
              <div className="carousel__info">
                <h3 className="carousel__info-fullname">Mr. Smith</h3>
                <p className="carousel__info-job">User</p>
              </div>
            </div>
            <p className="carousel-text">
              <q>
                <em>
                  Lorem ipsum dolor sit amet consectetur. Vitae eu vel metus
                  tortor interdum nam in nibh fusce. Diam nibh dui enim aliquet
                  scelerisque gravida turpis semper arcu. At quis quis cras
                  egestas pharetra semper.
                </em>
              </q>
            </p>

            <ul className="carousel-stars__list">
              <li className="carousel-stars__item">
                <IoStar className="carousel-stars__item-icon" />
              </li>
              <li className="carousel-stars__item">
                <IoStar className="carousel-stars__item-icon" />
              </li>
              <li className="carousel-stars__item">
                <IoStar className="carousel-stars__item-icon" />
              </li>
              <li className="carousel-stars__item">
                <IoStar className="carousel-stars__item-icon carousel-stars__item-icon--active" />
              </li>
              <li className="carousel-stars__item">
                <IoStar className="carousel-stars__item-icon carousel-stars__item-icon--active" />
              </li>
            </ul>
          </SwiperSlide>
          <SwiperSlide className="carousel__item">
            <div className="carousel__user">
              <div className="carousel__border">
                <FaRegUser className="carousel__border-icon" />
              </div>
              <div className="carousel__info">
                <h3 className="carousel__info-fullname">Mr. Smith</h3>
                <p className="carousel__info-job">User</p>
              </div>
            </div>
            <p className="carousel-text">
              <q>
                <em>
                  Lorem ipsum dolor sit amet consectetur. Vitae eu vel metus
                  tortor interdum nam in nibh fusce. Diam nibh dui enim aliquet
                  scelerisque gravida turpis semper arcu. At quis quis cras
                  egestas pharetra semper.
                </em>
              </q>
            </p>

            <ul className="carousel-stars__list">
              <li className="carousel-stars__item">
                <IoStar className="carousel-stars__item-icon" />
              </li>
              <li className="carousel-stars__item">
                <IoStar className="carousel-stars__item-icon" />
              </li>
              <li className="carousel-stars__item">
                <IoStar className="carousel-stars__item-icon" />
              </li>
              <li className="carousel-stars__item">
                <IoStar className="carousel-stars__item-icon carousel-stars__item-icon--active" />
              </li>
              <li className="carousel-stars__item">
                <IoStar className="carousel-stars__item-icon carousel-stars__item-icon--active" />
              </li>
            </ul>
          </SwiperSlide>
          <SwiperSlide className="carousel__item">
            <div className="carousel__user">
              <div className="carousel__border">
                <FaRegUser className="carousel__border-icon" />
              </div>
              <div className="carousel__info">
                <h3 className="carousel__info-fullname">Mr. Smith</h3>
                <p className="carousel__info-job">User</p>
              </div>
            </div>
            <p className="carousel-text">
              <q>
                <em>
                  Lorem ipsum dolor sit amet consectetur. Vitae eu vel metus
                  tortor interdum nam in nibh fusce. Diam nibh dui enim aliquet
                  scelerisque gravida turpis semper arcu. At quis quis cras
                  egestas pharetra semper.
                </em>
              </q>
            </p>

            <ul className="carousel-stars__list">
              <li className="carousel-stars__item">
                <IoStar className="carousel-stars__item-icon" />
              </li>
              <li className="carousel-stars__item">
                <IoStar className="carousel-stars__item-icon" />
              </li>
              <li className="carousel-stars__item">
                <IoStar className="carousel-stars__item-icon" />
              </li>
              <li className="carousel-stars__item">
                <IoStar className="carousel-stars__item-icon carousel-stars__item-icon--active" />
              </li>
              <li className="carousel-stars__item">
                <IoStar className="carousel-stars__item-icon carousel-stars__item-icon--active" />
              </li>
            </ul>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;
