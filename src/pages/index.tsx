import type { NextPage } from "next";
import Head from "next/head";
import FooterComponent from "../components/Footer";
import HomePage from "../components/HomePage";

const Home: NextPage = () => {
  return (
    <div className="bg-bl-900 mx-auto max-w-[90rem] px-4">
        <Head>
          <title>Meu Portifólio</title>
        </Head>
        <HomePage />
        <FooterComponent />
    </div>
  );
};

export default Home;
