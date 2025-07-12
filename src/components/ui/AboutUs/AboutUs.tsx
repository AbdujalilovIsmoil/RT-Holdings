import "./style.css";
import Image from "next/image";
import { Texts } from "@/components";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='container'>
          <Texts
            title='Biz haqimizda'
            text='Kompaniyamiz faoliyati, qadriyatlari va maqsadlari bilan tanishing — biz qanday 
          ishlaymiz, kimlar bilan hamkorlik qilamiz va mijozlarimizga qanday yechimlar taklif 
          etamiz.'
          />
        </div>

        <div className='about__container'>
          <div className='about__box'>
            <Image
              width={590}
              height={400}
              className='about__box-image'
              src='/images/png/about-image.png'
              alt='RT Holdings kompaniya haqida'
            />
          </div>

          <div className='about__box'>
            <span className='about__box-small-text'>Kompaniya haqida</span>
            <h3 className='about__box-title'>Nega aynan RT Holdings?</h3>

            <ul className='about__list'>
              <li className='about__item'>
                <p className='about__item-text'>
                  RT Holdings — 2013-yilda tashkil topgan va ko‘p tarmoqli
                  faoliyat olib boruvchi xalqaro kompaniya. Biz O‘zbekistonda
                  qurilish, sanoat va logistika sohalarida yuqori sifatli
                  texnikalarni taqdim etuvchi yetakchi kompaniyalardan biri
                  hisoblanadi.
                </p>
              </li>
              <li className='about__item'>
                <p className='about__item-text'>
                  Biz Koreya va Yevropaning yetakchi brendlaridan maxsus
                  texnikalarni import qilamiz va mijozlarimizga zamonaviy,
                  ishonchli va samarali yechimlar taqdim etamiz.
                  Kompaniyamizning asosiy yo‘nalishi – Janubiy Koreya, Xitoy va
                  boshqa global bozorlardan yuqori sifatli texnikalar va
                  mahsulotlarni import qilib, ulardan MDH davlatlari, Vetnam va
                  mintaqaviy bozorlar uchun eksport qilishdir.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
