/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import picture from "../../assets/my-pic.jpg";
import HeroContent from "./HeroContent";
import HeroHeader from "./HeroHeader";

export function HomeHero() {
  return (
    <section className="flex max-[1024px]:mb-28 max-[640px]:mb-1 max-[640px]:flex-col-reverse gap-8 items-center justify-center mt-10 bg-bl-900">
      <Image
        src={picture}
        alt="Minha foto"
        className="max-[1536px]:w-1/6 max-[1024px]:w-[50rem] rounded-3xl"
      />

      <div className=" min-[210px]:w-full">
        <HeroHeader />

        <section className="flex flex-col max-[640px]:items-center w-full gap-8">
          <HeroContent
            comment="//Minha apresentação"
            objName="Infos"
            keyOne="Nome:"
            valueOne="Gabriel,"
            keyTwo="Sobrenome:"
            valueTwo="Barbosa"
          />

          <HeroContent
            positionRight={true}
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
