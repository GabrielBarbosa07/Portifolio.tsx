import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../components/HomePage";

const Home: NextPage = () => {
  return (
    <div className="bg-bl-900 mx-auto max-w-[90rem] px-4">
      <div>
        <Head>
          <title>Meu Portifólio</title>
        </Head>
        <HomePage />
      </div>
    </div>
  );
};

export default Home;
