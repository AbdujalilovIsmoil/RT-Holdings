"use client";

import { usePathname } from "next/navigation";
import { Hero, Portfolio, Post } from "@/components";

const Services = () => {
  const pathName = usePathname();

  return (
    <>
      <Hero page={pathName} />
      <Post
        title='Post 1'
        description='Lorem ipsum dolor sit amet'
        image={{
          width: 500,
          height: 500,
          alt: "image",
          url: "https://picsum.photos/460/370",
        }}
      />
      <Portfolio />
    </>
  );
};

export default Services;
