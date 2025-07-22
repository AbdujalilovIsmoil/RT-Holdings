import "./style.css";
import { properties } from "@/typescript";

const Texts = ({ text, title }: properties) => {
  return (
    <div className='all__content'>
      <h2 className='all__content-title'>{title}</h2>
      <p className='all__content-text'>{text}</p>
    </div>
  );
};

export default Texts;
