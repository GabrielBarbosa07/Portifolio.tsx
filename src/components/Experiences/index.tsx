import styles from "../../../styles/Experiences.module.css";
import SectionTitle from "../SectionTitle";
import ExperienceItem from "./ExperienceItem";

export default function Experiences() {
  return (
    <section className="w-full mt-10">
      <SectionTitle key={0} title="01 Ano" description="de experiência" />

      <section className={styles.ExperienceContent}>
        <ExperienceItem
          key={0}
          year="2022"
          title="Dev Front-end"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, illo quaerat, reprehenderit ipsa aliquid"
        />
        <ExperienceItem
          key={1}
          year="2022"
          title="Dev Front-end"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, illo quaerat, reprehenderit ipsa aliquid"
        />
        <ExperienceItem
          key={2}
          year="2022"
          title="Dev Front-end"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, illo quaerat, reprehenderit ipsa aliquid"
        />
        <ExperienceItem
          key={3}
          year="2022"
          title="Dev Front-end"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, illo quaerat, reprehenderit ipsa aliquid"
        />
      </section>
    </section>
  );
}
