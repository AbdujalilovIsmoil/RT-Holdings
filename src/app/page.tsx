"use client";

import { usePathname } from "next/navigation";
import {
  Hero,
  AboutUsUI,
  ContactUI,
  Portfolio,
  Testimonials,
} from "@/components";

const Home = () => {
  const pathName = usePathname();

  return (
    <>
      <Hero page={pathName} />
      <AboutUsUI />
      <Portfolio />
      <Testimonials />
      <ContactUI />
    </>
  );
};

export default Home;
