import style from "../../../styles/FormContact.module.css";

export default function Form() {
  return (
    <form className={style.form} data-aos="fade-up">
      <input className={style.inputForm} placeholder="Nome" required />
      <input
        className={style.inputForm}
        type="email"
        placeholder="Email"
        required
      />
      <textarea
        className={style.textAreaForm}
        placeholder="Mensagem"
        required
      ></textarea>
      <button type="submit">ENVIAR</button>
    </form>
  );
}
