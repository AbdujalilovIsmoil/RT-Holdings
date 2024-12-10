import Image from "next/image";
import { useEffect } from "react";
import classNames from "classnames";
import style from "./index.module.css";

const Error = () => {
  useEffect(() => {
    scrollTo({
      top: 0,
    });
  }, []);

  return (
    <section className={classNames(style["not-found"])}>
      <div className="container">
        <div className={classNames(style["not-found__content"])}>
          <Image
            width={500}
            height={500}
            alt="not-found"
            src="/images/png/not-found.png"
            className={classNames(style["not-found__content-image"])}
          />
          <h1 className={classNames(style["not-found__content-title"])}>
            404, Page not founds
          </h1>

          <p className={classNames(style["not-found__content-text"])}>
            Something went wrong. It’s look that your requested could not be
            found. It’s look like the link is broken or the page is removed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Error;
