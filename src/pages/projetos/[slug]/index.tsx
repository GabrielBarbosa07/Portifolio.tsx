import styles from "../../../../styles/DetailsOfProject.module.css";
import BannerOfProject from "../../../components/BannerOfProject";
import firstProject from "../../../../public/assets/projects-images/API_de_Filmes.jpeg";

export default function DetailsOfProject() {
  return (
    <section className={styles.detailsContainer}>
      <BannerOfProject 
      title="Projeto 01"
      type="Website"
      imgUrl={firstProject.src}  />

      <main>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia iste
          aut architecto et expedita, nesciunt est nulla vero, repudiandae
          veniam rerum doloribus. Saepe, velit tenetur.
        </p>
        <button type="button">
          <a href="#">Ver projeto online</a>
        </button>
      </main>
    </section>
  );
}
