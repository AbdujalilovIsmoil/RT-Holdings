"use client";
import "./style.css";
import Image from "next/image";
// import { useGet } from "@/hooks";
import CarModal from "./car-modal";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Input, Button, Hero } from "@/components";
import { initialValuesTypes } from "@/context/reducer";

// Search Icon component
const IoSearch = ({ className }: { className: string }) => (
  <svg
    className={className}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
    />
  </svg>
);

interface CarData {
  id: number;
  title: string;
  model: string;
  year: string;
  mileage: string;
  color: string;
  fuel: string;
  location: string;
  price: string;
  images: string[];
}

const carsData: CarData[] = [
  {
    id: 1,
    title: "AMG G63",
    model: "G63 AMG Manufacture (3rd...)",
    year: "2023/10",
    mileage: "2 800 km",
    color: "Dark gray",
    fuel: "Benzin",
    location: "Janubiy korea",
    price: "160 000$",
    images: [
      "/images/png/sale-image.png",
      "/images/png/sale-image.png",
      "/images/png/sale-image.png",
      "/images/png/sale-image.png",
    ],
  },
  {
    id: 2,
    title: "BMW X7",
    model: "X7 xDrive40i M Sport",
    year: "2022/08",
    mileage: "15 500 km",
    color: "Black",
    fuel: "Benzin",
    location: "Germaniya",
    price: "95 000$",
    images: [
      "/images/png/sale-image.png",
      "/images/png/sale-image.png",
      "/images/png/sale-image.png",
    ],
  },
  {
    id: 3,
    title: "Audi Q8",
    model: "Q8 55 TFSI Quattro",
    year: "2023/03",
    mileage: "8 200 km",
    color: "White",
    fuel: "Benzin",
    location: "AQSH",
    price: "78 500$",
    images: [
      "/images/png/sale-image.png",
      "/images/png/sale-image.png",
      "/images/png/sale-image.png",
      "/images/png/sale-image.png",
    ],
  },
  {
    id: 4,
    title: "Range Rover",
    model: "Range Rover Vogue SE",
    year: "2023/12",
    mileage: "1 200 km",
    color: "Silver",
    fuel: "Benzin",
    location: "Angliya",
    price: "125 000$",
    images: ["/images/png/sale-image.png", "/images/png/sale-image.png"],
  },
  {
    id: 5,
    title: "Range Rover",
    model: "Range Rover Vogue SE",
    year: "2023/12",
    mileage: "1 200 km",
    color: "Silver",
    fuel: "Benzin",
    location: "Angliya",
    price: "125 000$",
    images: ["/images/png/sale-image.png", "/images/png/sale-image.png"],
  },
];

