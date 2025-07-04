import "./style.css";

const Hero = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const portfolioContent = [
    {
      id: 1,
      path: "aka-taxi",
      title: "aka taxi",
      image: "/images/jpg/Aka-taxi.jpg",
      description: `
        "AKA TAXI" bu nima ? Aka Bu viloyatlararo qatnaydigan do'stlarimiz; Dam olish kunlari uyiga qatnaydigan talabalar;
        O'zbekiston bo'ylab sayohat qilishni yoqtiradigan yurtdoshlarimiz uchun qulay taksi xizmati. "AKA DRIVER" - bu kim ?
        Bu haydovchilar, shaxsiy mashinasi bilan viloyatga qatnaydigan akalarimiz uchun eng foydali ilova. Ilova orqali ro'yxatdan
        o'tganingizdan keyin yo'lovchilarni oson topib, tez yo'lga chiqasiz. Hech nimani kutish shart emas.
      `,
    },
    {
      id: 2,
      path: "dream-express",
      title: "Dream Express",
      image: "/images/jpg/dream-express.jpg",
      description: `
        Dream express - Janubiy Koreyadan O’zbekistanga konteyner kargo xizmati. Dream express ilk bor o’zbek
        vatandoshlarimizni yuklarini Koreyadagi manzilidan O’zbekistondagi manziligacha yetkazish xizmatini yo’lga
        qo’ygan. Dream express- eshikdan-eshikkacha  
      `,
    },
    {
      id: 3,
      path: "rt-medline",
      title: "RT Medline",
      image: "/images/jpg/rt-medline.jpg",
      description: `
        RT Medline - ko'p tarmoqli oilaviy shifoxonasi. bu shifoxonada 20 dan ortiq malakali shifokorlar
        10 ga yaqin sohalarda o’z faoliyatini olib kelmoqda.
      `,
    },
  ];

  const filterPortfolio = portfolioContent.find(el => el.path === id);

  const heroStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `linear-gradient(90deg, rgba(30, 36, 44, 0.8) 0%, rgba(30, 36, 44, 0.6) 43.96%, rgba(30, 36, 44, 0.6) 66.39%), url(${filterPortfolio?.image})`,
  };

  return (
    <section className='project-view'>
      <div
        style={heroStyle}
        className='site-hero'
      >
        <h1 className='visually-hidden'>{filterPortfolio?.title}</h1>
        <div className='container'>
          <div className='content'>
            <h2 className='content-title'>{filterPortfolio?.title}</h2>
          </div>
        </div>
      </div>

      <section className='post'>
        <div className='container'>
          <div className='post__content'>
            <h2 className='post__content-title'>{filterPortfolio?.title}</h2>
            <p className='post__content-text'>{filterPortfolio?.description}</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
