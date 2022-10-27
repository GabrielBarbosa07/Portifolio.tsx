import Head from "next/head";
import SectionTitle from "../SectionTitle";
import ProjetoItem from "./ProjetoItem";

export default function Projetos() {
  return (
    <section className="w-full flex flex-col items-center gap-20">
      <Head>
        <title>Projetos</title>
      </Head>

      <SectionTitle title="Ultimos Projetos" />

      <section className="w-full flex flex-col gap-16 max-[1024px]:gap-8">
        <ProjetoItem />
      </section>
    </section>
  );
}
