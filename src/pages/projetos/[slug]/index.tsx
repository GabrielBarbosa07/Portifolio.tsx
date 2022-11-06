import styles from "../../../../styles/DetailsOfProject.module.css";
import BannerOfProject from "../../../components/BannerOfProject";
import firstProject from "../../../../public/assets/projects-images/API_de_Filmes.jpeg";

export default function DetailsOfProject() {
  return (
    <section className={styles.detailsContainer}>
      <BannerOfProject
        title="Projeto 01"
        type="Website"
        imgUrl={firstProject.src}
      />

      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          non vero quae voluptatem maxime culpa delectus quidem qui, voluptas
          quam fugit amet? Iusto itaque culpa quo, nulla, perferendis incidunt
          sed aliquid deserunt sapiente unde, facilis ducimus ipsa non? Ipsa
          recusandae accusantium quidem totam aliquid dolores, officia provident
          repellendus aut nemo commodi voluptatem illum magni neque, molestiae
          vero aperiam esse, quam laborum quis unde repellat iure? Quae saepe
          obcaecati ipsam, quam deleniti nemo quidem, temporibus iusto iste
          pariatur animi, iure sequi.
        </p>
        <button type="button">
          <a href="#">Ver projeto online</a>
        </button>
      </main>
    </section>
  );
}
