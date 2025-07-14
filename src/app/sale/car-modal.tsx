"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface CarData {
  title: string;
  images: string[];
  details: {
    model: string;
    year: string;
    mileage: string;
    color: string;
    fuelType: string;
    location: string;
    price: string;
  };
}

interface CarModalProps {
  isOpen: boolean;
  onClose: () => void;
  carData: CarData;
}

export default function CarModal({ isOpen, onClose, carData }: CarModalProps) {
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
    setCurrentImageIndex(prev =>
      prev === carData.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(prev =>
      prev === 0 ? carData.images.length - 1 : prev - 1,
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (!isOpen) return null;

  return (
    <div
      className='modal-overlay'
      onClick={onClose}
    >
      <div
        className='modal-container'
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className='modal-close-btn'
          aria-label='Close modal'
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path d='M18 6L6 18M6 6l12 12' />
          </svg>
        </button>

        {/* Modal Content */}
        <div className='modal-content'>
          {/* Title */}
          <h1 className='modal-title'>{carData.title}</h1>

          {/* Image Carousel */}
          <div className='carousel-container'>
            <div className='carousel-wrapper'>
              {carData.images.length > 1 && (
                <button
                  onClick={prevImage}
                  className='carousel-nav carousel-nav-left'
                  aria-label='Previous image'
                >
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path d='M15 18l-6-6 6-6' />
                  </svg>
                </button>
              )}

              <div className='carousel-image-container'>
                <Image
                  className='carousel-image'
                  src={carData.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${carData.title} - Image ${currentImageIndex + 1}`}
                />
              </div>

              {carData.images.length > 1 && (
                <button
                  onClick={nextImage}
                  className='carousel-nav carousel-nav-right'
                  aria-label='Next image'
                >
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path d='M9 18l6-6-6-6' />
                  </svg>
                </button>
              )}
            </div>

            {/* Carousel Dots */}
            {carData.images.length > 1 && (
              <div className='carousel-dots'>
                {carData.images.map((_, index) => (
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
          <div className='car-details-modal'>
            <div className='detail-item-modal'>
              <span className='detail-label-modal'>Model:</span>
              <span className='detail-value-modal'>
                {carData.details.model}
              </span>
            </div>
            <div className='detail-item-modal'>
              <span className='detail-label-modal'>Yili:</span>
              <span className='detail-value-modal'>{carData.details.year}</span>
            </div>
            <div className='detail-item-modal'>
              <span className='detail-label-modal'>Yurgan masofasi:</span>
              <span className='detail-value-modal'>
                {carData.details.mileage}
              </span>
            </div>
            <div className='detail-item-modal'>
              <span className='detail-label-modal'>Rangi:</span>
              <span className='detail-value-modal'>
                {carData.details.color}
              </span>
            </div>
            <div className='detail-item-modal'>
              <span className='detail-label-modal'>{"Yoqilg'i turi"}:</span>
              <span className='detail-value-modal'>
                {carData.details.fuelType}
              </span>
            </div>
            <div className='detail-item-modal'>
              <span className='detail-label-modal'>Manzil:</span>
              <span className='detail-value-modal'>
                {carData.details.location}
              </span>
            </div>
            <div className='detail-item-modal'>
              <span className='detail-label-modal'>Narxi:</span>
              <span className='detail-value-modal detail-price-modal'>
                {carData.details.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
