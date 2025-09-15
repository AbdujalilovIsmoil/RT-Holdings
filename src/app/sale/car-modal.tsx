"use client";
import { initialValuesTypes } from "@/context/reducer";
import { get } from "lodash";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

interface cardImageTypes {
  id: string;
  image: string;
}

interface cardTypes {
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

interface CarModalProps {
  isOpen: boolean;
  onClose: () => void;
  carData: Partial<cardTypes>;
}

export default function CarModal({ isOpen, onClose, carData }: CarModalProps) {
  const { appLang } = useSelector((state: initialValuesTypes) => state);

  console.log(carData);

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
      prev === Number(carData.attributes?.images?.length) - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? Number(carData.attributes?.images?.length) - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (!isOpen) return null;

  console.log("image", carData.attributes?.images[currentImageIndex].image);

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

        {/* Modal Content */}
        <div className="modal-content">
          {/* Title */}
          <h1 className="modal-title">
            {get(carData, `attributes.name_${appLang}`)}
          </h1>

          {/* Image Carousel */}
          <div className="carousel-container">
            <div className="carousel-wrapper">
              {Number(carData.attributes?.images?.length) > 1 && (
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
                  src={carData.attributes?.images[currentImageIndex].image || ""}
                  alt={get(carData, `attributes.name_${appLang}`, "")}
                />
              </div>

              {Number(carData.attributes?.images?.length) > 1 && (
                <button
                  onClick={nextImage}
                  aria-label="Next image"
                  className="carousel-nav carousel-nav-right"
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
            {Number(carData.attributes?.images?.length) > 1 && (
              <div className="carousel-dots">
                {carData?.attributes?.images?.map((_, index) => (
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
            <div className="detail-item-modal">
              <span className="detail-label-modal">Model:</span>
              <span className="detail-value-modal">
                {get(carData, `attributes.model_${appLang}`)}
              </span>
            </div>
            <div className="detail-item-modal">
              <span className="detail-label-modal">Yili:</span>
              <span className="detail-value-modal">
                {get(carData, "attributes.year", "")}
              </span>
            </div>
            <div className="detail-item-modal">
              <span className="detail-label-modal">Yurgan masofasi:</span>
              <span className="detail-value-modal">
                {get(carData, "attributes.distance", "")}
              </span>
            </div>
            <div className="detail-item-modal">
              <span className="detail-label-modal">Rangi:</span>
              <span className="detail-value-modal">
                {get(carData, `attributes.color_${appLang}`)}
              </span>
            </div>
            <div className="detail-item-modal">
              <span className="detail-label-modal">{"Yoqilg'i turi"}:</span>
              <span className="detail-value-modal">
                {get(carData, `attributes.fuel_type_${appLang}`)}
              </span>
            </div>
            <div className="detail-item-modal">
              <span className="detail-label-modal">Manzil:</span>
              <span className="detail-value-modal">
                {get(carData, `attributes.location_${appLang}`)}
              </span>
            </div>
            <div className="detail-item-modal">
              <span className="detail-label-modal">Narxi:</span>
              <span className="detail-value-modal detail-price-modal">
                {get(carData, "attributes.price", "")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
