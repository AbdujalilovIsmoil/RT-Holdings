import "./style.css";
import Image from "next/image";
import { Button } from "@/components";
import { IoCloseSharp } from "@/assets/react-icons";

type activeType = {
  isActive: boolean;
  openModal: () => void;
};

const Modal = ({ isActive, openModal }: activeType) => {
  return (
    <section className={`modal ${isActive ? "modal--active" : ""}`}>
      <div className='modal__container container'>
        <div className='modal__background'>
          <div className='modal__header'>
            <h2 className='modal__header-title'>Title 1</h2>
            <Button
              type='button'
              onClick={openModal}
              className='modal__button'
            >
              <IoCloseSharp className='modal__button-icon' />
            </Button>
          </div>

          <Image
            width={100}
            height={300}
            alt='background-image'
            className='modal__header-image'
            src='https://picsum.photos/460/370'
          />

          <div className='modal__content'>
            <p className='modal__content-text'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur tempore consequatur, earum libero voluptas natus
              numquam. Aperiam esse temporibus impedit possimus, ducimus nostrum
              assumenda doloremque sequi consectetur, beatae qui eum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
