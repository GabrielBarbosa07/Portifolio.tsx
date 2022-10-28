import Link from "next/link";
import { AiOutlineRightCircle } from "react-icons/ai";
interface Props {
  imgUrl: string;
}

export default function ProjetoItem({ imgUrl }: Props) {
  return (
    <section className="w-full flex h-[25rem] items-end relative">
      <section
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
        className={`w-[50rem] h-full relative bg-cover bg-no-repeat bg-center`}
      >
        <div className="absolute w-full h-full bg-gradient opacity-50 duration-700" />
        <div className="absolute top-12 right-[-10rem] duration-500 w-fit">
          <h1 className="text-gree-200 text-[2.5rem] [text-shadow:_-4px_5px_22px_#11172b]">
            Projeto 01
          </h1>
          <h2 className="text-bl-200 text-[2rem] font-light [text-shadow:_-4px_5px_22px_#11172b]">
            - Website
          </h2>
        </div>
      </section>

      <button
        type="button"
        className="h-16 mt-0 mr-0 mb-12 ml-20 border-none bg-transparent "
      >
        <Link href="/projetos">
          <a className="text-white text-[2rem] font-extralight flex items-center gap-[0.8rem] duration-500">
            Ver Mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </section>
  );
}
