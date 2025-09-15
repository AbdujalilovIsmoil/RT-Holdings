"use client";
import "./style.css";
import Image from "next/image";
// import { useGet } from "@/hooks";
import { useGet } from "@/hooks";
import CarModal from "./car-modal";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Input, Button, Hero, Pagination } from "@/components";
import { initialValuesTypes } from "@/context/reducer";
import { get } from "lodash";

interface cardImageTypes {
  id: string;
  image: string;
}

interface cardTypes {
  id?: string;
  attributes: {
    id: string;
    year: string;
    price: string;
    name_uz: string;
    name_ru: string;
    name_en: string;
    name_ko: string;
    color_en: string;
    color_ru: string;
    color_uz: string;
    color_ko: string;
    distance: string;
    model_uz: string;
    model_ru: string;
    model_en: string;
    model_ko: string;
    location_uz: string;
    location_ru: string;
    location_en: string;
    location_ko: string;
    fuel_type_en: string;
    fuel_type_uz: string;
    fuel_type_ru: string;
    fuel_type_ko: string;
    images: cardImageTypes[];
  };
}

// Search Icon component
const IoSearch = ({ className }: { className: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

function CarCard({
  car,
  onOpenModal,
}: {
  car: cardTypes;
  onOpenModal: (car: cardTypes) => void;
}) {
  const { appLang } = useSelector((state: initialValuesTypes) => state);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % car.attributes.images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + car.attributes.images.length) % car.attributes.images.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="car-card">
      {/* Swiper Section */}
      <div className="slide-container">
        <div
          className="slide-wrapper"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {car.attributes.images.map((image, index) => (
            <div key={index} className="slide-slide">
              <Image
                width={300}
                height={192}
                src={`${image.image}`}
                alt={`${car[`name_${appLang}` as keyof cardTypes]} - ${
                  index + 1
                }`}
              />
            </div>
          ))}
        </div>

        {car.attributes.images.length > 1 && (
          <>
            <button className="slide-navigation slide-prev" onClick={prevSlide}>
              ‹
            </button>
            <button className="slide-navigation slide-next" onClick={nextSlide}>
              ›
            </button>
          </>
        )}

        {/* Pagination Dots */}
        {car.attributes.images.length > 1 && (
          <div className="slide-pagination">
            {car.attributes.images.map((el, index) => (
              <div
                key={el.id}
                className={`slide-dot ${
                  index === currentSlide ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="card-content">
        {/* Title */}
        <h1 className="car-title">
          {get(car, `attributes.name_${appLang}`, "")}
        </h1>

        {/* Car Details */}
        <div className="car-details">
          <div className="detail-item">
            <svg
              className="detail-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              ></path>
            </svg>
            <span className="detail-label">Model:</span>
            <span className="detail-value">
              {get(car, `attributes.model_${appLang}`, "")}
            </span>
          </div>

          <div className="detail-item">
            <svg
              className="detail-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="detail-label">Yili:</span>
            <span className="detail-value">
              {get(car, "attributes.year", "")}
            </span>
          </div>

          <div className="detail-item">
            <svg
              className="detail-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="detail-label">Yurgan masofasi:</span>
            <span className="detail-value">
              {get(car, "attributes.distance")}
            </span>
          </div>

          <div className="detail-item">
            <svg
              className="detail-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
              />
            </svg>
            <span className="detail-label">Rangi:</span>
            <span className="detail-value">
              {get(car, `attributes.color_${appLang}`)}
            </span>
          </div>

          <div className="detail-item">
            <svg
              viewBox="0 0 24 24"
              className="detail-icon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 3H5a1 1 0 0 0-1 1v17h2v1a1 1 0 0 0 2 0v-1h6v1a1 1 0 0 0 2 0v-1h2v-9l2 2v3a1 1 0 0 0 2 0v-3a2 2 0 0 0-.59-1.41l-1.41-1.41A2 2 0 0 1 18 11V5a2 2 0 0 0-2-2zm0 8a4 4 0 0 0 1 2.65V18h-1V3h1a1 1 0 0 1 1 1v6h-1a1 1 0 0 1-1-1v-2h-1zm-2 10H7V5h7z" />
            </svg>
            <span className="detail-label">Yoqilg'i turi:</span>
            <span className="detail-value">
              {get(car, `attributes.fuel_type_${appLang}`, "")}
            </span>
          </div>

          <div className="detail-item">
            <svg
              className="detail-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="detail-label">Manzil:</span>
            <span className="detail-value">
              {get(car, `attributes.location_${appLang}`, "")}
            </span>
          </div>

          <div className="detail-item">
            <svg
              viewBox="0 0 384 512"
              className="detail-icon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M192 0c17.7 0 32 14.3 32 32V50.3c38.3 5.5 74 22.2 102.7 47.6c13.3 12 14.3 32.4 2.3 45.2s-32.4 14.3-45.2 2.3C260.6 123.6 228.3 112 192 112c-40.6 0-72 22.5-72 48c0 25.5 31.4 48 72 48c84.7 0 152 57.3 152 128c0 60.6-51.5 110.3-120 123.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-50.3c-38.3-5.5-74-22.2-102.7-47.6c-13.3-12-14.3-32.4-2.3-45.2s32.4-14.3 45.2-2.3C123.4 388.4 155.7 400 192 400c40.6 0 72-22.5 72-48c0-25.5-31.4-48-72-48c-84.7 0-152-57.3-152-128C40 115.4 91.5 65.7 160 52.7V32c0-17.7 14.3-32 32-32z" />
            </svg>
            <span className="detail-label">Narxi:</span>
            <span className="detail-value">
              {get(car, "attributes.price", "")}
            </span>
          </div>
        </div>

        {/* More Details Button */}
        <Button
          type="button"
          className="details-button"
          onClick={() => onOpenModal(car)}
        >
          Ba'tafsil ma'lumot
        </Button>
      </div>
    </div>
  );
}

const Sale = () => {
  const { appLang } = useSelector((state: initialValuesTypes) => state);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<cardTypes | null>();

  const openModal = (car: cardTypes) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  // Transform car data to match modal interface
  const getModalCarData = (car: cardTypes): cardTypes => ({
    attributes: {
      id: car.attributes.id,
      year: car.attributes.year,
      price: car.attributes.price,
      distance: car.attributes.distance,
      images: car.attributes.images,

      name_uz: car.attributes.name_uz,
      name_ru: car.attributes.name_ru,
      name_en: car.attributes.name_en,
      name_ko: car.attributes.name_ko,

      model_uz: car.attributes.model_uz,
      model_ru: car.attributes.model_ru,
      model_en: car.attributes.model_en,
      model_ko: car.attributes.model_ko,

      color_uz: car.attributes.color_uz,
      color_ru: car.attributes.color_ru,
      color_en: car.attributes.color_en,
      color_ko: car.attributes.color_ko,

      location_uz: car.attributes.location_uz,
      location_ru: car.attributes.location_ru,
      location_en: car.attributes.location_en,
      location_ko: car.attributes.location_ko,

      fuel_type_uz: car.attributes.fuel_type_uz,
      fuel_type_ru: car.attributes.fuel_type_ru,
      fuel_type_en: car.attributes.fuel_type_en,
      fuel_type_ko: car.attributes.fuel_type_ko,
    },
  });

  useEffect(() => {
    scrollTo({
      top: 0,
    });
  }, []);

  interface contentDataTypes {
    [key: string]: {
      title: string;
      description: string;
    };
  }

  const contentData: contentDataTypes = {
    uz: {
      title: "Hamyonbop narxda texnika",
      description:
        "So‘nggi yangiliklar va muhim e’lonlar bilan doimo xabardor bo‘ling — biz bilan birga yangiliklardan orqada qolmang.",
    },
    ru: {
      title: "Техника по доступным ценам",
      description:
        "Будьте в курсе последних новостей и важных объявлений — не отставайте от новостей вместе с нами.",
    },
    en: {
      title: "Affordable Equipment",
      description:
        "Stay updated with the latest news and important announcements — don't fall behind with us.",
    },
    ko: {
      title: "합리적인 가격의 장비",
      description:
        "최신 뉴스와 중요한 공지 사항을 항상 확인하세요 — 저희와 함께 뉴스에서 뒤처지지 마세요.",
    },
  };

  interface formDataTypes {
    [key: string]: {
      search: string;
      title: string;
    };
  }

  const formData: formDataTypes = {
    uz: {
      search: "Qidirish",
      title: "Texnika nomini kiriting",
    },
    ru: {
      search: "Поиск",
      title: "Введите название техники",
    },
    en: {
      search: "Search",
      title: "Enter equipment name",
    },
    ko: {
      search: "검색",
      title: "장비 이름 입력",
    },
  };

  const data = useGet({
    path: "/products",
  });

  const itemsPerPage = 4;

  const [currentPage, setCurrentPage] = useState<number>(0);

  const pageCount = Math.ceil(get(data, "data", []).length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const sliceData = get(data, "data", []).slice(startIndex, endIndex);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  return (
    <>
      <Hero page="/sale" />
      <section className="service">
        <div className="container">
          <div className="services__content services__contents">
            <h2 className="services__content-title">
              {contentData[`${appLang}`]?.title}
            </h2>
            <p className="services__content-text">
              {contentData[`${appLang}`]?.description}
            </p>
          </div>

          <form className="service__search">
            <IoSearch className="search__search-icon" />
            <Input
              required
              type="search"
              className="service__search-input"
              placeholder={formData[`${appLang}`]?.title}
            />
            <Button type="submit" className="service__search-submit">
              {formData[`${appLang}`]?.search}
            </Button>
          </form>

          <div className="car-listing-container">
            <div className="cars-grid">
              {Array.isArray(sliceData) &&
                sliceData.map((car: cardTypes) => (
                  <CarCard
                    car={car}
                    key={get(car, "id")}
                    onOpenModal={openModal}
                  />
                ))}
            </div>
          </div>

          {/* Car Modal */}
          {selectedCar && (
            <CarModal
              isOpen={isModalOpen}
              onClose={closeModal}
              carData={getModalCarData(selectedCar)}
            />
          )}

          {/* <Pagination itemsPerPage={1} /> */}
          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        </div>
      </section>
    </>
  );
};

export default Sale;
