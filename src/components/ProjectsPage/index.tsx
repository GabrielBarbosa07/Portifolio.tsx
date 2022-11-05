import { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "../../../styles/ProjectsPage.module.css";

interface ProjectItemProps {
  title: string;
  type: string;
  slug: string;
  imgUrl: string | StaticImageData;
}

export default function ProjectPageItem({
  title,
  type,
  slug,
  imgUrl,
}: ProjectItemProps) {
  const styling = {
    backgroundImage: `url('${imgUrl}')`,
  };

  return (
    <div className={styles.projectItemContainer} key={title} style={styling}>
      <Link href={`/projetos/${slug}`}>
        <a className={styles.projectItemAnchor}>
          <div className="absolute w-full h-full bg-gradient opacity-70 duration-500 left-0 bottom-0 hover:opacity-50" />
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>
    </div>
  );
}
