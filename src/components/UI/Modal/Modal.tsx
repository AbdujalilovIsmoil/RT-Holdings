import Image from "next/image";
import classNames from "classnames";
import styles from "./index.module.css";
import Button from "@/components/UI/Button";
import { IoCloseSharp } from "../../../../public/react-icons";

interface salesTypes {
  id: number;
  image: string;
  title_uz: string;
  title_ru: string;
  title_en: string;
  title_ko: string;
  description_uz: string;
  description_ru: string;
  description_en: string;
  description_ko: string;
}

type activeType = {
  isActive: boolean;
  data?: salesTypes;
  openModal: () => void;
};

const Modal = ({ isActive, openModal, data }: activeType) => {
  return (
    <section
      className={classNames(styles["modal"], {
        [styles["modal--active"]]: isActive,
      })}
    >
      <div className={classNames(styles["modal__container"], "container")}>
        <div className={classNames(styles["modal__background"])}>
          <div className={classNames(styles["modal__header"])}>
            <h2 className={classNames(styles["modal__header-title"])}>
              {data && data?.title_uz}
            </h2>
            <Button
              onClick={openModal}
              className={classNames(styles["modal__button"])}
              type="button"
            >
              <IoCloseSharp
                className={classNames(styles["modal__button-icon"])}
              />
            </Button>
          </div>

          <Image
            width={100}
            height={300}
            alt="background-image"
            src={`https://api.rtholdings.uz${data?.image}`}
            className={classNames(styles["modal__header-image"])}
          />

          <div className={classNames(styles["modal__content"])}>
            <p className={classNames(styles["modal__content-text"])}>
              {data && data?.description_uz}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
