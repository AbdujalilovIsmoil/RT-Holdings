import "./style.css";
import Image from "next/image";
import { Texts } from "@/components";
import { useSelector } from "react-redux";
import { initialValuesTypes } from "@/context/reducer";

const About = () => {
  const { appLang } = useSelector((state: initialValuesTypes) => state);

  type TextsType = {
    [key: string]: {
      title: string;
      text: string;
    };
  };

  const textData: TextsType = {
    uz: {
      title: "Biz haqimizda",
      text: "Kompaniyamiz faoliyati, qadriyatlari va maqsadlari bilan tanishing — biz qanday ishlaymiz, kimlar bilan hamkorlik qilamiz va mijozlarimizga qanday yechimlar taklif etamiz.",
    },
    ru: {
      title: "О нас",
      text: "Познакомьтесь с деятельностью, ценностями и целями нашей компании — как мы работаем, с кем сотрудничаем и какие решения предлагаем нашим клиентам.",
    },
    en: {
      title: "About Us",
      text: "Get to know our company's activities, values, and goals — how we work, who we collaborate with, and what solutions we offer to our clients.",
    },
    ko: {
      title: "회사 소개",
      text: "회사의 활동, 가치 및 목표를 알아보세요 — 우리가 어떻게 일하는지, 누구와 협력하는지, 고객에게 어떤 솔루션을 제공하는지.",
    },
  };

  type AboutDataType = {
    [key: string]: {
      smallText: string;
      title: string;
      listItems: string[];
    };
  };

  const aboutData: AboutDataType = {
    uz: {
      smallText: "Kompaniya haqida",
      title: "Nega aynan RT Holdings?",
      listItems: [
        "RT Holdings — 2013-yilda tashkil topgan va ko‘p tarmoqli faoliyat olib boruvchi xalqaro kompaniya. Biz O‘zbekistonda qurilish, sanoat va logistika sohalarida yuqori sifatli texnikalarni taqdim etuvchi yetakchi kompaniyalardan biri hisoblanadi.",
        "Biz Koreya va Yevropaning yetakchi brendlaridan maxsus texnikalarni import qilamiz va mijozlarimizga zamonaviy, ishonchli va samarali yechimlar taqdim etamiz. Kompaniyamizning asosiy yo‘nalishi – Janubiy Koreya, Xitoy va boshqa global bozorlardan yuqori sifatli texnikalar va mahsulotlarni import qilib, ulardan MDH davlatlari, Vetnam va mintaqaviy bozorlar uchun eksport qilishdir.",
      ],
    },
    ru: {
      smallText: "О компании",
      title: "Почему именно RT Holdings?",
      listItems: [
        "RT Holdings — международная компания, основанная в 2013 году и занимающаяся многопрофильной деятельностью. Мы являемся одной из ведущих компаний в Узбекистане, предоставляющих высококачественную технику в сферах строительства, промышленности и логистики.",
        "Мы импортируем специализированную технику от ведущих брендов Кореи и Европы, предлагая нашим клиентам современные, надежные и эффективные решения. Основное направление нашей компании — импорт высококачественной техники и продукции из Южной Кореи, Китая и других глобальных рынков с последующим экспортом в страны СНГ, Вьетнам и региональные рынки.",
      ],
    },
    en: {
      smallText: "About the Company",
      title: "Why Choose RT Holdings?",
      listItems: [
        "RT Holdings is an international company established in 2013, engaged in multifaceted activities. We are one of the leading companies in Uzbekistan providing high-quality equipment in the fields of construction, industry, and logistics.",
        "We import specialized equipment from leading brands in Korea and Europe, offering our clients modern, reliable, and efficient solutions. Our company's main focus is on importing high-quality equipment and products from South Korea, China, and other global markets for export to CIS countries, Vietnam, and regional markets.",
      ],
    },
    ko: {
      smallText: "회사 소개",
      title: "왜 RT Holdings를 선택해야 하나요?",
      listItems: [
        "RT Holdings는 2013년에 설립된 다각적 활동을 하는 국제 회사입니다. 우리는 우즈베키스탄에서 건설, 산업 및 물류 분야에 고품질 장비를 제공하는 선도적인 회사 중 하나입니다.",
        "우리는 한국과 유럽의 선도 브랜드로부터 전문 장비를 수입하여 고객에게 현대적이고 신뢰할 수 있으며 효율적인 솔루션을 제공합니다. 우리 회사의 주요 초점은 한국, 중국 및 기타 글로벌 시장에서 고품질 장비와 제품을 수입하여 CIS 국가, 베트남 및 지역 시장으로 수출하는 것입니다.",
      ],
    },
  };

  return (
    <section className='about'>
      <div className='container'>
        <div className='container'>
          <Texts
            title={textData[`${appLang}`].title}
            text={textData[`${appLang}`].text}
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
            <span className='about__box-small-text'>
              {aboutData[`${appLang}`].smallText}
            </span>
            <h3 className='about__box-title'>
              {aboutData[`${appLang}`].title}
            </h3>

            <ul className='about__list'>
              {aboutData[`${appLang}`].listItems.map((item, index) => (
                <li
                  key={index}
                  className='about__item'
                >
                  <p className='about__item-text'>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
