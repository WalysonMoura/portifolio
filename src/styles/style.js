import styled from "styled-components";
import { Colors } from "./colors";
export const Main = styled.main`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-top: 3rem;

  @media (max-width: 768px) {
    padding: 0 4rem 2rem 4rem;
  }
`;

export const Principal = styled.section`
  width: 100%;

  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-content: center;

  .apresentacao {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding-top: 8rem;
    h3 {
      font-size: 2rem;
    }
    h1 {
      font-size: 3.5rem;
      color: ${Colors.azul1};
    }
    h2 {
      margin-top: 1rem;
      font-size: 1.5rem;
    }
    @media (max-width: 768px) {
      padding-top: 8rem;
      h3 {
        font-size: 1.2rem;
      }
      h1 {
        font-size: 2.5rem;
        color: ${Colors.azul1};
      }
      h2 {
        font-size: 1.2rem;
      }
    }
  }
  .imagens {
    margin-top: 2rem;
    padding-top: 1rem;

    position: relative;

    div {
      position: absolute;
      z-index: 1;
      transform: translatey(0px);
    }

    @keyframes float {
      0% {
        transform: translatey(0px);
      }
      50% {
        transform: translatey(-30px);
      }
      100% {
        transform: translatey(0px);
      }
    }

    @keyframes float2 {
      0% {
        transform: translatey(0px);
      }
      50% {
        transform: translatey(15px);
      }
      100% {
        transform: translatey(0px);
      }
    }

    @keyframes float3 {
      0% {
        transform: translatey(0px);
      }
      50% {
        transform: translatey(-50px);
      }
      100% {
        transform: translatey(0px);
      }
    }

    @keyframes float4 {
      0% {
        transform: translatey(0px);
      }
      50% {
        transform: translatey(10px);
      }
      100% {
        transform: translatey(0px);
      }
    }

    .f1 {
      animation: float2 3.5s ease-in-out infinite;
      top: 13%;
      right: 6%;
    }
    .f2 {
      animation: float2 3.5s ease-in-out infinite;
      top: 10%;
      left: 0;
    }
    .f3 {
      animation: float 3.5s ease-in-out infinite;
      top: 70%;
      left: 0;
    }
    .f4 {
      animation: float4 3.5s ease-in-out infinite;
      top: 95%;
      left: 58%;
    }
    .f5 {
      animation: float2 3.5s ease-in-out infinite;
      top: 90%;
      left: 15%;
    }
    .f6 {
      animation: float 3.5s ease-in-out infinite;
      top: -8%;
      left: 45%;
    }
    .f7 {
      animation: float 3.5s ease-in-out infinite;
      top: 75%;
      left: 82%;
    }
  }

  @media (max-width: 768px) {
    height: 90vh;
    grid-template-columns: 1fr;
    row-gap: 5rem;
    .imagens {
    padding-top: 2rem;
    }
  }
`;
export const Sobre = styled.section`
  padding-top: 10rem;
  h2 {
    font-size: 2.5rem;
    text-align: center;
  }

  
`;

export const Conhecimentos = styled.section`
  width: 100%;

  h2 {
    font-size: 2.5rem;
    text-align: center;
  }
  .tecnologias {
    padding: 1rem;
    width: 100%;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    justify-content: center;
    justify-items: center;

    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    }
  }
`;
export const Projetos = styled.section`
  width: 100%;
  h2 {
    font-size: 2.5rem;
    text-align: center;
  }
  .cards {
    padding: 0 1rem;
    width: 100%;
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    justify-content: center;
    justify-items: center;

    @media (max-width: 768px) {
      padding: 0 1rem;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }
`;

export const Contact = styled.section`
  h2 {
    font-size: 2.5rem;
    text-align: center;
  }
`;
