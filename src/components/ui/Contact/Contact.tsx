"use client";

import "./style.css";
import { get } from "lodash";
import { useSelector } from "react-redux";
import { usePost } from "@/hooks";
import { FaCircleCheck } from "@/assets/react-icons";
import { Input, Textarea, Button } from "@/components";
import { initialValuesTypes } from "@/context/reducer";
import { ChangeEvent, useEffect, useState } from "react";
import { contactData, formData, offerData } from "./data";

// interface Items {
//   id: string;
//   attributes: {
//     title: "uz" | "ru" | "en" | "ko";
//   };
// }

interface ScoreTypes {
  image: string;
  title_uz: string;
  title_ru: string;
  title_en: string;
  title_ko: string;
  id: string | number;
  description_uz: string;
  description_ru: string;
  description_en: string;
  description_ko: string;
}

const data: ScoreTypes[] = [
  {
    id: 1,
    title_en: "RT MOTORS",
    title_ru: "RT MOTORS",
    title_uz: "RT MOTORS",
    title_ko: "RT MOTORS",
    image: "/images/jpg/rt-motors.jpg",
    description_en:
      "RT Motors - Delivers luxury cars from South Korea to the world on demand",
    description_ru:
      "RT Motors — поставляет автомобили класса люкс из Южной Кореи по всему миру по запросу.",
    description_uz:
      "RT Motors - Janubiy Koreyadan hashamatlik avtomobillarni zakaz orqali butun dunyoqga yetkazib beradi",
    description_ko:
      "RT Motors - 수요에 따라 한국의 고급 자동차를 전 세계로 배송합니다.",
  },
  {
    id: 2,
    title_en: "RT MEDLINE",
    title_ru: "RT MEDLINE",
    title_uz: "RT MEDLINE",
    title_ko: "RT MEDLINE",
    image: "/images/jpg/rt-medline.jpg",
    description_en:
      "RT Medline is a multidisciplinary family hospital. This hospital has more than 20 qualified doctors working in about 10 areas.",
    description_ru:
      "RT Medline — многопрофильная семейная больница. В ней работают более 20 квалифицированных врачей примерно в 10 областях.",
    description_uz:
      "RT Medline - ko'p tarmoqli oilaviy shifoxonasi. bu shifoxonada 20 dan ortiq malakali shifokorlar 10 ga yaqin sohalarda o’z faoliyatini olib kelmoqda.",
    description_ko:
      "RT Medline은 다학제 가정병원입니다. 이 병원에는 약 10개 분야에서 20명 이상의 자격을 갖춘 의사가 근무하고 있습니다.",
  },
  {
    id: 3,
    title_en: "RT HS GROUP LOGISTICS",
    title_ru: "RT HS GROUP LOGISTICS",
    title_uz: "RT HS GROUP LOGISTICS",
    title_ko: "RT HS GROUP LOGISTICS",
    image: "/images/jpg/our-services-1.jpg",
    description_en:
      "It is a campaign created on June 8, 2023 by Korea's HS Express Logistics and Uzbekistan's RT Holdings to create a comprehensive logistics system. It is currently capable of delivering cargo to every corner of the world.",
    description_ru:
      "Это кампания, созданная 8 июня 2023 года корейской компанией HS Express Logistics и узбекской компанией RT Holdings для создания комплексной логистической системы. В настоящее время она способна доставлять грузы в любую точку мира.",
    description_uz:
      "2023-yil 8-iyunda Koreyaning HS Express logistics hamda O'zbekistonning RT Holdings kampaniyasi tomonidan kompleks lagistik tizim yaratash uchun yaratilgan kampaniyadir. Hozirda dunyoni ishtalgan chekkasiga yuklarni yetkazib berish imkoniyatiga ega.",
    description_ko:
      "2023년 8월 8일에 캄파니야에 도착하여 HS Express Logistics 및 2023년 8월 8일에 콤파니에이 RT Holdings가 создания에 합류했습니다. комплексной 논리 시스템. В настоячее время она способна доставлять грузы в лубук точку mirа.",
  },
  {
    id: 4,
    title_en: "DREAM EXPRESS",
    title_ru: "DREAM EXPRESS",
    title_uz: "DREAM EXPRESS",
    title_ko: "DREAM EXPRESS",
    image: "/images/jpg/dream-express.jpg",
    description_en:
      "Dream Express has launched a service for our Uzbek compatriots to deliver their goods from their destination in Korea to their destination in Uzbekistan for the first time.",
    description_ru:
      "Компания Dream Express впервые запустила услугу по доставке товаров для наших узбекских соотечественников из Кореи в пункт назначения в Узбекистане.",
    description_uz:
      "Dream express ilk bor o’zbek vatandoshlarimizni yuklarini Koreyadagi manzilidan O’zbekistondagi manziligacha yetkazish xizmatini yo’lga qo’ygan.",
    description_ko:
      "드림익스프레스는 우즈베키스탄 동포들이 한국의 목적지에서 우즈베키스탄의 목적지까지 상품을 배송하는 서비스를 처음으로 시작했습니다.",
  },
  {
    id: 5,
    image: "/images/jpg/our-services-4.jpg",
    title_en: "KORTEX OIL",
    title_ru: "KORTEX OIL",
    title_uz: "KORTEX OIL",
    title_ko: "KORTEX OIL",
    description_en:
      "Since 2025, it has been producing a variety of high-quality motor oils for cars and special equipment.",
    description_ru:
      "С 2025 года производит широкий ассортимент высококачественных моторных масел для автомобилей и спецтехники.",
    description_uz:
      "2025- yildan buyon avtomobillar va maxsus texnikalar uchun turli xil yuqori sifatdagi motor moylari ishlab chiqarib kelmoqda.",
    description_ko:
      "2025년부터 자동차 및 특수장비용 다양한 고품질 모터오일을 생산하고 있습니다.",
  },
  {
    id: 6,
    title_en: "AKA TAXI",
    title_ru: "AKA TAXI",
    title_uz: "AKA TAXI",
    title_ko: "AKA TAXI",
    image: "/images/jpg/Aka-taxi.jpg",
    description_en: "Convenient platform for inter-regional taxi service",
    description_ru: "Удобная платформа для межрегионального такси",
    description_uz: "Viloyatlar aro taksi xizmati uchun qulay platforma",
    description_ko: "지역 간 택시 서비스를 위한 편리한 플랫폼",
  },
];

