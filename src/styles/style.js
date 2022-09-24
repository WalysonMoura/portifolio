import styled from "styled-components";
export const Content = styled.div`
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem 4rem;
  }
`;
export const Tecnologias = styled.section`
  padding: 0 1rem;
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;
