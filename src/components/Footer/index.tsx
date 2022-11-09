import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import styles from "../../../styles/Footer.module.css";

export default function FooterComponent() {
  const handleRedirect = (url: string) => {
    window.open(url);
  };

  const handleScrollTop = () => {
    window.scroll({
      behavior: "smooth",
      top: 0,
    });
  };

  return (
    <footer className={styles.footer}>
      <div>
        <button onClick={handleScrollTop} type="button">
          Voltar ao topo
        </button>

        <section className={styles.footerIcons}>
          <AiOutlineTwitter
            onClick={() => handleRedirect("https://twitter.com/Gabr1elBarbosa")}
          />
          <AiOutlineGithub
            onClick={() =>
              handleRedirect("https://github.com/GabrielBarbosa07")
            }
          />
          <AiFillLinkedin
            onClick={() =>
              handleRedirect("https://www.linkedin.com/in/dev-gabriel-barbosa/")
            }
          />
        </section>
      </div>
    </footer>
  );
}
