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
    <section className='contact'>
      <div className='container'>
        <div className='contact__content'>
          <h2 className='contact__content-title'>Contact Us</h2>
          <ul className='contact__list'>
            <li className='contact__itme'>
              <FaCircleCheck className='contact__item-icon' />
              <p className='contact__item-text'>Qualified Specialists</p>
            </li>
            <li className='contact__itme'>
              <FaCircleCheck className='contact__item-icon' />
              <p className='contact__item-text'>100% Satisfaction</p>
            </li>
            <li className='contact__itme'>
              <FaCircleCheck className='contact__item-icon' />
              <p className='contact__item-text'>Transparent Pricing</p>
            </li>
            <li className='contact__itme'>
              <FaCircleCheck className='contact__item-icon' />
              <p className='contact__item-text'>Quality Work</p>
            </li>
          </ul>
        </div>

        <div className='contact-request'>
          <div className='contact-request__content'>
            <h3 className='contact-request__content-title'>Request A Quote</h3>
            <p className='contact-request__content-text'>
              Complete control over products allow us to our customers the best
              quality prices and services. We take great pride in everything
              that we do in Jhontraktor
            </p>
          </div>

          <form className='contact-request-form'>
            <label className='contact-request-form__box'>
              <Input
                required
                type='text'
                name='name'
                value={form.name}
                placeholder='Name'
                onChange={changeInput}
                className='contact-request-form__box-input'
              />
              <Input
                required
                type='email'
                name='email'
                value={form.email}
                placeholder='Email'
                onChange={changeInput}
                className='contact-request-form__box-input'
              />
            </label>
            <label className='contact-request-form__box'>
              <Input
                required
                type='number'
                name='phone_number'
                placeholder='Phone'
                onChange={changeInput}
                value={form.phone_number}
                className='contact-request-form__box-input'
              />
              <select
                required
                name='service'
                value={form.service}
                onChange={changeInput}
                className='contact-request-form__box-input select'
              >
                <option disabled>Select Your Service</option>
                <option value='value 1'>Value 1</option>
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
              Submit Request
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormComponent;
