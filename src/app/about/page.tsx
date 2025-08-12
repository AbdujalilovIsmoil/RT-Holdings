"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { descriptions, language } from "./data";
import { initialValuesTypes } from "@/context/reducer";
import { ContactUI, Hero, OurServices, Post } from "@/components";

const About = () => {
  const pathName = usePathname();
  const { appLang } = useSelector((state: initialValuesTypes) => state);

  useEffect(() => {
    document.title = language[`${appLang}`];
  }, [appLang]);

  return (
    <>
      <Hero page={pathName} />
      <Post
        title="RT Holdings"
        image={{
          width: 510,
          height: 500,
          alt: "image",
          url: "/images/jpg/hero-background-image-6.jpg",
        }}
        description={descriptions[`${appLang}`]}
      />
      <OurServices />
      <ContactUI />
    </>
  );
};

export default About;