function CarCard({
  car,
  onOpenModal,
}: {
  car: CarData;
  onOpenModal: (car: CarData) => void;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % car.images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + car.images.length) % car.images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className='car-card'>
      {/* Swiper Section */}
      <div className='slide-container'>
        <div
          className='slide-wrapper'
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {car?.images?.map((image, index) => (
            <div
              key={index}
              className='slide-slide'
            >
              <Image
                width={300}
                height={192}
                src={`${image}`}
                alt={`${car?.title} - ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {car.images.length > 1 && (
          <>
            <button
              className='slide-navigation slide-prev'
              onClick={prevSlide}
            >
              ‹
            </button>
            <button
              className='slide-navigation slide-next'
              onClick={nextSlide}
            >
              ›
            </button>
          </>
        )}

        {/* Pagination Dots */}
        {car?.images?.length > 1 && (
          <div className='slide-pagination'>
            {car?.images?.map((_, index) => (
              <div
                key={index}
                className={`slide-dot ${
                  index === currentSlide ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        )}
      </div>

      <div className='card-content'>
        {/* Title */}
        <h1 className='car-title'>{car.title}</h1>

        {/* Car Details */}
        <div className='car-details'>
          <div className='detail-item'>
            <svg
              className='detail-icon'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z'
              ></path>
            </svg>
            <span className='detail-label'>Model:</span>
            <span className='detail-value'>{car.model}</span>
          </div>

          <div className='detail-item'>
            <svg
              className='detail-icon'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
              />
            </svg>
            <span className='detail-label'>Yili:</span>
            <span className='detail-value'>{car.year}</span>
          </div>

          <div className='detail-item'>
            <svg
              className='detail-icon'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 10V3L4 14h7v7l9-11h-7z'
              />
            </svg>
            <span className='detail-label'>Yurgan masofasi:</span>
            <span className='detail-value'>{car.mileage}</span>
          </div>

          <div className='detail-item'>
            <svg
              className='detail-icon'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z'
              />
            </svg>
            <span className='detail-label'>Rangi:</span>
            <span className='detail-value'>{car.color}</span>
          </div>

          <div className='detail-item'>
            <svg
              viewBox='0 0 24 24'
              className='detail-icon'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M16 3H5a1 1 0 0 0-1 1v17h2v1a1 1 0 0 0 2 0v-1h6v1a1 1 0 0 0 2 0v-1h2v-9l2 2v3a1 1 0 0 0 2 0v-3a2 2 0 0 0-.59-1.41l-1.41-1.41A2 2 0 0 1 18 11V5a2 2 0 0 0-2-2zm0 8a4 4 0 0 0 1 2.65V18h-1V3h1a1 1 0 0 1 1 1v6h-1a1 1 0 0 1-1-1v-2h-1zm-2 10H7V5h7z' />
            </svg>
            <span className='detail-label'>Yoqilg'i turi:</span>
            <span className='detail-value'>{car.fuel}</span>
          </div>

          <div className='detail-item'>
            <svg
              className='detail-icon'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
            <span className='detail-label'>Manzil:</span>
            <span className='detail-value'>{car.location}</span>
          </div>

          <div className='detail-item'>
            <svg
              viewBox='0 0 384 512'
              className='detail-icon'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M192 0c17.7 0 32 14.3 32 32V50.3c38.3 5.5 74 22.2 102.7 47.6c13.3 12 14.3 32.4 2.3 45.2s-32.4 14.3-45.2 2.3C260.6 123.6 228.3 112 192 112c-40.6 0-72 22.5-72 48c0 25.5 31.4 48 72 48c84.7 0 152 57.3 152 128c0 60.6-51.5 110.3-120 123.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-50.3c-38.3-5.5-74-22.2-102.7-47.6c-13.3-12-14.3-32.4-2.3-45.2s32.4-14.3 45.2-2.3C123.4 388.4 155.7 400 192 400c40.6 0 72-22.5 72-48c0-25.5-31.4-48-72-48c-84.7 0-152-57.3-152-128C40 115.4 91.5 65.7 160 52.7V32c0-17.7 14.3-32 32-32z' />
            </svg>
            <span className='detail-label'>Narxi:</span>
            <span className='detail-value'>{car.price}</span>
          </div>
        </div>

        {/* More Details Button */}
        <Button
          type='button'
          className='details-button'
          onClick={() => onOpenModal(car)}
        >
          Ba'tafsil ma'lumot
        </Button>
      </div>
    </div>
  );
}

const Sale = () => {
  // const { data } = useGet({ path: "/product/list" });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<CarData | null>(null);

  const { appLang } = useSelector((state: initialValuesTypes) => state);

  const openModal = (car: CarData) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  // Transform car data to match modal interface
  const getModalCarData = (car: CarData) => ({
    title: car.title,
    images: car.images,
    details: {
      model: car.model,
      year: car.year,
      mileage: car.mileage,
      color: car.color,
      fuelType: car.fuel,
      location: car.location,
      price: car.price,
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

  return (
    <>
      <Hero page='/sale' />
      <section className='service'>
        <div className='container'>
          <div className='services__content services__contents'>
            <h2 className='services__content-title'>
              {contentData[`${appLang}`]?.title}
            </h2>
            <p className='services__content-text'>
              {contentData[`${appLang}`]?.description}
            </p>
          </div>

          <form className='service__search'>
            <IoSearch className='search__search-icon' />
            <Input
              required
              type='search'
              className='service__search-input'
              placeholder={formData[`${appLang}`]?.title}
            />
            <Button
              type='submit'
              className='service__search-submit'
            >
              {formData[`${appLang}`]?.search}
            </Button>
          </form>

          <div className='car-listing-container'>
            <div className='cars-grid'>
              {carsData.map(car => (
                <CarCard
                  key={car.id}
                  car={car}
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
        </div>
      </section>
    </>
  );
};

export default Sale;
