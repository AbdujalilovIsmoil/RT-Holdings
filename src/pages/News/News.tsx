import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Hero, SaleServices } from "../../components";

const News = () => {
  const location = useLocation();
  const [isActive, setIsActive] = useState<boolean>(false);

  const openModal = () => setIsActive((prevState) => !prevState);

  useEffect(() => {
    scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <Hero page={location.pathname} />
      <SaleServices
        isOpen={false}
        isActive={isActive}
        openModal={openModal}
        data={[
          {
            title: "Our News",
            text: "Lorem Ipsum is simply dummy text of the printing.",
          },
        ]}
      />
    </>
  );
};

export default News;
