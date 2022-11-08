import React from "react";
import styles from "../../../styles/ProjectsPage.module.css";
import ProjectPageItem from "../../components/ProjectsPage";
import { projects } from "../../data/DataOfProjects";

export default function ProjectsPage() {
  return (
    <div className={styles.projectsContainer}>
      <main>
        {projects.reverse().map((project) => {
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
