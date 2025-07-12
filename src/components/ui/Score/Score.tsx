import "./style.css";

const Score = () => {
  return (
    <section className='score'>
      <div className='container'>
        <h2 className='score-title'>Bizning faoliyatlarmiz raqamlarda</h2>
        <ul className='score__list'>
          <li className='score__item'>
            <h3 className='score__item-title'>4000+</h3>
            <p className='score__item-text'>Umumiy loyihalar soni</p>
          </li>
          <li className='score__item'>
            <h3 className='score__item-title'>4000+</h3>
            <p className='score__item-text'>Umumiy mijozlar soni</p>
          </li>
          <li className='score__item'>
            <h3 className='score__item-title'>4000+</h3>
            <p className='score__item-text'>Mutaxassislarmiz tajribasi</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Score;
