import "./index.css";
import { Link } from "react-router-dom";
import { Button, Texts } from "../../../components";
import {
  PortfolioImage1,
  PortfolioImage2,
  PortfolioImage3,
  PortfolioImage4,
  PortfolioImage5,
  PortfolioImage6,
} from "../../../assets/images/jpg";

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
        <Texts
          title="Portfolio"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s....."
        />

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
          <li className="portfolio__card-item">
            <Link to="/pages/projects/1">
              <div
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
              </div>
            </Link>
          </li>
          <li className="portfolio__card-item">
            <Link to="/pages/projects/1">
              <div
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
              </div>
            </Link>
          </li>
          <li className="portfolio__card-item">
            <Link to="/pages/projects/1">
              <div
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
              </div>
            </Link>
          </li>
          <li className="portfolio__card-item">
            <Link to="/pages/projects/1">
              <div
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
              </div>
            </Link>
          </li>
          <li className="portfolio__card-item">
            <Link to="/pages/projects/1">
              <div
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
              </div>
            </Link>
          </li>
          <li className="portfolio__card-item">
            <Link to="/pages/projects/1">
              <div
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
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
