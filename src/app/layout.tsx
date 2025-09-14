import "./globals.css";
import "swiper/swiper-bundle.css";
import ReduxProvider from "@/context";
import { GA_TRACKING_ID } from "@/lib/gtag";
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
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="bTzHiobP8sE8G_kInfFxlmUC9FGzLL0xfzEzFkKj47g"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){ window.dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body
        className={`${beVietnamePro.className} ${poppins.className} ${exo.className}`}
      >
        <ReduxProvider>
          <Header />
          <main className="main">{children}</main>
          <Footer />
          <ToastContainer />
        </ReduxProvider>
      </body>
    </html>
  );
}
