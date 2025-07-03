"use client";

import Link from "next/link";
import "../Header/style.css";
import { header } from "@/data";
import { closeNavbar } from "@/utility";
import { usePathname } from "next/navigation";
import { linksType } from "../Header/Header.d";

const Nav = () => {
  const pathName = usePathname();

  return (
    <>
      <div className='site-navigation'>
        <div className='site__container container'>
          <nav className='nav'>
            <ul className='nav__list'>
              {header.links.length > 0 &&
                header.links.map((el: linksType, index) => {
                  return (
                    <li
                      key={index}
                      className='nav__item'
                    >
                      <Link
                        href={el.path}
                        className={closeNavbar({
                          staticPath: el.path,
                          publicPath: pathName,
                          mainClass: "nav__item-link",
                          activeClass: "nav__item-link--active",
                        })}
                      >
                        {el && el.title}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

Nav.displayName = "Nav";

export default Nav;
