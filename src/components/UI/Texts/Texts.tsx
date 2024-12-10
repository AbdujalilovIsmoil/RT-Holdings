import classNames from "classnames";
import styles from "./index.module.css";

interface textTypes {
  text: string;
  title: string;
}

const Texts = ({ text, title }: textTypes) => {
  return (
    <div className={classNames(styles["all__content"])}>
      <h2 className={classNames(styles["all__content-title"])}>{title}</h2>
      <p className={classNames(styles["all__content-text"])}>{text}</p>
    </div>
  );
};

export default Texts;
