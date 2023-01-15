import styles from "../../../styles/Experiences.module.css";
import SectionTitle from "../SectionTitle";
import ExperienceItem from "./ExperienceItem";

export default function Experiences() {
  return (
    <section className="w-full my-16">
      <SectionTitle key={0} title="01 Ano" description="de experiência" />

      <section className={styles.ExperienceContent}>
        <ExperienceItem
          key={0}
          year="2022"
          title="Dev Front-end"
          description="Desenvolvi um portólio feito com ReactJs. Utilizando diversos frameworks de animações."
        />
        <ExperienceItem
          key={1}
          year="2022"
          title="Dev Front-end"
          description="Desenvolvimento de um site de pesquisa e detalhes de filmes e series. Com um sistema de autênticação de usúario."
        />
        <ExperienceItem
          key={2}
          year="2022"
          title="Dev Front-end"
          description="Desenvolvimento de um formulãrio de pagamento com cartão de crédito. Utilizando imask."
        />
        <ExperienceItem
          key={3}
          year="2022"
          title="Dev Front-end"
          description="Desenvolvimento de uma página de controlhe financeiro pessoal. Utilizando localStorage."
        />
      </section>
    </section>
  );
}
