"use client";

import Head from "next/head";
import { useRouter } from "next/router";
import Hero from "@/components/UI/Hero";
import { useEffect, useState } from "react";
import SaleServices from "@/components/UI/SaleServices";

const News = () => {
  const location = useRouter();

  const [isActive, setIsActive] = useState<boolean>(false);

  const openModal = () => setIsActive((prevState) => !prevState);

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

      <Hero page={location.pathname} />
      <SaleServices
        isOpen={false}
        isActive={isActive}
        openModal={openModal}
        data={[
          {
            title: "Our News",
            text: "Lorem Ipsum is simply dummy text of the printing.",
          },
        ]}
      />
    </>
  );
};

export default News;
