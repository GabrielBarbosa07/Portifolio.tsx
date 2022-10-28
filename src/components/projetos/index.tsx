import Head from "next/head";
import SectionTitle from "../SectionTitle";
import ProjetoItem from "./ProjetoItem";

export default function Projetos() {
  return (
    <section className="w-full flex flex-col items-center gap-20 max-[2024px]:my-28 max-[640px]:my-10">
      <Head>
        <title>Projetos</title>
      </Head>

      <SectionTitle title="Ultimos Projetos" />

      <section className="w-full flex flex-col gap-16 max-[1024px]:gap-8">
        <ProjetoItem 
        imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZnLpK8k4UMyYkTw2PqEefZz5cE9EcjXkoQ&usqp=CAU" />
        <ProjetoItem 
        imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZnLpK8k4UMyYkTw2PqEefZz5cE9EcjXkoQ&usqp=CAU" />
      </section>
    </section>
  );
}
