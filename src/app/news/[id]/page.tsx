"use client";

import "./style.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, Hero } from "@/components";
import { FaArrowLeftLong } from "@/assets/react-icons";

const NewsView = () => {
  const router = useRouter();

  return (
    <section className='news-view'>
      <Hero page='/news' />

      <div className='news__container'>
        <div className='container'>
          <Button
            type='button'
            className='news-view-btn'
            onClick={() => router.push("/news")}
          >
            <FaArrowLeftLong className='news-view-btn-icon' />
            Ortga
          </Button>

          <div className='news-view__container'>
            <div className='news-view__box'>
              <ul className='news-view__image-lists'>
                <li className='news-view__image-item'>
                  <Image
                    width={190}
                    height={120}
                    alt='news image 1'
                    src='/images/jpg/news-view-1.jpg'
                    className='news-view__image-item-img'
                  />
                </li>
                <li className='news-view__image-item'>
                  <Image
                    width={190}
                    height={120}
                    alt='news image 2'
                    src='/images/jpg/news-view-2.jpg'
                    className='news-view__image-item-img'
                  />
                </li>
                <li className='news-view__image-item'>
                  <Image
                    width={190}
                    height={120}
                    alt='news image 3'
                    src='/images/jpg/news-view-3.jpg'
                    className='news-view__image-item-img'
                  />
                </li>
                <li className='news-view__image-item'>
                  <Image
                    width={190}
                    height={120}
                    alt='news image 4'
                    src='/images/jpg/news-view-4.jpg'
                    className='news-view__image-item-img'
                  />
                </li>
                <li className='news-view__image-item'>
                  <Image
                    width={190}
                    height={120}
                    alt='news image 5'
                    src='/images/jpg/news-view-4.jpg'
                    className='news-view__image-item-img'
                  />
                </li>
              </ul>

              <div className='news-view__content'>
                <h3 className='news-view__content-title'>
                  The Ultimate Guide To Furniture Cleaning
                </h3>
                <p className='news-view__content-text'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. It is
                  a long established fact that a reader will be distracted by
                  the readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
              </div>
            </div>
            <div className='news-view__box'>
              <ul className='news-view__items'>
                <li className='news-view__item'>
                  <Link href='/news/1'>
                    <div className='new-view__item-container'>
                      <Image
                        width={125}
                        height={85}
                        alt='News image 1'
                        className='news-view__item-img'
                        src='/images/jpg/news-view-1.jpg'
                      />

                      <div className='news-view__item-box'>
                        <h3 className='news-view__item-box-title'>
                          The Ultimate Guide to Deep Cleaning Your Kitchen
                        </h3>
                        <p className='news-view__item-box-text'>
                          Lorem ipsum dolor sit amet continent...
                        </p>
                      </div>
                    </div>

                    <hr className='news-view__item-box-rule' />
                  </Link>
                </li>
                <li className='news-view__item'>
                  <Link href='/news/2'>
                    <div className='new-view__item-container'>
                      <Image
                        width={125}
                        height={85}
                        alt='News image 1'
                        className='news-view__item-img'
                        src='/images/jpg/news-view-1.jpg'
                      />

                      <div className='news-view__item-box'>
                        <h3 className='news-view__item-box-title'>
                          The Ultimate Guide to Deep Cleaning Your Kitchen
                        </h3>
                        <p className='news-view__item-box-text'>
                          Lorem ipsum dolor sit amet continent...
                        </p>
                      </div>
                    </div>

                    <hr className='news-view__item-box-rule' />
                  </Link>
                </li>
                <li className='news-view__item'>
                  <Link href='/news/2'>
                    <div className='new-view__item-container'>
                      <Image
                        width={125}
                        height={85}
                        alt='News image 1'
                        className='news-view__item-img'
                        src='/images/jpg/news-view-1.jpg'
                      />

                      <div className='news-view__item-box'>
                        <h3 className='news-view__item-box-title'>
                          The Ultimate Guide to Deep Cleaning Your Kitchen
                        </h3>
                        <p className='news-view__item-box-text'>
                          Lorem ipsum dolor sit amet continent...
                        </p>
                      </div>
                    </div>

                    <hr className='news-view__item-box-rule' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsView;
