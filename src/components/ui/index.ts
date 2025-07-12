import Hero from "./Hero";
import Post from "./Post";
import News from "./News";
import Modal from "./Modal";
import Texts from "./Texts";
import Score from "./Score";
import Button from "./Button";
import ContactUI from "./Contact";
import AboutUsUI from "./AboutUs";
import dynamic from "next/dynamic";
import Portfolio from "./Portfolio";
import Pagination from "./Pagination";
import OurServices from "./OurServices";

const Testimonials = dynamic(() => import("@/components/ui/Testimonials"), {
  ssr: true,
});

export {
  Hero,
  Post,
  Modal,
  News,
  Texts,
  Score,
  Button,
  ContactUI,
  AboutUsUI,
  Portfolio,
  Pagination,
  OurServices,
  Testimonials,
};
