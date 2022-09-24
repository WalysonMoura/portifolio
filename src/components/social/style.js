import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const List = styled.ul`
  position: fixed;
  z-index: 3;
  bottom: 0;
  left: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  color: ${Colors.branco};
  li {
    :hover {
      transform: translateY(-0.25rem);
      transition: 0.3s;
      color: ${Colors.azul1};
    }
  }
  ::after {
    content: "";
    display: block;
    width: 1px;
    height: 100px;
    margin: 0px auto;
    background-color: #a8b2d1;
  }
`;
