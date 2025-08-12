"use client";

import { useEffect } from "react";
import { language } from "./data";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { Hero, OurServices } from "@/components";
import { initialValuesTypes } from "@/context/reducer";

const Services = () => {
  const pathName = usePathname();
  const { appLang } = useSelector((state: initialValuesTypes) => state);

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
