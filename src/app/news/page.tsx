"use client";

import Head from "next/head";
import { useGet } from "@/hooks";
import { Pagination } from "@/components";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { initialValuesTypes } from "@/context/reducer";
import { Hero, News as NewsComponent } from "@/components";

const News = () => {
  const { appLang } = useSelector((state: initialValuesTypes) => state);
  const pathName = usePathname();

  useEffect(() => {
    scrollTo({
      top: 0,
    });
  }, []);

  const data = useGet({
    path: "/news/list",
  });

  const itemsPerPage = 4;

  const [currentPage, setCurrentPage] = useState<number>(0);

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const sliceData = data.slice(startIndex, endIndex);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  interface langugageTypes {
    [key: string]: string;
  }

  const language: langugageTypes = {
    ko: "뉴스",
    en: "News",
    ru: "Новости",
    uz: "Yangiliklar",
  };

  useEffect(() => {
    document.title = language[`${appLang}`];
  }, [appLang]);

  return (
    <>
      <Head>
        <title>News</title>
      </Head>

      <Hero page={pathName} />
      <section className="service">
        <div className="container">
          <NewsComponent data={Array.isArray(sliceData) ? sliceData : []} />

          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        </div>
      </section>
    </>
  );
};

export default News;
