"use client";

import { usePathname } from "next/navigation";
import { Hero, OurServices } from "@/components";

const Services = () => {
  const pathName = usePathname();

  return (
    <>
      <Hero page={pathName} />
      <OurServices />
    </>
  );
};

export default Services;
