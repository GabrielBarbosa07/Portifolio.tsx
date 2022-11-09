import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../components/HomePage";
import Nextprogress from "nextjs-progressbar";

const Home: NextPage = () => {
  return (
    <div className="bg-bl-900 h-full mx-auto max-w-[90rem] px-4">
      <Head>
        <title>Home | Meu portifólio</title>
      </Head>
      <Nextprogress
        color="#0EE7B7"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />
      <HomePage />
    </div>
  );
};

export default Home;
