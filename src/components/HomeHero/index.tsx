/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import picture from "../../assets/my-pic.jpg";

export function HomeHero() {
  return (
    <section className="max-[1536px]:w-full flex lg:flex-row max-[640px]:flex-col-reverse gap-8 items-center justify-center mt-10">
      <Image
        src={picture}
        alt="Minha foto"
        className=" max-[1536px]:w-1/4 max-[1024px]:w-[25rem] rounded-3xl"
      />

      <div className="lg:w-3/4 min-[210px]:w-full">
        <section className="text-container mb-8 w-full max-[640px]:text-center">
          <h1 className="text-9xl max-[1536px]:text-8xl max-[1024px]:text-5xl text-gree-200 font-semibold">
            Olá
          </h1>
          <h2 className="text-6xl max-[1536px]:text-4xl max-[1024px]:text-2xl font-normal text-bl-200">
            Me chamo Gabriel
          </h2>
        </section>

        <section>
          <div className="seila">
            <span>//Minha apresentação</span>
            <span>Infos</span>
            {"\u007b"}
            <div>
              Nome:
              <span>Gabriel,</span>
            </div>
            <div>
              Sobrenome:
              <span>Barbosa</span><br />
              {"\u007d"}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
