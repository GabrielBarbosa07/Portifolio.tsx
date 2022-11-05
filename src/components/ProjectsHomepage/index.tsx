import Link from "next/link";
import firstProject from "../../../public/assets/projects-images/API_de_Filmes.jpeg";
import secondProject from "../../../public/assets/projects-images/formulario_de_pagamento.png";
import thirdProject from "../../../public/assets/projects-images/sistema_de_finança.png";
import SectionTitle from "../SectionTitle";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  console.log(firstProject);

  return (
    <section className="w-full flex flex-col items-center gap-20 max-[640px]:gap-16 max-[2024px]:my-28 max-[640px]:my-10">
      <SectionTitle title="Ultimos Projetos" />

      <section className="w-full flex flex-col gap-16 max-[1024px]:gap-8">
        <ProjectItem
          title="API de Filmes"
          type="website"
          slug="teste"
          imgUrl={firstProject.src}
        />
        <ProjectItem
          title="Formulário de Pagamento"
          type="website"
          slug="teste"
          imgUrl={secondProject.src}
        />
        <ProjectItem
          title="Minhas Finanças"
          type="website"
          slug="teste"
          imgUrl={thirdProject.src}
        />
      </section>

      <button className="bg-gree-200 py-[0.8rem] px-12 rounded-lg border-none duration-300 hover:scale-105 hover:bg-[#0cb893] max-[500px]:p-4">
        <Link href="/projetos">
          <a className="uppercase text-white text-2xl font-light max-[500px]:text-base">
            Ver todos os projetos
          </a>
        </Link>
      </button>
    </section>
  );
}
