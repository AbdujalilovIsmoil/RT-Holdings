"use client";

import Head from "next/head";
import { useRouter } from "next/router";
import Hero from "@/components/UI/Hero";
import Post from "@/components/UI/Post";
import Portfolio from "@/components/UI/Portfolio";

const Services = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Services</title>
      </Head>

      <Hero page={router.pathname} />
      <Post />
      <Portfolio />
    </>
  );
};

export default Services;
