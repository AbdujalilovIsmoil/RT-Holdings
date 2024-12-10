"use client";

import Head from "next/head";
import { useRouter } from "next/router";
import Hero from "@/components/UI/Hero";
import Info from "@/components/UI/Info";
import Post from "@/components/UI/Post";
import Contact from "@/components/UI/Contact";
import Services from "@/components/UI/Services";
import Portfolio from "@/components/UI/Portfolio";

const About = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Hero page={router.pathname} />
      <Info />
      <Post />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
};

export default About;
