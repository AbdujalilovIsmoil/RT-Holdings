import "./style.css";
import Link from "next/link";
import Image from "next/image";

const News = () => {
  return (
    <section className='news'>
      <div className='container'>
        <div className='news__content'>
          <h2 className='news__content-title'>Yangiliklar</h2>
          <p className='news__content-text'>
            So‘nggi yangiliklar va muhim e’lonlar bilan doimo xabardor bo‘ling —
            biz bilan birga yangiliklardan orqada qolmang.
          </p>
        </div>

        <ul className='news__list'>
          <li className='news__item'>
            <Image
              width={300}
              height={190}
              alt='KORTEX OIL'
              className='news__item-image'
              src='/images/png/news-image.png'
            />
            <h3 className='news__item-title'>KORTEX OIL</h3>
            <p className='news__item-text'>
              RT Holdingsni tarmoqlaridan biri bo’lgan Kortex Oil
              kompaniyasining dastlabki motor moyi yuklangan...
            </p>
            <Link
              role='button'
              href='/news/1'
              className='news__item-link'
            >
              Ba’tafsil ma’lumot
            </Link>
          </li>
          <li className='news__item'>
            <Image
              width={300}
              height={190}
              alt='KORTEX OIL'
              className='news__item-image'
              src='/images/png/news-image.png'
            />
            <h3 className='news__item-title'>KORTEX OIL</h3>
            <p className='news__item-text'>
              RT Holdingsni tarmoqlaridan biri bo’lgan Kortex Oil
              kompaniyasining dastlabki motor moyi yuklangan...
            </p>
            <Link
              role='button'
              href='/news/1'
              className='news__item-link'
            >
              Ba’tafsil ma’lumot
            </Link>
          </li>
          <li className='news__item'>
            <Image
              width={300}
              height={190}
              alt='KORTEX OIL'
              className='news__item-image'
              src='/images/png/news-image.png'
            />
            <h3 className='news__item-title'>KORTEX OIL</h3>
            <p className='news__item-text'>
              RT Holdingsni tarmoqlaridan biri bo’lgan Kortex Oil
              kompaniyasining dastlabki motor moyi yuklangan...
            </p>
            <Link
              role='button'
              href='/news/1'
              className='news__item-link'
            >
              Ba’tafsil ma’lumot
            </Link>
          </li>
          <li className='news__item'>
            <Image
              width={300}
              height={190}
              alt='KORTEX OIL'
              className='news__item-image'
              src='/images/png/news-image.png'
            />
            <h3 className='news__item-title'>KORTEX OIL</h3>
            <p className='news__item-text'>
              RT Holdingsni tarmoqlaridan biri bo’lgan Kortex Oil
              kompaniyasining dastlabki motor moyi yuklangan...
            </p>
            <Link
              role='button'
              href='/news/1'
              className='news__item-link'
            >
              Ba’tafsil ma’lumot
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default News;
