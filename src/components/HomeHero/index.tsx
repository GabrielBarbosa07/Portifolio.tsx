/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import picture from "../../../public/my-pic.jpg";
import styles from "../../../styles/HomeHero.module.css";
import HeroContent from "./HeroContent";
import HeroHeader from "./HeroHeader";

export function HomeHero() {
  return (
    <section
      className="flex max-[2024px]:my-28 max-[640px]:my-10 max-[640px]:flex-col-reverse gap-8 items-center justify-center bg-bl-900 min-h-full"
      data-aos="fade-up"
    >
      <Image
        src={picture}
        alt="Minha foto"
        className="max-[1536px]:w-1/6 max-[1024px]:w-[50rem] rounded-3xl"
      />

      <div className=" min-[210px]:w-full">
        <HeroHeader />

        <section className={styles.heroContainer}>
          <HeroContent
            key={0}
            comment="//Minha apresentação"
            objName="Infos"
            keyOne="Nome:"
            valueOne="Gabriel,"
            keyTwo="Sobrenome:"
            valueTwo="Barbosa,"
          />

          <HeroContent
            key={1}
            objName="Cargo"
            keyOne="Função:"
            valueOne="Dev Front-end,"
            keyTwo="Senioridade:"
            valueTwo="Estágiario/Junior,"
          />
        </section>
      </div>
    </section>
  );
}
