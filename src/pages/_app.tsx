import "@/styles/globals.css";
import dynamic from "next/dynamic";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import { Poppins, Be_Vietnam_Pro, Exo } from "next/font/google";

const Header = dynamic(() => import("@/components/Layouts/Header"));
const Footer = dynamic(() => import("@/components/Layouts/Footer"));
const ToastContainer = dynamic(
  () => import("react-toastify").then((mod) => mod.ToastContainer),
  { ssr: false }
);

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

const beVietnamePro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const exo = Exo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div
      className={`${beVietnamePro.className} ${poppins.className} ${exo.className}`}
    >
      <Header />
      <Component {...pageProps} />
      <Footer />

      <ToastContainer />
    </div>
  );
};

export default App;
