import styled from "styled-components";

export const Card = styled.section`
  
  display: grid;
  place-items: center;
  border-radius: 1rem;

  position: relative;

  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 -1px 12px hsla(174, 63%, 15%, 0.15);

  .content {
    padding: 1rem;
    transition: all 0.2s;
  }
  :hover {
    .content {
      background-color: #181d24;
      transform: scale(0.97);
      transition: all 0.2s;
      border-radius: 1rem;
    }

    img {
      transition: 0.3s;
    }

    background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
  }

  .circulo {
    width: 180px;
    height: 180px;
    filter: blur(64px);
    position: absolute;
    top: -2.5rem;
    left: -2.5rem;
    background-color: hsl(219, 33%, 32%, 0.5);
  }

 
`;
