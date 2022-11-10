import style from "../../../styles/FormContact.module.css";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    emailjs
      .sendForm(
        "portifolioForm",
        "template_n940wzp",
        e.target,
        "myuSVVgifW2GlXR4c"
      )
      .then(
        (result) => {
          alert("Mensagem enviada com sucesso!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <form className={style.form} data-aos="fade-up" onSubmit={handleSubmit}>
      <input
        className={style.inputForm}
        name="name"
        placeholder="Nome"
        required
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <input
        className={style.inputForm}
        name="email"
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <textarea
        className={style.textAreaForm}
        name="message"
        placeholder="Mensagem"
        required
        value={message}
        onChange={({ target }) => setMessage(target.value)}
      ></textarea>
      <button type="submit">ENVIAR</button>
    </form>
  );
}
