import Head from "next/head";
import Image from "next/image";

// React Icons

// Styled-Components
import { GlobalStyle } from "../styles/globals";
import * as Style from "../styles/style";

//Components
import Projeto from "../components/Projeto";
import Tecnologia from "../components/Tecnologia";
import Social from "../components/social";
import Contato from "../components/Contato";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Portifólio Walyson Moura</title>
        <meta name="description" content="Portifólio Walyson Moura" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Social />
      <Style.Main>
        <Style.Principal>
          <div className="apresentacao">
            <h3>Olá, eu sou</h3>
            <h1>Walyson Moura</h1>
            <h2>Full stack developer and future software engineer</h2>
          </div>

          <div className="imagens">
            <div className="f1">
              <Image
                src="/css2.png"
                width={50}
                height={50}
                alt="imagem"
                responsive
              />
            </div>
            <div className="f2">
              <Image
                src="/html2.png"
                width={65}
                height={70}
                alt="imagem"
                responsive
              />
            </div>
            <div className="f3">
              <Image
                style={{ borderRadius: "8px" }}
                src="/js2.png"
                width={45}
                height={45}
                alt="imagem"
                responsive
              />
            </div>
            <div className="f4">
              <Image
                style={{ borderRadius: "8px" }}
                src="/ts2.png"
                width={50}
                height={50}
                alt="imagem"
                responsive
              />
            </div>
            <div className="f5">
              <Image
                src="/node2.png"
                width={75}
                height={75}
                alt="imagem"
                responsive
              />
            </div>
            <div className="f6">
              <Image
                src="/react.png"
                width={80}
                height={80}
                alt="imagem"
                responsive
              />
            </div>
            <div className="f7">
              <Image
                src="/next2.png"
                width={50}
                height={50}
                alt="imagem"
                responsive
              />
            </div>

            <Image
              style={{ position: "absolute" }}
              src="/walyson2.png"
              width={500}
              height={500}
              alt="imagem"
              responsive
            />
          </div>
        </Style.Principal>
        <Style.Sobre>
          <h2>Sobre mim</h2>
          <p></p>
        </Style.Sobre>

        <Style.Conhecimentos>
          <h2>Conhecimentos</h2>
          <div className="tecnologias">
            <Tecnologia imagem="/html.png" />
            <Tecnologia imagem="/css.png" />
            <Tecnologia imagem="/js.png" />
            <Tecnologia imagem="/react.png" />
            <Tecnologia imagem="/type.png" />
            <Tecnologia imagem="/next.png" />
            <Tecnologia imagem="/styled.png" />
            <Tecnologia imagem="/node.png" />
            <Tecnologia imagem="/seque.png" />
            <Tecnologia imagem="/sql.png" />
          </div>
        </Style.Conhecimentos>
        <Style.Projetos>
          <div className="cards">
            <Projeto imagem="/exe.png" />
            <Projeto imagem="/exe.png" />
            <Projeto imagem="/exe.png" />
            <Projeto imagem="/exe.png" />
            <Projeto imagem="/exe.png" />
            <Projeto imagem="/exe.png" />
          </div>
        </Style.Projetos>
        <Style.Contact>
          <Contato />
        </Style.Contact>
      </Style.Main>
    </>
  );
}
