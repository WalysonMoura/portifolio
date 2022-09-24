import styled from "styled-components";

export const Card = styled.section`
  width: 25rem;
  padding: 2rem 1.5rem 1.5rem;
  display: grid;
  place-items: center;
  border-radius: 1rem;
  position: relative;
  gap: 2rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 -1px 12px hsla(174, 63%, 15%, 0.15);

  :hover {
    img {
      transform: translateY(-0.25rem);
      transition: 0.3s;
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
