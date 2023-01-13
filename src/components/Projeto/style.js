import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const Card = styled.section`
  padding: 2rem 1.5rem 1.5rem;
  display: grid;
  place-items: center;
  border-radius: 1rem;
  position: relative;
  gap: 2rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 -1px 12px hsla(174, 63%, 15%, 0.15);

  .texto {
    position: absolute;
    z-index: 5;

    background: rgba(0, 0, 0, 0.47);
    border-radius: 9px;
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);

    margin: 2rem 1.5rem 1.5rem;
    padding: 5rem 8.2rem;
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    h2 {
      font-size: 1.5rem;
      text-align: center;
    }
    div {
      display: flex;
      align-items: center;
    }
    > svg {
      color: ${Colors.azul1};
      :hover {
        color: ${Colors.azul1};
      }
    }
  }

  :hover {
    .texto {
      display: flex;
    }
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
