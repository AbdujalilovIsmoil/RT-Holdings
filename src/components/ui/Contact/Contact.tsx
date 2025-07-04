"use client";

import "./style.css";
import { ChangeEvent, useState } from "react";
import { FaCircleCheck } from "@/assets/react-icons";
import { Input, Textarea, Button } from "@/components";

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

  return (
    <>
      <section className='contact'>
        <div className='container'>
          <div className='contact__content'>
            <h2 className='contact__content-title'>Biz haqimizda</h2>
            <ul className='contact__list'>
              <li className='contact__itme'>
                <FaCircleCheck className='contact__item-icon' />
                <p className='contact__item-text'>Malakali mutaxassislar</p>
              </li>
              <li className='contact__itme'>
                <FaCircleCheck className='contact__item-icon' />
                <p className='contact__item-text'>100% mijozlar mamnunligi</p>
              </li>
              <li className='contact__itme'>
                <FaCircleCheck className='contact__item-icon' />
                <p className='contact__item-text'>Shaffof narxlash</p>
              </li>
              <li className='contact__itme'>
                <FaCircleCheck className='contact__item-icon' />
                <p className='contact__item-text'>Sifatli ish</p>
              </li>
            </ul>
          </div>

          <div className='contact-request'>
            <div className='contact-request__content'>
              <h3 className='contact-request__content-title'>Taklif so‘rash</h3>
              <p className='contact-request__content-text'>
                Mahsulotlar ustidan to‘liq nazorat bizga mijozlarimizga eng
                yuqori sifat, qulay narxlar va ishonchli xizmatlar taklif etish
                imkonini beradi. Jhontraktor kompaniyasi sifatida biz qilayotgan
                har bir ishimizdan faxrlanamiz.
              </p>
            </div>

            <form className='contact-request-form'>
              <label className='contact-request-form__box'>
                <Input
                  required
                  type='text'
                  name='name'
                  value={form.name}
                  placeholder='Ism'
                  onChange={changeInput}
                  className='contact-request-form__box-input'
                />
                <Input
                  required
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={changeInput}
                  placeholder='Elektron pochta'
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
                  placeholder='Telefon raqam'
                  className='contact-request-form__box-input'
                />
                <select
                  required
                  name='service'
                  value={form.service}
                  onChange={changeInput}
                  className='contact-request-form__box-input select'
                >
                  <option disabled>Xizmat turini tanlang</option>
                  <option value='value 1'>Qiymat 1</option>
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
                Murojaatni yuborish
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormComponent;
