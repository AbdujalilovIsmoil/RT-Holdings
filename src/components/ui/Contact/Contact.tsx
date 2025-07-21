"use client";

import "./style.css";
import { ChangeEvent, useState } from "react";
import { FaCircleCheck } from "@/assets/react-icons";
import { Input, Textarea, Button } from "@/components";
import { useSelector } from "react-redux";
import { initialValuesTypes } from "@/context/reducer";

const FormComponent = () => {
  const [form, setForm] = useState({
    text: "",
    name: "",
    email: "",
    service: "",
    phone_number: "",
  });

  const changeInput = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const { appLang } = useSelector((state: initialValuesTypes) => state);

  type ContactDataType = {
    [key: string]: {
      title: string;
      data: { text: string }[];
    };
  };

  const contactData: ContactDataType = {
    uz: {
      title: "Biz haqimizda",
      data: [
        {
          text: "Malakali mutaxassislar",
        },
        {
          text: "100% mijozlar mamnunligi",
        },
        {
          text: "Shaffof narxlash",
        },
        {
          text: "Sifatli ish",
        },
      ],
    },
    ru: {
      title: "О нас",
      data: [
        {
          text: "Квалифицированные специалисты",
        },
        {
          text: "100% удовлетворенность клиентов",
        },
        {
          text: "Прозрачное ценообразование",
        },
        {
          text: "Качественная работа",
        },
      ],
    },
    en: {
      title: "About us",
      data: [
        {
          text: "Qualified specialists",
        },
        {
          text: "100% customer satisfaction",
        },
        {
          text: "Transparent pricing",
        },
        {
          text: "Quality work",
        },
      ],
    },
    ko: {
      title: "우리에 대해",
      data: [
        {
          text: "전문가",
        },
        {
          text: "100% 고객 만족",
        },
        {
          text: "투명한 가격 책정",
        },
        {
          text: "품질 작업",
        },
      ],
    },
  };

  type offerDataType = {
    [key: string]: {
      title: string;
      text: string;
    };
  };

  const offerData: offerDataType = {
    uz: {
      title: "Taklif so‘rash",
      text: "Mahsulotlar ustidan to‘liq nazorat bizga mijozlarimizga eng yuqori sifat, qulay narxlar va ishonchli xizmatlar taklif etish imkonini beradi. Jhontraktor kompaniyasi sifatida biz qilayotgan har bir ishimizdan faxrlanamiz.",
    },
    ru: {
      title: "Запрос предложения",
      text: "Полный контроль над продуктами позволяет нам предлагать нашим клиентам высочайшее качество, удобные цены и надежные услуги. Как компания Jhontraktor, мы гордимся каждой нашей работой.",
    },
    en: {
      title: "Request an offer",
      text: "Full control over products allows us to offer our clients the highest quality, convenient prices, and reliable services. As Jhontraktor company, we take pride in every work we do.",
    },
    ko: {
      title: "제안 요청",
      text: "제품에 대한 완전한 제어를 통해 고객에게 최고의 품질, 편리한 가격 및 신뢰할 수 있는 서비스를 제공할 수 있습니다. Jhontraktor 회사로서 우리는 우리가 하는 모든 일에 자부심을 가지고 있습니다.",
    },
  };

  type formDataType = {
    [key: string]: {
      name: string;
      email: string;
      phone_number: string;
      service: string;
      send: string;
    };
  };

  const formData: formDataType = {
    uz: {
      name: "Ism",
      email: "Elektron pochta",
      phone_number: "Telefon raqam",
      service: "Xizmat turini lanlang",
      send: "Murojaatni yuborish",
    },
    ru: {
      name: "Имя",
      email: "Электронная почта",
      phone_number: "Номер телефона",
      service: "Выберите тип услуги",
      send: "Отправить запрос",
    },
    en: {
      name: "Name",
      email: "Email",
      phone_number: "Phone number",
      service: "Select service type",
      send: "Send request",
    },
    ko: {
      name: "이름",
      email: "이메일",
      phone_number: "전화번호",
      service: "서비스 유형 선택",
      send: "요청 보내기",
    },
  };

  return (
    <>
      <section className='contact'>
        <div className='container'>
          <div className='contact__content'>
            <h2 className='contact__content-title'>
              {contactData[`${appLang}`]?.title}
            </h2>
            <ul className='contact__list'>
              {contactData[`${appLang}`]?.data.map((item, index) => {
                return (
                  <li
                    className='contact__itme'
                    key={index}
                  >
                    <FaCircleCheck className='contact__item-icon' />
                    <p className='contact__item-text'>{item?.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className='contact-request'>
            <div className='contact-request__content'>
              <h3 className='contact-request__content-title'>
                {offerData[`${appLang}`]?.title}
              </h3>
              <p className='contact-request__content-text'>
                {offerData[`${appLang}`]?.text}
              </p>
            </div>

            <form className='contact-request-form'>
              <label className='contact-request-form__box'>
                <Input
                  required
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={changeInput}
                  placeholder={formData[`${appLang}`].name}
                  className='contact-request-form__box-input'
                />
                <Input
                  required
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={changeInput}
                  placeholder={formData[`${appLang}`]?.email}
                  className='contact-request-form__box-input'
                />
              </label>
              <label className='contact-request-form__box'>
                <Input
                  required
                  type='number'
                  name='phone_number'
                  onChange={changeInput}
                  value={form.phone_number}
                  placeholder={formData[`${appLang}`]?.phone_number}
                  className='contact-request-form__box-input'
                />
                <select
                  required
                  name='service'
                  value={form.service}
                  onChange={changeInput}
                  className='contact-request-form__box-input select'
                >
                  <option disabled>{formData[`${appLang}`]?.service}</option>
                  {/* <option value='value 1'>Qiymat 1</option> */}
                </select>
              </label>
              <Textarea
                name='text'
                value={form.text}
                onChange={changeInput}
                className='contact-request-form__box-textarea'
              ></Textarea>
              <Button
                type='submit'
                className='contact-request-form__box-submit'
              >
                {formData[`${appLang}`]?.send}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormComponent;
