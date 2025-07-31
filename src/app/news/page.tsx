"use client";

import Head from "next/head";
import { useGet } from "@/hooks";
import { Pagination } from "@/components";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Hero, News as NewsComponent } from "@/components";

const News = () => {
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

  return (
    <>
      <Head>
        <title>News</title>
      </Head>

      <Hero page={pathName} />
      <section className='service'>
        <div className='container'>
          <NewsComponent data={Array.isArray(sliceData) ? sliceData : []} />

          <Pagination
            pageCount={pageCount}
            handlePageClick={handlePageClick}
          />
        </div>
      </section>
    </>
  );
};

export default News;
