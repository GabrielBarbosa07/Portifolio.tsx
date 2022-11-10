import styles from "../../../../styles/DetailsOfProject.module.css";
import BannerOfProject from "../../../components/BannerOfProject";
import { useRouter } from "next/router";
import { projects } from "../../../data/DataOfProjects";
import Head from "next/head";

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
          <div key={project.slug}>
            <Head>
              <title>{project.title} | Meu portifólio</title>
              <meta name="description" content={project.description} />
              <meta property="og:image" content={project.imgUrl} />
              <meta property="og:image:secure_url" content={project.imgUrl} />
              <meta name="twitter:image" content={project.imgUrl} />
              <meta name="twitter:image:src" content={project.imgUrl} />
              <meta property="og:description" content={project.description} />
            </Head>

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
          </div>
        );
      })}
    </section>
  );
}
