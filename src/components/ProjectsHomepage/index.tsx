import Link from "next/link";
import SectionTitle from "../SectionTitle";
import ProjectItem from "./ProjectItem";
import { projects } from "../../data/DataOfProjects";

export default function Projects() {
  return (
    <section className="w-full flex flex-col items-center gap-20 max-[640px]:gap-16 max-[2024px]:my-28 max-[640px]:my-10">
      <SectionTitle title="Ultimos Projetos" />

      <section className="w-full flex flex-col gap-16 max-[1024px]:gap-8">
        {projects.slice(0, 3).reverse().map((project) => {
          return (
            <ProjectItem
              key={project.id}
              imgUrl={project.imgUrl}
              title={project.title}
              type={project.type}
              slug={project.slug}
            />
          );
        })}
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
