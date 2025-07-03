"use client";

import "./style.css";
import Link from "next/link";
import Image from "next/image";
import { header } from "@/data";
import { linksType } from "./Header.d";
import { closeNavbar } from "@/utility";
import { Button, Nav } from "@/components";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes, FaAngleDown } from "@/assets/react-icons";

const Header = () => {
  const pathName = usePathname();

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const openToggleVisible = () => setIsVisible(prevState => !prevState);

  const navigationRef = useRef<HTMLDivElement>(null);

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (navigationRef.current) {
        setIsScrolled(navigationRef?.current?.clientHeight < window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className='header'>
      <div className={`header-close ${isVisible ? "header-close--open" : ""}`}>
        <div className='header-close__background'>
          <div className='header-close__top'>
            <div className='header-close__container container'>
              <Button
                type='button'
                onClick={openToggleVisible}
                className='header-close__btn'
              >
                <FaTimes className='header-close__btn-times' />
              </Button>
            </div>
          </div>
          <div className='container'>
            <ul className='header-close__list'>
              {header.links.length > 0 &&
                header.links.map((el: linksType, index) => {
                  return (
                    <li
                      key={index}
                      className='header-close__item'
                    >
                      <Link
                        href={el && el.path}
                        onClick={openToggleVisible}
                        className={closeNavbar({
                          staticPath: el.path,
                          publicPath: pathName,
                          mainClass: "header-close__item-link",
                          activeClass: "header-close__item-link--active",
                        })}
                      >
                        {el.title}
                        <FaAngleDown className='header-close__item-arrow' />
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>

      <div
        ref={navigationRef}
        className='header__top'
      >
        <div className='header__top-container container'>
          <Link href='/'>
            <Image
              width={210}
              height={70}
              alt='RT Holdings'
              className='header__top-logo'
              src={"/images/svg/site-header/site-logo.svg"}
            />
          </Link>

          <Button
            type='button'
            className='header__bars'
            onClick={openToggleVisible}
          >
            <FaBars className='header__bars-icon' />
          </Button>
        </div>
      </div>

      <Nav isScrolled={isScrolled} />
    </header>
  );
};

export default Header;
