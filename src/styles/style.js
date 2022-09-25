import styled from "styled-components";
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
  height: 90vh;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-content: center;

  .apresentacao {
  }
  .imagens {
    padding-top: 2rem;
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
    grid-template-columns: 1fr;
    row-gap: 5rem;
  }
`;
export const Sobre = styled.section``;

export const Conhecimentos = styled.section`
  width: 100%;

  .tecnologias {
    padding: 0 1rem;
    width: 100%;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    justify-content: center;
    justify-items: center;

    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }
`;
export const Projetos = styled.section`
  width: 100%;
  
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
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }
`;

export const Contact = styled.section``;
