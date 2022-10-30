import styles from "../../../styles/Experiences.module.css";

interface ExperienceProps {
  year: string;
  title: string;
  description: string;
}

export default function ExperienceItem({
  year,
  title,
  description,
}: ExperienceProps) {
  return (
    <div className={styles.ItemContainer}>
      <div className="bg-gradient h-80 flex flex-col items-start justify-start transi">
        <h1>{year}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
