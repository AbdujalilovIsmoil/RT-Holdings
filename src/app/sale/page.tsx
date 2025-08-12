"use client";

import "./style.css";
import Image from "next/image";
import { useGet } from "@/hooks";
import CarModal from "./car-modal";
import { cardTypes } from "@/typescript";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { initialValuesTypes } from "@/context/reducer";
import { Input, Button, Hero, Pagination } from "@/components";
import { cardContents, contentData, formData, language } from "./data";

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
    setCurrentSlide((prev) => (prev + 1) % car.product_images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + car.product_images.length) % car.product_images.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="car-card">
      <div className="slide-container">
        <div
          className="slide-wrapper"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {car?.product_images?.map((image, index) => (
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

        {car.product_images.length > 1 && (
          <>
            <button className="slide-navigation slide-prev" onClick={prevSlide}>
              ‹
            </button>
            <button className="slide-navigation slide-next" onClick={nextSlide}>
              ›
            </button>
          </>
        )}

        {car?.product_images?.length > 1 && (
          <div className="slide-pagination">
            {car?.product_images?.map((el, index) => (
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
        <h1 className="car-title">
          {typeof car[`name_${appLang}` as keyof cardTypes] === "string"
            ? (car[`name_${appLang}` as keyof cardTypes] as string)
            : ""}
        </h1>

        <div className="car-details">
          {car[`model_${appLang}` as keyof cardTypes] ? (
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
              <span className="detail-label">
                {cardContents[`${appLang}`].model}:
              </span>
              <span className="detail-value">
                {typeof car[`model_${appLang}` as keyof cardTypes] === "string"
                  ? (car[`model_${appLang}` as keyof cardTypes] as string)
                  : null}
              </span>
            </div>
          ) : (
            ""
          )}

          {car.year ? (
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
              <span className="detail-label">
                {cardContents[`${appLang}`].year}:
              </span>
              <span className="detail-value">{car.year ? car.year : ""}</span>
            </div>
          ) : (
            ""
          )}

          {car.distance ? (
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
              <span className="detail-label">
                {cardContents[`${appLang}`].distance}:
              </span>
              <span className="detail-value">{car.distance}</span>
            </div>
          ) : (
            ""
          )}

          {car[`color_${appLang}` as keyof cardTypes] ? (
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
              <span className="detail-label">
                {cardContents[`${appLang}`].colour}:
              </span>
              <span className="detail-value">
                {typeof car[`color_${appLang}` as keyof cardTypes] === "string"
                  ? (car[`color_${appLang}` as keyof cardTypes] as string)
                  : "Invalid car color"}
              </span>
            </div>
          ) : (
            ""
          )}

          {car[`fuel_type_${appLang}` as keyof cardTypes] ? (
            <div className="detail-item">
              <svg
                viewBox="0 0 24 24"
                className="detail-icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 3H5a1 1 0 0 0-1 1v17h2v1a1 1 0 0 0 2 0v-1h6v1a1 1 0 0 0 2 0v-1h2v-9l2 2v3a1 1 0 0 0 2 0v-3a2 2 0 0 0-.59-1.41l-1.41-1.41A2 2 0 0 1 18 11V5a2 2 0 0 0-2-2zm0 8a4 4 0 0 0 1 2.65V18h-1V3h1a1 1 0 0 1 1 1v6h-1a1 1 0 0 1-1-1v-2h-1zm-2 10H7V5h7z" />
              </svg>
              <span className="detail-label">
                {cardContents[`${appLang}`].fuel}:
              </span>
              <span className="detail-value">
                {typeof car[`fuel_type_${appLang}` as keyof cardTypes] ===
                "string"
                  ? (car[`fuel_type_${appLang}` as keyof cardTypes] as string)
                  : "Invalid car fuel_type"}
              </span>
            </div>
          ) : (
            ""
          )}

          {car[`location_${appLang}` as keyof cardTypes] && (
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
              <span className="detail-label">
                {cardContents[`${appLang}`].location}:
              </span>
              <span className="detail-value">
                {typeof car[`location_${appLang}` as keyof cardTypes] ===
                "string"
                  ? (car[`location_${appLang}` as keyof cardTypes] as string)
                  : "Invalid car location"}
              </span>
            </div>
          )}

          {car.price && (
            <div className="detail-item">
              <svg
                viewBox="0 0 384 512"
                className="detail-icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M192 0c17.7 0 32 14.3 32 32V50.3c38.3 5.5 74 22.2 102.7 47.6c13.3 12 14.3 32.4 2.3 45.2s-32.4 14.3-45.2 2.3C260.6 123.6 228.3 112 192 112c-40.6 0-72 22.5-72 48c0 25.5 31.4 48 72 48c84.7 0 152 57.3 152 128c0 60.6-51.5 110.3-120 123.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-50.3c-38.3-5.5-74-22.2-102.7-47.6c-13.3-12-14.3-32.4-2.3-45.2s32.4-14.3 45.2-2.3C123.4 388.4 155.7 400 192 400c40.6 0 72-22.5 72-48c0-25.5-31.4-48-72-48c-84.7 0-152-57.3-152-128C40 115.4 91.5 65.7 160 52.7V32c0-17.7 14.3-32 32-32z" />
              </svg>
              <span className="detail-label">
                {cardContents[`${appLang}`].price}:
              </span>
              <span className="detail-value">{car.price ? car.price : ""}</span>
            </div>
          )}
        </div>

        <Button
          type="button"
          className="details-button"
          onClick={() => onOpenModal(car)}
        >
          {cardContents[`${appLang}`].more}
        </Button>
      </div>
    </div>
  );
}

const Sale = () => {
  const { appLang } = useSelector((state: initialValuesTypes) => state);

  useEffect(() => {
    document.title = language[`${appLang}`];
  }, [appLang]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<cardTypes | null>(null);

  const openModal = (car: cardTypes) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  const getModalCarData = (car: cardTypes) => ({
    id: car.id,
    year: car.year,
    price: car.price,
    distance: car.distance,
    product_images: car.product_images,

    name_uz: car.name_uz,
    name_ru: car.name_ru,
    name_en: car.name_en,
    name_ko: car.name_ko,

    model_uz: car.model_uz,
    model_ru: car.model_ru,
    model_en: car.model_en,
    model_ko: car.model_ko,

    color_uz: car.color_uz,
    color_ru: car.color_ru,
    color_en: car.color_en,
    color_ko: car.color_ko,

    location_uz: car.location_uz,
    location_ru: car.location_ru,
    location_en: car.location_en,
    location_ko: car.location_ko,

    fuel_type_uz: car.fuel_type_uz,
    fuel_type_ru: car.fuel_type_ru,
    fuel_type_en: car.fuel_type_en,
    fuel_type_ko: car.fuel_type_ko,
  });

  useEffect(() => {
    scrollTo({
      top: 0,
    });
  }, []);

  const data = useGet({
    path: "/product/list",
  });

  const itemsPerPage = 4;

  const [currentPage, setCurrentPage] = useState<number>(0);

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const sliceData = data.slice(startIndex, endIndex);

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
                  <CarCard car={car} key={car.id} onOpenModal={openModal} />
                ))}
            </div>
          </div>

          {selectedCar && (
            <CarModal
              isOpen={isModalOpen}
              onClose={closeModal}
              carData={getModalCarData(selectedCar)}
            />
          )}

          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        </div>
      </section>
    </>
  );
};

export default Sale;
