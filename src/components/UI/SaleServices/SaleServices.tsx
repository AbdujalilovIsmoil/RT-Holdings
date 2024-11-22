import "./index.css";
import { IoSearch } from "../../../assets/react-icons";
import { Button, Input, Modal, Pagination } from "../../../components";
import {
  ServicesImage1,
  ServicesImage2,
  ServicesImage3,
} from "../../../assets/images/png";

interface textsTypes {
  text: string;
  title: string;
}

interface serviceType {
  isOpen: boolean;
  isActive: boolean;
  data: textsTypes[];
  openModal: () => void;
}

const Services = ({ openModal, isActive, isOpen, data }: serviceType) => {
  return (
    <section className="service">
      <Modal isActive={isActive} openModal={openModal} />

      <div className="container">
        {data.length > 0 &&
          data.map((el: textsTypes) => {
            return (
              <div className="services__content">
                <h2 className="services__content-title">{el.title}</h2>
                <p className="services__content-text">{el.text}</p>
              </div>
            );
          })}

        {isOpen && (
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
        )}

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
            <Button
              type="button"
              onClick={openModal}
              className="services__card-btn"
            >
              Lorem ipsum dolor.
            </Button>
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
            <Button
              type="button"
              onClick={openModal}
              className="services__card-btn"
            >
              Lorem ipsum dolor.
            </Button>
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
            <Button
              type="button"
              onClick={openModal}
              className="services__card-btn"
            >
              Lorem ipsum dolor.
            </Button>
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
            <Button
              type="button"
              onClick={openModal}
              className="services__card-btn"
            >
              Lorem ipsum dolor.
            </Button>
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
            <Button
              type="button"
              onClick={openModal}
              className="services__card-btn"
            >
              Lorem ipsum dolor.
            </Button>
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
            <Button
              type="button"
              onClick={openModal}
              className="services__card-btn"
            >
              Lorem ipsum dolor.
            </Button>
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
            <Button
              type="button"
              onClick={openModal}
              className="services__card-btn"
            >
              Lorem ipsum dolor.
            </Button>
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
            <Button
              type="button"
              onClick={openModal}
              className="services__card-btn"
            >
              Lorem ipsum dolor.
            </Button>
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
            <Button
              type="button"
              onClick={openModal}
              className="services__card-btn"
            >
              Lorem ipsum dolor.
            </Button>
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
            <Button
              type="button"
              onClick={openModal}
              className="services__card-btn"
            >
              Lorem ipsum dolor.
            </Button>
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
            <Button
              type="button"
              onClick={openModal}
              className="services__card-btn"
            >
              Lorem ipsum dolor.
            </Button>
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
            <Button
              type="button"
              onClick={openModal}
              className="services__card-btn"
            >
              Lorem ipsum dolor.
            </Button>
          </li>
        </ul>

        <Pagination itemsPerPage={1} />
      </div>
    </section>
  );
};

export default Services;
