"use client";
import Image from "next/image";
import { cardTypes, StringInnerTypes } from "@/typescript";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { initialValuesTypes } from "@/context/reducer";
import { cardContents } from "./data";

interface CarModalProps {
  isOpen: boolean;
  carData: cardTypes;
  onClose: () => void;
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

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
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
