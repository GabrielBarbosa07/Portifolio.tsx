/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import picture from "../../assets/my-pic.jpg";
import styles from "../../../styles/HomeHero.module.css";
import HeroContent from "./HeroContent";
import HeroHeader from "./HeroHeader";

export function HomeHero() {
  return (
    <section className="flex max-[2024px]:mb-28 max-[640px]:mb-20 max-[640px]:flex-col-reverse gap-8 items-center justify-center mt-10 bg-bl-900">
      <Image
        src={picture}
        alt="Minha foto"
        className="max-[1536px]:w-1/6 max-[1024px]:w-[50rem] rounded-3xl"
      />

      <div className=" min-[210px]:w-full">
        <HeroHeader />

        <section className={styles.heroContainer}>
          <HeroContent
            comment="//Minha apresentação"
            objName="Infos"
            keyOne="Nome:"
            valueOne="Gabriel,"
            keyTwo="Sobrenome:"
            valueTwo="Barbosa"
          />

          <HeroContent
            objName="Cargo"
            keyOne="Função:"
            valueOne="Dev Front-end,"
            keyTwo="Senioridade:"
            valueTwo="Estágio"
          />
        </section>
      </div>
    </section>
  );
}
