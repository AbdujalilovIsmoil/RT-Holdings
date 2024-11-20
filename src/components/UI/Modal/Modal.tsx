import "./style.css";
import { Button } from "../Button";
import { IoCloseSharp } from "../../../assets/react-icons";
import { HeroBackgroundImage1 } from "../../../assets/images/jpg";

type activeType = {
  isActive: boolean;
  openModal: () => void;
};

const Modal = ({ isActive, openModal }: activeType) => {
  console.log(isActive);

  return (
    <section className={`modal ${isActive && "modal--active"}`}>
      <div className="modal__container container">
        <div className="modal__background">
          <div className="modal__header">
            <h2 className="modal__header-title">Lorem ipsum dolor.</h2>
            <Button onClick={openModal} className="modal__button" type="button">
              <IoCloseSharp className="modal__button-icon" />
            </Button>
          </div>

          <img
            height={300}
            width="100%"
            alt="background-image"
            src={HeroBackgroundImage1}
            className="modal__header-image"
          />

          <div className="modal__content">
            <p className="modal__content-text">
              Lorem ipsum dolor sit amet consectetur. Libero volutpat
              consectetur velit nisl egestas et mauris fermentum. Est porttitor
              nibh sapien sed mauris egestas amet amet. Viverra dui scelerisque
              elit non. Orci sit tortor diam aliquam. Diam blandit pulvinar
              habitant morbi accumsan tempus tellus adipiscing. Diam eu
              adipiscing velit id enim pellentesque enim fusce. Ipsum morbi
              tempus in pellentesque nulla. Erat consectetur urna semper sed mi
              et ullamcorper feugiat. Nec nec erat fermentum tortor fringilla
              arcu augue sed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
