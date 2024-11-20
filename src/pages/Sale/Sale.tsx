import { useState } from "react";
import { Hero, Services } from "./components";

const Sale = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const openModal = () => setIsActive((prevState) => !prevState);

  return (
    <>
      <Hero />
      <Services openModal={openModal} isActive={isActive} />
    </>
  );
};

export default Sale;
