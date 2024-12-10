"use client";

import Head from "next/head";
import { useRouter } from "next/router";
import Hero from "@/components/UI/Hero";
import Portfolio from "@/components/UI/Portfolio";

const Projects = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Hero page={router && router.pathname} />
      <Portfolio />
    </>
  );
};

export default Projects;