const FormComponent = () => {
  const [form, setForm] = useState<{
    email: string;
    comment: string;
    full_name: string;
    phone_number: string;
    service: string;
  }>({
    email: "",
    comment: "",
    full_name: "",
    service: "",
    phone_number: "",
  });

  const {} = usePost({});

  const { appLang } = useSelector((state: initialValuesTypes) => state);

  const { isLoading, mutate, isSuccess } = usePost({
    lang: `${appLang}`,
    path: "/offers/",
  });

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(form);
  };

  // const data = useGet({
  //   path: "/services/",
  // });

  // useEffect(() => {
  //   if (
  //     Array.isArray(get(data, "data", [])) &&
  //     get(data, "data", []).length > 0
  //   ) {
  //     setForm((prev) => ({
  //       ...prev,
  //       service: get(data, "data[0].id", ""),
  //     }));
  //   }
  // }, [data]);

  useEffect(() => {
    if (isSuccess) {
      setForm({
        email: "",
        service: get(data, "data[0].id", ""),
        comment: "",
        full_name: "",
        phone_number: "",
      });
    }
  }, [isSuccess]);

  const changeInput = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
      service:
        name === "service"
          ? value || get(data, "data[0].id", "")
          : form.service,
    });
  };

  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="contact__content">
            <h2 className="contact__content-title">
              {contactData[`${appLang}`]?.title}
            </h2>
            <ul className="contact__list">
              {contactData[`${appLang}`]?.data?.map((item, index) => {
                return (
                  <li key={index} className="contact__itme">
                    <FaCircleCheck className="contact__item-icon" />
                    <p className="contact__item-text">{item?.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="contact-request">
            <div className="contact-request__content">
              <h3 className="contact-request__content-title">
                {offerData[`${appLang}`]?.title}
              </h3>
              <p className="contact-request__content-text">
                {offerData[`${appLang}`]?.text}
              </p>
            </div>

            <form className="contact-request-form">
              <label className="contact-request-form__box">
                <Input
                  required
                  type="text"
                  name="full_name"
                  value={form.full_name}
                  onChange={changeInput}
                  placeholder={formData[`${appLang}`]?.name}
                  className="contact-request-form__box-input"
                />
                <Input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={changeInput}
                  placeholder={formData[`${appLang}`]?.email}
                  className="contact-request-form__box-input"
                />
              </label>
              <label className="contact-request-form__box">
                <Input
                  required
                  type="number"
                  name="phone_number"
                  onChange={changeInput}
                  value={form.phone_number}
                  placeholder={formData[`${appLang}`]?.phone_number}
                  className="contact-request-form__box-input"
                />
                <select
                  required
                  name="service"
                  value={form.service}
                  onChange={changeInput}
                  className="contact-request-form__box-input select"
                >
                  {data &&
                    data.map((el: ScoreTypes) => {
                      return (
                        <option
                          value={get(el, "id")}
                          key={get(el, "id", "")}
                          defaultValue={get(el, "")}
                        >
                          {get(el, `title_${appLang}`, "")}
                        </option>
                      );
                    })}
                </select>
              </label>
              <Textarea
                name="comment"
                value={form.comment}
                onChange={changeInput}
                className="contact-request-form__box-textarea"
              ></Textarea>
              <Button
                type="submit"
                onClick={onSubmit}
                disabled={isLoading}
                className="contact-request-form__box-submit"
              >
                {isLoading ? (
                  <span className="small-loader"></span>
                ) : (
                  formData[`${appLang}`]?.send
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormComponent;
