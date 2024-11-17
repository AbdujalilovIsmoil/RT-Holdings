import "./index.css";
import { Link } from "react-router-dom";
import { IoSearch } from "../../../../assets/react-icons";
import { Button, Input, Pagination } from "../../../../components";
import {
  ServicesImage1,
  ServicesImage2,
  ServicesImage3,
} from "../../../../assets/images/png";

const Services = () => {
  return (
    <section className="service">
      <div className="container">
        <div className="services__content">
          <h2 className="services__content-title">Our Services</h2>
          <p className="services__content-text">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>

        <form className="service__search">
          <IoSearch className="search__search-icon" />
          <Input
            required
            type="search"
            placeholder="Lorem ipsum"
            className="service__search-input"
          />
          <Button type="submit" className="service__search-submit">
            Search
          </Button>
        </form>

        <ul className="services__cards">
          <li className="services__card">
            <img
              width={400}
              height={265}
              src={ServicesImage1}
              alt="services image 1"
              className="services__card-image"
            />
            <h3 className="services__card-title">Lorem ipsum dolor sit</h3>
            <p className="services__card-text">
              Lorem ipsum dolor sit amet consectetur. Id purus imperdiet rhoncus
              sociis pulvinar eu. Sem sit volutpat nisl lorem lacinia faucibus
              sed vitae.
            </p>
            <Link className="services__card-link" to="/">
              Lorem ipsum dolor.
            </Link>
          </li>
          <li className="services__card">
            <img
              width={400}
              height={265}
              src={ServicesImage2}
              alt="services image 2"
              className="services__card-image"
            />
            <h3 className="services__card-title">Lorem ipsum dolor sit</h3>
            <p className="services__card-text">
              Lorem ipsum dolor sit amet consectetur. Id purus imperdiet rhoncus
              sociis pulvinar eu. Sem sit volutpat nisl lorem lacinia faucibus
              sed vitae.
            </p>
            <Link className="services__card-link" to="/">
              Lorem ipsum dolor.
            </Link>
          </li>
          <li className="services__card">
            <img
              width={400}
              height={265}
              src={ServicesImage3}
              alt="services image 3"
              className="services__card-image"
            />
            <h3 className="services__card-title">Lorem ipsum dolor sit</h3>
            <p className="services__card-text">
              Lorem ipsum dolor sit amet consectetur. Id purus imperdiet rhoncus
              sociis pulvinar eu. Sem sit volutpat nisl lorem lacinia faucibus
              sed vitae.
            </p>
            <Link className="services__card-link" to="/">
              Lorem ipsum dolor.
            </Link>
          </li>
          <li className="services__card">
            <img
              width={400}
              height={265}
              src={ServicesImage1}
              alt="services image 1"
              className="services__card-image"
            />
            <h3 className="services__card-title">Lorem ipsum dolor sit</h3>
            <p className="services__card-text">
              Lorem ipsum dolor sit amet consectetur. Id purus imperdiet rhoncus
              sociis pulvinar eu. Sem sit volutpat nisl lorem lacinia faucibus
              sed vitae.
            </p>
            <Link className="services__card-link" to="/">
              Lorem ipsum dolor.
            </Link>
          </li>
          <li className="services__card">
            <img
              width={400}
              height={265}
              src={ServicesImage2}
              alt="services image 2"
              className="services__card-image"
            />
            <h3 className="services__card-title">Lorem ipsum dolor sit</h3>
            <p className="services__card-text">
              Lorem ipsum dolor sit amet consectetur. Id purus imperdiet rhoncus
              sociis pulvinar eu. Sem sit volutpat nisl lorem lacinia faucibus
              sed vitae.
            </p>
            <Link className="services__card-link" to="/">
              Lorem ipsum dolor.
            </Link>
          </li>
          <li className="services__card">
            <img
              width={400}
              height={265}
              src={ServicesImage3}
              alt="services image 3"
              className="services__card-image"
            />
            <h3 className="services__card-title">Lorem ipsum dolor sit</h3>
            <p className="services__card-text">
              Lorem ipsum dolor sit amet consectetur. Id purus imperdiet rhoncus
              sociis pulvinar eu. Sem sit volutpat nisl lorem lacinia faucibus
              sed vitae.
            </p>
            <Link className="services__card-link" to="/">
              Lorem ipsum dolor.
            </Link>
          </li>
          <li className="services__card">
            <img
              width={400}
              height={265}
              src={ServicesImage1}
              alt="services image 1"
              className="services__card-image"
            />
            <h3 className="services__card-title">Lorem ipsum dolor sit</h3>
            <p className="services__card-text">
              Lorem ipsum dolor sit amet consectetur. Id purus imperdiet rhoncus
              sociis pulvinar eu. Sem sit volutpat nisl lorem lacinia faucibus
              sed vitae.
            </p>
            <Link className="services__card-link" to="/">
              Lorem ipsum dolor.
            </Link>
          </li>
          <li className="services__card">
            <img
              width={400}
              height={265}
              src={ServicesImage2}
              alt="services image 2"
              className="services__card-image"
            />
            <h3 className="services__card-title">Lorem ipsum dolor sit</h3>
            <p className="services__card-text">
              Lorem ipsum dolor sit amet consectetur. Id purus imperdiet rhoncus
              sociis pulvinar eu. Sem sit volutpat nisl lorem lacinia faucibus
              sed vitae.
            </p>
            <Link className="services__card-link" to="/">
              Lorem ipsum dolor.
            </Link>
          </li>
          <li className="services__card">
            <img
              width={400}
              height={265}
              src={ServicesImage3}
              alt="services image 3"
              className="services__card-image"
            />
            <h3 className="services__card-title">Lorem ipsum dolor sit</h3>
            <p className="services__card-text">
              Lorem ipsum dolor sit amet consectetur. Id purus imperdiet rhoncus
              sociis pulvinar eu. Sem sit volutpat nisl lorem lacinia faucibus
              sed vitae.
            </p>
            <Link className="services__card-link" to="/">
              Lorem ipsum dolor.
            </Link>
          </li>
          <li className="services__card">
            <img
              width={400}
              height={265}
              src={ServicesImage1}
              alt="services image 1"
              className="services__card-image"
            />
            <h3 className="services__card-title">Lorem ipsum dolor sit</h3>
            <p className="services__card-text">
              Lorem ipsum dolor sit amet consectetur. Id purus imperdiet rhoncus
              sociis pulvinar eu. Sem sit volutpat nisl lorem lacinia faucibus
              sed vitae.
            </p>
            <Link className="services__card-link" to="/">
              Lorem ipsum dolor.
            </Link>
          </li>
          <li className="services__card">
            <img
              width={400}
              height={265}
              src={ServicesImage2}
              alt="services image 2"
              className="services__card-image"
            />
            <h3 className="services__card-title">Lorem ipsum dolor sit</h3>
            <p className="services__card-text">
              Lorem ipsum dolor sit amet consectetur. Id purus imperdiet rhoncus
              sociis pulvinar eu. Sem sit volutpat nisl lorem lacinia faucibus
              sed vitae.
            </p>
            <Link className="services__card-link" to="/">
              Lorem ipsum dolor.
            </Link>
          </li>
          <li className="services__card">
            <img
              width={400}
              height={265}
              src={ServicesImage3}
              alt="services image 3"
              className="services__card-image"
            />
            <h3 className="services__card-title">Lorem ipsum dolor sit</h3>
            <p className="services__card-text">
              Lorem ipsum dolor sit amet consectetur. Id purus imperdiet rhoncus
              sociis pulvinar eu. Sem sit volutpat nisl lorem lacinia faucibus
              sed vitae.
            </p>
            <Link className="services__card-link" to="/">
              Lorem ipsum dolor.
            </Link>
          </li>
        </ul>

        <Pagination itemsPerPage={1} />
      </div>
    </section>
  );
};

export default Services;
