"use client";

import "./style.css";

const Hero = ({ page }: { page: string }) => {
  interface pageDataTypes {
    id: number;
    path: string;
    text: string;
    title: string;
  }

  console.log(page);

  const pageData: pageDataTypes[] = [
    {
      id: 1,
      path: "/about",
      title: "Biz haqimizda",
      text: "RT Holdings — qurilish, sanoat va logistika sohalarida faoliyat yurituvchi, ishonchli va yetakchi xalqaro kompaniya.",
    },
    {
      id: 2,
      title: "Ishlar",
      path: "/portfolio",
      text: "Amalga oshirilgan loyihalarimiz sifatli xizmat, tajriba va professionallikni yaqqol aks ettiradi.",
    },
    {
      id: 3,
      path: "/news",
      title: "Yangiliklar",
      text: "RT Holdings yangiliklari, hamkorliklar va sanoatdagi so‘nggi o‘zgarishlardan xabardor bo‘ling.",
    },

    {
      id: 4,
      path: "/sale",
      title: "Sotuv",
      text: "Turli yo‘nalishdagi yuqori sifatli texnikalar va mahsulotlarimiz bilan tanishing.",
    },
    {
      id: 5,
      path: "/services",
      title: "Bizning xizmatlar",
      text: "Texnik maslahat, yetkazib berish va servis kabi ishonchli va tezkor xizmatlar taqdim etamiz.",
    },
    {
      id: 6,
      path: "/contact",
      title: "Biz bilan bog'lanish",
      text: "Savol va buyurtmalar bo‘yicha biz bilan bog‘laning — mutaxassislarimiz yordam berishga tayyor.",
    },
  ];

  const getImage = (page: string) => {
    if (page === "/about") {
      return "hero-background-image-1.jpg";
    } else if (page === "/contact") {
      return "hero-background-image-4.jpg";
    } else if (page === "/portfolio") {
      return "hero-background-image-3.jpg";
    } else if (page === "/news") {
      return "hero-background-image-2.jpg";
    } else if (page === "/sale") {
      return "hero-background-image-1.jpg";
    } else if (page === "/services") {
      return "hero-background-image-1.jpg";
    }
  };

  const heroStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `linear-gradient(90deg, rgba(30, 36, 44, 0.8) 0%, rgba(30, 36, 44, 0.6) 43.96%, rgba(30, 36, 44, 0.6) 66.39%), url(/images/jpg/${getImage(
      page,
    )})`,
  };

  if (page !== "/") {
    return (
      <section
        style={heroStyle}
        className='site-hero'
      >
        <h1 className='visually-hidden'>RT Holdings</h1>
        <div className='container'>
          {pageData.length > 0 &&
            [pageData.find((el: pageDataTypes) => el.path === page)].map(el => {
              return (
                <div
                  key={el?.id}
                  className='content'
                >
                  <h2 className='content-title'>{el && el.title}</h2>
                  <p className='content-text'>{el && el.text}</p>
                </div>
              );
            })}
        </div>
      </section>
    );
  }
};

export default Hero;
