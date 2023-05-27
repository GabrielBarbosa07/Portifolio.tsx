import style from "../../../styles/FormContact.module.css";
import { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      toast("Preencha todos os campos para enviar sua mensagem!", {
        style: {
          background: "#d45d5d",
          color: "#fff",
          fontWeight: "bold",
        },
      });
      return;
    }

    emailjs
      .sendForm(
        "portifolioForm",
        "template_n940wzp",
        e.target,
        "myuSVVgifW2GlXR4c"
      )
      .then(
        (result) => {
          setName("");
          setEmail("");
          setMessage("");

          toast("Mensagem Enviada com Sucesso! :)", {
            style: {
              background: "#7AC7E3",
              color: "#fff",
              fontWeight: "bold",
            },
          });
        },
        (error) => {
          toast(
            "Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!",
            {
              style: {
                background: "#d45d5d",
                color: "#fff",
                fontWeight: "bold",
              },
            }
          );
        }
      );
  }

  return (
    <form className={style.form} data-aos="fade-up" onSubmit={handleSubmit}>
      <input
        className={style.inputForm}
        title="Nome"
        name="name"
        placeholder="Nome"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <input
        className={style.inputForm}
        title="Email"
        name="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <textarea
        className={style.textAreaForm}
        title="Mensagem"
        name="message"
        placeholder="Mensagem"
        value={message}
        onChange={({ target }) => setMessage(target.value)}
      ></textarea>
      <button title="Enviar" type="submit">ENVIAR</button>
    </form>
  );
}
