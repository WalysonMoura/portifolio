import Image from "next/image";
import Tilt from "react-tilt";

//React Icons

// Styled-Components
import * as Style from "./style";

export default function Projeto({ imagem }) {
  return (
    <Tilt>
      <Style.Card>
        <div className="circulo"></div>
        <Image src={imagem} width={650} height={450} alt="tecnologias" />
      </Style.Card>
    </Tilt>
  );
}
