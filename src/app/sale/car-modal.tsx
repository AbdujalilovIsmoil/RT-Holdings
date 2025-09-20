"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { initialValuesTypes } from "@/context/reducer";

interface cardImageTypes {
  id: string;
  image: string;
}

interface cardTypes {
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
  product_images: cardImageTypes[];
}

interface CarModalProps {
  isOpen: boolean;
  onClose: () => void;
  carData: cardTypes;
}

export default function CarModal({ isOpen, onClose, carData }: CarModalProps) {
  const { appLang } = useSelector((state: initialValuesTypes) => state);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // Reset image index when modal opens with new car
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen, carData]);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === carData.product_images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? carData.product_images.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (!isOpen) return null;

  interface cardContentsTypes {
    [key: string]: {
      more: string;
      year: string;
      fuel: string;
      model: string;
      price: string;
      colour: string;
      distance: string;
      location: string;
    };
  }

  const cardContents: cardContentsTypes = {
    uz: {
      year: "Yili",
      model: "Model",
      price: "Narxi",
      colour: "Rangi",
      location: "Manzil",
      fuel: "Yoqilg'i turi",
      more: "Batafsil ma'lumot",
      distance: "Yurgan masofasi",
    },
    ru: {
      year: "Год",
      price: "Цена",
      colour: "Цвет",
      model: "Модель",
      more: "Подробнее",
      location: "Адрес",
      fuel: "Тип топлива",
      distance: "Пешком можно дойти",
    },
    en: {
      year: "Year",
      fuel: "Fuel",
      price: "Price",
      model: "Model",
      colour: "Colour",
      more: "Learn more",
      distance: "Distance",
      location: "Location",
    },
    ko: {
      year: "년도",
      fuel: "연료",
      price: "가격",
      model: "모델",
      colour: "색상",
      distance: "거리",
      location: "위치",
      more: "더 알아보기",
    },
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close modal"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="modal-content">
          <h1 className="modal-title">
            {typeof carData[`name_${appLang}` as keyof cardTypes] === "string"
              ? (carData[`name_${appLang}` as keyof cardTypes] as string)
              : ""}
          </h1>

          <div className="carousel-container">
            <div className="carousel-wrapper">
              {carData.product_images.length > 1 && (
                <button
                  onClick={prevImage}
                  className="carousel-nav carousel-nav-left"
                  aria-label="Previous image"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
              )}

              <div className="carousel-image-container">
                <Image
                  width={300}
                  height={300}
                  className="carousel-image"
                  src={
                    carData.product_images[currentImageIndex].image ||
                    "/placeholder.svg"
                  }
                  alt={
                    typeof carData[`name_${appLang}` as keyof cardTypes] ===
                    "string"
                      ? (carData[
                          `name_${appLang}` as keyof cardTypes
                        ] as string)
                      : ""
                  }
                />
              </div>

              {carData.product_images.length > 1 && (
                <button
                  onClick={nextImage}
                  className="carousel-nav carousel-nav-right"
                  aria-label="Next image"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              )}
            </div>

            {/* Carousel Dots */}
            {carData.product_images.length > 1 && (
              <div className="carousel-dots">
                {carData?.product_images?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`carousel-dot ${
                      index === currentImageIndex ? "carousel-dot-active" : ""
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Car Details */}
          <div className="car-details-modal">
            {carData[`model_${appLang}` as keyof cardTypes] ? (
              <div className="detail-item-modal">
                <span className="detail-label-modal">
                  {cardContents[`${appLang}`].model}:
                </span>
                <span className="detail-value-modal">
                  {carData[`model_${appLang}` as keyof cardTypes] as string}
                </span>
              </div>
            ) : (
              ""
            )}
            {carData.year ? (
              <div className="detail-item-modal">
                <span className="detail-label-modal">
                  {cardContents[`${appLang}`].year}:
                </span>
                <span className="detail-value-modal">{carData.year}</span>
              </div>
            ) : (
              ""
            )}
            {carData.distance ? (
              <div className="detail-item-modal">
                <span className="detail-label-modal">
                  {cardContents[`${appLang}`].distance}:
                </span>
                <span className="detail-value-modal">{carData.distance}</span>
              </div>
            ) : (
              ""
            )}
            {carData[`color_${appLang}` as keyof cardTypes] ? (
              <div className="detail-item-modal">
                <span className="detail-label-modal">
                  {cardContents[`${appLang}`].colour}:
                </span>
                <span className="detail-value-modal">
                  {carData[`color_${appLang}` as keyof cardTypes] as string}
                </span>
              </div>
            ) : (
              ""
            )}

            {carData[`fuel_type_${appLang}` as keyof cardTypes] ? (
              <div className="detail-item-modal">
                <span className="detail-label-modal">
                  {cardContents[`${appLang}`].fuel}:
                </span>
                <span className="detail-value-modal">
                  {carData[`fuel_type_${appLang}` as keyof cardTypes] as string}
                </span>
              </div>
            ) : (
              ""
            )}
            {carData[`location_${appLang}` as keyof cardTypes] ? (
              <div className="detail-item-modal">
                <span className="detail-label-modal">
                  {cardContents[`${appLang}`].location}:
                </span>
                <span className="detail-value-modal">
                  {carData[`location_${appLang}` as keyof cardTypes] as string}
                </span>
              </div>
            ) : (
              ""
            )}
            {carData.price ? (
              <div className="detail-item-modal">
                <span className="detail-label-modal">
                  {cardContents[`${appLang}`].price}:
                </span>
                <span className="detail-value-modal detail-price-modal">
                  {carData.price}
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
