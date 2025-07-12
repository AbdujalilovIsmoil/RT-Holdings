"use client";

import { usePathname } from "next/navigation";
import { ContactUI, Hero, OurServices, Post } from "@/components";

const About = () => {
  const pathName = usePathname();

  return (
    <>
      <Hero page={pathName} />
      <Post
        title='RT Holdings'
        image={{
          width: 510,
          height: 500,
          alt: "image",
          url: "/images/jpg/hero-background-image-1.jpg",
        }}
        description={`
            O'zbekiston hamda Janubiy Koreyada joylashgan RT HOLDINGS kompaniyasi 
            2013-yilda tashkil topgan bo'lib hozirga qadar qurilish texnikalari eksporti 
            bilan shug'ullanib kelmoqda. Asosiy faoliyati Janubiy Koreyadan markaziy 
            osiyo davlatlariga shuningdek Rossiya, Belorussiya, Ukraina va arab 
            mamlakatlariga ekskavatorlar va mahsus texnikalar savdosi hisoblanadi. 
            Hozirgi kunda bu kompaniya bir nechta kichik tarmoqlarni o'z ichiga olgan 
            yirik holding hisoblanadi. Bulardan RT MOTORS avtomobil savdosiga 
            ixtisoslashgan, Kortex Oil motor moylari, Dream Express kargo xizmatlari, 
            Aka Taxi O'zbekiston bo'ylab taksi xizmatlarini taklif etadi, shuningdek 
            RT Medline sog'lomlashtirish maskani, RT HS Logistics kompaniyasi esa butun 
            dunyo bo'ylab har qanday turdagi texnika hafsiz va ishonchli yetkazib berish 
            bilan shug'ullanadi.
        `}
      />
      <OurServices />
      <ContactUI />
    </>
  );
};

export default About;
