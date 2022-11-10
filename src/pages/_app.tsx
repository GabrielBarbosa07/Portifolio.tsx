import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Header } from "../components/Header";
import FooterComponent from "../components/Footer";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-bl-900 font-normal font-sans h-full min-h-screen min-w-[280px]">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end e aqui apresento meu portifólio e alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento meu portifólio e alguns projetos desenvolvidos por mim!"
        />
      </Head>
      <Toaster position="bottom-right"/>
      <Header />
      <Component {...pageProps} />;
      <FooterComponent />
    </div>
  );
}

export default MyApp;
