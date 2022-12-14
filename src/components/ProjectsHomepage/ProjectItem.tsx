import styles from "../../../styles/ProjectsHomePage.module.css";
import Link from "next/link";
import { AiOutlineRightCircle } from "react-icons/ai";
import { StaticImageData } from "next/image";
interface ProjectItemProps {
  id?: number
  title: string;
  type: string;
  slug: string;
  imgUrl: string | StaticImageData;
}

export default function ProjectItem({
  title,
  type,
  slug,
  imgUrl,
}: ProjectItemProps) {
  const styling = {
    backgroundImage: `url('${imgUrl}')`,
  };

  return (
    <section className={styles.ProjetosItemContainer} data-aos="fade-up">
      <section
        style={styling}
        className={`w-[50rem] h-full relative bg-cover bg-no-repeat bg-center`}
      >
        <div className="absolute w-full h-full bg-gradient opacity-60 duration-700 hover:opacity-40" />
        <div className={styles.ProjetoItemText}>
          <h1 className="text-gree-200 text-[2.5rem] [text-shadow:_-4px_5px_22px_#11172b]">
            #{title}
          </h1>
          <h2 className="text-bl-200 text-[2rem] font-light [text-shadow:_-4px_5px_22px_#11172b]">
            - {type}
          </h2>
        </div>
      </section>

      <button
        type="button"
        className="h-16 mt-0 mr-0 mb-12 ml-20 border-none bg-transparent "
      >
        <Link href={`/projetos/${slug}`}>
          <a className="text-white text-[2rem] font-extralight flex items-center gap-[0.8rem] duration-500">
            Ver Mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </section>
  );
}
