"use client";

import React, { useState } from "react";
import { Hero, SalesServices } from "@/components";
import { usePathname } from "next/navigation";

const Sale = () => {
  const pathName = usePathname();
  const [isActive, setIsActive] = useState<boolean>(false);

  const openModal = () => setIsActive(prevState => !prevState);

  return (
    <>
      <Hero page={pathName} />
      <SalesServices
        isOpen={false}
        isActive={isActive}
        openModal={openModal}
      />
    </>
  );
};

export default Sale;
