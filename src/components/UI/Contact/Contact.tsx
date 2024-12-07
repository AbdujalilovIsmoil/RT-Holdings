import "./index.css";
import { FaCircleCheck } from "../../../assets/react-icons";
import { Button, Input, Select, Textarea } from "../../../components";

const Form = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact__content">
          <h2 className="contact__content-title">Contact Us</h2>
          <ul className="contact__list">
            <li className="contact__itme">
              <FaCircleCheck className="contact__item-icon" />
              <p className="contact__item-text">Qualified Specialists</p>
            </li>
            <li className="contact__itme">
              <FaCircleCheck className="contact__item-icon" />
              <p className="contact__item-text">100% Satisfaction</p>
            </li>
            <li className="contact__itme">
              <FaCircleCheck className="contact__item-icon" />
              <p className="contact__item-text">Transparent Pricing</p>
            </li>
            <li className="contact__itme">
              <FaCircleCheck className="contact__item-icon" />
              <p className="contact__item-text">Quality Work</p>
            </li>
          </ul>
        </div>

        <div className="contact-request">
          <div className="contact-request__content">
            <h3 className="contact-request__content-title">Request A Quote</h3>
            <p className="contact-request__content-text">
              Complete control over products allow us to our customers the best
              quality prices and services. We take great pride in everything
              that we do in Jhontraktor
            </p>
          </div>

          <form className="contact-request-form">
            <div className="contact-request-form__box">
              <Input
                required
                type="text"
                placeholder="Name"
                className="contact-request-form__box-input"
              />
              <Input
                required
                type="email"
                placeholder="Email"
                className="contact-request-form__box-input"
              />
            </div>
            <div className="contact-request-form__box">
              <Input
                required
                type="number"
                placeholder="Phone"
                className="contact-request-form__box-input"
              />
              <Select required className="contact-request-form__box-input">
                <option selected>Select Your Service</option>
              </Select>
            </div>
            <Textarea className="contact-request-form__box-textarea"></Textarea>
            <Button type="submit" className="contact-request-form__box-submit">
              Submit Request
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
