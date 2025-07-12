import "./style.css";
import Image from "next/image";
import Link from "next/link";

const OurServices = () => {
  return (
    <section className='our-services'>
      <div className='container'>
        <div className='our-services__content'>
          <h2 className='our-services__content-title'>Bizning xizmatlar</h2>
          <p className='our-services__content-text'>
            Siz uchun eng zarur va zamonaviy xizmatlarni bir joyda jamladik. Har
            bir xizmat ehtiyojlaringizni inobatga olgan holda shakllantirilgan
          </p>
        </div>

        <ul className='our-services__list'>
          <li className='our-services__item'>
            <Image
              width={385}
              height={270}
              alt='RT MOTORS'
              className='our-services__item-img'
              src='/images/jpg/our-services-1.jpg'
            />

            <div className='our-services__item-box'>
              <h3 className='our-services__item-box-title'>RT MOTORS</h3>
              <p className='our-services__item-box-text'>
                RT Motors - Janubiy Koreyadan hashamatlik avtomobillarni zakaz
                orqali butun dunyoqga yetkazib beradi
              </p>
              <Link
                role='button'
                href='/services/dream-express'
                className='our-services__item-box-btn'
              >
                Ba’tafsil ma’lumot
              </Link>
            </div>
          </li>
          <li className='our-services__item'>
            <Image
              width={385}
              height={270}
              alt='RT MOTORS'
              className='our-services__item-img'
              src='/images/jpg/our-services-2.jpg'
            />

            <div className='our-services__item-box'>
              <h3 className='our-services__item-box-title'>RT MEDLINE</h3>
              <p className='our-services__item-box-text'>
                RT Motors - Janubiy Koreyadan hashamatlik avtomobillarni zakaz
                orqali butun dunyoqga yetkazib beradi
              </p>
              <Link
                role='button'
                href='/services/dream-express'
                className='our-services__item-box-btn'
              >
                Ba’tafsil ma’lumot
              </Link>
            </div>
          </li>
          <li className='our-services__item'>
            <Image
              width={385}
              height={270}
              alt='RT HS GROUP LOGISTICS'
              className='our-services__item-img'
              src='/images/jpg/our-services-1.jpg'
            />

            <div className='our-services__item-box'>
              <h3 className='our-services__item-box-title'>
                RT HS GROUP LOGISTICS
              </h3>
              <p className='our-services__item-box-text'>
                RT Motors - Janubiy Koreyadan hashamatlik avtomobillarni zakaz
                orqali butun dunyoqga yetkazib beradi
              </p>
              <Link
                role='button'
                href='/services/rt-hs-group-logistics'
                className='our-services__item-box-btn'
              >
                Ba’tafsil ma’lumot
              </Link>
            </div>
          </li>
          <li className='our-services__item'>
            <Image
              width={385}
              height={270}
              alt='DREAM EXPRESS'
              className='our-services__item-img'
              src='/images/jpg/our-services-4.jpg'
            />

            <div className='our-services__item-box'>
              <h3 className='our-services__item-box-title'>DREAM EXPRESS</h3>
              <p className='our-services__item-box-text'>
                Dream express ilk bor o’zbek vatandoshlarimizni yuklarini
                Koreyadagi manzilidan O’zbekistondagi manziligacha yetkazish
                xizmatini yo’lga qo’ygan.
              </p>
              <Link
                role='button'
                href='/services/dream-express'
                className='our-services__item-box-btn'
              >
                Ba’tafsil ma’lumot
              </Link>
            </div>
          </li>
          <li className='our-services__item'>
            <Image
              width={385}
              height={270}
              alt='KORTEX OIL'
              className='our-services__item-img'
              src='/images/jpg/our-services-5.jpg'
            />

            <div className='our-services__item-box'>
              <h3 className='our-services__item-box-title'>KORTEX OIL</h3>
              <p className='our-services__item-box-text'>
                2025- yildan buyon avtomobillar va maxsus texnikalar uchun turli
                xil yuqori sifatdagi motor moylari ishlab chiqarib kelmoqda.
              </p>
              <Link
                role='button'
                href='/services/kortex-oil'
                className='our-services__item-box-btn'
              >
                Ba’tafsil ma’lumot
              </Link>
            </div>
          </li>
          <li className='our-services__item'>
            <Image
              width={385}
              height={270}
              alt='AKA TAXI'
              className='our-services__item-img'
              src='/images/jpg/our-services-6.jpg'
            />

            <div className='our-services__item-box'>
              <h3 className='our-services__item-box-title'>AKA TAXI</h3>
              <p className='our-services__item-box-text'>
                Viloyatlararo qatnovlarni amalga oshiruvchi yo‘lovchi tashish
                xizmati uchun mo‘ljallangan qulay va zamonaviy platforma
              </p>

              <Link
                role='button'
                href='/services/aka-taxi'
                className='our-services__item-box-btn'
              >
                Ba’tafsil ma’lumot
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OurServices;
