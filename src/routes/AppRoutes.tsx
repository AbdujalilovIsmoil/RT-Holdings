import { lazy } from "react";
import Routes from "./Routes";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Sale = lazy(() => import("../pages/Sale"));
const News = lazy(() => import("../pages/News"));
const Error = lazy(() => import("../pages/Error"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Projects = lazy(() => import("../pages/Projects"));
const Services = lazy(() => import("../pages/Services"));
const PortfolioView = lazy(() => import("../pages/PortfolioView"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Routes />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        element: <About />,
        path: "/pages/about",
      },
      {
        element: <Projects />,
        path: "/pages/projects",
      },
      {
        element: <News />,
        path: "/pages/news",
      },
      {
        element: <Sale />,
        path: "/pages/sale",
      },
      {
        element: <Contact />,
        path: "/pages/contact",
      },
      {
        element: <Services />,
        path: "/pages/services",
      },
      {
        element: <PortfolioView />,
        path: "/pages/projects/:id",
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

export default routes;
