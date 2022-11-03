import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-bl-900 font-normal font-sans min-h-screen min-w-[280px]">
      <Header />
      <Component {...pageProps} />;
      
    </div>
  );
}

export default MyApp;
