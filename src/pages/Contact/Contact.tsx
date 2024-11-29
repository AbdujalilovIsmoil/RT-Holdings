import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Contact, Hero } from "../../components";

const ContactComponent = () => {
  const location = useLocation();

  useEffect(() => {
    scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <Hero page={location.pathname} />
      <Contact />
    </>
  );
};

export default ContactComponent;
