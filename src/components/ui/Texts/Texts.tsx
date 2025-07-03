import "./style.css";

interface textTypes {
  text: string;
  title: string;
}

const Texts = ({ text, title }: textTypes) => {
  return (
    <div className='all__content'>
      <h2 className='all__content-title'>{title}</h2>
      <p className='all__content-text'>{text}</p>
    </div>
  );
};

export default Texts;
