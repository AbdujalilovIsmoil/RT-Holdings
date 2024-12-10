"use client";

import Head from "next/head";
import { useRouter } from "next/router";
import Hero from "@/components/UI/Hero";
import Contact from "@/components/UI/Contact";

const ContactComponent = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Hero page={router.pathname} />

      <Contact />
    </>
  );
};

export default ContactComponent;
