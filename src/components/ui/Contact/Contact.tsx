"use client";

import "./style.css";
import { useSelector } from "react-redux";
import { useGet, usePost } from "@/hooks";
import { TitleField } from "@/typescript";
import { ChangeEvent, useState } from "react";
import { FaCircleCheck } from "@/assets/react-icons";
import { Input, Textarea, Button } from "@/components";
import { initialValuesTypes } from "@/context/reducer";
import { contactData, formData, offerData } from "./data";

const FormComponent = () => {
  const [form, setForm] = useState<{
    email: string;
    comment: string;
    full_name: string;
    phone_number: string;
    service_type: string;
  }>({
    email: "",
    comment: "",
    full_name: "",
    service_type: "",
    phone_number: "",
  });

  const changeInput = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const {} = usePost({
    
  })

  const { appLang } = useSelector((state: initialValuesTypes) => state);

  const data = useGet({ path: "/service_type/list/" });

  type Items = {
    id: string;
  } & {
    [K in TitleField]: string;
  };

  const { isLoading, mutate } = usePost({
    lang: `${appLang}`,
  });

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(form);
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
                  name="service_type"
                  onChange={changeInput}
                  value={form.service_type}
                  className="contact-request-form__box-input select"
                >
                  {Array.isArray(data) &&
                    data.map((el: Items) => {
                      const key = `title_${appLang}` as keyof Items;
                      return (
                        <option key={el.id} value={el.id}>
                          {el[key]}
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
