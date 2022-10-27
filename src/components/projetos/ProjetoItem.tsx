import Link from "next/link";
import { AiOutlineRightCircle } from "react-icons/ai";

export default function ProjetoItem() {
  return (
    <section className="w-full flex h-[25rem] items-end relative">
      <section className="w-[50rem] h-full bg-red-700 relative">

        <div className="absolute w-full h-full///pareiaqui" />

        <div className="text">
          <h1>Projeto 01</h1>
          <h2>- Website</h2>
        </div>
      </section>

      <button type="button">
        <Link href="/projetos">
          <a>
            Ver Mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </section>
  );
}
