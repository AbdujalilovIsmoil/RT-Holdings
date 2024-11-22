import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Hero, SaleServices } from "../../components";

const Sale = () => {
  const location = useLocation();
  const [isActive, setIsActive] = useState<boolean>(false);

  const openModal = () => setIsActive((prevState) => !prevState);

  return (
    <>
      <Hero page={location.pathname} />
      <SaleServices
        openModal={openModal}
        isActive={isActive}
        isOpen={true}
        data={[
          {
            title: "Our Services",
            text: "Lorem Ipsum is simply dummy text of the printing.",
          },
        ]}
      />
    </>
  );
};

export default Sale;
