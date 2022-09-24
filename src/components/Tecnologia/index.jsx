import Image from "next/image";
import Tilt from "react-tilt";

//React Icons

// Styled-Components
import * as Style from "./style";

export default function Tecnologia({ imagem }) {
  return (
    <Style.Card>
      <div className="content">
        <div className="circulo"></div>
        <Image
          src={imagem}
          width={350}
          height={350}
          alt="tecnologias"
          resposive
        />
      </div>
    </Style.Card>
  );
}
