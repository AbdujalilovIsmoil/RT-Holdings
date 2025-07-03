"use client";

import "./style.css";
import Image from "next/image";
import { useEffect } from "react";

const Hero = ({ params }: { params: { id: string } }) => {
  useEffect(() => {
    scrollTo({
      top: 0,
    });
  }, [params]);

  const heroStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `linear-gradient(90deg, rgba(30, 36, 44, 0.8) 0%, rgba(30, 36, 44, 0.6) 43.96%, rgba(30, 36, 44, 0.6) 66.39%), url(https://picsum.photos/460/370)`,
  };

  return (
    <section className='project-view'>
      <div
        style={heroStyle}
        className='site-hero'
      >
        <h1 className='visually-hidden'>Project 1</h1>
        <div className='container'>
          <div className='content'>
            <h2 className='content-title'>Afisha Market</h2>
            <p className='content-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              possimus ratione suscipit perferendis fugiat soluta, quidem
              dolorum rem culpa omnis.
            </p>
          </div>
        </div>
      </div>

      <section className='post'>
        <div className='container'>
          <div className='post__content'>
            <Image
              width={100}
              alt='image'
              height={510}
              className='post__content-image'
              src='https://picsum.photos/460/370'
            />
            <h2 className='post__content-title'>Afisha Market</h2>
            <p className='post__content-text'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
              eaque veniam accusantium omnis rerum illo dignissimos? Voluptatum
              odio enim placeat.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
