import Image from "next/image";
import styles from "../../../styles/Knowledge.module.css"

interface KnowledgeItemProps {
  title: string;
  src: string;
  alt: string;
  imgTitle: string;
}

export default function KnowledgeItem({
  title,
  src,
  alt,
  imgTitle,
}: KnowledgeItemProps) {
  return (
    <section className={styles.KnowledgeItem} data-aos="fade-up">
      <p>{title}</p>
      <Image id="img-hard" className="hover:scale-90 duration-300" title={imgTitle} src={src} alt={alt} width={80} height={80}/>
    </section>
  );
}
