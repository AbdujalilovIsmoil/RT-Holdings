"use client";

import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import Hero from "@/components/UI/Hero";
import SaleServices from "@/components/UI/SaleServices";

const Sale = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState<boolean>(false);

  const openModal = () => setIsActive((prevState) => !prevState);

  return (
    <>
      <Head>
        <title>Sale</title>
      </Head>

      <Hero page={router.pathname} />

      <SaleServices
        isOpen={true}
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

export default Sale;
