import { useLocation } from "react-router-dom";
import { Contact, Hero } from "../../components";

const ContactComponent = () => {
  const location = useLocation();
  return (
    <>
      <Hero page={location.pathname} />
      <Contact />
    </>
  );
};

export default ContactComponent;
