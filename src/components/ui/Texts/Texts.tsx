import "./style.css";
import { StringMap } from "@/typescript";

const Texts = ({ text, title }: StringMap) => {
  return (
    <div className="all__content">
      <h2 className="all__content-title">{title}</h2>
      <p className="all__content-text">{text}</p>
    </div>
  );
};

export default Texts;
