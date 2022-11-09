import styles from "../../../../styles/DetailsOfProject.module.css";
import BannerOfProject from "../../../components/BannerOfProject";
import { useRouter } from "next/router";
import { projects } from "../../../data/DataOfProjects";

export default function DetailsOfProject() {
  const { query } = useRouter();

  //Filtrando o projeto pela url
  const filteredProject = projects.filter(
    (project) => query.slug === project.slug
  );

  return (
    <section className={styles.detailsContainer}>
      {filteredProject.map((project) => {
        return (
          <>
            <BannerOfProject
              key={project.id}
              title={project.title}
              type={project.type}
              imgUrl={project.imgUrl}
            />

            <main>
              <p>{project.description}</p>
              <button type="button">
                <a href={project.url} target="_blank" rel="noreferrer">
                  Ver projeto online
                </a>
              </button>
            </main>
          </>
        );
      })}
    </section>
  );
}
