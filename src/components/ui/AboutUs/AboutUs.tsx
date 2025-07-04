import "./style.css";
import Link from "next/link";
import Image from "next/image";
import { Texts } from "@/components";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <Texts
          title='Biz haqimizda'
          text='Kompaniyamiz faoliyati, qadriyatlari va maqsadlari bilan tanishing — biz qanday 
          ishlaymiz, kimlar bilan hamkorlik qilamiz va mijozlarimizga qanday yechimlar taklif 
          etamiz.'
        />
      </div>

      <div className='about__background'>
        <div className='about__container container'>
          <div className='about__images-container'>
            <Image
              width={460}
              height={370}
              alt='image name'
              src='/images/jpg/Aka-taxi.jpg'
              className='about__images-container-image'
            />
            <Image
              width={320}
              height={255}
              alt='image name'
              src='/images/jpg/dream-express.jpg'
              className='about__images-container-image'
            />
            <Image
              width={260}
              height={210}
              alt='image name'
              src='/images/jpg/rt-medline.jpg'
              className='about__images-container-image'
            />
          </div>

          <div className='about__box'>
            <div className='about__questions'>
              <div className='about__question'>
                <h3 className='about__question-title'>
                  RT Holdings haqida batafsil
                </h3>
                <p className='about__question-text'>
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
              </div>
              <div className='about__question'>
                <h3 className='about__question-title'>
                  Bizning ustuvorliklarimiz
                </h3>

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
                      Innovatsiya • Global yondashuv • Professional xizmat
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
                      Yuqori sifat • Keng imkoniyatlar • Mijozlarga sodiqlik
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
                      Tajriba • Texnologiya • Natijadorlik
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
                      Ishonchlilik • Mas’uliyat • Barqaror rivojlanish
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <Link
              href='/about'
              className='about__box-btn'
            >
              Batafsil ma'lumot
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
