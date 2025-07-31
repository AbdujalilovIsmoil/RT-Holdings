import "./globals.css";
import "swiper/swiper-bundle.css";
import ReduxProvider from "@/context";
import { Header, Footer } from "@/components";
import { ToastContainer } from "react-toastify";
import { Be_Vietnam_Pro, Exo, Poppins } from "next/font/google";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${beVietnamePro.className} ${poppins.className} ${exo.className}`}
      >
        <ReduxProvider>
          <Header />
          <main className='main'>{children}</main>
          <Footer />
          <ToastContainer />
        </ReduxProvider>
      </body>
    </html>
  );
}
