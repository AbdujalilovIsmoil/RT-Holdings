import "./style.css";
import Link from "next/link";
import Image from "next/image";
import { Texts } from "@/components";

const About = () => {
  const backgroundStyle = {
    backgroundImage: "",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  return (
    <section className='about'>
      <div className='container'>
        <Texts
          title='Biz haqimizda'
          text="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s....."
        />
      </div>

      <div
        style={backgroundStyle}
        className='about__background'
      >
        <div className='about__container container'>
          <div className='about__images-container'>
            <Image
              src='https://picsum.photos/460/370'
              width={460}
              height={370}
              alt='image name'
              className='about__images-container-image'
            />
            <Image
              src='https://picsum.photos/460/370'
              width={320}
              height={255}
              alt='image name'
              className='about__images-container-image'
            />
            <Image
              src='https://picsum.photos/460/370'
              width={260}
              height={210}
              alt='image name'
              className='about__images-container-image'
            />
          </div>

          <div className='about__box'>
            <div className='about__questions'>
              <div className='about__question'>
                <h3 className='about__question-title'>
                  {/* {typeData ? typeData?.title_uz : ""} */}
                  RT Holdings haqida batafsil
                </h3>
                <p className='about__question-text'>
                  {/* {typeData ? typeData?.text_uz : ""} */}
                  RT Holdings — 2013-yilda tashkil topgan va ko‘p tarmoqli
                  faoliyat olib boruvchi xalqaro kompaniya. Biz O‘zbekistonda
                  qurilish, sanoat va logistika sohalarida yuqori sifatli
                  texnikalarni taqdim etuvchi yetakchi kompaniyalardan biri
                  hisoblanadi. Biz Koreya va Yevropaning yetakchi brendlaridan
                  maxsus texnikalarni import qilamiz va mijozlarimizga
                  zamonaviy, ishonchli va samarali yechimlar taqdim etamiz.
                  Kompaniyamizning asosiy yo‘nalishi – Janubiy Koreya, Xitoy va
                  boshqa global bozorlardan yuqori sifatli texnikalar va
                  mahsulotlarni import qilib, ulardan MDH davlatlari, Vetnam va
                  mintaqaviy bozorlar uchun eksport qilishdir.
                </p>

                {/* <ul className={classNames(styles["about__answers-list"])}>
                  <li className={classNames(styles["about__anwers-item"])}>
                    <Image
                      alt="icon"
                      width={18}
                      height={12}
                      src={"/images/svg/about-icon.svg"}
                      className={classNames(styles["about__answers-item-icon"])}
                    />
                    <p
                      className={classNames(styles["about__answers-item-text"])}
                    >
                      Lorem ipsum dolor
                    </p>
                  </li>
                  <li className={classNames(styles["about__anwers-item"])}>
                    <Image
                      alt="icon"
                      width={18}
                      height={12}
                      src={"/images/svg/about-icon.svg"}
                      className={classNames(styles["about__answers-item-icon"])}
                    />
                    <p
                      className={classNames(styles["about__answers-item-text"])}
                    >
                      Lorem ipsum
                    </p>
                  </li>
                  <li className={classNames(styles["about__anwers-item"])}>
                    <Image
                      alt="icon"
                      width={18}
                      height={12}
                      src={"/images/svg/about-icon.svg"}
                      className={classNames(styles["about__answers-item-icon"])}
                    />
                    <p
                      className={classNames(styles["about__answers-item-text"])}
                    >
                      Lorem ipsum dolor sit amet
                    </p>
                  </li>
                  <li className={classNames(styles["about__anwers-item"])}>
                    <Image
                      alt="icon"
                      width={18}
                      height={12}
                      src={"/images/svg/about-icon.svg"}
                      className={classNames(styles["about__answers-item-icon"])}
                    />
                    <p
                      className={classNames(styles["about__answers-item-text"])}
                    >
                      Lorem ipsum dolor sit
                    </p>
                  </li>
                </ul> */}
              </div>
              <div className='about__question'>
                <h3 className='about__question-title'>Lorem Ipsum Dolor</h3>

                <ul className='about__answers-list'>
                  <li className='about__anwers-item'>
                    <Image
                      alt='icon'
                      width={18}
                      height={12}
                      src={"/images/svg/about-icon.svg"}
                      className='about__answers-item-icon'
                    />
                    <p className='about__answers-item-text'>
                      Lorem ipsum dolor
                    </p>
                  </li>
                  <li className='about__anwers-item'>
                    <Image
                      alt='icon'
                      width={18}
                      height={12}
                      src={"/images/svg/about-icon.svg"}
                      className='about__answers-item-icon'
                    />
                    <p className='about__answers-item-text'>Lorem ipsum</p>
                  </li>
                  <li className='about__anwers-item'>
                    <Image
                      alt='icon'
                      width={18}
                      height={12}
                      src={"/images/svg/about-icon.svg"}
                      className='about__answers-item-icon'
                    />
                    <p className='about__answers-item-text'>
                      Lorem ipsum dolor sit amet
                    </p>
                  </li>
                  <li className='about__anwers-item'>
                    <Image
                      alt='icon'
                      width={18}
                      height={12}
                      src={"/images/svg/about-icon.svg"}
                      className='about__answers-item-icon'
                    />
                    <p className='about__answers-item-text'>
                      Lorem ipsum dolor sit
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <Link
              href='/about'
              className='about__box-btn'
            >
              Batafsil
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
