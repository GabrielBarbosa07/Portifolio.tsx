import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import FooterComponent from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-bl-900 font-normal font-sans h-full min-w-[280px]">
      <Header />
      <Component {...pageProps} />;
      <FooterComponent />
    </div>
  );
}

export default MyApp;
