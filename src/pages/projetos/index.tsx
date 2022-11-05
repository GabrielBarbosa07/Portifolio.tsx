import React from "react";
import styles from "../../../styles/ProjectsPage.module.css";
import ProjectPageItem from "../../components/ProjectsPage";
import firstProject from "../../../public/assets/projects-images/API_de_Filmes.jpeg";
import secondProject from "../../../public/assets/projects-images/formulario_de_pagamento.png";
import thirdProject from "../../../public/assets/projects-images/sistema_de_finança.png";
import fourthProject from "../../../public/assets/projects-images/calculadora.png";

export default function ProjectsPage() {
  return (
    <div className={styles.projectsContainer}>
      <main>
        <ProjectPageItem
          title="Projeto 01"
          type="Website"
          slug="test"
          imgUrl={firstProject.src}
        />
        <ProjectPageItem
          title="Projeto 02"
          type="Website"
          slug="test"
          imgUrl={secondProject.src}
        />
        <ProjectPageItem
          title="Projeto 03"
          type="Website"
          slug="test"
          imgUrl={thirdProject.src}
        />
        <ProjectPageItem
          title="Projeto 04"
          type="Website"
          slug="test"
          imgUrl={fourthProject.src}
        />
      </main>
    </div>
  );
}
