"use client";

import Head from "next/head";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Hero, SalesServices } from "@/components";

const News = () => {
  const pathName = usePathname();
  const [isActive, setIsActive] = useState<boolean>(false);

  const openModal = () => setIsActive(prevState => !prevState);

  useEffect(() => {
    scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <Head>
        <title>News</title>
      </Head>

      <Hero page={pathName} />
      <SalesServices
        isOpen={false}
        isActive={isActive}
        openModal={openModal}
        content={{
          title: "Dolzarb ma’lumotlar",
          description: `RT Holdings faoliyatiga oid yangi loyihalar, hamkorliklar va 
          mahsulotlar haqidagi eng dolzarb ma’lumotlarni shu yerda topasiz. Sizni qiziqtiradigan
          barcha yangiliklar jamlangan!`,
        }}
      />
    </>
  );
};

export default News;
