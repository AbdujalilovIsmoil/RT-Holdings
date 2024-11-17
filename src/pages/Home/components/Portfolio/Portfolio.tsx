import "./index.css";
import { Button } from "../../../../components";
import { PortfolioImage6 } from "../../../../assets/images/jpg/portfolio";
import {
  PortfolioImage1,
  PortfolioImage2,
  PortfolioImage3,
  PortfolioImage4,
  PortfolioImage5,
} from "../../../../assets/images/jpg";

const Portfolio = () => {
  const getBackgroundImage = (image: string) => {
    return {
      backgroundSize: "cover",
      backgroundImage: `url(${image})`,
      backgroundPosition: "center center",
    };
  };

  return (
    <section className="portfolio">
      <div className="container">
        <div className="portfolio__content">
          <h2 className="portfolio__content-title">Portfolio</h2>
          <p className="portfolio__content-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.....
          </p>
        </div>

        <ul className="portfolio__filter-list">
          <li className="portfolio__filter-item">
            <Button className="portfolio__filter-item-btn" type="button">
              All
            </Button>
          </li>
          <li className="portfolio__filter-item">
            <Button className="portfolio__filter-item-btn" type="button">
              Lorem ipsum
            </Button>
          </li>
          <li className="portfolio__filter-item">
            <Button
              className="portfolio__filter-item-btn portfolio__filter-item-btn--active"
              type="button"
            >
              Lorem ipsum dolor
            </Button>
          </li>
          <li className="portfolio__filter-item">
            <Button className="portfolio__filter-item-btn" type="button">
              Lorem ipsum
            </Button>
          </li>
          <li className="portfolio__filter-item">
            <Button className="portfolio__filter-item-btn" type="button">
              Lorem
            </Button>
          </li>
        </ul>

        <ul className="portfolio__cards">
          <li
            className="portfolio__card"
            style={getBackgroundImage(PortfolioImage1)}
          >
            <div className="portfolio__card-content">
              <span className="portfolio__card-content-heading">
                <em>Product Name</em>
              </span>
              <h3 className="portfolio__card-content-name">
                Lorem ipsum dolor
              </h3>
            </div>
          </li>
          <li
            className="portfolio__card"
            style={getBackgroundImage(PortfolioImage2)}
          >
            <div className="portfolio__card-content">
              <span className="portfolio__card-content-heading">
                <em>Product Name</em>
              </span>
              <h3 className="portfolio__card-content-name">
                Lorem ipsum dolor
              </h3>
            </div>
          </li>
          <li
            className="portfolio__card"
            style={getBackgroundImage(PortfolioImage3)}
          >
            <div className="portfolio__card-content">
              <span className="portfolio__card-content-heading">
                <em>Product Name</em>
              </span>
              <h3 className="portfolio__card-content-name">
                Lorem ipsum dolor
              </h3>
            </div>
          </li>
          <li
            className="portfolio__card"
            style={getBackgroundImage(PortfolioImage4)}
          >
            <div className="portfolio__card-content">
              <span className="portfolio__card-content-heading">
                <em>Product Name</em>
              </span>
              <h3 className="portfolio__card-content-name">
                Lorem ipsum dolor
              </h3>
            </div>
          </li>
          <li
            className="portfolio__card"
            style={getBackgroundImage(PortfolioImage5)}
          >
            <div className="portfolio__card-content">
              <span className="portfolio__card-content-heading">
                <em>Product Name</em>
              </span>
              <h3 className="portfolio__card-content-name">
                Lorem ipsum dolor
              </h3>
            </div>
          </li>
          <li
            className="portfolio__card"
            style={getBackgroundImage(PortfolioImage6)}
          >
            <div className="portfolio__card-content">
              <span className="portfolio__card-content-heading">
                <em>Product Name</em>
              </span>
              <h3 className="portfolio__card-content-name">
                Lorem ipsum dolor
              </h3>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
