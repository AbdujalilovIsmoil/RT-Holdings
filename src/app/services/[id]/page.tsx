import "./style.css";
import React from "react";
import Image from "next/image";
import { Hero } from "@/components";
import {
  FaYoutube,
  FaFacebook,
  FaTelegramPlane,
  AiFillInstagram,
} from "@/assets/react-icons";

const ServicesView = () => {
  return (
    <section className='services-view'>
      <Hero page='/services' />
      <div className='services__logo'>
        <div className='container services__logo-container'>
          <Image
            width={400}
            height={200}
            alt='Aka Taxi'
            src='/images/png/aka-taxi.png'
            className='services__logo-img'
          />
        </div>
      </div>

      <div className='container'>
        <ul className='services-view__list'>
          <li className='services-view__item'>
            <h2 className='services-view__item-title'>AKA-TAXI bu nima?</h2>
            <p className='services-view__item-text'>
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
              sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
              quisquam est, qui dolorem ipsum, quia dolor sit, amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt, ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit, qui in ea
              voluptate velit esse, quam nihil molestiae consequatur, vel illum,
              qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos
              et accusamus et iusto odio dignissimos ducimus, qui blanditiis
              praesentium voluptatum deleniti atque corrupti, quos dolores et
              quas molestias excepturi sint, obcaecati cupiditate non provident,
              similique sunt in culpa, qui officia deserunt mollitia animi, id
              est laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita distinctio.
            </p>
          </li>
          <li className='services-view__item'>
            <h2 className='services-view__item-title'>AKA-DRIVER bu nima?</h2>
            <p className='services-view__item-text'>
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
              sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
              quisquam est, qui dolorem ipsum, quia dolor sit, amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt, ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit, qui in ea
              voluptate velit esse, quam nihil molestiae consequatur, vel illum,
              qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos
              et accusamus et iusto odio dignissimos ducimus, qui blanditiis
              praesentium voluptatum deleniti atque corrupti, quos dolores et
              quas molestias excepturi sint, obcaecati cupiditate non provident,
              similique sunt in culpa, qui officia deserunt mollitia animi, id
              est laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita distinctio.
            </p>
          </li>
        </ul>

        <div className='services-view-media__container'>
          <h3 className='service-view-media__container-title'>
            Ijtimoiy tarmoqlar
          </h3>
          <ul className='services-view__medias'>
            <li className='services-view__media'>
              <a
                href='#'
                target='_blank'
              >
                <FaTelegramPlane className='services-view__media-icon' />
              </a>
            </li>
            <li className='services-view__media'>
              <a
                href='#'
                target='_blank'
              >
                <AiFillInstagram className='services-view__media-icon' />
              </a>
            </li>
            <li className='services-view__media'>
              <a
                href='#'
                target='_blank'
              >
                <FaYoutube className='services-view__media-icon' />
              </a>
            </li>
            <li className='services-view__media'>
              <a
                href='#'
                target='_blank'
              >
                <FaFacebook className='services-view__media-icon' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesView;
