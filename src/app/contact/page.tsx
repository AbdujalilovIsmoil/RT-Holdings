"use client";

import { useEffect } from "react";
import { language } from "./data";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { ContactUI, Hero } from "@/components";
import { initialValuesTypes } from "@/context/reducer";

const Contact = () => {
  const pathName = usePathname();
  const { appLang } = useSelector((state: initialValuesTypes) => state);

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
