"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { ContactUI, Hero } from "@/components";
import { initialValuesTypes } from "@/context/reducer";

const Contact = () => {
  const pathName = usePathname();
  const { appLang } = useSelector((state: initialValuesTypes) => state);

  interface langugageTypes {
    [key: string]: string;
  }

  const language: langugageTypes = {
    ko: "문의하기",
    en: "Contact Us",
    ru: "Свяжитесь с нами",
    uz: "Biz bilan bog‘lanish",
  };

  useEffect(() => {
    document.title = language[`${appLang}`];
  }, [appLang]);

  return (
    <>
      <Hero page={pathName} />
      <ContactUI />
    </>
  );
};

export default Contact;
