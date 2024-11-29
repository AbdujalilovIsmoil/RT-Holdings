import "./index.css";
import { useEffect } from "react";
import { NotFound } from "../../assets/images/png";

const Error = () => {
  useEffect(() => {
    scrollTo({
      top: 0,
    });
  }, []);

  return (
    <section className="not-found">
      <div className="container">
        <div className="not-found__content">
          <img
            width={500}
            height={500}
            src={NotFound}
            alt="not-found"
            className="not-found__content-image"
          />
          <h1 className="not-found__content-title">404, Page not founds</h1>

          <p className="not-found__content-text">
            Something went wrong. It’s look that your requested could not be
            found. It’s look like the link is broken or the page is removed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Error;
