import Hero from "./Hero";
import Post from "./Post";
import News from "./News";
import Texts from "./Texts";
import Score from "./Score";
import Button from "./Button";
import ContactUI from "./Contact";
import AboutUsUI from "./AboutUs";
import dynamic from "next/dynamic";
import Pagination from "./Pagination";
import OurServices from "./OurServices";

const Testimonials = dynamic(() => import("@/components/ui/Testimonials"), {
  ssr: true,
});

export {
  Hero,
  Post,
  News,
  Texts,
  Score,
  Button,
  ContactUI,
  AboutUsUI,
  Pagination,
  OurServices,
  Testimonials,
};
