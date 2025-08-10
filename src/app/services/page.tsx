"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { Hero, OurServices } from "@/components";
import { initialValuesTypes } from "@/context/reducer";

const Services = () => {
  const pathName = usePathname();
  const { appLang } = useSelector((state: initialValuesTypes) => state);

  interface langugageTypes {
    [key: string]: string;
  }

  const language: langugageTypes = {
    ko: "서비스",
    ru: "Услуги",
    en: "Services",
    uz: "Xizmatlar",
  };

  useEffect(() => {
    document.title = language[`${appLang}`];
  }, [appLang]);

  return (
    <>
      <Hero page={pathName} />
      <OurServices />
    </>
  );
};

export default Services;
