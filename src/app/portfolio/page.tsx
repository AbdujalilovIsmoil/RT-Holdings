"use client";

import { usePathname } from "next/navigation";
import { Hero, Portfolio } from "@/components";

const PortfolioPage = () => {
  const pathName = usePathname();

  return (
    <>
      <Hero page={pathName} />
      <Portfolio />
    </>
  );
};

export default PortfolioPage;
