import classNames from "classnames";
import styles from "./index.module.css";
import About from "@/components2/About";

const Info = () => {
  return (
    <section className={classNames(styles["info"])}>
      <div className="container">
        <About />
      </div>
    </section>
  );
};

export default Info;
