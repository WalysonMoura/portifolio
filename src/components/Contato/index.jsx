import { useState } from "react";
import axios from "axios"

export default function Contato() {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const enviarDados = async (evento) => {
    evento.preventDefault();

    await axios.post('https://formsubmit.co/ajax/walysonmoura222@gmail.com',{
      nome,
      email,
      message,
    });
  };

  return (
    <>
      <form
        action="https://formsubmit.co/walysonmoura222@gmail.com"
        method="post"
        onSubmit={enviarDados}
      >
        <input type="hidden" name="_template" value="box" />
        <input
          type="hidden"
          name="_subject"
          value="Pórtifolio {Walyson Moura}"
        />
        <input type="text" name="name" onChange={e => setNome(e.target.value)}/>
        <input type="email" name="email" onChange={e => setEmail(e.target.value)}/>
        <textarea
          name="message"
          onChange={e => setMessage(e.target.value)}
          placeholder="mensagem"
          cols="30"
          rows="10"
        ></textarea>

        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_autoresponse"
          value="Recebemos sua mensagem, obrigado pelo contato e logo responderemos"
        />
        <input type="hidden" name="_next" value="http://localhost:3000/" />

        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
