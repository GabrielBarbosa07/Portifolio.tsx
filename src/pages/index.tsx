import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../components/HomePage";

const Home: NextPage = () => {
  return (
    <div className="bg-bl-900 h-full mx-auto max-w-[90rem] px-4">
        <Head>
          <title>Meu Portifólio</title>
        </Head>
        <HomePage />
    </div>
  );
};

export default Home;
