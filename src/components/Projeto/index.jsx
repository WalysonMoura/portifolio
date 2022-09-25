import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { Fade } from "react-awesome-reveal";

//React Icons
import { BsLink45Deg } from "react-icons/bs"
// Styled-Components
import * as Style from "./style";
import { Colors } from "../../styles/colors";

export default function Projeto({ imagem }) {
  return (
    <Tilt
      className="parallax-effect-glare-scale"
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.02}
    >
      <Style.Card>
        <div className="circulo"></div>
        
        <div className="texto">
          <Fade cascade direction="up" delay={1}>
            <span></span>
            <h2>Itachi Uchiha</h2>
            <BsLink45Deg size={35} color={Colors.azul1}/>
            
          </Fade>
        </div>
        <Image
          style={{ position: "absolute", "border-radius": "9px" }}
          src={imagem}
          width={650}
          height={450}
          alt="tecnologias"
        />
      </Style.Card>
    </Tilt>
  );
}
