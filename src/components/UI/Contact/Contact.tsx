"use client";
import { useGet } from "@/hooks";
import classNames from "classnames";
import { toast } from "react-toastify";
import styles from "./index.module.css";
import Button from "@/components/UI/Button";
import Input from "@/components/Field/Input";
import { dataTypes } from "@/typescript/types";
import Textarea from "@/components/Field/Textarea";
import React, { ChangeEvent, useState } from "react";
import { FaCircleCheck } from "../../../../public/react-icons";

const FormComponent = () => {
  const [text, setText] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [service, setService] = useState<string>("");
  const [phone_number, setPhoneNumber] = useState<string>("");

  const postRequest = async (e: ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("text", text);
    formData.append("email", email);
    formData.append("service", service);
    formData.append("phone_number", phone_number);

    try {
      const response = await fetch(
        "https://api.rtholdings.uz/api/v1/common/contact-us/create/",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      toast.success("Send your data", { pauseOnHover: false });

      setName("");
      setEmail("");
      setPhoneNumber("");
      setService("");
      setText("");
    } catch (error) {
      if (error instanceof Error) {
        toast.error("Don't send your data", { pauseOnHover: false });
      }
    }
  };

  const { data } = useGet({ path: "/service/list/" });

  return (
    <section className={classNames(styles["contact"])}>
      <div className="container">
        <div className={classNames(styles["contact__content"])}>
          <h2 className={classNames(styles["contact__content-title"])}>
            Contact Us
          </h2>
          <ul className={classNames(styles["contact__list"])}>
            <li className={classNames(styles["contact__itme"])}>
              <FaCircleCheck
                className={classNames(styles["contact__item-icon"])}
              />
              <p className={classNames(styles["contact__item-text"])}>
                Qualified Specialists
              </p>
            </li>
            <li className={classNames(styles["contact__itme"])}>
              <FaCircleCheck
                className={classNames(styles["contact__item-icon"])}
              />
              <p className={classNames(styles["contact__item-text"])}>
                100% Satisfaction
              </p>
            </li>
            <li className={classNames(styles["contact__itme"])}>
              <FaCircleCheck
                className={classNames(styles["contact__item-icon"])}
              />
              <p className={classNames(styles["contact__item-text"])}>
                Transparent Pricing
              </p>
            </li>
            <li className={classNames(styles["contact__itme"])}>
              <FaCircleCheck
                className={classNames(styles["contact__item-icon"])}
              />
              <p className={classNames(styles["contact__item-text"])}>
                Quality Work
              </p>
            </li>
          </ul>
        </div>

        <div className={classNames(styles["contact-request"])}>
          <div className={classNames(styles["contact-request__content"])}>
            <h3
              className={classNames(styles["contact-request__content-title"])}
            >
              Request A Quote
            </h3>
            <p className={classNames(styles["contact-request__content-text"])}>
              Complete control over products allow us to our customers the best
              quality prices and services. We take great pride in everything
              that we do in Jhontraktor
            </p>
          </div>

          <form className={classNames(styles["contact-request-form"])}>
            <label className={classNames(styles["contact-request-form__box"])}>
              <Input
                required
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={classNames(
                  styles["contact-request-form__box-input"]
                )}
              />
              <Input
                required
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className={classNames(
                  styles["contact-request-form__box-input"]
                )}
              />
            </label>
            <label className={classNames(styles["contact-request-form__box"])}>
              <Input
                required
                type="number"
                name="phone_number"
                placeholder="Phone"
                value={phone_number}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className={classNames(
                  styles["contact-request-form__box-input"]
                )}
              />
              <select
                required
                name="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className={classNames(
                  styles["contact-request-form__box-input"],
                  styles["select"]
                )}
              >
                <option selected disabled>
                  Select Your Service
                </option>
                {Array.isArray(data) &&
                  data.map((el: dataTypes, index) => {
                    return (
                      <option value={el?.id} key={index}>
                        {el && el.id}
                      </option>
                    );
                  })}
              </select>
            </label>
            <Textarea
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className={classNames(
                styles["contact-request-form__box-textarea"]
              )}
            ></Textarea>
            <Button
              type="submit"
              onClick={postRequest}
              className={classNames(styles["contact-request-form__box-submit"])}
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
