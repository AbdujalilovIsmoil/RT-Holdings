"use client";

import "./style.css";
import { get } from "lodash";
import { useSelector } from "react-redux";
import { useGet, usePost } from "@/hooks";
import { FaCircleCheck } from "@/assets/react-icons";
import { Input, Textarea, Button } from "@/components";
import { initialValuesTypes } from "@/context/reducer";
import { ChangeEvent, useEffect, useState } from "react";
import { contactData, formData, offerData } from "./data";

interface FormItems {
  email: string;
  comment: string;
  full_name: string;
  id?: string | number;
  phone_number: string;
  service_type: string;
}

const FormComponent = () => {
  const [form, setForm] = useState<FormItems>({
    email: "",
    comment: "",
    full_name: "",
    service_type: "",
    phone_number: "",
  });

  const { appLang } = useSelector((state: initialValuesTypes) => state);

  const { isLoading, mutate, isSuccess } = usePost({
    lang: `${appLang}`,
    path: "/contact_us/",
  });

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(form);
  };

  const data = useGet({
    path: "/service_type/list",
  }) as FormItems[];

  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) {
      setForm((prev: FormItems) => ({
        ...prev,
        service_type: `${data[0].id}`,
      }));
    }
  }, [data]);

  useEffect(() => {
    if (isSuccess) {
      setForm({
        email: "",
        service_type: get(data, "data[0].id", ""),
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
      service_type:
        name === "service_type"
          ? value || get(data, "data[0].id", "")
          : form.service_type,
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
                  onChange={changeInput}
                  value={form.service_type}
                  className="contact-request-form__box-input select"
                >
                  {Array.isArray(data) &&
                    data.map((el: FormItems) => {
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
