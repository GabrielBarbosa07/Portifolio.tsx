import Head from "next/head";
import React from "react";
import styles from "../../../styles/ProjectsPage.module.css";
import ProjectPageItem from "../../components/ProjectsPage";
import { projects } from "../../data/DataOfProjects";

export default function ProjectsPage() {
  return (
    <div className={styles.projectsContainer}>
      <Head>
        <title>Projetos | Meu portifólio</title>
        <meta
          name="description"
          content="Esta página contém alguns projetos feitos por mim"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Esta página contém alguns projetos feitos por mim"
        />
      </Head>

      <main>
        {projects.map((project) => {
          return (
            <ProjectPageItem
              key={project.id}
              imgUrl={project.imgUrl}
              title={project.title}
              type={project.type}
              slug={project.slug}
            />
          );
        })}
      </main>
    </div>
  );
}
