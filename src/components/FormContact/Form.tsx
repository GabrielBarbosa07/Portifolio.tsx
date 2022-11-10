import style from "../../../styles/FormContact.module.css";
import { FormEvent, useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    
  }

  return (
    <form className={style.form} data-aos="fade-up" onSubmit={handleSubmit}>
      <input
        className={style.inputForm}
        placeholder="Nome"
        required
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <input
        className={style.inputForm}
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <textarea
        className={style.textAreaForm}
        placeholder="Mensagem"
        required
        value={message}
        onChange={({ target }) => setMessage(target.value)}
      ></textarea>
      <button type="submit">ENVIAR</button>
    </form>
  );
}
