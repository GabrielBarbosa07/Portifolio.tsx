import SectionTitle from "../SectionTitle";
import Form from "./Form";

export default function FormContact() {
  return (
    <section className="mb-28 max-[640px]:mb-20">
      <SectionTitle
        title={
          <div className="inline max-[640px]:text-center ">
            Precisa dos <br />
            meus serviços?
          </div>
        }
        description={
          <div className="max-[640px]:text-center">
            Preencha o formulário abaixo <br />
            que irei retornar em breve
          </div>
        }
      />
      <Form />
    </section>
  );
}
