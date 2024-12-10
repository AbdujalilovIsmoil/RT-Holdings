import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import styles from "./index.module.css";

const LatestNews = () => {
  return (
    <section className={classNames(styles["latest-news"])}>
      <div
        className={classNames(styles["latest-news__container"], "container")}
      >
        <div className={classNames(styles["latest-news__content"])}>
          <span className={classNames(styles["latest-news__content-span"])}>
            latest news
          </span>
          <h2 className={classNames(styles["latest-news__content-title"])}>
            Lorem ipsum dolor sit amet consectetur.
          </h2>
          <p className={classNames(styles["latest-news__content-text"])}>
            Lorem ipsum dolor sit amet consectetur. Vulputate viverra arcu
            vivamus quam in. Cras a vitae tincidunt at. Id nam viverra pretium
            in tristique. Lectus aliquet fermentum eget tincidunt risus
            tincidunt risus mauris. Egestas amet viverra tortor arcu ut. Et
            justo est ac eget vulputate ullamcorper turpis. Enim hendrerit
            tristique velit amet senectus a quam in morbi. Eu in in arcu felis
            cras. Eget nisi sed congue amet. Sed convallis eleifend mauris
            volutpat fames aliquet consequat risus. Mauris malesuada posuere
            aliquam commodo mi pulvinar velit egestas commodo. Sagittis egestas
            senectus vel eu fermentum amet tellus turpis tellus. Porta arcu
            feugiat augue dolor faucibus purus.
          </p>
          <Link
            href="/pages/news"
            className={classNames(styles["latest-news__content-link"])}
          >
            Lorem ipsum dolor.
          </Link>
        </div>

        <div className={classNames(styles["latest-news__box"])}>
          <Image
            width={500}
            height={530}
            alt="latest news image"
            src="/images/png/latest-news.png"
            className={classNames(styles["latest-news__box-image"])}
          />
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
