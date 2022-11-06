import { StaticImageData } from "next/image";
import styles from "../../../styles/DetailsOfProject.module.css"

interface BannerOfProjectProps {
  title: string;
  type: string;
  imgUrl: string | StaticImageData;
}

export default function BannerOfProject({
  title,
  type,
  imgUrl,
}: BannerOfProjectProps) {
  const styling = {
    backgroundImage: `url('${imgUrl}')`,
  };

  return (
    <div style={styling} className={styles.BannerOfProjectContainer}>
      <div className="bg-gradient" />

      <section className={styles.BannerOfProjectTextSection}>
        <h1>{title}</h1>
        <h2>{type}</h2>
      </section>
    </div>
  );
}
